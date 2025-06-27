
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory } = await req.json();

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Prepare the conversation with system prompt for Toji training assistant
    const messages = [
      {
        role: 'system',
        content: `You are a specialized AI training assistant for the "Toji Fushiguro Training" program - a high-intensity fitness program focused on building a V-taper physique. Your expertise includes:

1. **Training Modifications**: Provide exercise alternatives, form corrections, and equipment substitutions
2. **Nutrition Guidance**: Offer meal planning, macro advice, and supplement recommendations for muscle building
3. **Program Support**: Help with plateau breaking, progression strategies, and motivation

Key principles of the Toji program:
- Focus on V-taper development (wide shoulders, narrow waist)
- High RPE training (pushing close to failure)
- Functional strength and mobility
- Combination of strength training and advanced calisthenics

Always provide practical, actionable advice. Keep responses concise but informative. Format important points with bullet points when helpful. Be encouraging and motivational while prioritizing safety.`
      },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    console.log('Sending request to OpenAI with messages:', messages);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', data);

    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-ai function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

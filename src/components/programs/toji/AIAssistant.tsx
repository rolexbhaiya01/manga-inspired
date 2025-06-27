import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Bot, User, Lightbulb, Utensils, Dumbbell, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your Toji Training AI Assistant. I can help you with workout modifications, nutrition advice, and answer any questions about your training. What would you like to know?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const { toast } = useToast();

  const quickSuggestions = [
    {
      icon: <Dumbbell className="w-4 h-4" />,
      text: "Suggest exercise alternatives",
      category: "Training"
    },
    {
      icon: <Utensils className="w-4 h-4" />,
      text: "Meal ideas for muscle gain",
      category: "Nutrition"
    },
    {
      icon: <Lightbulb className="w-4 h-4" />,
      text: "How to break through plateaus",
      category: "Tips"
    }
  ];

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = {
      role: 'user' as const,
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    // Add user message to conversation
    setConversation(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Call the edge function
      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: {
          message: message,
          conversationHistory: conversation
        }
      });

      if (error) {
        throw error;
      }

      const aiResponse = {
        role: 'assistant' as const,
        content: data.response,
        timestamp: new Date().toLocaleTimeString()
      };

      setConversation(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error('Error calling AI:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });

      // Add error message to conversation
      const errorMessage = {
        role: 'assistant' as const,
        content: "I'm sorry, I'm having trouble responding right now. Please try again in a moment.",
        timestamp: new Date().toLocaleTimeString()
      };

      setConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-400">AI Training Assistant</h2>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-800/50 border-gray-700 h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Toji AI Assistant
                <Badge className="ml-auto bg-green-600 text-white">Online</Badge>
              </CardTitle>
            </CardHeader>
            
            {/* Chat Messages */}
            <CardContent className="flex-1 overflow-y-auto space-y-4">
              {conversation.map((msg, index) => (
                <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      <div className="whitespace-pre-line">{msg.content}</div>
                      <div className="text-xs opacity-70 mt-1">{msg.timestamp}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-600">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-3 rounded-lg bg-gray-700 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            
            {/* Message Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about workouts, nutrition, or training tips..."
                  className="bg-gray-800 border-gray-700 text-white"
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading || !message.trim()}
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          {/* Quick Suggestions */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Quick Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-3 border-gray-600 hover:border-purple-500"
                  onClick={() => handleQuickSuggestion(suggestion.text)}
                  disabled={isLoading}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">
                      {suggestion.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">{suggestion.text}</div>
                      <div className="text-xs text-gray-500">{suggestion.category}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* AI Capabilities */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Dumbbell className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 font-medium">Exercise Modifications</div>
                    <div className="text-gray-500">Alternative exercises, form tips, progression</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 font-medium">Nutrition Guidance</div>
                    <div className="text-gray-500">Meal planning, macro guidance, supplements</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <div className="text-gray-300 font-medium">Training Support</div>
                    <div className="text-gray-500">Program questions, plateau solutions, motivation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-yellow-900/20 border-yellow-600/50">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                <div className="text-xs text-yellow-300">
                  <strong>Note:</strong> This AI provides general fitness guidance. For medical concerns or specific health conditions, consult healthcare professionals.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

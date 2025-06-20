
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Bot, User, Lightbulb, Utensils, Dumbbell } from 'lucide-react';

export const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your Toji Training AI Assistant. I can help you with workout modifications, nutrition advice, and answer any questions about your training. What would you like to know?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

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

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      role: 'user' as const,
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    // Simulate AI response (in real implementation, this would call an AI API)
    const aiResponse = {
      role: 'assistant' as const,
      content: generateAIResponse(message),
      timestamp: new Date().toLocaleTimeString()
    };

    setConversation(prev => [...prev, userMessage, aiResponse]);
    setMessage('');
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('food') || lowerMessage.includes('nutrition') || lowerMessage.includes('meal')) {
      return "For muscle building on the Toji program, focus on:\n\n• **Protein**: 0.8-1g per lb bodyweight (chicken, fish, eggs, dairy)\n• **Carbs**: Complex carbs around workouts (oats, rice, sweet potatoes)\n• **Fats**: 20-30% of calories (nuts, avocado, olive oil)\n• **Timing**: Eat protein every 3-4 hours\n\nSample meal: Grilled chicken breast, quinoa, steamed broccoli, and olive oil dressing. Need specific meal ideas?";
    }
    
    if (lowerMessage.includes('alternative') || lowerMessage.includes('substitute') || lowerMessage.includes('replace')) {
      return "Here are some common exercise substitutions for the Toji program:\n\n• **Pull-ups** → Resistance band rows, inverted rows\n• **Barbell rows** → Dumbbell rows, resistance band rows\n• **Squats** → Goblet squats, jump squats, pistol squats\n• **Overhead press** → Pike push-ups, handstand progressions\n• **Dips** → Tricep push-ups, chair dips\n\nWhat specific exercise do you need an alternative for?";
    }
    
    if (lowerMessage.includes('plateau') || lowerMessage.includes('stuck') || lowerMessage.includes('progress')) {
      return "To break through training plateaus:\n\n• **Change rep ranges**: If doing 8-12, try 6-8 or 12-15\n• **Increase frequency**: Add an extra set or training day\n• **Improve form**: Focus on time under tension\n• **Deload**: Take a lighter week then come back stronger\n• **Nutrition**: Ensure adequate calories and protein\n• **Sleep**: 7-9 hours for optimal recovery\n\nWhich area feels stuck - strength, muscle size, or motivation?";
    }
    
    return "I'd be happy to help! I can assist with:\n\n• **Training modifications** for your equipment/schedule\n• **Nutrition advice** for your specific goals\n• **Exercise form tips** and safety guidance\n• **Progress troubleshooting** when things aren't working\n• **Workout planning** and scheduling\n\nWhat specific aspect of your Toji training would you like guidance on?";
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
            </CardContent>
            
            {/* Message Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about workouts, nutrition, or training tips..."
                  className="bg-gray-800 border-gray-700 text-white"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" />
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

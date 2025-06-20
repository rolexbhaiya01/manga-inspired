
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Utensils, Dumbbell, Heart } from 'lucide-react';

export const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: "Hello! I'm your AI fitness and nutrition assistant. I can help you with workout suggestions, meal planning, and answer any health-related questions. How can I assist you today?"
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const quickSuggestions = [
    { text: "Suggest a healthy breakfast", icon: Utensils, category: "nutrition" },
    { text: "Alternative to push-ups", icon: Dumbbell, category: "exercise" },
    { text: "How to stay motivated?", icon: Heart, category: "wellness" },
    { text: "Meal prep ideas", icon: Utensils, category: "nutrition" },
    { text: "Home chest exercises", icon: Dumbbell, category: "exercise" },
    { text: "Recovery tips", icon: Heart, category: "wellness" }
  ];

  const sampleResponses = {
    "suggest a healthy breakfast": {
      content: "Here are some lean aesthetic breakfast options:\n\n🥣 **Protein Oats**: Steel-cut oats with Greek yogurt, berries, and a drizzle of honey\n🍳 **Egg White Scramble**: 3 egg whites + 1 whole egg with spinach and tomatoes\n🥑 **Avocado Toast**: Whole grain bread with smashed avocado and a poached egg\n🥤 **Protein Smoothie**: Banana, spinach, protein powder, and almond milk\n\nAll of these provide sustained energy for your workouts while supporting your lean physique goals!"
    },
    "alternative to push-ups": {
      content: "Great question! Here are effective push-up alternatives:\n\n💪 **Incline Push-ups**: Use stairs or a bench - easier progression\n🪑 **Chair Dips**: Target triceps and chest differently\n⚡ **Wall Push-ups**: Standing variation for beginners\n🔥 **Resistance Band Chest Press**: Same muscle groups, different resistance\n📐 **Pike Push-ups**: Targets shoulders more than standard push-ups\n\nChoose based on your current strength level and gradually progress to standard push-ups!"
    },
    "how to stay motivated?": {
      content: "Staying motivated is key to success! Here are proven strategies:\n\n🎯 **Set SMART Goals**: Specific, measurable, achievable targets\n📸 **Track Progress**: Take photos, measurements, log workouts\n🏆 **Celebrate Small Wins**: Acknowledge every improvement\n👥 **Find Accountability**: Workout buddy or online community\n📝 **Plan Your Week**: Schedule workouts like important appointments\n🎵 **Create Pump Playlists**: Music boosts workout intensity\n\nRemember: Motivation gets you started, habits keep you going!"
    }
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const newUserMessage = { type: 'user', content: currentMessage };
    setMessages(prev => [...prev, newUserMessage]);

    // Simulate AI response
    setTimeout(() => {
      const lowerMessage = currentMessage.toLowerCase();
      let response = sampleResponses[lowerMessage as keyof typeof sampleResponses];
      
      if (!response) {
        if (lowerMessage.includes('food') || lowerMessage.includes('meal') || lowerMessage.includes('nutrition')) {
          response = {
            content: "I'd love to help with your nutrition! For personalized meal planning, consider:\n\n• Your current weight and goals\n• Activity level and workout schedule\n• Food preferences and restrictions\n• Meal timing around workouts\n\nCould you tell me more about your specific nutrition goals?"
          };
        } else if (lowerMessage.includes('exercise') || lowerMessage.includes('workout')) {
          response = {
            content: "Great question about exercise! I can help you with:\n\n• Exercise modifications and progressions\n• Targeting specific muscle groups\n• Creating workout variations\n• Proper form and technique tips\n\nWhat specific exercise or muscle group would you like to focus on?"
          };
        } else {
          response = {
            content: "Thanks for your question! I'm here to help with fitness and nutrition guidance. Feel free to ask about:\n\n• Workout modifications and alternatives\n• Healthy meal ideas and nutrition tips\n• Motivation and consistency strategies\n• Recovery and wellness advice\n\nWhat would you like to know more about?"
          };
        }
      }

      const assistantMessage = { type: 'assistant', content: response.content };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);

    setCurrentMessage('');
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setCurrentMessage(suggestion);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      nutrition: 'bg-green-600',
      exercise: 'bg-blue-600',
      wellness: 'bg-purple-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-purple-400">AI Health & Nutrition Assistant</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Chat with Your AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto space-y-4 p-4 bg-gray-900/50 rounded-lg">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-700 text-gray-200'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Ask about workouts, nutrition, or wellness..."
                  className="flex-1 bg-gray-700 border-gray-600"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Suggestions */}
        <div className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Quick Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickSuggestion(suggestion.text)}
                  className="w-full p-3 text-left bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <suggestion.icon className="w-5 h-5 text-purple-400" />
                    <div className="flex-1">
                      <p className="text-sm text-white">{suggestion.text}</p>
                      <Badge className={`text-xs ${getCategoryColor(suggestion.category)}`}>
                        {suggestion.category}
                      </Badge>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Dumbbell className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Exercise Guidance</h4>
                    <p className="text-sm text-gray-400">Get alternative exercises, form tips, and workout variations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Nutrition Advice</h4>
                    <p className="text-sm text-gray-400">Healthy meal ideas, recipes, and dietary recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Wellness Support</h4>
                    <p className="text-sm text-gray-400">Motivation tips, recovery advice, and lifestyle guidance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

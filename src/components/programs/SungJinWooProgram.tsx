import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Dumbbell, Calendar, AlertTriangle } from 'lucide-react';
import { WorkoutRoutineSection } from './sungjinwoo/WorkoutRoutineSection';
import { ExerciseLibrary } from './sungjinwoo/ExerciseLibrary';
import { ProgressTracking } from './sungjinwoo/ProgressTracking';
import { AIAssistant } from './sungjinwoo/AIAssistant';
import { ContactSupport } from './sungjinwoo/ContactSupport';

interface SungJinWooProgramProps {
  onBack: () => void;
}

export const SungJinWooProgram = ({ onBack }: SungJinWooProgramProps) => {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);

  if (!hasAcceptedDisclaimer) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <Card className="max-w-4xl bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-purple-600/50">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Copyright & Safety Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/30 rounded-lg">
                <h3 className="font-semibold text-purple-400 mb-2">Copyright Notice</h3>
                <p className="text-gray-300 text-sm">
                  This workout program is based on the "Sung Jin Woo Workout" by @aurachad and @raunak_gupta_23_. 
                  This content is provided for educational purposes and free distribution as stated in the original e-book.
                </p>
              </div>
              
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-600/50">
                <h3 className="font-semibold text-red-400 mb-2">Important Safety Warning</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Consult with a healthcare professional before starting any new exercise program</li>
                  <li>• Listen to your body and stop if you experience pain or discomfort</li>
                  <li>• Proper form is more important than heavy weights or high repetitions</li>
                  <li>• Stay hydrated and ensure adequate rest between workouts</li>
                  <li>• This program is for educational purposes only and not medical advice</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-900/30 rounded-lg">
                <h3 className="font-semibold text-purple-400 mb-2">Program Philosophy</h3>
                <p className="text-gray-300 text-sm">
                  This comprehensive program is designed to help you achieve a lean, aesthetic physique inspired by Sung Jin Woo. 
                  It offers flexible workout options for both gym and home environments, combined with a detailed nutrition plan 
                  for optimal results.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="text-gray-400 hover:text-white"
              >
                ← Back to Programs
              </Button>
              <Button 
                onClick={() => setHasAcceptedDisclaimer(true)}
                className="bg-purple-600 hover:bg-purple-700 flex-1"
              >
                I Understand and Accept - Continue to Program
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-gray-400 hover:text-white"
          >
            ← Back to Programs
          </Button>
          <div className="text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Sung Jin Woo Workout
            </h1>
            <p className="text-lg text-gray-300 mt-2">Lean Aesthetic & Flexible Training</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Program Overview */}
        <Card className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-purple-600/50">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Program Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              A comprehensive training and nutrition program designed to build a lean, aesthetic physique 
              with flexible equipment options, inspired by Sung Jin Woo's transformation journey.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-purple-400">Lean Aesthetic</h3>
                </div>
                <p className="text-gray-300">Focus on muscle definition and lean body composition</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Dumbbell className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-purple-400">Equipment Flexible</h3>
                </div>
                <p className="text-gray-300">Options for gym or home training setups</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-purple-400">Complete System</h3>
                </div>
                <p className="text-gray-300">Training + detailed nutrition plan included</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Content */}
        <Tabs defaultValue="workout-routine" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="workout-routine">Workout Routine</TabsTrigger>
            <TabsTrigger value="exercise-library">Exercise Library</TabsTrigger>
            <TabsTrigger value="diet-plan">Diet Plan</TabsTrigger>
            <TabsTrigger value="progress-tracking">Progress Tracking</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="workout-routine">
            <WorkoutRoutineSection />
          </TabsContent>

          <TabsContent value="exercise-library">
            <ExerciseLibrary />
          </TabsContent>

          <TabsContent value="diet-plan" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-purple-400">Daily Meal Plan for Lean Aesthetic Body</CardTitle>
                <p className="text-gray-400">Structured nutrition for optimal body composition</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-3">Breakfast (7:00 AM)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• 3 egg whites + 1 whole egg scrambled</li>
                        <li>• 1 slice whole grain toast</li>
                        <li>• 1/2 avocado</li>
                        <li>• Green tea or black coffee</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-3">Mid-Morning Snack (10:00 AM)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Greek yogurt (150g, low-fat)</li>
                        <li>• Handful of berries</li>
                        <li>• 1 tbsp honey</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-3">Lunch (1:00 PM)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Grilled chicken breast (150g)</li>
                        <li>• Quinoa or brown rice (1/2 cup cooked)</li>
                        <li>• Mixed vegetables (steamed/grilled)</li>
                        <li>• Olive oil dressing (1 tbsp)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-3">Afternoon Snack (4:00 PM)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Protein smoothie:</li>
                        <li>&nbsp;&nbsp;- 1 scoop whey protein</li>
                        <li>&nbsp;&nbsp;- 1 banana</li>
                        <li>&nbsp;&nbsp;- Almond milk (unsweetened)</li>
                        <li>&nbsp;&nbsp;- Handful of spinach</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-3">Dinner (7:00 PM)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Lean fish (salmon/cod, 150g)</li>
                        <li>• Sweet potato (medium, baked)</li>
                        <li>• Green salad with olive oil</li>
                        <li>• Steamed broccoli</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 rounded-lg">
                      <h4 className="font-medium text-purple-400 mb-3">Evening Snack (9:00 PM)</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Cottage cheese (100g, low-fat)</li>
                        <li>• Handful of almonds (10-12)</li>
                        <li>• Herbal tea</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
                  <h4 className="font-medium text-purple-400 mb-3">Additional Diet Tips</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Drink 3-4 liters of water daily</li>
                      <li>• Avoid processed foods and sugary drinks</li>
                      <li>• Eat every 2-3 hours to maintain metabolism</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Adjust portions based on training days</li>
                      <li>• Include healthy fats in moderation</li>
                      <li>• Track your progress and adjust accordingly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress-tracking">
            <ProgressTracking />
          </TabsContent>

          <TabsContent value="ai-assistant">
            <AIAssistant />
          </TabsContent>

          <TabsContent value="contact">
            <ContactSupport />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

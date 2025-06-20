
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Dumbbell, Calendar } from 'lucide-react';

interface SungJinWooProgramProps {
  onBack: () => void;
}

export const SungJinWooProgram = ({ onBack }: SungJinWooProgramProps) => {
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
        <Tabs defaultValue="workout-plans" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="workout-plans">Workout Plans</TabsTrigger>
            <TabsTrigger value="diet-plan">Diet Plan</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="workout-plans" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Gym Plan */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-400">With Equipment & Gym</CardTitle>
                  <p className="text-gray-400">Full gym access plan</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400 mb-2">Monday - Upper Body</h4>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div className="flex justify-between">
                          <span>Bench Press</span>
                          <span className="text-purple-400">4×8-10</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pull-ups</span>
                          <span className="text-purple-400">4×6-8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shoulder Press</span>
                          <span className="text-purple-400">3×10-12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rows</span>
                          <span className="text-purple-400">3×10-12</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400 mb-2">Tuesday - Lower Body</h4>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div className="flex justify-between">
                          <span>Squats</span>
                          <span className="text-purple-400">4×8-10</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Deadlifts</span>
                          <span className="text-purple-400">4×6-8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lunges</span>
                          <span className="text-purple-400">3×12 each</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Calf Raises</span>
                          <span className="text-purple-400">4×15-20</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400 mb-2">Schedule</h4>
                      <div className="text-sm text-gray-300">
                        <p>Monday/Thursday: Upper Body</p>
                        <p>Tuesday/Friday: Lower Body</p>
                        <p>Wednesday: Core & Cardio</p>
                        <p>Weekend: Active Rest</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    View Full Gym Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Bodyweight Plan */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-400">Without Equipment & Gym</CardTitle>
                  <p className="text-gray-400">Bodyweight & minimal equipment</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400 mb-2">Monday - Upper Focus</h4>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div className="flex justify-between">
                          <span>Push-ups</span>
                          <span className="text-purple-400">4×12-15</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pike Push-ups</span>
                          <span className="text-purple-400">3×8-10</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tricep Dips</span>
                          <span className="text-purple-400">3×10-12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Plank</span>
                          <span className="text-purple-400">3×60s</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400 mb-2">Tuesday - Lower Focus</h4>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div className="flex justify-between">
                          <span>Bodyweight Squats</span>
                          <span className="text-purple-400">4×15-20</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lunges</span>
                          <span className="text-purple-400">3×12 each</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Single Leg Glute Bridges</span>
                          <span className="text-purple-400">3×10 each</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Calf Raises</span>
                          <span className="text-purple-400">4×20</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400 mb-2">Progression Tips</h4>
                      <div className="text-sm text-gray-300">
                        <p>Increase reps or add pauses</p>
                        <p>Use household items for resistance</p>
                        <p>Focus on time under tension</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    View Full Home Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
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

          <TabsContent value="guidelines" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-400">Training Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400">Progression Principles</h4>
                      <ul className="text-sm text-gray-300 mt-2 space-y-1">
                        <li>• Progressive overload every week</li>
                        <li>• Focus on form over weight</li>
                        <li>• Rest 48-72 hours between same muscle groups</li>
                        <li>• Listen to your body and adjust intensity</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400">Recovery & Rest</h4>
                      <ul className="text-sm text-gray-300 mt-2 space-y-1">
                        <li>• 7-9 hours of quality sleep</li>
                        <li>• Active recovery on rest days</li>
                        <li>• Stretch after every workout</li>
                        <li>• Take a full rest day weekly</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-purple-400">Nutrition Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400">Macronutrient Targets</h4>
                      <div className="text-sm text-gray-300 mt-2 space-y-1">
                        <div className="flex justify-between">
                          <span>Protein:</span>
                          <span className="text-purple-400">1.2-1.6g per kg body weight</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carbs:</span>
                          <span className="text-purple-400">2-3g per kg body weight</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fats:</span>
                          <span className="text-purple-400">0.8-1g per kg body weight</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-purple-900/20 rounded">
                      <h4 className="font-medium text-purple-400">Hydration & Timing</h4>
                      <ul className="text-sm text-gray-300 mt-2 space-y-1">
                        <li>• Pre-workout: Light meal 1-2 hours before</li>
                        <li>• Post-workout: Protein within 30 minutes</li>
                        <li>• Stay hydrated throughout the day</li>
                        <li>• Avoid eating 2 hours before bedtime</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

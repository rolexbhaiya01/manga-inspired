
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, Calendar, Dumbbell, Timer } from 'lucide-react';

interface BakiProgramProps {
  onBack: () => void;
}

export const BakiProgram = ({ onBack }: BakiProgramProps) => {
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Baki Hanma Training
            </h1>
            <p className="text-lg text-gray-300 mt-2">Raw Power & Boxing Athletics</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Program Overview */}
        <Card className="bg-gradient-to-r from-red-900/20 to-red-800/10 border-red-600/50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-400 flex items-center gap-2">
              <Dumbbell className="w-6 h-6" />
              Program Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              An intense 8-week program designed to build raw strength and boxing athleticism, 
              inspired by Baki Hanma's relentless training methodology.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Duration</h3>
                </div>
                <p className="text-gray-300">4-week split repeated twice (8 weeks total) + deload phase</p>
              </div>
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Frequency</h3>
                </div>
                <p className="text-gray-300">6 days per week with strategic rest</p>
              </div>
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowUp className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Focus</h3>
                </div>
                <p className="text-gray-300">Overall muscle development + boxing skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Schedule */}
        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
            <TabsTrigger value="workouts">Daily Workouts</TabsTrigger>
            <TabsTrigger value="boxing">Boxing Drills</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">6-Day Training Split</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-300">Weekly Structure</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-900/20 rounded">
                        <span className="font-medium text-red-400">Monday</span>
                        <span className="text-gray-300">Upper Body Day 1</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-900/20 rounded">
                        <span className="font-medium text-red-400">Tuesday</span>
                        <span className="text-gray-300">Lower Body Day 1</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-900/20 rounded">
                        <span className="font-medium text-red-400">Wednesday</span>
                        <span className="text-gray-300">Upper Body Day 2</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-900/20 rounded">
                        <span className="font-medium text-red-400">Thursday</span>
                        <span className="text-gray-300">Lower Body Day 2</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-900/20 rounded">
                        <span className="font-medium text-red-400">Friday</span>
                        <span className="text-gray-300">Accessory Day</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-900/20 rounded">
                        <span className="font-medium text-red-400">Saturday</span>
                        <span className="text-gray-300">Active Recovery</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded">
                        <span className="font-medium text-gray-400">Sunday</span>
                        <span className="text-gray-400">Rest Day</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-300">Key Principles</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Progressive overload every week</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Compound movements focus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Boxing integration on accessory days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Active recovery includes light cardio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        <span>Deload week after 8 weeks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workouts" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Sample Daily Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-red-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Upper Body Day 1 - Strength Focus</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Bench Press</span>
                        <span className="text-red-400">4 sets × 6-8 reps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pull-ups/Lat Pulldowns</span>
                        <span className="text-red-400">4 sets × 8-10 reps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overhead Press</span>
                        <span className="text-red-400">3 sets × 8-10 reps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Barbell Rows</span>
                        <span className="text-red-400">3 sets × 8-10 reps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dips</span>
                        <span className="text-red-400">3 sets × 10-12 reps</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Lower Body Day 1 - Power Focus</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Back Squats</span>
                        <span className="text-red-400">4 sets × 6-8 reps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Romanian Deadlifts</span>
                        <span className="text-red-400">4 sets × 8-10 reps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bulgarian Split Squats</span>
                        <span className="text-red-400">3 sets × 10-12 reps each leg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Walking Lunges</span>
                        <span className="text-red-400">3 sets × 20 steps</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Calf Raises</span>
                        <span className="text-red-400">4 sets × 15-20 reps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="boxing" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Boxing Drills Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-300">
                    Boxing drills are integrated into accessory days and active recovery to build 
                    explosive power, coordination, and cardiovascular endurance.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-400">Core Boxing Drills</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-900/20 rounded">
                          <h4 className="font-medium text-red-400">Shadow Boxing</h4>
                          <p className="text-sm text-gray-300">3-5 rounds × 3 minutes with 1-minute rest</p>
                        </div>
                        <div className="p-3 bg-red-900/20 rounded">
                          <h4 className="font-medium text-red-400">Heavy Bag Work</h4>
                          <p className="text-sm text-gray-300">4-6 rounds × 3 minutes focusing on power combinations</p>
                        </div>
                        <div className="p-3 bg-red-900/20 rounded">
                          <h4 className="font-medium text-red-400">Speed Bag</h4>
                          <p className="text-sm text-gray-300">3-4 rounds × 2 minutes for hand-eye coordination</p>
                        </div>
                        <div className="p-3 bg-red-900/20 rounded">
                          <h4 className="font-medium text-red-400">Jump Rope</h4>
                          <p className="text-sm text-gray-300">5-10 minutes for footwork and cardio</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-400">Integration Schedule</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-700/30 rounded">
                          <h4 className="font-medium text-gray-300">Accessory Day (Friday)</h4>
                          <p className="text-sm text-gray-400">Full boxing session after accessory work</p>
                        </div>
                        <div className="p-3 bg-gray-700/30 rounded">
                          <h4 className="font-medium text-gray-300">Active Recovery (Saturday)</h4>
                          <p className="text-sm text-gray-400">Light shadow boxing and jump rope</p>
                        </div>
                        <div className="p-3 bg-gray-700/30 rounded">
                          <h4 className="font-medium text-gray-300">Warm-up Integration</h4>
                          <p className="text-sm text-gray-400">Light shadow boxing before upper body days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

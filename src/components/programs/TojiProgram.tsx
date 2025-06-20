
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, Zap, Target } from 'lucide-react';

interface TojiProgramProps {
  onBack: () => void;
}

export const TojiProgram = ({ onBack }: TojiProgramProps) => {
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Toji Fushiguro Training
            </h1>
            <p className="text-lg text-gray-300 mt-2">V-Taper & High Intensity</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Program Overview */}
        <Card className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-blue-600/50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400 flex items-center gap-2">
              <ArrowUp className="w-6 h-6" />
              Program Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              A high-intensity training program focused on building the perfect V-taper physique, 
              combining strength training with advanced calisthenics inspired by Toji's peak physical conditioning.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-blue-400">V-Taper Focus</h3>
                </div>
                <p className="text-gray-300">Wide shoulders, narrow waist for that iconic silhouette</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-blue-400">High RPE Training</h3>
                </div>
                <p className="text-gray-300">Pushing close to failure for maximum adaptation</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowUp className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-blue-400">Functional Strength</h3>
                </div>
                <p className="text-gray-300">Real-world applicable strength and mobility</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Splits */}
        <Tabs defaultValue="splits" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="splits">Training Splits</TabsTrigger>
            <TabsTrigger value="concepts">Training Concepts</TabsTrigger>
            <TabsTrigger value="progression">Progression Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="splits" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Split A */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Split A: High Intensity Minimalist</CardTitle>
                  <p className="text-gray-400">3 Days/Week • Upper/Lower Focus</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 1: Upper Body</h4>
                      <p className="text-sm text-gray-300">Heavy compound movements, pull-up focus</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 2: Lower Body</h4>
                      <p className="text-sm text-gray-300">Squat and hinge patterns, explosive work</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 3: Full Body</h4>
                      <p className="text-sm text-gray-300">Compound movements, functional patterns</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="font-medium text-gray-300 mb-2">Best For:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Limited training time</li>
                      <li>• High work capacity</li>
                      <li>• Advanced trainees</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Choose Split A
                  </Button>
                </CardContent>
              </Card>

              {/* Split B */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Split B: High Volume Body Part</CardTitle>
                  <p className="text-gray-400">5 Days/Week • Specialized Focus</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 1: Back & Biceps</h4>
                      <p className="text-sm text-gray-300">V-taper development focus</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 2: Chest & Triceps</h4>
                      <p className="text-sm text-gray-300">Upper body mass and definition</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 3: Shoulders</h4>
                      <p className="text-sm text-gray-300">Width and capping development</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 4: Legs</h4>
                      <p className="text-sm text-gray-300">Lower body power and stability</p>
                    </div>
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-medium text-blue-400">Day 5: Arms & Core</h4>
                      <p className="text-sm text-gray-300">Detail work and core strength</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="font-medium text-gray-300 mb-2">Best For:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Maximum muscle focus</li>
                      <li>• More training time</li>
                      <li>• Physique development</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Choose Split B
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Training to Failure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Technical Failure</h4>
                      <p className="text-sm text-gray-300">
                        When you can no longer maintain proper form. This is the safest approach 
                        and should be your primary target for most exercises.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Absolute Failure</h4>
                      <p className="text-sm text-gray-300">
                        When you physically cannot complete another rep. Use sparingly and only 
                        on isolation exercises or with proper spotting.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700/30 rounded-lg">
                      <h4 className="font-medium text-gray-300 mb-2">RPE Guidelines</h4>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>RPE 8: 2 reps in reserve</div>
                        <div>RPE 9: 1 rep in reserve</div>
                        <div>RPE 10: At failure</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Warm-Up Protocol</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Dynamic Preparation</h4>
                      <p className="text-sm text-gray-300">
                        5-10 minutes of movement preparation including joint mobility, 
                        activation exercises, and movement rehearsal.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium text-blue-400 mb-2">Pyramid Sets</h4>
                      <p className="text-sm text-gray-300">
                        Gradually increase weight and decrease reps to reach your working weight:
                        Empty bar → 50% → 70% → 85% → Working weight
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700/30 rounded-lg">
                      <h4 className="font-medium text-gray-300 mb-2">Injury Prevention</h4>
                      <p className="text-sm text-gray-400">
                        Never skip warm-up. It's essential for performance and injury prevention.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progression" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">4-Week Progression Cycle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-400 mb-2">Week 1</h3>
                    <p className="text-sm text-gray-300 mb-2">Foundation</p>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>RPE 7-8</div>
                      <div>Form focus</div>
                      <div>Base volume</div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-400 mb-2">Week 2</h3>
                    <p className="text-sm text-gray-300 mb-2">Progression</p>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>RPE 8-9</div>
                      <div>+5-10 lbs</div>
                      <div>Intensity up</div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg text-center">
                    <h3 className="font-semibold text-blue-400 mb-2">Week 3</h3>
                    <p className="text-sm text-gray-300 mb-2">Peak</p>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>RPE 9-10</div>
                      <div>Max effort</div>
                      <div>Peak volume</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-700/30 rounded-lg text-center">
                    <h3 className="font-semibold text-gray-300 mb-2">Week 4</h3>
                    <p className="text-sm text-gray-400 mb-2">Deload</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>RPE 6-7</div>
                      <div>-20% volume</div>
                      <div>Recovery</div>
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

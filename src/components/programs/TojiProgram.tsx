
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, Zap, Target, Calendar, BookOpen, TrendingUp, MessageCircle, Settings } from 'lucide-react';
import { TrainingSplitsSection } from './toji/TrainingSplitsSection';
import { ExerciseLibrary } from './toji/ExerciseLibrary';
import { TrainingConcepts } from './toji/TrainingConcepts';
import { ProgressTracking } from './toji/ProgressTracking';
import { FAQSection } from './toji/FAQSection';
import { ResourcesSection } from './toji/ResourcesSection';
import { AIAssistant } from './toji/AIAssistant';

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

        {/* Safety Warning */}
        <Card className="bg-gradient-to-r from-yellow-900/30 to-red-900/20 border-yellow-600/50">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center gap-2">
              ⚠️ Safety Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              This program is designed for experienced individuals. Consult with a healthcare provider 
              before starting any new exercise program. Train within your limits and maintain proper form 
              to prevent injury.
            </p>
            <p className="text-sm text-gray-400">
              © Discipline Mentality. This content is for educational purposes only.
            </p>
          </CardContent>
        </Card>

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

        {/* Main Navigation Tabs */}
        <Tabs defaultValue="splits" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="splits" className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Splits</span>
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Exercises</span>
            </TabsTrigger>
            <TabsTrigger value="concepts" className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Concepts</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Progress</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-1">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">AI Assistant</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="splits">
            <TrainingSplitsSection />
          </TabsContent>

          <TabsContent value="exercises">
            <ExerciseLibrary />
          </TabsContent>

          <TabsContent value="concepts">
            <TrainingConcepts />
          </TabsContent>

          <TabsContent value="progress">
            <ProgressTracking />
          </TabsContent>

          <TabsContent value="faq">
            <FAQSection />
          </TabsContent>

          <TabsContent value="resources">
            <ResourcesSection />
          </TabsContent>

          <TabsContent value="ai">
            <AIAssistant />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Dumbbell, Zap, Target, Calendar, BookOpen, TrendingUp, MessageCircle, Settings } from 'lucide-react';
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
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
          <div className="text-center flex-1">
            <div className="w-16 h-16 mx-auto bg-cyan-500 rounded-2xl flex items-center justify-center mb-4">
              <Dumbbell className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Toji Fushiguro Training
            </h1>
            <p className="text-lg text-muted-foreground mt-2">V-Taper & High Intensity</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Safety Warning */}
        <Card className="fitness-card border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              ⚠️ Safety Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This program is designed for experienced individuals. Consult with a healthcare provider 
              before starting any new exercise program. Train within your limits and maintain proper form 
              to prevent injury.
            </p>
            <p className="text-sm text-muted-foreground">
              © Discipline Mentality. This content is for educational purposes only.
            </p>
          </CardContent>
        </Card>

        {/* Program Overview */}
        <Card className="fitness-card">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-500 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Program Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A high-intensity training program focused on building the perfect V-taper physique, 
              combining strength training with advanced calisthenics inspired by Toji's peak physical conditioning.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="stat-card">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-cyan-500" />
                  <h3 className="font-semibold text-cyan-500">V-Taper Focus</h3>
                </div>
                <p className="text-muted-foreground">Wide shoulders, narrow waist for that iconic silhouette</p>
              </div>
              <div className="stat-card">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-cyan-500" />
                  <h3 className="font-semibold text-cyan-500">High RPE Training</h3>
                </div>
                <p className="text-muted-foreground">Pushing close to failure for maximum adaptation</p>
              </div>
              <div className="stat-card">
                <div className="flex items-center gap-2 mb-2">
                  <Dumbbell className="w-5 h-5 text-cyan-500" />
                  <h3 className="font-semibold text-cyan-500">Functional Strength</h3>
                </div>
                <p className="text-muted-foreground">Real-world applicable strength and mobility</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Navigation Tabs */}
        <Tabs defaultValue="splits" className="w-full">
          <TabsList className="grid w-full grid-cols-7 bg-card">
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

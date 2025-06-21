
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Dumbbell, Zap, Target } from 'lucide-react';

interface ProgramDashboardProps {
  onProgramSelect: (program: 'baki' | 'toji' | 'sungjinwoo') => void;
  onBackToLanding: () => void;
}

export const ProgramDashboard = ({ onProgramSelect, onBackToLanding }: ProgramDashboardProps) => {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <Button 
            variant="ghost" 
            onClick={onBackToLanding}
            className="text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Welcome
          </Button>
          
          <div className="w-16 h-16 mx-auto bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
            <Dumbbell className="w-8 h-8 text-black" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Choose Your Path
          </h1>
          <p className="text-xl text-muted-foreground">
            Select the training program that matches your goals
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Baki Hanma Program */}
          <Card 
            className="fitness-card hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group hover-lift"
            onClick={() => onProgramSelect('baki')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Dumbbell className="w-8 h-8 text-cyan-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Baki Hanma Training</CardTitle>
              <CardDescription className="text-muted-foreground">
                Raw Power & Boxing Athletics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm">
                Focus on overall muscle development, strength, and boxing athleticism for a Baki-inspired physique.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground font-medium">8 weeks + deload</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency:</span>
                  <span className="text-foreground font-medium">6 days/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span className="text-foreground font-medium">Strength + Boxing</span>
                </div>
              </div>
              <Button className="w-full btn-primary">
                Start Baki Training
              </Button>
            </CardContent>
          </Card>

          {/* Toji Fushiguro Program */}
          <Card 
            className="fitness-card hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group hover-lift"
            onClick={() => onProgramSelect('toji')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Zap className="w-8 h-8 text-cyan-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Toji Fushiguro Training</CardTitle>
              <CardDescription className="text-muted-foreground">
                V-Taper & High Intensity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm">
                Focus on V-taper development, high-intensity strength, and calisthenics for a Toji-inspired physique.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Options:</span>
                  <span className="text-foreground font-medium">2 split types</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Intensity:</span>
                  <span className="text-foreground font-medium">High RPE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span className="text-foreground font-medium">V-Taper + Strength</span>
                </div>
              </div>
              <Button className="w-full btn-primary">
                Start Toji Training
              </Button>
            </CardContent>
          </Card>

          {/* Sung Jin Woo Program */}
          <Card 
            className="fitness-card hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group hover-lift"
            onClick={() => onProgramSelect('sungjinwoo')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Target className="w-8 h-8 text-cyan-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Sung Jin Woo Workout</CardTitle>
              <CardDescription className="text-muted-foreground">
                Lean Aesthetic & Flexibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm">
                Focus on a lean, aesthetic body with flexible equipment/no-equipment options and detailed diet plan.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equipment:</span>
                  <span className="text-foreground font-medium">Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Diet Plan:</span>
                  <span className="text-foreground font-medium">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span className="text-foreground font-medium">Lean + Aesthetic</span>
                </div>
              </div>
              <Button className="w-full btn-primary">
                Start Jin Woo Training
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Features */}
        <div className="text-center space-y-8 mt-20">
          <h2 className="text-2xl font-semibold text-muted-foreground">Coming Soon</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="stat-card">
              <h3 className="font-semibold text-foreground mb-2">Exercise Library</h3>
              <p className="text-sm text-muted-foreground">Video tutorials & guides</p>
            </div>
            <div className="stat-card">
              <h3 className="font-semibold text-foreground mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Log workouts & see gains</p>
            </div>
            <div className="stat-card">
              <h3 className="font-semibold text-foreground mb-2">AI Assistant</h3>
              <p className="text-sm text-muted-foreground">Personalized suggestions</p>
            </div>
            <div className="stat-card">
              <h3 className="font-semibold text-foreground mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Share your progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

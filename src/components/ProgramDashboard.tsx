
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, Dumbbell, Heart } from 'lucide-react';

interface ProgramDashboardProps {
  onProgramSelect: (program: 'baki' | 'toji' | 'sungjinwoo') => void;
  onBackToLanding: () => void;
}

export const ProgramDashboard = ({ onProgramSelect, onBackToLanding }: ProgramDashboardProps) => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header - Minimal design */}
        <div className="text-center space-y-6">
          <Button 
            variant="ghost" 
            onClick={onBackToLanding}
            className="text-muted-foreground hover:text-foreground font-light mb-6 border border-border hover:bg-accent"
          >
            ← Back to Welcome
          </Button>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-wider text-foreground">
            Choose Your Path
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Select the training program that matches your goals
          </p>
        </div>

        {/* Program Cards - Minimal black design */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Baki Hanma Program */}
          <Card 
            className="bg-card border-border hover:border-foreground/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onProgramSelect('baki')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-foreground/50 transition-colors">
                <Dumbbell className="w-8 h-8 text-foreground stroke-1" />
              </div>
              <CardTitle className="text-2xl font-light text-foreground">Baki Hanma Training</CardTitle>
              <CardDescription className="font-light text-muted-foreground">
                Raw Power & Boxing Athletics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm font-light">
                Focus on overall muscle development, strength, and boxing athleticism for a Baki-inspired physique.
              </p>
              <div className="space-y-3 text-sm font-light">
                <div className="flex justify-between text-muted-foreground">
                  <span>Duration:</span>
                  <span className="text-foreground">8 weeks + deload</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Frequency:</span>
                  <span className="text-foreground">6 days/week</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Focus:</span>
                  <span className="text-foreground">Strength + Boxing</span>
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-light border border-border">
                Start Baki Training
              </Button>
            </CardContent>
          </Card>

          {/* Toji Fushiguro Program */}
          <Card 
            className="bg-card border-border hover:border-foreground/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onProgramSelect('toji')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-foreground/50 transition-colors">
                <ArrowUp className="w-8 h-8 text-foreground stroke-1" />
              </div>
              <CardTitle className="text-2xl font-light text-foreground">Toji Fushiguro Training</CardTitle>
              <CardDescription className="font-light text-muted-foreground">
                V-Taper & High Intensity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm font-light">
                Focus on V-taper development, high-intensity strength, and calisthenics for a Toji-inspired physique.
              </p>
              <div className="space-y-3 text-sm font-light">
                <div className="flex justify-between text-muted-foreground">
                  <span>Options:</span>
                  <span className="text-foreground">2 split types</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Intensity:</span>
                  <span className="text-foreground">High RPE</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Focus:</span>
                  <span className="text-foreground">V-Taper + Strength</span>
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-light border border-border">
                Start Toji Training
              </Button>
            </CardContent>
          </Card>

          {/* Sung Jin Woo Program */}
          <Card 
            className="bg-card border-border hover:border-foreground/30 transition-all duration-300 cursor-pointer group"
            onClick={() => onProgramSelect('sungjinwoo')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-foreground/50 transition-colors">
                <Heart className="w-8 h-8 text-foreground stroke-1" />
              </div>
              <CardTitle className="text-2xl font-light text-foreground">Sung Jin Woo Workout</CardTitle>
              <CardDescription className="font-light text-muted-foreground">
                Lean Aesthetic & Flexibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm font-light">
                Focus on a lean, aesthetic body with flexible equipment/no-equipment options and detailed diet plan.
              </p>
              <div className="space-y-3 text-sm font-light">
                <div className="flex justify-between text-muted-foreground">
                  <span>Equipment:</span>
                  <span className="text-foreground">Flexible</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Diet Plan:</span>
                  <span className="text-foreground">Included</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Focus:</span>
                  <span className="text-foreground">Lean + Aesthetic</span>
                </div>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 font-light border border-border">
                Start Jin Woo Training
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Features - Minimal grid */}
        <div className="text-center space-y-8 mt-20">
          <h2 className="text-2xl font-light text-muted-foreground">Coming Soon</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-card border border-border">
              <h3 className="font-light text-foreground mb-2">Exercise Library</h3>
              <p className="text-sm text-muted-foreground font-light">Video tutorials & guides</p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="font-light text-foreground mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground font-light">Log workouts & see gains</p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="font-light text-foreground mb-2">AI Assistant</h3>
              <p className="text-sm text-muted-foreground font-light">Personalized suggestions</p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="font-light text-foreground mb-2">Community</h3>
              <p className="text-sm text-muted-foreground font-light">Share your progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

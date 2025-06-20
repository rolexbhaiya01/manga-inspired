
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, Dumbbell, Heart } from 'lucide-react';

interface ProgramDashboardProps {
  onProgramSelect: (program: 'baki' | 'toji' | 'sungjinwoo') => void;
  onBackToLanding: () => void;
}

export const ProgramDashboard = ({ onProgramSelect, onBackToLanding }: ProgramDashboardProps) => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Button 
            variant="ghost" 
            onClick={onBackToLanding}
            className="text-gray-400 hover:text-white mb-4"
          >
            ← Back to Welcome
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-300">
            Select the training program that matches your goals
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Baki Hanma Program */}
          <Card 
            className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-600/50 hover:border-red-500 transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => onProgramSelect('baki')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-red-400">Baki Hanma Training</CardTitle>
              <CardDescription className="text-red-200">
                Raw Power & Boxing Athletics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                Focus on overall muscle development, strength, and boxing athleticism for a Baki-inspired physique.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="text-red-400">8 weeks + deload</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="text-red-400">6 days/week</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span className="text-red-400">Strength + Boxing</span>
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Start Baki Training
              </Button>
            </CardContent>
          </Card>

          {/* Toji Fushiguro Program */}
          <Card 
            className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-600/50 hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => onProgramSelect('toji')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <ArrowUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-blue-400">Toji Fushiguro Training</CardTitle>
              <CardDescription className="text-blue-200">
                V-Taper & High Intensity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                Focus on V-taper development, high-intensity strength, and calisthenics for a Toji-inspired physique.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Options:</span>
                  <span className="text-blue-400">2 split types</span>
                </div>
                <div className="flex justify-between">
                  <span>Intensity:</span>
                  <span className="text-blue-400">High RPE</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span className="text-blue-400">V-Taper + Strength</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Toji Training
              </Button>
            </CardContent>
          </Card>

          {/* Sung Jin Woo Program */}
          <Card 
            className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-600/50 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => onProgramSelect('sungjinwoo')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-400">Sung Jin Woo Workout</CardTitle>
              <CardDescription className="text-purple-200">
                Lean Aesthetic & Flexibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                Focus on a lean, aesthetic body with flexible equipment/no-equipment options and detailed diet plan.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Equipment:</span>
                  <span className="text-purple-400">Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span>Diet Plan:</span>
                  <span className="text-purple-400">Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span className="text-purple-400">Lean + Aesthetic</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Start Jin Woo Training
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Features */}
        <div className="text-center space-y-4 mt-16">
          <h2 className="text-2xl font-semibold text-gray-300">Coming Soon</h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h3 className="font-semibold text-gray-300">Exercise Library</h3>
              <p className="text-sm text-gray-500">Video tutorials & guides</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h3 className="font-semibold text-gray-300">Progress Tracking</h3>
              <p className="text-sm text-gray-500">Log workouts & see gains</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h3 className="font-semibold text-gray-300">AI Assistant</h3>
              <p className="text-sm text-gray-500">Personalized suggestions</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h3 className="font-semibold text-gray-300">Community</h3>
              <p className="text-sm text-gray-500">Share your progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

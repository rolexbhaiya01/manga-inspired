
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle, Dumbbell, Users, Target } from 'lucide-react';

interface LandingSectionProps {
  onAcceptTerms: () => void;
}

export const LandingSection = ({ onAcceptTerms }: LandingSectionProps) => {
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  const [acceptedSafety, setAcceptedSafety] = useState(false);

  const canProceed = acceptedDisclaimer && acceptedSafety;

  const handleDisclaimerChange = (checked: boolean | "indeterminate") => {
    setAcceptedDisclaimer(checked === true);
  };

  const handleSafetyChange = (checked: boolean | "indeterminate") => {
    setAcceptedSafety(checked === true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            ANIME FITNESS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Train Like Your Favorite Characters
          </p>
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5" />
              <span>Strength</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Dedication</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>Results</span>
            </div>
          </div>
        </div>

        {/* App Overview */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Welcome to Your Ultimate Fitness Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-4">
            <p>
              Embark on a revolutionary fitness experience inspired by iconic anime characters: 
              <span className="text-red-400 font-semibold"> Baki Hanma</span>, 
              <span className="text-blue-400 font-semibold"> Toji Fushiguro</span>, and 
              <span className="text-purple-400 font-semibold"> Sung Jin Woo</span>.
            </p>
            <p>
              This platform provides you with the ultimate choice and guidance through intense strength training, 
              weightlifting, calisthenics, and specialized drills to help you sculpt your dream physique and maximize your gains.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-red-900/20 border border-red-800">
                <h3 className="font-semibold text-red-400">Baki Hanma</h3>
                <p className="text-sm text-gray-300">Overall muscle development & boxing athleticism</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-900/20 border border-blue-800">
                <h3 className="font-semibold text-blue-400">Toji Fushiguro</h3>
                <p className="text-sm text-gray-300">V-taper development & high-intensity strength</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-900/20 border border-purple-800">
                <h3 className="font-semibold text-purple-400">Sung Jin Woo</h3>
                <p className="text-sm text-gray-300">Lean aesthetic body & flexible training</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <div className="space-y-6">
          <Card className="bg-yellow-900/20 border-yellow-600">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Copyright Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-100 space-y-3">
              <p className="text-sm">
                This fitness application is inspired by anime/manga characters for motivational purposes only. 
                All character names, references, and inspirations are the property of their respective creators and publishers.
              </p>
              <p className="text-sm">
                The workout programs contained within are created by fitness professionals and are not officially 
                endorsed by the original creators of the mentioned anime/manga series.
              </p>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="disclaimer" 
                  checked={acceptedDisclaimer}
                  onCheckedChange={handleDisclaimerChange}
                />
                <label htmlFor="disclaimer" className="text-sm font-medium">
                  I understand and acknowledge this disclaimer
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-900/20 border-red-600">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Safety Warning & Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-100 space-y-3">
              <p className="text-sm font-semibold">
                IMPORTANT: Consult your healthcare provider before starting any exercise program.
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>These programs are intended for healthy individuals</li>
                <li>Stop immediately if you experience pain, dizziness, or discomfort</li>
                <li>Proper form and gradual progression are essential for injury prevention</li>
                <li>The creators are not responsible for any injuries that may occur</li>
                <li>Individual results may vary based on genetics, effort, and consistency</li>
              </ul>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="safety" 
                  checked={acceptedSafety}
                  onCheckedChange={handleSafetyChange}
                />
                <label htmlFor="safety" className="text-sm font-medium">
                  I understand the risks and safety requirements
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proceed Button */}
        <div className="text-center">
          <Button 
            onClick={onAcceptTerms}
            disabled={!canProceed}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enter the Training Ground
          </Button>
        </div>
      </div>
    </div>
  );
};

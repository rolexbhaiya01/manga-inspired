
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
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
            <Dumbbell className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            ANIME FITNESS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Train Like Your Favorite Characters
          </p>
          <div className="flex justify-center items-center gap-12 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-5 h-5 text-cyan-500" />
              <span>Strength</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-cyan-500" />
              <span>Dedication</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-cyan-500" />
              <span>Results</span>
            </div>
          </div>
        </div>

        {/* App Overview */}
        <Card className="fitness-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Welcome to Your Ultimate Fitness Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-6">
            <p>
              Embark on a revolutionary fitness experience inspired by iconic anime characters: 
              <span className="text-cyan-500 font-medium"> Baki Hanma</span>, 
              <span className="text-cyan-500 font-medium"> Toji Fushiguro</span>, and 
              <span className="text-cyan-500 font-medium"> Sung Jin Woo</span>.
            </p>
            <p>
              This platform provides you with the ultimate choice and guidance through intense strength training, 
              weightlifting, calisthenics, and specialized drills to help you sculpt your dream physique and maximize your gains.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="stat-card">
                <h3 className="font-semibold text-foreground mb-2">Baki Hanma</h3>
                <p className="text-sm text-muted-foreground">Overall muscle development & boxing athleticism</p>
              </div>
              <div className="stat-card">
                <h3 className="font-semibold text-foreground mb-2">Toji Fushiguro</h3>
                <p className="text-sm text-muted-foreground">V-taper development & high-intensity strength</p>
              </div>
              <div className="stat-card">
                <h3 className="font-semibold text-foreground mb-2">Sung Jin Woo</h3>
                <p className="text-sm text-muted-foreground">Lean aesthetic body & flexible training</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <div className="space-y-8">
          <Card className="fitness-card">
            <CardHeader>
              <CardTitle className="text-foreground font-semibold flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-cyan-500" />
                Copyright Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p className="text-sm">
                This fitness application is inspired by anime/manga characters for motivational purposes only. 
                All character names, references, and inspirations are the property of their respective creators and publishers.
              </p>
              <p className="text-sm">
                The workout programs contained within are created by fitness professionals and are not officially 
                endorsed by the original creators of the mentioned anime/manga series.
              </p>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="disclaimer" 
                  checked={acceptedDisclaimer}
                  onCheckedChange={handleDisclaimerChange}
                />
                <label htmlFor="disclaimer" className="text-sm">
                  I understand and acknowledge this disclaimer
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="fitness-card">
            <CardHeader>
              <CardTitle className="text-foreground font-semibold flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-cyan-500" />
                Safety Warning & Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p className="text-sm font-medium text-foreground">
                IMPORTANT: Consult your healthcare provider before starting any exercise program.
              </p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>These programs are intended for healthy individuals</li>
                <li>Stop immediately if you experience pain, dizziness, or discomfort</li>
                <li>Proper form and gradual progression are essential for injury prevention</li>
                <li>The creators are not responsible for any injuries that may occur</li>
                <li>Individual results may vary based on genetics, effort, and consistency</li>
              </ul>
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="safety" 
                  checked={acceptedSafety}
                  onCheckedChange={handleSafetyChange}
                />
                <label htmlFor="safety" className="text-sm">
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
            className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Enter the Training Ground
          </Button>
        </div>
      </div>
    </div>
  );
};

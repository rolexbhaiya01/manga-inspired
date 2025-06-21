
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
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header - Pure white text on black */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-wider text-foreground">
            ANIME FITNESS
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            Train Like Your Favorite Characters
          </p>
          <div className="flex justify-center items-center gap-12 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-5 h-5 stroke-1" />
              <span className="font-light">Strength</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 stroke-1" />
              <span className="font-light">Dedication</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 stroke-1" />
              <span className="font-light">Results</span>
            </div>
          </div>
        </div>

        {/* App Overview - Minimal card */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-light text-foreground">Welcome to Your Ultimate Fitness Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-6 font-light">
            <p>
              Embark on a revolutionary fitness experience inspired by iconic anime characters: 
              <span className="text-foreground font-normal"> Baki Hanma</span>, 
              <span className="text-foreground font-normal"> Toji Fushiguro</span>, and 
              <span className="text-foreground font-normal"> Sung Jin Woo</span>.
            </p>
            <p>
              This platform provides you with the ultimate choice and guidance through intense strength training, 
              weightlifting, calisthenics, and specialized drills to help you sculpt your dream physique and maximize your gains.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 border border-border bg-card">
                <h3 className="font-light text-foreground mb-2">Baki Hanma</h3>
                <p className="text-sm text-muted-foreground font-light">Overall muscle development & boxing athleticism</p>
              </div>
              <div className="text-center p-6 border border-border bg-card">
                <h3 className="font-light text-foreground mb-2">Toji Fushiguro</h3>
                <p className="text-sm text-muted-foreground font-light">V-taper development & high-intensity strength</p>
              </div>
              <div className="text-center p-6 border border-border bg-card">
                <h3 className="font-light text-foreground mb-2">Sung Jin Woo</h3>
                <p className="text-sm text-muted-foreground font-light">Lean aesthetic body & flexible training</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers - Minimal styling */}
        <div className="space-y-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground font-light flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 stroke-1" />
                Copyright Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 font-light">
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
                <label htmlFor="disclaimer" className="text-sm font-light">
                  I understand and acknowledge this disclaimer
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground font-light flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 stroke-1" />
                Safety Warning & Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4 font-light">
              <p className="text-sm font-normal">
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
                <label htmlFor="safety" className="text-sm font-light">
                  I understand the risks and safety requirements
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proceed Button - Minimal design */}
        <div className="text-center">
          <Button 
            onClick={onAcceptTerms}
            disabled={!canProceed}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/80 px-12 py-4 font-light tracking-wide border border-border disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Enter the Training Ground
          </Button>
        </div>
      </div>
    </div>
  );
};


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Clock, AlertCircle } from 'lucide-react';

export const TrainingConcepts = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-400">Training Concepts</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Training to Failure */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-400 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Training to Failure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-blue-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600 text-white">RPE 9</Badge>
                  <h4 className="font-medium text-blue-400">Technical Failure (1 RIR)</h4>
                </div>
                <p className="text-sm text-gray-300">
                  When you can no longer maintain proper form. This is the safest approach 
                  and should be your primary target for compound movements like squats, deadlifts, and rows.
                </p>
              </div>
              
              <div className="p-4 bg-red-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-red-600 text-white">RPE 10</Badge>
                  <h4 className="font-medium text-red-400">Absolute Failure (0 RIR)</h4>
                </div>
                <p className="text-sm text-gray-300">
                  When you physically cannot complete another rep. Use sparingly and only 
                  on isolation exercises or with proper spotting. Best for final sets.
                </p>
              </div>
              
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h4 className="font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Safety Guidelines
                </h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Use technical failure on compound movements</li>
                  <li>• Reserve absolute failure for isolation exercises</li>
                  <li>• Always prioritize form over intensity</li>
                  <li>• Have a spotter for heavy compound lifts</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-900/10 rounded border border-blue-600/30">
              <p className="text-sm text-blue-300">
                📹 <strong>Recommended:</strong> Watch the 13-minute video explanation on RPE and training to failure 
                for a deeper understanding of these concepts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Warm-Up Protocol */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-400 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Warm-Up Protocol
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-yellow-900/20 rounded-lg">
              <h4 className="font-medium text-yellow-400 mb-2">Why Warm-Up Matters</h4>
              <p className="text-sm text-gray-300">
                Proper warm-up increases blood flow, prepares joints and muscles, 
                reduces injury risk, and improves performance quality.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-300">Dynamic Warm-Up (5-10 minutes):</h4>
              <div className="grid gap-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>• Light cardio (walking/jogging)</span>
                  <span>2-3 min</span>
                </div>
                <div className="flex justify-between">
                  <span>• Foam rolling (major muscle groups)</span>
                  <span>2-3 min</span>
                </div>
                <div className="flex justify-between">
                  <span>• Leg swings (forward/side)</span>
                  <span>10 each</span>
                </div>
                <div className="flex justify-between">
                  <span>• Arm circles and shoulder shrugs</span>
                  <span>10 each</span>
                </div>
                <div className="flex justify-between">
                  <span>• Neck rotations (gentle)</span>
                  <span>5 each way</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-900/20 rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Pyramid Sets Alternative</h4>
              <p className="text-sm text-gray-300 mb-2">
                Gradually increase weight and decrease reps to reach working weight:
              </p>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Empty bar/bodyweight → 50% → 70% → 85% → Working weight</div>
                <div className="text-xs mt-2">
                  Example: If working weight is 100lbs: 0→50→70→85→100lbs
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RPE Scale Reference */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-blue-400 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            RPE Scale Reference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-300">RPE Scale (Rate of Perceived Exertion)</h4>
              <div className="space-y-2 text-sm">
                {[
                  { rpe: "6", description: "Easy pace, could go all day", color: "bg-green-600" },
                  { rpe: "7", description: "Could do 3+ more reps", color: "bg-green-500" },
                  { rpe: "8", description: "Could do 2-3 more reps", color: "bg-yellow-500" },
                  { rpe: "9", description: "Could do 1 more rep (technical failure)", color: "bg-orange-500" },
                  { rpe: "10", description: "Cannot do any more reps (absolute failure)", color: "bg-red-600" }
                ].map((level) => (
                  <div key={level.rpe} className="flex items-center gap-3">
                    <Badge className={`${level.color} text-white min-w-[40px] justify-center`}>
                      {level.rpe}
                    </Badge>
                    <span className="text-gray-300">{level.description}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-300">Application Guidelines</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="p-3 bg-blue-900/20 rounded">
                  <strong className="text-blue-400">Compound Movements:</strong><br />
                  Target RPE 8-9 for safety and consistent progression
                </div>
                <div className="p-3 bg-green-900/20 rounded">
                  <strong className="text-green-400">Isolation Exercises:</strong><br />
                  Can push to RPE 9-10 more safely
                </div>
                <div className="p-3 bg-yellow-900/20 rounded">
                  <strong className="text-yellow-400">Deload Weeks:</strong><br />
                  Target RPE 6-7 for recovery
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

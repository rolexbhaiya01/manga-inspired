
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, Zap, Users } from 'lucide-react';

export const TrainingSplitsSection = () => {
  const [selectedSplit, setSelectedSplit] = useState<'A' | 'B' | null>(null);
  const [currentWeek, setCurrentWeek] = useState(1);

  const splitAWorkouts = {
    1: {
      day1: {
        name: "Upper Body Power",
        exercises: [
          { name: "Pull-ups/Chin-ups", sets: "4", reps: "6-10", rpe: "9", rest: "3-4 min" },
          { name: "Barbell/Dumbbell Rows", sets: "4", reps: "6-8", rpe: "8-9", rest: "3-4 min" },
          { name: "Overhead Press", sets: "3", reps: "6-8", rpe: "8-9", rest: "3 min" },
          { name: "Dips/Push-ups", sets: "3", reps: "8-12", rpe: "8-9", rest: "2-3 min" },
          { name: "Barbell Curls", sets: "3", reps: "8-12", rpe: "8", rest: "2 min" }
        ]
      },
      day2: {
        name: "Lower Body Power",
        exercises: [
          { name: "Squats/Goblet Squats", sets: "4", reps: "6-8", rpe: "8-9", rest: "3-4 min" },
          { name: "Romanian Deadlifts", sets: "4", reps: "6-8", rpe: "8-9", rest: "3-4 min" },
          { name: "Bulgarian Split Squats", sets: "3", reps: "8-12 each", rpe: "8", rest: "2-3 min" },
          { name: "Hip Thrusts", sets: "3", reps: "10-15", rpe: "8", rest: "2 min" },
          { name: "Calf Raises", sets: "4", reps: "12-20", rpe: "8", rest: "1-2 min" }
        ]
      },
      day3: {
        name: "Full Body Circuit",
        exercises: [
          { name: "Push-ups", sets: "3", reps: "AMRAP", rpe: "9", rest: "90 sec" },
          { name: "Pike Push-ups", sets: "3", reps: "8-15", rpe: "8-9", rest: "90 sec" },
          { name: "Inverted Rows", sets: "3", reps: "8-15", rpe: "8-9", rest: "90 sec" },
          { name: "Jump Squats", sets: "3", reps: "10-15", rpe: "8", rest: "90 sec" },
          { name: "Plank", sets: "3", reps: "30-60 sec", rpe: "8", rest: "60 sec" }
        ]
      }
    }
  };

  const splitBWorkouts = {
    1: {
      day1: {
        name: "Back & Biceps",
        exercises: [
          { name: "Pull-ups/Lat Pulldowns", sets: "4", reps: "8-12", rpe: "8-9", rest: "2-3 min" },
          { name: "Barbell/Dumbbell Rows", sets: "4", reps: "8-12", rpe: "8-9", rest: "2-3 min" },
          { name: "Cable/Band Rows", sets: "3", reps: "10-15", rpe: "8", rest: "2 min" },
          { name: "Barbell Curls", sets: "3", reps: "10-15", rpe: "8", rest: "90 sec" },
          { name: "Hammer Curls", sets: "3", reps: "10-15", rpe: "8", rest: "90 sec" },
          { name: "Face Pulls", sets: "3", reps: "15-20", rpe: "7-8", rest: "90 sec" }
        ]
      },
      day2: {
        name: "Chest & Triceps",
        exercises: [
          { name: "Push-ups/Bench Press", sets: "4", reps: "8-12", rpe: "8-9", rest: "2-3 min" },
          { name: "Incline Push-ups/Press", sets: "3", reps: "10-15", rpe: "8", rest: "2-3 min" },
          { name: "Dips", sets: "3", reps: "8-15", rpe: "8-9", rest: "2 min" },
          { name: "Tricep Dips", sets: "3", reps: "10-15", rpe: "8", rest: "90 sec" },
          { name: "Diamond Push-ups", sets: "3", reps: "8-12", rpe: "8-9", rest: "90 sec" },
          { name: "Chest Flyes", sets: "3", reps: "12-15", rpe: "7-8", rest: "90 sec" }
        ]
      },
      day3: {
        name: "Shoulders",
        exercises: [
          { name: "Overhead Press", sets: "4", reps: "8-12", rpe: "8-9", rest: "2-3 min" },
          { name: "Pike Push-ups", sets: "3", reps: "8-15", rpe: "8-9", rest: "2 min" },
          { name: "Lateral Raises", sets: "4", reps: "12-20", rpe: "8", rest: "90 sec" },
          { name: "Rear Delt Flyes", sets: "3", reps: "15-20", rpe: "7-8", rest: "90 sec" },
          { name: "Handstand Progression", sets: "3", reps: "30-60 sec", rpe: "8", rest: "2 min" }
        ]
      },
      day4: {
        name: "Legs",
        exercises: [
          { name: "Squats", sets: "4", reps: "8-12", rpe: "8-9", rest: "3 min" },
          { name: "Romanian Deadlifts", sets: "4", reps: "8-12", rpe: "8-9", rest: "3 min" },
          { name: "Bulgarian Split Squats", sets: "3", reps: "10-15 each", rpe: "8", rest: "2 min" },
          { name: "Hip Thrusts", sets: "3", reps: "12-20", rpe: "8", rest: "2 min" },
          { name: "Calf Raises", sets: "4", reps: "15-25", rpe: "8", rest: "90 sec" },
          { name: "Wall Sit", sets: "3", reps: "30-60 sec", rpe: "8", rest: "90 sec" }
        ]
      },
      day5: {
        name: "Arms & Core",
        exercises: [
          { name: "Barbell/Dumbbell Curls", sets: "4", reps: "10-15", rpe: "8", rest: "90 sec" },
          { name: "Tricep Dips", sets: "4", reps: "10-15", rpe: "8", rest: "90 sec" },
          { name: "Hammer Curls", sets: "3", reps: "12-15", rpe: "8", rest: "90 sec" },
          { name: "Diamond Push-ups", sets: "3", reps: "8-12", rpe: "8-9", rest: "90 sec" },
          { name: "Plank", sets: "3", reps: "45-90 sec", rpe: "8", rest: "60 sec" },
          { name: "Mountain Climbers", sets: "3", reps: "20-30", rpe: "8", rest: "60 sec" }
        ]
      }
    }
  };

  return (
    <div className="space-y-6">
      {!selectedSplit ? (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Split A */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all cursor-pointer" 
                onClick={() => setSelectedSplit('A')}>
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Split A: High Intensity Minimalist
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">3 Days/Week</Badge>
                <Badge variant="outline">Advanced</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Designed for high intensity, training to or near failure, suitable for experienced 
                individuals with busy schedules.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  45-60 minutes per session
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4" />
                  RPE 8-9 (High Intensity)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  Best for experienced trainees
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-300">Weekly Structure:</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div>• Day 1: Upper Body Power</div>
                  <div>• Day 2: Lower Body Power</div>
                  <div>• Day 3: Full Body Circuit</div>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Choose Split A
              </Button>
            </CardContent>
          </Card>

          {/* Split B */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                onClick={() => setSelectedSplit('B')}>
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Split B: High Volume Body Part
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary">5 Days/Week</Badge>
                <Badge variant="outline">Beginner-Intermediate</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Designed for more frequent training with higher volume, suitable for beginners 
                and those wanting maximum muscle focus.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  60-75 minutes per session
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4" />
                  RPE 7-9 (Moderate to High)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  Great for beginners to intermediate
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-300">Weekly Structure:</h4>
                <div className="space-y-1 text-sm text-gray-400">
                  <div>• Day 1: Back & Biceps</div>
                  <div>• Day 2: Chest & Triceps</div>
                  <div>• Day 3: Shoulders</div>
                  <div>• Day 4: Legs</div>
                  <div>• Day 5: Arms & Core</div>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Choose Split B
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Split Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-400">
                Split {selectedSplit}: {selectedSplit === 'A' ? 'High Intensity Minimalist' : 'High Volume Body Part'}
              </h2>
              <p className="text-gray-400">
                {selectedSplit === 'A' ? '3 Days/Week' : '5 Days/Week'} • 8-Week Cycle
              </p>
            </div>
            <Button variant="ghost" onClick={() => setSelectedSplit(null)}>
              ← Back to Splits
            </Button>
          </div>

          {/* Week Selection */}
          <div className="flex gap-2">
            <span className="text-gray-300 self-center mr-2">Week:</span>
            {[1, 2, 3, 4].map((week) => (
              <Button
                key={week}
                variant={currentWeek === week ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentWeek(week)}
                className={currentWeek === week ? "bg-blue-600" : ""}
              >
                {week}
              </Button>
            ))}
          </div>

          {/* Workout Days */}
          <div className="grid gap-6">
            {selectedSplit === 'A' && splitAWorkouts[1] && Object.entries(splitAWorkouts[1]).map(([day, workout]) => (
              <Card key={day} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">{workout.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-300">Exercise</th>
                          <th className="text-center py-2 text-gray-300">Sets</th>
                          <th className="text-center py-2 text-gray-300">Reps</th>
                          <th className="text-center py-2 text-gray-300">RPE</th>
                          <th className="text-center py-2 text-gray-300">Rest</th>
                        </tr>
                      </thead>
                      <tbody>
                        {workout.exercises.map((exercise, idx) => (
                          <tr key={idx} className="border-b border-gray-700/50">
                            <td className="py-2 text-gray-300">{exercise.name}</td>
                            <td className="text-center py-2 text-gray-400">{exercise.sets}</td>
                            <td className="text-center py-2 text-gray-400">{exercise.reps}</td>
                            <td className="text-center py-2 text-blue-400">{exercise.rpe}</td>
                            <td className="text-center py-2 text-gray-400">{exercise.rest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}

            {selectedSplit === 'B' && splitBWorkouts[1] && Object.entries(splitBWorkouts[1]).map(([day, workout]) => (
              <Card key={day} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">{workout.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 text-gray-300">Exercise</th>
                          <th className="text-center py-2 text-gray-300">Sets</th>
                          <th className="text-center py-2 text-gray-300">Reps</th>
                          <th className="text-center py-2 text-gray-300">RPE</th>
                          <th className="text-center py-2 text-gray-300">Rest</th>
                        </tr>
                      </thead>
                      <tbody>
                        {workout.exercises.map((exercise, idx) => (
                          <tr key={idx} className="border-b border-gray-700/50">
                            <td className="py-2 text-gray-300">{exercise.name}</td>
                            <td className="text-center py-2 text-gray-400">{exercise.sets}</td>
                            <td className="text-center py-2 text-gray-400">{exercise.reps}</td>
                            <td className="text-center py-2 text-blue-400">{exercise.rpe}</td>
                            <td className="text-center py-2 text-gray-400">{exercise.rest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

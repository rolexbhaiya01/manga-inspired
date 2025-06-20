
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, Camera, Apple, Dumbbell } from 'lucide-react';

export const ProgressTracking = () => {
  const [workoutLogs, setWorkoutLogs] = useState<any[]>([]);
  const [foodLogs, setFoodLogs] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const sampleWorkoutData = [
    { date: '2024-01-15', exercise: 'Push-ups', sets: 4, reps: 15, notes: 'Good form' },
    { date: '2024-01-15', exercise: 'Bench Press', sets: 4, reps: 10, weight: 135, notes: 'Increased weight' },
    { date: '2024-01-13', exercise: 'Pull-ups', sets: 3, reps: 8, notes: 'Need to improve' },
    { date: '2024-01-13', exercise: 'Squats', sets: 4, reps: 12, weight: 185, notes: 'Great session' }
  ];

  const sampleFoodData = [
    { date: '2024-01-15', meal: 'Breakfast', food: 'Oats with banana', calories: 350 },
    { date: '2024-01-15', meal: 'Lunch', food: 'Grilled chicken with quinoa', calories: 450 },
    { date: '2024-01-15', meal: 'Dinner', food: 'Salmon with sweet potato', calories: 520 },
    { date: '2024-01-14', meal: 'Breakfast', food: 'Greek yogurt with berries', calories: 280 }
  ];

  const progressMetrics = [
    { label: 'Current Weight', value: '175 lbs', change: '-2 lbs', positive: true },
    { label: 'Body Fat %', value: '12%', change: '-1%', positive: true },
    { label: 'Muscle Mass', value: '152 lbs', change: '+3 lbs', positive: true },
    { label: 'Weekly Workouts', value: '5', change: '+1', positive: true }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-400">Progress Tracking</h2>
        <div className="flex gap-2">
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        {progressMetrics.map((metric, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
                <Badge 
                  className={`${metric.positive ? 'bg-green-600' : 'bg-red-600'} text-white`}
                >
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="workout-logs" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="workout-logs">Workout Logs</TabsTrigger>
          <TabsTrigger value="food-logs">Food Logs</TabsTrigger>
          <TabsTrigger value="progress-photos">Progress Photos</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="workout-logs" className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <Dumbbell className="w-5 h-5" />
                Log New Workout
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="exercise">Exercise</Label>
                  <Input id="exercise" placeholder="e.g., Push-ups" className="bg-gray-700 border-gray-600" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label htmlFor="sets">Sets</Label>
                    <Input id="sets" type="number" placeholder="4" className="bg-gray-700 border-gray-600" />
                  </div>
                  <div>
                    <Label htmlFor="reps">Reps</Label>
                    <Input id="reps" type="number" placeholder="12" className="bg-gray-700 border-gray-600" />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input id="weight" type="number" placeholder="135" className="bg-gray-700 border-gray-600" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Input id="notes" placeholder="How did it feel?" className="bg-gray-700 border-gray-600" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Log Workout
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Recent Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sampleWorkoutData.map((log, index) => (
                  <div key={index} className="p-3 bg-purple-900/20 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-white">{log.exercise}</h4>
                        <p className="text-sm text-gray-400">
                          {log.sets} sets × {log.reps} reps
                          {log.weight && ` @ ${log.weight} lbs`}
                        </p>
                        {log.notes && <p className="text-sm text-gray-400 italic">{log.notes}</p>}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {log.date}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="food-logs" className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <Apple className="w-5 h-5" />
                Log Food Intake
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="meal">Meal</Label>
                  <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white">
                    <option>Breakfast</option>
                    <option>Mid-Morning Snack</option>
                    <option>Lunch</option>
                    <option>Afternoon Snack</option>
                    <option>Dinner</option>
                    <option>Evening Snack</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="food">Food Item</Label>
                  <Input id="food" placeholder="e.g., Oats with banana" className="bg-gray-700 border-gray-600" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="calories">Calories</Label>
                  <Input id="calories" type="number" placeholder="350" className="bg-gray-700 border-gray-600" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Log Food
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Today's Food Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sampleFoodData.filter(log => log.date === selectedDate).map((log, index) => (
                  <div key={index} className="p-3 bg-purple-900/20 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-white">{log.meal}</h4>
                        <p className="text-sm text-gray-400">{log.food}</p>
                      </div>
                      <Badge className="bg-green-600 text-white">
                        {log.calories} cal
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-700/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">Daily Total</span>
                  <span className="text-purple-400 font-bold">
                    {sampleFoodData
                      .filter(log => log.date === selectedDate)
                      .reduce((total, log) => total + log.calories, 0)} calories
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress-photos" className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Progress Photos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">Upload your progress photos</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Choose Photos
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="w-full h-32 bg-gray-600 rounded mb-2"></div>
                  <p className="text-sm text-gray-400">Front View - Week 1</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="w-full h-32 bg-gray-600 rounded mb-2"></div>
                  <p className="text-sm text-gray-400">Side View - Week 1</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="w-full h-32 bg-gray-600 rounded mb-2"></div>
                  <p className="text-sm text-gray-400">Back View - Week 1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Progress Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-4">Weight Progress</h4>
                    <div className="h-32 bg-gray-600 rounded flex items-center justify-center">
                      <p className="text-gray-400">Weight chart would go here</p>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-4">Workout Frequency</h4>
                    <div className="h-32 bg-gray-600 rounded flex items-center justify-center">
                      <p className="text-gray-400">Frequency chart would go here</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-4">Strength Progress</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Push-ups</span>
                      <span className="text-purple-400">15 reps → 20 reps (+33%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bench Press</span>
                      <span className="text-purple-400">115 lbs → 135 lbs (+17%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pull-ups</span>
                      <span className="text-purple-400">5 reps → 8 reps (+60%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

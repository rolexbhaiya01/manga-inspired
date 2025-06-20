
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, Camera, Plus, BarChart3 } from 'lucide-react';

export const ProgressTracking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showWorkoutLog, setShowWorkoutLog] = useState(false);

  // Mock data for demonstration
  const recentWorkouts = [
    {
      date: '2024-01-15',
      split: 'A',
      day: 'Upper Body Power',
      exercises: [
        { name: 'Pull-ups', sets: 4, reps: '8,7,6,6', weight: 'Bodyweight' },
        { name: 'Barbell Rows', sets: 4, reps: '8,8,7,6', weight: '135lbs' }
      ]
    },
    {
      date: '2024-01-13',
      split: 'A', 
      day: 'Lower Body Power',
      exercises: [
        { name: 'Squats', sets: 4, reps: '8,8,7,6', weight: '185lbs' },
        { name: 'Romanian Deadlifts', sets: 4, reps: '8,8,8,7', weight: '155lbs' }
      ]
    }
  ];

  const progressStats = [
    { exercise: 'Pull-ups', trend: '+2 reps', period: 'Last 4 weeks' },
    { exercise: 'Squats', trend: '+15 lbs', period: 'Last 4 weeks' },
    { exercise: 'Push-ups', trend: '+8 reps', period: 'Last 4 weeks' },
    { exercise: 'Overhead Press', trend: '+10 lbs', period: 'Last 4 weeks' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-400">Progress Tracking</h2>
        <Button 
          onClick={() => setShowWorkoutLog(!showWorkoutLog)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Log Workout
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {progressStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-300">{stat.exercise}</p>
                  <p className="text-xs text-gray-500">{stat.period}</p>
                </div>
                <Badge className="bg-green-600 text-white">{stat.trend}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Summary */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-400 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Workouts Completed</span>
              <span className="text-blue-400 font-semibold">3/3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Current Week</span>
              <span className="text-gray-400">Week 2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Split</span>
              <span className="text-gray-400">Split A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Total Volume</span>
              <span className="text-green-400">12,450 lbs</span>
            </div>
          </CardContent>
        </Card>

        {/* Progress Photos */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Progress Photos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-400">Track your physique changes</p>
            <Button variant="outline" className="w-full border-purple-500 text-purple-400">
              <Camera className="w-4 h-4 mr-2" />
              Upload Photo
            </Button>
            <div className="text-xs text-gray-500">
              Last upload: 2 weeks ago
            </div>
            <div className="text-xs text-gray-500">
              Recommended: Front, side, back views monthly
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workout Log Form */}
      {showWorkoutLog && (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-400">Log Today's Workout</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                <Input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Split</label>
                <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white">
                  <option>Split A</option>
                  <option>Split B</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Workout Day</label>
                <select className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white">
                  <option>Upper Body Power</option>
                  <option>Lower Body Power</option>
                  <option>Full Body Circuit</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-300">Exercises</h4>
              <div className="space-y-2">
                {['Pull-ups', 'Barbell Rows', 'Overhead Press'].map((exercise, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 items-center">
                    <span className="text-sm text-gray-300">{exercise}</span>
                    <Input placeholder="Sets" className="bg-gray-800 border-gray-700 text-xs" />
                    <Input placeholder="Reps" className="bg-gray-800 border-gray-700 text-xs" />
                    <Input placeholder="Weight" className="bg-gray-800 border-gray-700 text-xs" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Save Workout</Button>
              <Button variant="outline" onClick={() => setShowWorkoutLog(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Workouts */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-blue-400 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Recent Workouts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentWorkouts.map((workout, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-300">{workout.day}</h4>
                    <p className="text-sm text-gray-400">Split {workout.split} • {workout.date}</p>
                  </div>
                  <Badge variant="outline">Completed</Badge>
                </div>
                <div className="space-y-2">
                  {workout.exercises.map((exercise, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-300">{exercise.name}</span>
                      <span className="text-gray-400">
                        {exercise.sets} sets × {exercise.reps} @ {exercise.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

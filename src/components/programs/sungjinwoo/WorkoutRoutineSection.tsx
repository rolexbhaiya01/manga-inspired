
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Home, Calendar, Clock } from 'lucide-react';

export const WorkoutRoutineSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<'gym' | 'home'>('gym');
  const [selectedDay, setSelectedDay] = useState('monday');

  const weeklySchedule = [
    { day: 'Monday', focus: 'Chest & Triceps', color: 'bg-red-600' },
    { day: 'Tuesday', focus: 'Back & Biceps', color: 'bg-green-600' },
    { day: 'Wednesday', focus: 'Legs', color: 'bg-blue-600' },
    { day: 'Thursday', focus: 'Shoulders & Abs', color: 'bg-yellow-600' },
    { day: 'Friday', focus: 'Rest Day', color: 'bg-gray-600' },
    { day: 'Saturday', focus: 'Cardio & Core', color: 'bg-purple-600' },
    { day: 'Sunday', focus: 'Active Recovery', color: 'bg-orange-600' }
  ];

  const gymWorkouts = {
    monday: {
      name: 'Chest & Triceps',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Bench Press', sets: '4', reps: '8-12', rest: '2-3 min' },
        { name: 'Incline Dumbbell Press', sets: '3', reps: '10-15', rest: '90s' },
        { name: 'Dumbbell Flyes', sets: '3', reps: '12-15', rest: '90s' },
        { name: 'Push-ups', sets: '3', reps: 'To failure', rest: '60s' },
        { name: 'Overhead Triceps Extension', sets: '3', reps: '10-15', rest: '90s' },
        { name: 'Triceps Rope Pushdown', sets: '3', reps: '12-15', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    tuesday: {
      name: 'Back & Biceps',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Pull-ups/Lat Pulldowns', sets: '4', reps: '8-12', rest: '2-3 min' },
        { name: 'Barbell Rows', sets: '4', reps: '8-12', rest: '2-3 min' },
        { name: 'Cable Rows', sets: '3', reps: '10-15', rest: '90s' },
        { name: 'Face Pulls', sets: '3', reps: '15-20', rest: '60s' },
        { name: 'Barbell Curls', sets: '3', reps: '10-15', rest: '90s' },
        { name: 'Hammer Curls', sets: '3', reps: '12-15', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    wednesday: {
      name: 'Legs',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Squats', sets: '4', reps: '8-12', rest: '2-3 min' },
        { name: 'Romanian Deadlifts', sets: '4', reps: '8-12', rest: '2-3 min' },
        { name: 'Walking Lunges', sets: '3', reps: '12 each leg', rest: '90s' },
        { name: 'Leg Press', sets: '3', reps: '15-20', rest: '90s' },
        { name: 'Calf Raises', sets: '4', reps: '15-20', rest: '60s' },
        { name: 'Leg Curls', sets: '3', reps: '12-15', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    thursday: {
      name: 'Shoulders & Abs',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Overhead Press', sets: '4', reps: '8-12', rest: '2-3 min' },
        { name: 'Lateral Raises', sets: '3', reps: '12-15', rest: '90s' },
        { name: 'Rear Delt Flyes', sets: '3', reps: '12-15', rest: '90s' },
        { name: 'Front Raises', sets: '3', reps: '10-12', rest: '60s' },
        { name: 'Plank', sets: '3', reps: '60 seconds', rest: '60s' },
        { name: 'Russian Twists', sets: '3', reps: '20 each side', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    saturday: {
      name: 'Cardio & Core',
      warmup: '5 minutes light cardio',
      exercises: [
        { name: 'Treadmill/Bike', sets: '1', reps: '20-30 minutes', rest: 'N/A' },
        { name: 'Mountain Climbers', sets: '3', reps: '20 each leg', rest: '60s' },
        { name: 'Bicycle Crunches', sets: '3', reps: '20 each side', rest: '60s' },
        { name: 'Dead Bug', sets: '3', reps: '10 each side', rest: '60s' },
        { name: 'Side Plank', sets: '2', reps: '30s each side', rest: '60s' }
      ],
      cooldown: '10 minutes of stretching'
    }
  };

  const homeWorkouts = {
    monday: {
      name: 'Chest & Triceps',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Push-ups', sets: '4', reps: 'To failure', rest: '90s' },
        { name: 'Incline Push-ups', sets: '3', reps: '12-15', rest: '90s' },
        { name: 'Dips (chairs/parallel bars)', sets: '3', reps: 'To failure', rest: '90s' },
        { name: 'Diamond Push-ups', sets: '3', reps: '10-15', rest: '60s' },
        { name: 'Pike Push-ups', sets: '3', reps: '8-12', rest: '90s' },
        { name: 'Tricep Dips', sets: '3', reps: '12-15', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    tuesday: {
      name: 'Back & Biceps',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Pull-ups (or doorway rows)', sets: '4', reps: 'To failure', rest: '2-3 min' },
        { name: 'Inverted Rows', sets: '4', reps: '8-12', rest: '2 min' },
        { name: 'Superman', sets: '3', reps: '15-20', rest: '60s' },
        { name: 'Reverse Flyes (towel)', sets: '3', reps: '15-20', rest: '60s' },
        { name: 'Doorway Curls', sets: '3', reps: '12-15', rest: '90s' },
        { name: 'Towel Curls', sets: '3', reps: '15-20', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    wednesday: {
      name: 'Legs',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Bodyweight Squats', sets: '4', reps: '15-20', rest: '90s' },
        { name: 'Single Leg Romanian Deadlifts', sets: '3', reps: '10 each leg', rest: '90s' },
        { name: 'Walking Lunges', sets: '3', reps: '12 each leg', rest: '90s' },
        { name: 'Jump Squats', sets: '3', reps: '10-15', rest: '90s' },
        { name: 'Calf Raises', sets: '4', reps: '20-25', rest: '60s' },
        { name: 'Wall Sit', sets: '3', reps: '30-60 seconds', rest: '90s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    thursday: {
      name: 'Shoulders & Abs',
      warmup: '10 minutes of dynamic stretching',
      exercises: [
        { name: 'Pike Push-ups', sets: '4', reps: '8-12', rest: '2 min' },
        { name: 'Lateral Arm Raises (water bottles)', sets: '3', reps: '15-20', rest: '90s' },
        { name: 'Rear Delt Squeeze', sets: '3', reps: '15-20', rest: '60s' },
        { name: 'Front Arm Raises', sets: '3', reps: '12-15', rest: '60s' },
        { name: 'Plank', sets: '3', reps: '60 seconds', rest: '60s' },
        { name: 'Russian Twists', sets: '3', reps: '20 each side', rest: '60s' }
      ],
      cooldown: '5-10 minutes of static stretching'
    },
    saturday: {
      name: 'Cardio & Core',
      warmup: '5 minutes marching in place',
      exercises: [
        { name: 'High Knees', sets: '3', reps: '30 seconds', rest: '30s' },
        { name: 'Burpees', sets: '3', reps: '8-12', rest: '90s' },
        { name: 'Mountain Climbers', sets: '3', reps: '20 each leg', rest: '60s' },
        { name: 'Bicycle Crunches', sets: '3', reps: '20 each side', rest: '60s' },
        { name: 'Dead Bug', sets: '3', reps: '10 each side', rest: '60s' },
        { name: 'Side Plank', sets: '2', reps: '30s each side', rest: '60s' }
      ],
      cooldown: '10 minutes of stretching'
    }
  };

  const getCurrentWorkout = () => {
    const workouts = selectedPlan === 'gym' ? gymWorkouts : homeWorkouts;
    return workouts[selectedDay as keyof typeof workouts] || workouts.monday;
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Program Overview */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-purple-400">Program Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              Choose between two comprehensive workout plans designed to build a lean, aesthetic physique:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">With Equipment & Gym Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">Without Equipment & Gym Plan</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Schedule */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {weeklySchedule.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-purple-900/20 rounded">
                  <span className="font-medium text-gray-300">{day.day}</span>
                  <Badge className={`${day.color} text-white`}>
                    {day.focus}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workout Plan Selection */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-purple-400">Select Your Workout Plan</CardTitle>
          <div className="flex gap-4">
            <Button
              variant={selectedPlan === 'gym' ? 'default' : 'outline'}
              onClick={() => setSelectedPlan('gym')}
              className={selectedPlan === 'gym' ? 'bg-purple-600 hover:bg-purple-700' : ''}
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              With Equipment & Gym
            </Button>
            <Button
              variant={selectedPlan === 'home' ? 'default' : 'outline'}
              onClick={() => setSelectedPlan('home')}
              className={selectedPlan === 'home' ? 'bg-purple-600 hover:bg-purple-700' : ''}
            >
              <Home className="w-4 h-4 mr-2" />
              Without Equipment & Gym
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedDay} onValueChange={setSelectedDay}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="monday">Monday</TabsTrigger>
              <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
              <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
              <TabsTrigger value="thursday">Thursday</TabsTrigger>
              <TabsTrigger value="saturday">Saturday</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedDay} className="mt-6">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-400">{getCurrentWorkout().name}</h3>
                  <p className="text-gray-400">
                    {selectedPlan === 'gym' ? 'Gym-Based Workout' : 'Home-Based Workout'}
                  </p>
                </div>

                {/* Warm-up */}
                <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-600/50">
                  <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Warm-up
                  </h4>
                  <p className="text-gray-300">{getCurrentWorkout().warmup}</p>
                </div>

                {/* Main Exercises */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-400 text-lg">Main Exercises</h4>
                  {getCurrentWorkout().exercises.map((exercise, index) => (
                    <div key={index} className="p-4 bg-purple-900/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium text-purple-400">{exercise.name}</h5>
                        <div className="flex gap-4 text-sm text-gray-400">
                          <span>Sets: <span className="text-purple-400">{exercise.sets}</span></span>
                          <span>Reps: <span className="text-purple-400">{exercise.reps}</span></span>
                          <span>Rest: <span className="text-purple-400">{exercise.rest}</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cool-down */}
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-600/50">
                  <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Cool-down
                  </h4>
                  <p className="text-gray-300">{getCurrentWorkout().cooldown}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

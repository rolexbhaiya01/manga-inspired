
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Dumbbell, Timer, Target, Search, Play } from 'lucide-react';

interface BakiProgramProps {
  onBack: () => void;
}

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  muscles: string[];
  instructions: string;
}

interface DayWorkout {
  name: string;
  warmup: string;
  exercises: Exercise[];
  cooldown: string;
}

const weeklySchedule = [
  { day: 'Monday', type: 'Upper Body Day 1', focus: 'Strength & Power' },
  { day: 'Tuesday', type: 'Lower Body Day 1', focus: 'Legs & Glutes' },
  { day: 'Wednesday', type: 'Upper Body Day 2', focus: 'Volume & Endurance' },
  { day: 'Thursday', type: 'Lower Body Day 2', focus: 'Posterior Chain' },
  { day: 'Friday', type: 'Accessory Day', focus: 'Boxing & Accessories' },
  { day: 'Saturday', type: 'Active Recovery', focus: 'Light Cardio & Mobility' },
  { day: 'Sunday', type: 'Rest Day', focus: 'Complete Rest' }
];

const workoutPlans: Record<string, DayWorkout> = {
  'upper1': {
    name: 'Upper Body Day 1 - Strength Focus',
    warmup: '10 minutes dynamic stretching, foam rolling, light shoulder circles',
    exercises: [
      { name: 'Barbell Bench Press', sets: '4', reps: '6-8', muscles: ['Chest', 'Triceps', 'Shoulders'], instructions: 'Lower bar to chest, press up explosively. Focus on form and controlled movement.' },
      { name: 'Bent-Over Rows', sets: '4', reps: '8-12', muscles: ['Back', 'Biceps'], instructions: 'Hinge at hips, pull bar to lower chest, squeeze shoulder blades together.' },
      { name: 'Overhead Press', sets: '3', reps: '8-12', muscles: ['Shoulders', 'Triceps'], instructions: 'Press barbell overhead from shoulder level, engage core throughout.' },
      { name: 'Pull-Ups/Lat Pulldowns', sets: '3', reps: 'AMRAP/10-15', muscles: ['Back', 'Biceps'], instructions: 'Pull chin over bar or pull bar to upper chest. Control the negative.' },
      { name: 'Dumbbell Rows', sets: '3', reps: '10-15', muscles: ['Back', 'Biceps'], instructions: 'Single arm or both arms, focus on squeezing back muscles.' },
      { name: 'Triceps Pushdowns', sets: '3', reps: '10-15', muscles: ['Triceps'], instructions: 'Keep elbows at sides, push down with control, squeeze at bottom.' },
      { name: 'Bicep Curls', sets: '3', reps: '10-15', muscles: ['Biceps'], instructions: 'Curl with control, avoid swinging, focus on peak contraction.' }
    ],
    cooldown: '10 minutes static stretching, focus on chest, shoulders, and back'
  },
  'lower1': {
    name: 'Lower Body Day 1 - Power Focus',
    warmup: '10 minutes dynamic leg swings, hip circles, light squats',
    exercises: [
      { name: 'Back Squats', sets: '4', reps: '6-8', muscles: ['Quadriceps', 'Glutes'], instructions: 'Descend until thighs parallel, drive through heels, keep chest up.' },
      { name: 'Romanian Deadlifts', sets: '4', reps: '8-10', muscles: ['Hamstrings', 'Glutes'], instructions: 'Hinge at hips, lower bar along legs, feel stretch in hamstrings.' },
      { name: 'Bulgarian Split Squats', sets: '3', reps: '10-12 each', muscles: ['Quadriceps', 'Glutes'], instructions: 'Rear foot elevated, descend on front leg, drive up explosively.' },
      { name: 'Walking Lunges', sets: '3', reps: '20 steps', muscles: ['Quadriceps', 'Glutes'], instructions: 'Step forward, lower back knee toward ground, alternate legs.' },
      { name: 'Calf Raises', sets: '4', reps: '15-20', muscles: ['Calves'], instructions: 'Rise onto toes, hold briefly, lower with control.' },
      { name: 'Leg Curls', sets: '3', reps: '12-15', muscles: ['Hamstrings'], instructions: 'Lying or seated, curl heels toward glutes, control the negative.' }
    ],
    cooldown: '10 minutes static stretching, focus on quads, hamstrings, and calves'
  },
  'upper2': {
    name: 'Upper Body Day 2 - Volume Focus',
    warmup: '10 minutes arm circles, band pull-aparts, light rowing',
    exercises: [
      { name: 'Incline Dumbbell Press', sets: '4', reps: '10-12', muscles: ['Upper Chest', 'Shoulders'], instructions: 'Press dumbbells on incline bench, focus on upper chest activation.' },
      { name: 'Cable Rows', sets: '4', reps: '10-12', muscles: ['Back', 'Biceps'], instructions: 'Pull handle to torso, squeeze shoulder blades, control the negative.' },
      { name: 'Lateral Raises', sets: '3', reps: '12-15', muscles: ['Shoulders'], instructions: 'Raise arms to sides until parallel with floor, control the movement.' },
      { name: 'Chin-Ups', sets: '3', reps: 'AMRAP', muscles: ['Back', 'Biceps'], instructions: 'Underhand grip, pull chest to bar, focus on bicep activation.' },
      { name: 'Dips', sets: '3', reps: '10-15', muscles: ['Chest', 'Triceps'], instructions: 'Lower body until shoulders below elbows, press up explosively.' },
      { name: 'Face Pulls', sets: '3', reps: '15-20', muscles: ['Rear Delts', 'Upper Back'], instructions: 'Pull rope to face level, focus on rear delt activation.' },
      { name: 'Hammer Curls', sets: '3', reps: '12-15', muscles: ['Biceps', 'Forearms'], instructions: 'Neutral grip, curl with control, focus on forearm activation.' }
    ],
    cooldown: '10 minutes static stretching, focus on shoulders and arms'
  }
};

const boxingDrills = [
  {
    name: 'Shadow Boxing',
    duration: '3-5 rounds × 3 minutes',
    description: 'Practice combinations and footwork without equipment. Focus on form, speed, and technique.',
    benefits: ['Hand-eye coordination', 'Cardio', 'Technique'],
    instructions: 'Throw punches in the air, visualize an opponent, focus on proper form and footwork.'
  },
  {
    name: 'Heavy Bag Work',
    duration: '4-6 rounds × 3 minutes',
    description: 'Power combinations on heavy bag. Focus on proper technique and power generation.',
    benefits: ['Power', 'Technique', 'Conditioning'],
    instructions: 'Practice jabs, crosses, hooks, and uppercuts. Focus on hip rotation and proper stance.'
  },
  {
    name: 'Speed Bag',
    duration: '3-4 rounds × 2 minutes',
    description: 'Rapid alternating punches on speed bag for hand-eye coordination.',
    benefits: ['Hand-eye coordination', 'Timing', 'Rhythm'],
    instructions: 'Maintain consistent rhythm, alternate hands, keep elbows up and hands relaxed.'
  },
  {
    name: 'Jump Rope',
    duration: '5-10 minutes',
    description: 'Various jump rope techniques for footwork and cardio conditioning.',
    benefits: ['Footwork', 'Cardio', 'Coordination'],
    instructions: 'Start with basic bounce, progress to alternate foot, double unders, and lateral movements.'
  }
];

const exerciseLibrary = [
  { name: 'Barbell Bench Press', muscles: ['Chest', 'Triceps', 'Shoulders'], category: 'Compound' },
  { name: 'Bent-Over Rows', muscles: ['Back', 'Biceps'], category: 'Compound' },
  { name: 'Back Squats', muscles: ['Quadriceps', 'Glutes'], category: 'Compound' },
  { name: 'Romanian Deadlifts', muscles: ['Hamstrings', 'Glutes'], category: 'Compound' },
  { name: 'Overhead Press', muscles: ['Shoulders', 'Triceps'], category: 'Compound' },
  { name: 'Pull-Ups', muscles: ['Back', 'Biceps'], category: 'Compound' },
  { name: 'Dips', muscles: ['Chest', 'Triceps'], category: 'Compound' },
  { name: 'Bulgarian Split Squats', muscles: ['Quadriceps', 'Glutes'], category: 'Unilateral' },
  { name: 'Lateral Raises', muscles: ['Shoulders'], category: 'Isolation' },
  { name: 'Bicep Curls', muscles: ['Biceps'], category: 'Isolation' },
  { name: 'Triceps Pushdowns', muscles: ['Triceps'], category: 'Isolation' },
  { name: 'Calf Raises', muscles: ['Calves'], category: 'Isolation' }
];

export const BakiProgram = ({ onBack }: BakiProgramProps) => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExercises = exerciseLibrary.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
          <div className="text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Baki Hanma Training
            </h1>
            <p className="text-lg text-gray-300 mt-2">Raw Power & Boxing Athletics</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Program Overview */}
        <Card className="bg-gradient-to-r from-red-900/20 to-red-800/10 border-red-600/50">
          <CardHeader>
            <CardTitle className="text-2xl text-red-400 flex items-center gap-2">
              <Dumbbell className="w-6 h-6" />
              Program Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              An intense 8-week program designed to build raw strength and boxing athleticism, 
              inspired by Baki Hanma's relentless training methodology. Build overall muscle development 
              through compound movements and boxing-specific conditioning.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Duration</h3>
                </div>
                <p className="text-gray-300">4-week split repeated twice (8 weeks total) + deload phase</p>
              </div>
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Timer className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Frequency</h3>
                </div>
                <p className="text-gray-300">6 days per week with strategic rest</p>
              </div>
              <div className="bg-red-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Focus</h3>
                </div>
                <p className="text-gray-300">Overall muscle development + boxing skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Week Selection */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-red-400">Week Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
                <Button
                  key={week}
                  variant={selectedWeek === week ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedWeek(week)}
                  className={selectedWeek === week ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  Week {week}
                </Button>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Currently viewing Week {selectedWeek} of 8. Weeks 1-4 repeat as weeks 5-8 with increased intensity.
            </p>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="workouts">Daily Workouts</TabsTrigger>
            <TabsTrigger value="exercises">Exercise Library</TabsTrigger>
            <TabsTrigger value="boxing">Boxing Drills</TabsTrigger>
            <TabsTrigger value="faq">FAQ & Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">6-Day Training Split</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklySchedule.map((day, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-red-900/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <span className="font-medium text-red-400 w-20">{day.day}</span>
                        <span className="text-gray-300 font-medium">{day.type}</span>
                      </div>
                      <Badge variant="outline" className="text-gray-400">
                        {day.focus}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workouts" className="space-y-6">
            <div className="space-y-6">
              {Object.entries(workoutPlans).map(([key, workout]) => (
                <Card key={key} className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-red-400">{workout.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-blue-900/20 rounded">
                      <h4 className="font-semibold text-blue-400 mb-1">Warm-up</h4>
                      <p className="text-gray-300 text-sm">{workout.warmup}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-red-400">Main Exercises</h4>
                      {workout.exercises.map((exercise, index) => (
                        <div key={index} className="p-3 bg-red-900/20 rounded">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-gray-200">{exercise.name}</h5>
                            <div className="text-right">
                              <span className="text-red-400 font-medium">{exercise.sets} sets × {exercise.reps} reps</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mb-2">
                            {exercise.muscles.map((muscle, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {muscle}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm">{exercise.instructions}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-green-900/20 rounded">
                      <h4 className="font-semibold text-green-400 mb-1">Cool-down</h4>
                      <p className="text-gray-300 text-sm">{workout.cooldown}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Exercise Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search exercises or muscle groups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {filteredExercises.map((exercise, index) => (
                    <div key={index} className="p-4 bg-gray-700/50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-200">{exercise.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {exercise.category}
                        </Badge>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {exercise.muscles.map((muscle, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {muscle}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2 text-red-400 hover:text-red-300">
                        <Play className="w-4 h-4 mr-1" />
                        View Tutorial
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="boxing" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Boxing Drills Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300">
                  Boxing drills are integrated into accessory days and active recovery to build 
                  explosive power, coordination, and cardiovascular endurance like Baki's fighting prowess.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {boxingDrills.map((drill, index) => (
                    <div key={index} className="p-4 bg-red-900/20 rounded-lg">
                      <h3 className="font-semibold text-red-400 mb-2">{drill.name}</h3>
                      <p className="text-sm text-gray-300 mb-2">{drill.description}</p>
                      <p className="text-sm font-medium text-red-300 mb-2">{drill.duration}</p>
                      <p className="text-sm text-gray-400 mb-3">{drill.instructions}</p>
                      <div className="flex gap-2 flex-wrap">
                        {drill.benefits.map((benefit, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Training Principles & FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-red-400 mb-2">Progressive Overload</h3>
                    <p className="text-gray-300 text-sm">
                      Gradually increase weight, reps, or sets each week. For strength days (6-8 reps), 
                      focus on adding weight. For volume days (10-15 reps), add reps before increasing weight.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-red-400 mb-2">Active Recovery Guidelines</h3>
                    <p className="text-gray-300 text-sm">
                      Light cardio (20-30 min walk/bike), dynamic stretching, foam rolling, 
                      and light boxing drills. Avoid intense training but keep the body moving.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-red-400 mb-2">Nutrition for Muscle Gain</h3>
                    <p className="text-gray-300 text-sm">
                      Maintain a caloric surplus of 300-500 calories. Aim for 1g protein per lb bodyweight, 
                      2-3g carbs per lb bodyweight, and 0.3-0.4g fat per lb bodyweight.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold text-red-400 mb-2">Rest and Recovery</h3>
                    <p className="text-gray-300 text-sm">
                      Aim for 7-9 hours of sleep. Take complete rest on Sundays. 
                      If experiencing excessive fatigue, consider an extra rest day.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

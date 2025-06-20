
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Play } from 'lucide-react';

export const ExerciseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const exercises = [
    {
      name: "Push-ups",
      muscles: ["Chest", "Triceps", "Shoulders"],
      category: "Chest",
      description: "Start in plank position, lower body until chest nearly touches ground, push back up. Keep core tight and body straight.",
      instructions: [
        "Start in a plank position with hands slightly wider than shoulder-width",
        "Lower your body until chest nearly touches the ground",
        "Keep your core tight and body in a straight line",
        "Push back up to starting position",
        "Repeat for desired reps"
      ]
    },
    {
      name: "Bench Press",
      muscles: ["Chest", "Triceps", "Shoulders"],
      category: "Chest",
      description: "Lie on bench, grip barbell with hands slightly wider than shoulders, lower to chest and press up.",
      instructions: [
        "Lie flat on bench with feet firmly on ground",
        "Grip barbell with hands slightly wider than shoulders",
        "Lower bar slowly to chest with control",
        "Press bar up in straight line over chest",
        "Lock out arms at top, repeat"
      ]
    },
    {
      name: "Pull-ups",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Biceps"],
      category: "Back",
      description: "Hang from bar with palms facing away, pull body up until chin clears the bar.",
      instructions: [
        "Hang from pull-up bar with overhand grip",
        "Start with arms fully extended",
        "Pull body up until chin clears the bar",
        "Lower yourself with control to starting position",
        "Repeat for desired reps"
      ]
    },
    {
      name: "Squats",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
      category: "Legs",
      description: "Stand with feet shoulder-width apart, lower hips back and down, keep chest up.",
      instructions: [
        "Stand with feet shoulder-width apart",
        "Lower hips back and down as if sitting in chair",
        "Keep chest up and knees tracking over toes",
        "Descend until thighs are parallel to ground",
        "Drive through heels to return to starting position"
      ]
    },
    {
      name: "Overhead Press",
      muscles: ["Shoulders", "Triceps", "Core"],
      category: "Shoulders",
      description: "Press weight overhead from shoulder level, keep core tight throughout movement.",
      instructions: [
        "Start with weight at shoulder level",
        "Keep core tight and back straight",
        "Press weight directly overhead",
        "Lock out arms at top",
        "Lower with control to starting position"
      ]
    },
    {
      name: "Dips",
      muscles: ["Triceps", "Chest", "Shoulders"],
      category: "Triceps",
      description: "Support body weight on parallel bars or chair edges, lower and raise body using arm strength.",
      instructions: [
        "Support body weight on parallel bars or sturdy chairs",
        "Start with arms extended, body upright",
        "Lower body by bending elbows",
        "Descend until shoulders are below elbows",
        "Push back up to starting position"
      ]
    },
    {
      name: "Plank",
      muscles: ["Core", "Shoulders", "Glutes"],
      category: "Core",
      description: "Hold body in straight line from head to heels, engage core throughout.",
      instructions: [
        "Start in push-up position",
        "Hold body in straight line from head to heels",
        "Engage core muscles throughout",
        "Keep hips level, don't let them sag or pike up",
        "Hold for desired time"
      ]
    },
    {
      name: "Lunges",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
      category: "Legs",
      description: "Step forward into lunge position, lower back knee toward ground, return to standing.",
      instructions: [
        "Stand with feet hip-width apart",
        "Step forward with one leg into lunge position",
        "Lower back knee toward ground",
        "Keep front knee over ankle",
        "Push through front heel to return to starting position"
      ]
    },
    {
      name: "Mountain Climbers",
      muscles: ["Core", "Shoulders", "Legs"],
      category: "Cardio",
      description: "Start in plank position, alternate bringing knees to chest in running motion.",
      instructions: [
        "Start in plank position",
        "Bring one knee toward chest",
        "Quickly switch legs, bringing other knee forward",
        "Continue alternating in running motion",
        "Keep core engaged and hips level"
      ]
    },
    {
      name: "Russian Twists",
      muscles: ["Core", "Obliques"],
      category: "Core",
      description: "Sit with knees bent, lean back slightly, rotate torso side to side.",
      instructions: [
        "Sit with knees bent, feet flat on ground",
        "Lean back slightly, keeping back straight",
        "Rotate torso to one side",
        "Return to center, then rotate to other side",
        "Continue alternating sides"
      ]
    }
  ];

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Chest': 'bg-red-600',
      'Back': 'bg-green-600',
      'Legs': 'bg-blue-600',
      'Shoulders': 'bg-yellow-600',
      'Triceps': 'bg-purple-600',
      'Core': 'bg-teal-600',
      'Cardio': 'bg-orange-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-400">Exercise Library</h2>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search exercises, muscles, or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((exercise, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-purple-400">{exercise.name}</CardTitle>
                  <Badge className={`mt-2 ${getCategoryColor(exercise.category)} text-white`}>
                    {exercise.category}
                  </Badge>
                </div>
                <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-300 mb-2">Muscles Worked:</h4>
                <div className="flex flex-wrap gap-1">
                  {exercise.muscles.map((muscle, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {muscle}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-300 mb-2">Description:</h4>
                <p className="text-sm text-gray-400">{exercise.description}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-300 mb-2">Instructions:</h4>
                <ol className="text-sm text-gray-400 space-y-1">
                  {exercise.instructions.map((step, idx) => (
                    <li key={idx}>{idx + 1}. {step}</li>
                  ))}
                </ol>
              </div>
              
              <button 
                className="w-full text-left text-sm text-purple-400 hover:text-purple-300 transition-colors"
                onClick={() => window.open(`https://www.youtube.com/results?search_query=${exercise.name}+exercise+tutorial`, '_blank')}
              >
                Watch Tutorial Video →
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No exercises found matching your search.</p>
        </div>
      )}
    </div>
  );
};

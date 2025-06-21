import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Play } from 'lucide-react';

export const ExerciseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const exercises = [
    {
      name: "Pull-ups",
      muscles: ["Latissimus Dorsi", "Rhomboids", "Biceps"],
      category: "Back",
      description: "Hang from a bar with palms facing away, pull your body up until chin clears the bar.",
      videoUrl: "https://example.com/pullups"
    },
    {
      name: "Push-ups",
      muscles: ["Chest", "Triceps", "Shoulders"],
      category: "Chest",
      description: "Start in plank position, lower body until chest nearly touches ground, push back up.",
      videoUrl: "https://example.com/pushups"
    },
    {
      name: "Squats",
      muscles: ["Quadriceps", "Glutes", "Hamstrings"],
      category: "Legs",
      description: "Stand with feet shoulder-width apart, lower hips back and down, keep chest up.",
      videoUrl: "https://example.com/squats"
    },
    {
      name: "Pike Push-ups",
      muscles: ["Shoulders", "Triceps", "Core"],
      category: "Shoulders",
      description: "Start in downward dog position, lower head toward ground, push back up.",
      videoUrl: "https://example.com/pikepushups"
    },
    {
      name: "Dips",
      muscles: ["Triceps", "Chest", "Shoulders"],
      category: "Triceps",
      description: "Support body weight on parallel bars or chair edges, lower and raise body.",
      videoUrl: "https://example.com/dips"
    },
    {
      name: "Romanian Deadlifts",
      muscles: ["Hamstrings", "Glutes", "Lower Back"],
      category: "Legs",
      description: "Hinge at hips with slight knee bend, lower weight while keeping back straight.",
      videoUrl: "https://example.com/rdl"
    },
    {
      name: "Overhead Press",
      muscles: ["Shoulders", "Triceps", "Core"],
      category: "Shoulders",
      description: "Press weight or body overhead from shoulder level, keep core tight.",
      videoUrl: "https://example.com/ohp"
    },
    {
      name: "Barbell Curls",
      muscles: ["Biceps", "Forearms"],
      category: "Biceps",
      description: "Hold barbell with underhand grip, curl up by flexing biceps, control descent.",
      videoUrl: "https://example.com/curls"
    },
    {
      name: "Hip Thrusts",
      muscles: ["Glutes", "Hamstrings", "Core"],
      category: "Glutes",
      description: "Lie with shoulders on bench, feet flat, thrust hips up squeezing glutes.",
      videoUrl: "https://example.com/hipthrust"
    },
    {
      name: "Plank",
      muscles: ["Core", "Shoulders", "Glutes"],
      category: "Core",
      description: "Hold body in straight line from head to heels, engage core throughout.",
      videoUrl: "https://example.com/plank"
    }
  ];

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Back': 'bg-green-600',
      'Chest': 'bg-red-600',
      'Legs': 'bg-blue-600',
      'Shoulders': 'bg-yellow-600',
      'Triceps': 'bg-purple-600',
      'Biceps': 'bg-pink-600',
      'Glutes': 'bg-orange-600',
      'Core': 'bg-teal-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="accent-ascetic text-2xl font-bold text-cyan-500">EXERCISE LIBRARY</h2>
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
          <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="accent-ascetic text-lg text-cyan-400">{exercise.name.toUpperCase()}</CardTitle>
                  <Badge className={`mt-2 ${getCategoryColor(exercise.category)} text-white`}>
                    {exercise.category.toUpperCase()}
                  </Badge>
                </div>
                <button className="p-2 rounded-full bg-cyan-600 hover:bg-cyan-700 transition-colors">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="accent-ascetic font-medium text-gray-300 mb-2">MUSCLES WORKED:</h4>
                <div className="flex flex-wrap gap-1">
                  {exercise.muscles.map((muscle, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {muscle}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="accent-ascetic font-medium text-gray-300 mb-2">INSTRUCTIONS:</h4>
                <p className="text-sm text-gray-400">{exercise.description}</p>
              </div>
              
              <button 
                className="w-full text-left text-sm accent-ascetic text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={() => window.open(exercise.videoUrl, '_blank')}
              >
                WATCH TUTORIAL VIDEO →
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

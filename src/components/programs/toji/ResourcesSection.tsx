
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingCart, Star, AlertTriangle } from 'lucide-react';

export const ResourcesSection = () => {
  const equipment = [
    {
      name: "Adjustable Pull-up Bar",
      price: "$29.99",
      rating: 4.5,
      description: "Door frame pull-up bar for home workouts",
      affiliateUrl: "https://amazon.com/example-pullup-bar",
      category: "Essential"
    },
    {
      name: "Resistance Band Set",
      price: "$24.99", 
      rating: 4.7,
      description: "5-piece resistance band set with handles and door anchor",
      affiliateUrl: "https://amazon.com/example-resistance-bands",
      category: "Essential"
    },
    {
      name: "Adjustable Dumbbells",
      price: "$199.99",
      rating: 4.6,
      description: "Space-saving adjustable dumbbells 5-50lbs each",
      affiliateUrl: "https://amazon.com/example-dumbbells",
      category: "Gym Equipment"
    },
    {
      name: "Foam Roller",
      price: "$19.99",
      rating: 4.4,
      description: "High-density foam roller for muscle recovery",
      affiliateUrl: "https://amazon.com/example-foam-roller",
      category: "Recovery"
    },
    {
      name: "Yoga Mat",
      price: "$34.99",
      rating: 4.8,
      description: "Non-slip exercise mat for floor exercises",
      affiliateUrl: "https://amazon.com/example-yoga-mat",
      category: "Essential"
    },
    {
      name: "Protein Powder",
      price: "$49.99",
      rating: 4.5,
      description: "Whey protein isolate, 5lbs container",
      affiliateUrl: "https://amazon.com/example-protein",
      category: "Supplements"
    }
  ];

  const supplements = [
    {
      name: "Creatine Monohydrate",
      price: "$19.99",
      rating: 4.8,
      description: "Pure creatine monohydrate, 300g container",
      dosage: "3-5g daily",
      affiliateUrl: "https://amazon.com/example-creatine"
    },
    {
      name: "Multivitamin",
      price: "$24.99",
      rating: 4.6,
      description: "Complete daily multivitamin for active individuals",
      dosage: "1 tablet daily",
      affiliateUrl: "https://amazon.com/example-multivitamin"
    },
    {
      name: "Fish Oil",
      price: "$22.99",
      rating: 4.5,
      description: "Omega-3 fish oil, 180 EPA/120 DHA per serving",
      dosage: "1-2 capsules daily",
      affiliateUrl: "https://amazon.com/example-fish-oil"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Essential': 'bg-blue-600',
      'Gym Equipment': 'bg-green-600',
      'Recovery': 'bg-purple-600',
      'Supplements': 'bg-orange-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-400">Resources & Equipment</h2>
        <div className="flex items-center gap-2 text-sm text-yellow-400">
          <AlertTriangle className="w-4 h-4" />
          <span>Affiliate links help support the program</span>
        </div>
      </div>

      {/* Equipment Section */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-blue-400">Recommended Equipment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-300">{item.name}</h4>
                  <Badge className={`${getCategoryColor(item.category)} text-white text-xs`}>
                    {item.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-300">{item.rating}</span>
                  </div>
                  <span className="text-lg font-semibold text-green-400">{item.price}</span>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(item.affiliateUrl, '_blank')}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View on Amazon
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Supplements Section */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-orange-400">Recommended Supplements</CardTitle>
          <p className="text-sm text-gray-400">
            Supplements are not required but can support your training goals. Prioritize whole foods first.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {supplements.map((supplement, index) => (
              <div key={index} className="p-4 bg-orange-900/20 rounded-lg border border-orange-600/30">
                <h4 className="font-medium text-orange-400 mb-2">{supplement.name}</h4>
                <p className="text-sm text-gray-400 mb-2">{supplement.description}</p>
                
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Dosage:</span>
                    <span className="text-sm text-orange-300">{supplement.dosage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-300">{supplement.rating}</span>
                    </div>
                    <span className="font-semibold text-green-400">{supplement.price}</span>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                  onClick={() => window.open(supplement.affiliateUrl, '_blank')}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Budget Options */}
      <Card className="bg-green-900/20 border-green-600/50">
        <CardHeader>
          <CardTitle className="text-green-400">Budget-Friendly Alternatives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-400 mb-3">Minimal Equipment Setup (~$50)</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Resistance bands ($20)</li>
                <li>• Door anchor pull-up bar ($25)</li>
                <li>• Yoga mat for floor work ($15)</li>
                <li>• Total: ~$60</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-400 mb-3">DIY Alternatives</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Backpack with books for weighted exercises</li>
                <li>• Towels for sliding exercises</li>
                <li>• Stairs for step-ups and cardio</li>
                <li>• Water jugs as light weights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="bg-blue-900/20 border-blue-600/50">
        <CardHeader>
          <CardTitle className="text-blue-400">Contact & Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-400 mb-3">Get in Touch</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Creator: <strong>Discipline Mentality</strong></p>
                <p>Discord Community: <a href="#" className="text-blue-400 hover:underline">@DisciplineMentality</a></p>
                <p>Instagram: <a href="#" className="text-blue-400 hover:underline">@discipline_mentality</a></p>
                <p>YouTube: <a href="#" className="text-blue-400 hover:underline">Discipline Mentality</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-blue-400 mb-3">Share Your Progress</h4>
              <p className="text-sm text-gray-300 mb-3">
                Tag us in your progress photos and transformation stories! 
                We love seeing the community's results.
              </p>
              <div className="text-sm text-gray-400">
                Use hashtag: <span className="text-blue-400">#TojiTransformation</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

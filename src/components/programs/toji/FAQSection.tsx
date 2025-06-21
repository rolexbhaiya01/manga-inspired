import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Dumbbell, TrendingUp, Utensils, Heart } from 'lucide-react';

export const FAQSection = () => {
  const faqs = [
    {
      category: "Equipment",
      icon: <Dumbbell className="w-5 h-5" />,
      questions: [
        {
          question: "What equipment do I need for this program?",
          answer: "For Split A (minimalist): Pull-up bar, resistance bands, and space for bodyweight exercises. For Split B: Access to a gym with barbells, dumbbells, pull-up bar, and basic equipment. A gym membership is highly recommended for best results."
        },
        {
          question: "Can I do this program at home?",
          answer: "Split A can be done mostly at home with minimal equipment. Split B requires gym access for optimal results, though many exercises can be substituted with bodyweight or resistance band variations."
        }
      ]
    },
    {
      category: "Muscle Gain",
      icon: <TrendingUp className="w-5 h-5" />,
      questions: [
        {
          question: "How much muscle can I expect to gain?",
          answer: "Muscle gain depends on genetics, training experience, nutrition, and consistency. Beginners may see 1-2 lbs of muscle per month, while experienced trainees may see 0.5-1 lb per month. Focus on progressive overload and consistency."
        },
        {
          question: "How long before I see results?",
          answer: "Strength gains: 2-4 weeks. Visible muscle changes: 6-8 weeks. Significant physique changes: 3-6 months. Progress photos and measurements are better indicators than the scale alone."
        }
      ]
    },
    {
      category: "Diet & Nutrition",
      icon: <Utensils className="w-5 h-5" />,
      questions: [
        {
          question: "What should I eat for muscle building?",
          answer: "Maintain a caloric surplus of 200-500 calories above maintenance. Focus on 0.8-1g protein per lb bodyweight, complex carbohydrates around workouts, and healthy fats. Prioritize whole foods and consistent meal timing."
        },
        {
          question: "Do I need supplements?",
          answer: "Supplements are not required but can help. Priorities: protein powder (if needed for protein goals), creatine monohydrate (3-5g daily), and a good multivitamin. Focus on diet first, supplements second."
        }
      ]
    },
    {
      category: "Recovery",
      icon: <Heart className="w-5 h-5" />,
      questions: [
        {
          question: "Should I train when sore?",
          answer: "Yes, you can train with mild soreness (DOMS). If soreness prevents proper form or full range of motion, consider light activity or rest. Severe pain or joint discomfort requires rest and possible medical attention."
        },
        {
          question: "How important is sleep?",
          answer: "Critical. Aim for 7-9 hours of quality sleep. Growth hormone peaks during deep sleep, and inadequate rest impairs recovery, performance, and muscle growth. Poor sleep can negate training benefits."
        }
      ]
    },
    {
      category: "Program Implementation",
      icon: <MessageCircle className="w-5 h-5" />,
      questions: [
        {
          question: "Which split should I choose?",
          answer: "Split A: If you're experienced, have limited time, and can handle high intensity. Split B: If you're newer to training, have more time, or prefer higher volume with moderate intensity."
        },
        {
          question: "When should I take a deload week?",
          answer: "Every 4-6 weeks or when you feel excessive fatigue, declining performance, or motivation. Reduce volume by 20-30% and intensity by 1-2 RPE points. Use this time for mobility and technique refinement."
        },
        {
          question: "Can I repeat the program?",
          answer: "Yes! After completing an 8-week cycle plus deload, you can repeat with increased weights/reps or try the other split. Progressive overload is key - always aim to do slightly more than last time."
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Equipment': 'bg-blue-600',
      'Muscle Gain': 'bg-green-600',
      'Diet & Nutrition': 'bg-orange-600',
      'Recovery': 'bg-purple-600',
      'Program Implementation': 'bg-red-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <div className="space-y-6">
      <h2 className="accent-ascetic text-2xl font-bold text-cyan-400">FREQUENTLY ASKED QUESTIONS</h2>
      
      <div className="space-y-6">
        {faqs.map((section, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="accent-ascetic text-cyan-400 flex items-center gap-2">
                {section.icon}
                {section.category.toUpperCase()}
                <Badge className={`ml-auto ${getCategoryColor(section.category)} text-white`}>
                  {section.questions.length} Q&A
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left text-gray-300 hover:text-cyan-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Tips */}
      <Card className="bg-gradient-to-r from-cyan-900/20 to-gray-900/20 border-cyan-600/50">
        <CardHeader>
          <CardTitle className="accent-ascetic text-cyan-400">💡 QUICK SUCCESS TIPS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="accent-ascetic font-medium text-cyan-400">TRAINING</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Consistency beats perfection</li>
                <li>• Form over ego lifting</li>
                <li>• Progressive overload every session</li>
                <li>• Track your workouts</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="accent-ascetic font-medium text-cyan-400">RECOVERY</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Prioritize sleep quality</li>
                <li>• Stay hydrated</li>
                <li>• Manage stress levels</li>
                <li>• Listen to your body</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

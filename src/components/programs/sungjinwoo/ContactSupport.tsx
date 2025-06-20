
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageCircle, Instagram, Twitter, Mail, Users } from 'lucide-react';

export const ContactSupport = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-purple-400">Contact & Support</h2>
        <p className="text-gray-400">Connect with the creators and community</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Creator Information */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-purple-400">Program Creators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-purple-400 mb-2">@aurachad</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Fitness enthusiast and program developer focused on aesthetic physique development.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-400">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-400">
                    <Twitter className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-purple-400 mb-2">@raunak_gupta_23_</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Co-creator specializing in flexible training programs and nutrition planning.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-400">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-400">
                    <Twitter className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h4 className="font-medium text-white mb-2">Share Your Progress</h4>
              <p className="text-sm text-gray-400 mb-3">
                Tag the creators in your transformation posts and use #SungJinWooWorkout to be featured!
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Share Progress
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Community & Support */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-purple-400">Community & Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-600/50">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-blue-400">Community Discord</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Join our active community for support, motivation, and workout buddies.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Join Discord Server
                </Button>
              </div>

              <div className="p-4 bg-green-900/20 rounded-lg border border-green-600/50">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-green-400">Email Support</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Have questions about the program? Get direct support from the creators.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Email Support
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-white">Send Feedback</h4>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-gray-700 border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-gray-700 border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your feedback or questions..."
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Program Attribution */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border-purple-600/50">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">Program Attribution</h3>
          <p className="text-gray-300 mb-4">
            This workout program is based on the original "Sung Jin Woo Workout" created by 
            @aurachad and @raunak_gupta_23_. This platform serves as an interactive companion 
            to enhance your fitness journey.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-purple-600 text-purple-400">
              View Original E-book
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Download Program PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

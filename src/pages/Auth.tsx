
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Dumbbell, User, Mail, Lock, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast({
            title: "Sign up failed",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Check your email",
            description: "We've sent you a confirmation link to complete your registration.",
          });
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Sign in failed",
            description: error.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-md w-full space-y-8">
        {/* Header with Animated Dumbbell */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-cyan-500 rounded-2xl flex items-center justify-center animate-pulse">
            <Dumbbell className="w-8 h-8 text-black animate-bounce" 
              style={{
                animation: 'bounce 2s infinite, spin 4s linear infinite'
              }}
            />
          </div>
          <h1 className="title-ascetic text-3xl font-light tracking-widest text-foreground">
            ANIME FITNESS
          </h1>
          <p className="accent-ascetic text-lg text-muted-foreground">
            {isSignUp ? 'CREATE YOUR ACCOUNT' : 'WELCOME BACK'}
          </p>
        </div>

        {/* Auth Form */}
        <Card className="fitness-card">
          <CardHeader>
            <CardTitle className="text-center text-foreground">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required={isSignUp}
                    className="bg-background border-muted"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-background border-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-background border-muted"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-primary accent-ascetic"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 animate-spin" />
                    Loading...
                  </div>
                ) : (
                  isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Information */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Secure authentication powered by Supabase</span>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Auth;

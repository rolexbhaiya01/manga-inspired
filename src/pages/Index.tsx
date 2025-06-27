
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingSection } from '@/components/LandingSection';
import { ProgramDashboard } from '@/components/ProgramDashboard';
import { BakiProgram } from '@/components/programs/BakiProgram';
import { TojiProgram } from '@/components/programs/TojiProgram';
import { SungJinWooProgram } from '@/components/programs/SungJinWooProgram';
import { UserMenu } from '@/components/UserMenu';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'baki' | 'toji' | 'sungjinwoo'>('landing');
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // If user is authenticated, bypass landing and go to dashboard
  useEffect(() => {
    if (user && !loading) {
      setHasAcceptedTerms(true);
      setCurrentView('dashboard');
    }
  }, [user, loading]);

  const handleAcceptTerms = () => {
    if (user) {
      setHasAcceptedTerms(true);
      setCurrentView('dashboard');
    } else {
      navigate('/auth');
    }
  };

  const handleProgramSelect = (program: 'baki' | 'toji' | 'sungjinwoo') => {
    setCurrentView(program);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="absolute top-4 right-4 z-50">
        {user ? (
          <UserMenu />
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/auth')}
            className="flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </Button>
        )}
      </div>

      {currentView === 'landing' && (
        <LandingSection onAcceptTerms={handleAcceptTerms} />
      )}
      
      {currentView === 'dashboard' && (
        <ProgramDashboard 
          onProgramSelect={handleProgramSelect}
          onBackToLanding={handleBackToLanding}
        />
      )}
      
      {currentView === 'baki' && (
        <BakiProgram onBack={handleBackToDashboard} />
      )}
      
      {currentView === 'toji' && (
        <TojiProgram onBack={handleBackToDashboard} />
      )}
      
      {currentView === 'sungjinwoo' && (
        <SungJinWooProgram onBack={handleBackToDashboard} />
      )}
    </div>
  );
};

export default Index;

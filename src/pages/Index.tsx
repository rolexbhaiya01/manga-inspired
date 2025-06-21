
import { useState } from 'react';
import { LandingSection } from '@/components/LandingSection';
import { ProgramDashboard } from '@/components/ProgramDashboard';
import { BakiProgram } from '@/components/programs/BakiProgram';
import { TojiProgram } from '@/components/programs/TojiProgram';
import { SungJinWooProgram } from '@/components/programs/SungJinWooProgram';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'baki' | 'toji' | 'sungjinwoo'>('landing');
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  const handleAcceptTerms = () => {
    setHasAcceptedTerms(true);
    setCurrentView('dashboard');
  };

  const handleProgramSelect = (program: 'baki' | 'toji' | 'sungjinwoo') => {
    setCurrentView(program);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {currentView === 'landing' && (
        <LandingSection onAcceptTerms={handleAcceptTerms} />
      )}
      
      {currentView === 'dashboard' && (
        <ProgramDashboard 
          onProgramSelect={handleProgramSelect}
          onBackToLanding={() => setCurrentView('landing')}
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

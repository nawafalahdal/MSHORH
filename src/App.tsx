import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './components/HomePage';
import { AnalysisScreen } from './components/AnalysisScreen';
import { DetailedReportScreen } from './components/DetailedReportScreen';
import './styles/globals.css';

type Screen = 'splash' | 'home' | 'analysis' | 'report';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [hasFile, setHasFile] = useState(false);

  const handleStart = () => {
    setCurrentScreen('home');
  };

  const handleFileUpload = () => {
    setHasFile(true);
  };

  const handleAnalyze = () => {
    setCurrentScreen('analysis');
  };

  const handleViewReport = () => {
    setCurrentScreen('report');
  };

  const handleBackToAnalysis = () => {
    setCurrentScreen('analysis');
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'splash' && (
        <SplashScreen onStart={handleStart} />
      )}
      
      {currentScreen === 'home' && (
        <HomePage 
          onAnalyze={handleAnalyze}
          hasFile={hasFile}
          onFileUpload={handleFileUpload}
        />
      )}
      
      {currentScreen === 'analysis' && (
        <AnalysisScreen onViewReport={handleViewReport} />
      )}
      
      {currentScreen === 'report' && (
        <DetailedReportScreen onBack={handleBackToAnalysis} />
      )}
    </div>
  );
}

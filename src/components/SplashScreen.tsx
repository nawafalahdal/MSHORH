import { Button } from "./ui/button";

interface SplashScreenProps {
  onStart: () => void;
}

export function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6" dir="rtl">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-6xl mb-4" style={{ color: '#005F70' }}>
            مَشُورَة
          </h1>
          <p className="text-xl" style={{ color: '#005F70' }}>
            ذكاء يفهم بحثك... لا يكتبه.
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-md mb-12">
        <Button 
          onClick={onStart}
          className="w-full h-14 rounded-2xl text-white text-lg"
          style={{ backgroundColor: '#6ABB43' }}
        >
          ابدأ الآن
        </Button>
      </div>
    </div>
  );
}

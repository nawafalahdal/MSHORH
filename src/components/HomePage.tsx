import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface HomePageProps {
  onAnalyze: () => void;
  hasFile: boolean;
  onFileUpload: () => void;
}

export function HomePage({ onAnalyze, hasFile, onFileUpload }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white px-6 py-8" dir="rtl">
      {/* Top Bar */}
      <div className="flex items-center justify-end gap-3 mb-12">
        <span className="text-lg">مرحباً نواف 👋</span>
        <Avatar className="w-12 h-12">
          <AvatarFallback style={{ backgroundColor: '#6ABB43', color: 'white' }}>
            ن
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl mb-12 text-center" style={{ color: '#005F70' }}>
          ارفع بحثك لتحليل جودته
        </h2>

        {!hasFile ? (
          <Button
            onClick={onFileUpload}
            className="w-full max-w-md h-32 rounded-2xl border-2 border-dashed flex flex-col gap-3"
            variant="outline"
            style={{ 
              borderColor: '#6ABB43',
              color: '#005F70'
            }}
          >
            <Upload className="w-12 h-12" />
            <span className="text-xl">📤 رفع ملف البحث</span>
          </Button>
        ) : (
          <Button
            onClick={onAnalyze}
            className="w-full max-w-md h-16 rounded-2xl text-white text-xl"
            style={{ backgroundColor: '#6ABB43' }}
          >
            تحليل الآن
          </Button>
        )}

        <p className="mt-8 text-center text-gray-600 max-w-lg">
          يتم تحليل البحث بسرية تامة وإظهار نقاط القوة والضعف بالألوان.
        </p>
      </div>
    </div>
  );
}

import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface AnalysisScreenProps {
  onViewReport: () => void;
}

export function AnalysisScreen({ onViewReport }: AnalysisScreenProps) {
  const sampleText = [
    { text: "المقدمة: تعتبر التكنولوجيا الحديثة عاملاً أساسياً في تطوير المجتمعات المعاصرة.", color: "red" },
    { text: " وقد أصبحت جزءاً لا يتجزأ من حياتنا اليومية، حيث تساهم في تحسين جودة الحياة وتسهيل العديد من المهام.", color: "orange" },
    { text: " تشير الدراسات الحديثة إلى أن استخدام التكنولوجيا في التعليم قد أدى إلى تحسين ملحوظ في مستويات التحصيل الأكاديمي للطلاب (Smith, 2023; Johnson, 2024).", color: "green" },
    { text: "\n\nالمنهجية: تم إجراء هذه الدراسة على عينة من الطلاب في المرحلة الجامعية.", color: "orange" },
    { text: " استخدمت الدراسة المنهج الوصفي التحليلي، حيث تم جمع البيانات من خلال استبيانات موزعة على المشاركين.", color: "green" },
    { text: " شملت العينة 50 طالباً وطالبة من مختلف التخصصات.", color: "red" },
    { text: " تم تحليل البيانات باستخدام برنامج SPSS الإحصائي.", color: "green" },
    { text: "\n\nالنتائج: أظهرت النتائج وجود علاقة إيجابية قوية بين استخدام التكنولوجيا والتحصيل الأكاديمي (r=0.82, p<0.01).", color: "green" },
    { text: " كما أشارت النتائج إلى أن 85% من المشاركين أكدوا على أهمية التكنولوجيا في عملية التعلم.", color: "green" },
    { text: " ومع ذلك، أظهرت بعض النتائج وجود تحديات تتعلق بالوصول إلى التكنولوجيا.", color: "orange" },
    { text: "\n\nالخاتمة: توصي الدراسة بضرورة دمج التكنولوجيا بشكل أكبر في المناهج الدراسية.", color: "green" },
    { text: " كما تقترح إجراء المزيد من الدراسات في هذا المجال.", color: "orange" }
  ];

  const getTextColor = (color: string) => {
    switch (color) {
      case "green":
        return "#6ABB43";
      case "orange":
        return "#FF8C00";
      case "red":
        return "#DC2626";
      default:
        return "#000000";
    }
  };

  const getBackgroundColor = (color: string) => {
    switch (color) {
      case "green":
        return "rgba(106, 187, 67, 0.1)";
      case "orange":
        return "rgba(255, 140, 0, 0.1)";
      case "red":
        return "rgba(220, 38, 38, 0.1)";
      default:
        return "transparent";
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Text Preview Section */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-lg">
              <h3 className="mb-6" style={{ color: '#005F70' }}>
                معاينة البحث
              </h3>
              <div className="space-y-2 leading-relaxed">
                {sampleText.map((segment, index) => (
                  <span
                    key={index}
                    style={{
                      color: getTextColor(segment.color),
                      backgroundColor: getBackgroundColor(segment.color),
                      padding: '2px 4px',
                      borderRadius: '4px',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {segment.text}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg sticky top-8">
              <h3 className="mb-6" style={{ color: '#005F70' }}>
                ملخص التحليل
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔴</span>
                    <span style={{ color: '#DC2626' }}>نقاط تحتاج تحسين</span>
                  </div>
                  <span className="text-2xl" style={{ color: '#DC2626' }}>3</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 140, 0, 0.1)' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🟠</span>
                    <span style={{ color: '#FF8C00' }}>نقاط متوسطة</span>
                  </div>
                  <span className="text-2xl" style={{ color: '#FF8C00' }}>5</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: 'rgba(106, 187, 67, 0.1)' }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🟢</span>
                    <span style={{ color: '#6ABB43' }}>نقاط قوية</span>
                  </div>
                  <span className="text-2xl" style={{ color: '#6ABB43' }}>8</span>
                </div>
              </div>

              <Button
                onClick={onViewReport}
                className="w-full mt-8 h-12 rounded-xl text-white"
                style={{ backgroundColor: '#005F70' }}
              >
                عرض التقرير التفصيلي
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

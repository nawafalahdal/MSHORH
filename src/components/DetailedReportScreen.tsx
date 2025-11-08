import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface DetailedReportScreenProps {
  onBack: () => void;
}

export function DetailedReportScreen({ onBack }: DetailedReportScreenProps) {
  const reportData = [
    {
      section: "المقدمة",
      color: "red",
      emoji: "🔴",
      note: "ينقصها توثيق حديث",
      source: "Google Scholar 2024"
    },
    {
      section: "الإطار النظري",
      color: "orange",
      emoji: "🟠",
      note: "يحتاج المزيد من المراجع",
      source: "JSTOR Database"
    },
    {
      section: "المنهجية",
      color: "orange",
      emoji: "🟠",
      note: "العينة محدودة",
      source: "IEEE Research"
    },
    {
      section: "أدوات الدراسة",
      color: "green",
      emoji: "🟢",
      note: "الأدوات موثوقة ومعتمدة",
      source: "—"
    },
    {
      section: "جمع البيانات",
      color: "green",
      emoji: "🟢",
      note: "منهجية واضحة ومنظمة",
      source: "—"
    },
    {
      section: "التحليل الإحصائي",
      color: "green",
      emoji: "🟢",
      note: "استخدام صحيح للأساليب الإحصائية",
      source: "—"
    },
    {
      section: "النتائج",
      color: "green",
      emoji: "🟢",
      note: "التحليل دقيق وموثق",
      source: "—"
    },
    {
      section: "المناقشة",
      color: "orange",
      emoji: "🟠",
      note: "تحتاج ربط أقوى بالأدبيات",
      source: "ResearchGate"
    },
    {
      section: "التوصيات",
      color: "orange",
      emoji: "🟠",
      note: "التوصيات عامة نوعاً ما",
      source: "—"
    },
    {
      section: "قائمة المراجع",
      color: "red",
      emoji: "🔴",
      note: "بعض المراجع قديمة",
      source: "Google Scholar 2024"
    },
    {
      section: "التنسيق العام",
      color: "green",
      emoji: "🟢",
      note: "التنسيق احترافي ومنظم",
      source: "—"
    },
    {
      section: "اللغة والأسلوب",
      color: "green",
      emoji: "🟢",
      note: "لغة علمية سليمة",
      source: "—"
    },
    {
      section: "الجداول والأشكال",
      color: "green",
      emoji: "🟢",
      note: "واضحة ومفيدة",
      source: "—"
    },
    {
      section: "الاستنتاجات",
      color: "orange",
      emoji: "🟠",
      note: "تحتاج تفصيل أكثر",
      source: "—"
    },
    {
      section: "الأصالة والإضافة العلمية",
      color: "red",
      emoji: "🔴",
      note: "تحتاج عرض إسهام أوضح",
      source: "Scopus Database"
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 gap-2"
            style={{ color: '#005F70' }}
          >
            <ArrowRight className="w-5 h-5" />
            رجوع للتحليل
          </Button>
          <h2 className="text-3xl" style={{ color: '#005F70' }}>
            نتائج تحليل البحث
          </h2>
        </div>

        {/* Table Card */}
        <Card className="shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow style={{ backgroundColor: '#EAEAEA' }}>
                  <TableHead className="text-right" style={{ color: '#005F70' }}>القسم</TableHead>
                  <TableHead className="text-right" style={{ color: '#005F70' }}>التقييم</TableHead>
                  <TableHead className="text-right" style={{ color: '#005F70' }}>الملاحظة</TableHead>
                  <TableHead className="text-right" style={{ color: '#005F70' }}>مصدر مقترح</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.map((row, index) => (
                  <TableRow 
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell>{row.section}</TableCell>
                    <TableCell>
                      <span className="text-xl">{row.emoji}</span>
                    </TableCell>
                    <TableCell>{row.note}</TableCell>
                    <TableCell className="text-blue-600">
                      {row.source !== "—" ? (
                        <a href="#" className="hover:underline">
                          {row.source}
                        </a>
                      ) : (
                        row.source
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 text-center" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
            <div className="text-4xl mb-2">🔴</div>
            <div className="text-3xl mb-2" style={{ color: '#DC2626' }}>3</div>
            <div style={{ color: '#DC2626' }}>نقاط تحتاج تحسين</div>
          </Card>
          
          <Card className="p-6 text-center" style={{ backgroundColor: 'rgba(255, 140, 0, 0.1)' }}>
            <div className="text-4xl mb-2">🟠</div>
            <div className="text-3xl mb-2" style={{ color: '#FF8C00' }}>5</div>
            <div style={{ color: '#FF8C00' }}>نقاط متوسطة</div>
          </Card>
          
          <Card className="p-6 text-center" style={{ backgroundColor: 'rgba(106, 187, 67, 0.1)' }}>
            <div className="text-4xl mb-2">🟢</div>
            <div className="text-3xl mb-2" style={{ color: '#6ABB43' }}>8</div>
            <div style={{ color: '#6ABB43' }}>نقاط قوية</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

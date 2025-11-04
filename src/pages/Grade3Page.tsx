import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Book, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Grade3Page = () => {
  const textbooks = [
    { id: "MATH3", title: "중학교 수학 3", subject: "수학" },
    { id: "ENG3", title: "중학교 영어 3", subject: "영어" },
    { id: "SCI3", title: "중학교 과학 3", subject: "과학" },
    { id: "HIS3", title: "중학교 역사 3", subject: "역사" },
    { id: "TECH3", title: "중학교 기술·가정 3", subject: "기술·가정" },
    { id: "SOC3", title: "중학교 사회 3", subject: "사회" },
  ];

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" size="icon" className="mr-4">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">중학교 3학년 교과서</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {textbooks.map((book) => (
          <Link to={`/viewer?book=${book.id}`} key={book.id}>
            <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center">
                <Book className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-4 text-left">
                <p className="text-sm font-semibold text-purple-600">{book.subject}</p>
                <h3 className="font-bold text-lg">{book.title}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grade3Page;

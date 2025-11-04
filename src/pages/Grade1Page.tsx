import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Book, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Grade1Page = () => {
  const textbooks = [
    { id: "MATH1", title: "중학교 수학 1", subject: "수학" },
    { id: "ENG1", title: "중학교 영어 1", subject: "영어" },
    { id: "SCI1", title: "중학교 과학 1", subject: "과학" },
    { id: "HIS1", title: "중학교 역사 1", subject: "역사" },
    { id: "TECH1", title: "중학교 기술·가정 1", subject: "기술·가정" },
    { id: "SOC1", title: "중학교 사회 1", subject: "사회" },
  ];

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" size="icon" className="mr-4">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">중학교 1학년 교과서</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {textbooks.map((book) => (
          <Link to={`/viewer?book=${book.id}`} key={book.id}>
            <Card className="overflow-hidden group hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Book className="h-20 w-20 text-white/80" />
              </div>
              <div className="p-4 text-left">
                <p className="text-sm font-semibold text-primary">{book.subject}</p>
                <h3 className="font-bold text-lg">{book.title}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grade1Page;

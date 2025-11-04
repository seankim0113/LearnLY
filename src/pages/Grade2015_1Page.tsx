import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Book, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Grade2015_1Page = () => {
  const textbooks = [
    { id: "2015_MATH1", subject: "수학", title: "중학교 수학 1", publisher: "미래엔", author: "황선욱", url: null },
    { id: "2015_ENG1", subject: "영어", title: "중학교 영어 1", publisher: "동아출판", author: "이병민", url: null },
    { id: "2015_SCI1", subject: "과학", title: "중학교 과학 1", publisher: "비상교육", author: "강성주", url: null },
    { id: "2015_HIS1", subject: "역사", title: "중학교 역사 1", publisher: "미래엔", author: "김덕수", url: null },
    { id: "2015_TECH1", subject: "기술·가정", title: "중학교 기술·가정 1", publisher: "천재교육", author: "최유현", url: null },
    { id: "2015_SOC1", subject: "사회", title: "중학교 사회 1", publisher: "미래엔", author: "최성길", url: null },
    { id: "ALL_SBUDO", subject: "사회", title: "사회과 부도", publisher: "천재교과서", author: "황명삼", url: null },
    { id: "ALL_PE", subject: "체육", title: "체육", publisher: "미래엔", author: "정영린", url: null },
  ];

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button asChild variant="outline" size="icon" className="mr-4">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">2015개정 교육과정 중학교 1학년</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {textbooks.map((book) => (
          <Card key={book.id} className="overflow-hidden group flex flex-col">
            <div className="h-40 bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center">
              <Book className="h-20 w-20 text-white/80" />
            </div>
            <div className="p-4 text-left flex-grow flex flex-col">
              <p className="text-sm font-semibold text-orange-600">{book.subject}</p>
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{book.publisher} ({book.author})</p>
              <div className="mt-auto pt-4">
                <Button asChild disabled={!book.url} className="w-full">
                  <a href={book.url || '#'} target="_blank" rel="noopener noreferrer">
                    바로가기
                    {book.url && <ExternalLink className="ml-2 h-4 w-4" />}
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Grade2015_1Page;

import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Book, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Grade2015_3Page = () => {
  const textbooks = [
    { id: "2015_KOR3_1", subject: "국어", title: "국어 3-1", publisher: "비상교육", author: "김진수", url: null },
    { id: "2015_KOR3_2", subject: "국어", title: "국어 3-2", publisher: "비상교육", author: "김진수", url: null },
    { id: "2015_SOC2", subject: "사회", title: "사회 2", publisher: "미래엔", author: "김진수", url: null },
    { id: "2015_HIS1", subject: "역사", title: "역사 1", publisher: "비상교육", author: "이병인", url: null },
    { id: "2015_MATH3", subject: "수학", title: "수학 3", publisher: "좋은책신사고", author: "김학경", url: null },
    { id: "2015_SCI3", subject: "과학", title: "과학 3", publisher: "비상교육", author: "임태훈", url: null },
    { id: "2015_TECH3", subject: "기술·가정", title: "기술·가정 2", publisher: "천재교과서", author: "이춘식", url: null },
    { id: "2015_ENG3", subject: "영어", title: "영어 3", publisher: "비상교육", author: "김진완", url: null },
    { id: "2015_MUS2", subject: "음악", title: "음악 2", publisher: "천재교과서", author: "최은식", url: null },
    { id: "2015_ART2", subject: "미술", title: "미술 2", publisher: "미래엔", author: "연혜경", url: null },
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
        <h1 className="text-3xl font-bold">2015개정 교육과정 중학교 3학년</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {textbooks.map((book) => (
          <Card key={book.id} className="overflow-hidden group flex flex-col">
            <div className="h-40 bg-gradient-to-br from-rose-500 to-rose-400 flex items-center justify-center">
              <Book className="h-20 w-20 text-white/80" />
            </div>
            <div className="p-4 text-left flex-grow flex flex-col">
              <p className="text-sm font-semibold text-rose-600">{book.subject}</p>
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

export default Grade2015_3Page;

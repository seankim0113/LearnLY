import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Book, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Grade2022_1Page = () => {
  const textbooks = [
    { id: "2022_KOR1", subject: "국어", title: "국어 1-1", publisher: "지학사", author: "서학", url: "https://s3.ap-northeast-2.amazonaws.com/tsol.jihak.co.kr/tsol/22_m/kor1-1/pr.html" },
    { id: "2022_SOC1", subject: "사회", title: "사회 1", publisher: "천재교과서", author: "허수미", url: "https://view.chunjae.co.kr/streamdocs/view/sd;streamdocsId=34VsJNleN4L93xGGV2QBrbSl8HMpyWBVHJ_LirY2kM8;isExternal=eQ;printUse=;enableDapSide=;pageView=" },
    { id: "2022_ETH1", subject: "도덕", title: "도덕 1", publisher: "교학사", author: "박병춘", url: null },
    { id: "2022_MATH1", subject: "수학", title: "수학 1", publisher: "천재교과서", author: "김동재", url: "https://view.chunjae.co.kr/streamdocs/view/sd;streamdocsId=udqRoBVG4xWv4wg0mEANLe-jev1nIZ_w-v9L-PFS6cM;isExternal=eQ;printUse=;enableDapSide=;pageView=" },
    { id: "2022_SCI1", subject: "과학", title: "과학 1", publisher: "천재교과서", author: "임성숙", url: "https://view.chunjae.co.kr/streamdocs/view/sd;streamdocsId=J6iAytUit35WjgWaUwFNSn06i3llhY34B23p9BiDvT8;isExternal=eQ;printUse=;enableDapSide=;pageView=" },
    { id: "2022_ENG1", subject: "영어", title: "영어 1", publisher: "엔이능률", author: "김기택", url: null },
    { id: "2022_MUS1", subject: "음악", title: "음악 1", publisher: "미래엔", author: "조성기", url: null },
    { id: "2022_ART1", subject: "미술", title: "미술 1", publisher: "리베르", author: "현은령", url: null },
    { id: "2022_INFO1", subject: "정보", title: "정보", publisher: "동아출판(주)", author: "최형종", url: null },
    { id: "2022_CHI1", subject: "생활중국어", title: "생활중국어", publisher: "미래엔", author: "신승희", url: null },
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
        <h1 className="text-3xl font-bold">2022개정 교육과정 중학교 1학년</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {textbooks.map((book) => (
          <Card key={book.id} className="overflow-hidden group flex flex-col">
            <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Book className="h-20 w-20 text-white/80" />
            </div>
            <div className="p-4 text-left flex-grow flex flex-col">
              <p className="text-sm font-semibold text-primary">{book.subject}</p>
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

export default Grade2022_1Page;

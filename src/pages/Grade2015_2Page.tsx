import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Book, ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Grade2015_2Page = () => {
  const textbooks = [
    { id: "2015_KOR2_1", subject: "국어", title: "국어 2-1", publisher: "비상교육", author: "김진수", url: "https://ebook.vivasam.com/v2/textbookviewer/viewer.jsp?contentId=/dvd/2015/20200302/M0KO0204_2018/data/ebook.pdf" },
    { id: "2015_KOR2_2", subject: "국어", title: "국어 2-2", publisher: "비상교육", author: "김진수", url: "https://ebook.vivasam.com/v2/textbookviewer/viewer.jsp?contentId=/dvd/2015/20200302/M0KO0205_2018/data/ebook.pdf" },
    { id: "2015_ETH2", subject: "도덕", title: "도덕 2", publisher: "해냄에듀", author: "이호중", url: "https://preview.hnedu.co.kr/viewer/preview/customLayout.jsp?contentId=JTJGcHJvZHVjdDUlMkZpbm5vcml4JTJGMjAyNTAyMDUxNTQ1NTk5OC5wZGY=" },
    { id: "2015_HIS2", subject: "역사", title: "역사 2", publisher: "비상교육", author: "이병인", url: "https://dn.vivasam.com/VS/2020textbook/E_history%202_text/index.html" },
    { id: "2015_MATH2", subject: "수학", title: "수학 2", publisher: "좋은책신사고", author: "김학경", url: "https://drive.google.com/drive/folders/16kNIA9R6yTYkqZFiBgwLNXwTb3PQmZXR" },
    { id: "2015_SCI2", subject: "과학", title: "과학 2", publisher: "비상교육", author: "임태훈", url: "https://ebook.vivasam.com/v2/textbookviewer/viewer.jsp?contentId=/dvd/2015/20200302/M0SC0102_2018/data/ebook.pdf" },
    { id: "2015_TECH2", subject: "기술·가정", title: "기술·가정 1", publisher: "천재교과서", author: "이춘식", url: "http://ebook.tsherpa.co.kr/webdata/15//15ebook_M/EB2015TC2Etc_01_70L_CD/viewer/ebook/index.html?contentInformationURL=/webdata/15/15ebook_M/EB2015TC2Etc_01_70L_CD/resource/ebook/&page=10=&bookBinding=true&maximize=true&resizable=true&UUID=fcem:uuid:" },
    { id: "2015_ENG2", subject: "영어", title: "영어 2", publisher: "비상교육", author: "김진완", url: "http://etb.visang.com/viewer/fixed/24/pd/" },
    { id: "2015_HAN2", subject: "한문", title: "한문", publisher: "다락원", author: "승제소", url: null },
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
        <h1 className="text-3xl font-bold">2015개정 교육과정 중학교 2학년</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {textbooks.map((book) => (
          <Card key={book.id} className="overflow-hidden group flex flex-col">
            <div className="h-40 bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center">
              <Book className="h-20 w-20 text-white/80" />
            </div>
            <div className="p-4 text-left flex-grow flex flex-col">
              <p className="text-sm font-semibold text-teal-600">{book.subject}</p>
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

export default Grade2015_2Page;

import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ZoomIn, ZoomOut, Bookmark, Pencil, ArrowLeft } from 'lucide-react';

const ViewerPage = () => {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('book');

  const textbooks: { [key: string]: { title: string, chapters: string[] } } = {
    // Grade 1
    MATH1: { title: "중학교 수학 1", chapters: ["1. 수와 연산", "2. 문자와 식", "3. 함수", "4. 기하", "5. 확률과 통계"] },
    ENG1: { title: "중학교 영어 1", chapters: ["Chapter 1. My New School", "Chapter 2. My Favorite Things", "Chapter 3. Food and Health", "Chapter 4. People and Places", "Chapter 5. Fun with English"] },
    SCI1: { title: "중학교 과학 1", chapters: ["1. 과학의 세계", "2. 물질의 구성", "3. 힘과 운동", "4. 빛과 파동", "5. 지구와 생명"] },
    HIS1: { title: "중학교 역사 1", chapters: ["1. 인류의 출현과 문명의 발생", "2. 고대 국가의 형성", "3. 중세 사회의 발전", "4. 근대 사회의 태동", "5. 현대 사회의 전개"] },
    TECH1: { title: "중학교 기술·가정 1", chapters: ["1. 기술의 세계", "2. 가정 생활의 이해", "3. 정보 통신 기술", "4. 생활과 안전", "5. 진로 탐색"] },
    SOC1: { title: "중학교 사회 1", chapters: ["1. 사회와 나", "2. 문화의 이해", "3. 정치와 법", "4. 경제 생활", "5. 사회 변동과 미래"] },
    // Grade 2
    MATH2: { title: "중학교 수학 2", chapters: ["1. 유리수와 순환소수", "2. 식의 계산", "3. 연립방정식", "4. 부등식", "5. 일차함수와 그래프"] },
    ENG2: { title: "중학교 영어 2", chapters: ["Chapter 1. Look Into the World", "Chapter 2. Enjoy Your Trip", "Chapter 3. Be a Good Friend", "Chapter 4. What a Wonderful World", "Chapter 5. Think Green"] },
    SCI2: { title: "중학교 과학 2", chapters: ["1. 물질의 구성", "2. 전기와 자기", "3. 태양계", "4. 식물과 에너지", "5. 동물과 에너지"] },
    HIS2: { title: "중학교 역사 2", chapters: ["1. 문명의 교류", "2. 이슬람 세계의 형성", "3. 유럽 세계의 변화", "4. 동아시아의 변화", "5. 조선의 성립과 발전"] },
    TECH2: { title: "중학교 기술·가정 2", chapters: ["1. 청소년의 자기 관리", "2. 기술 시스템", "3. 산업과 직업", "4. 지속 가능한 발전", "5. 문화와 생활"] },
    SOC2: { title: "중학교 사회 2", chapters: ["1. 인권과 헌법", "2. 시장 경제와 금융", "3. 사회 정의와 불평등", "4. 국제 사회와 한국", "5. 미래 사회와 우리"] },
    // Grade 3
    MATH3: { title: "중학교 수학 3", chapters: ["1. 실수와 그 계산", "2. 이차방정식", "3. 이차함수", "4. 삼각비", "5. 원의 성질"] },
    ENG3: { title: "중학교 영어 3", chapters: ["Chapter 1. My Future, My Choice", "Chapter 2. The Power of Communication", "Chapter 3. Science in Our Lives", "Chapter 4. Art Around Us", "Chapter 5. A Better World for All"] },
    SCI3: { title: "중학교 과학 3", chapters: ["1. 운동과 에너지", "2. 자극과 반응", "3. 생식과 유전", "4. 별과 우주", "5. 과학 기술과 인류 문명"] },
    HIS3: { title: "중학교 역사 3", chapters: ["1. 근대 국가 수립 운동", "2. 일제 강점과 민족 운동", "3. 대한민국의 발전", "4. 동아시아의 역사 갈등", "5. 세계화와 평화"] },
    TECH3: { title: "중학교 기술·가정 3", chapters: ["1. 생애 설계와 진로", "2. 기술 혁신과 사회", "3. 미래 기술과 산업", "4. 지속 가능한 삶", "5. 안전한 생활 환경"] },
    SOC3: { title: "중학교 사회 3", chapters: ["1. 민주주의와 국가", "2. 세계 시장과 한국 경제", "3. 국제 관계와 한반도", "4. 정보 사회와 시민 윤리", "5. 지속 가능한 미래"] },
  };

  const book = textbooks[bookId || ''] || { title: "교과서를 찾을 수 없습니다.", chapters: [] };

  return (
    <div className="container mx-auto p-4 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            학년 선택으로 돌아가기
          </Link>
        </Button>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Table of Contents */}
        <div className="md:col-span-1">
          <Card className="h-full">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">목차</h2>
              <ScrollArea className="h-[calc(100vh-220px)]">
                <ul>
                  {book.chapters.map((chapter, index) => (
                    <li key={index} className="mb-2">
                      <Button variant="ghost" className="w-full justify-start text-left h-auto">
                        {chapter}
                      </Button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Viewer */}
        <div className="md:col-span-3 flex flex-col">
          <Card className="mb-4">
            <div className="p-2 flex items-center space-x-2">
              <Button variant="outline" size="icon"><ZoomIn className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><ZoomOut className="h-4 w-4" /></Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="outline" size="icon"><Bookmark className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><Pencil className="h-4 w-4" /></Button>
            </div>
          </Card>
          <Card className="flex-grow">
            <CardContent className="p-4 h-full">
              <div className="bg-gray-100 w-full h-full flex items-center justify-center rounded-md">
                <p className="text-muted-foreground">교과서 뷰어 (PDF/EPUB)가 여기에 표시됩니다.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewerPage;

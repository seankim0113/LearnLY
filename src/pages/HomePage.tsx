import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookMarked, BookOpen, Bookmark, Pencil, RefreshCw } from 'lucide-react';

const HomePage = () => {
  const grades2022 = [
    {
      grade: 1,
      title: "2022개정 교육과정 중학교 1학년",
      description: "새로운 시작, Learnly와 함께 힘차게!",
      href: "/grade/2022/1",
      color: "from-blue-500 to-blue-400",
    },
    {
      grade: 2,
      title: "2022개정 교육과정 중학교 2학년",
      description: "한 단계 더 성장하는 당신을 응원합니다.",
      href: "/grade/2022/2",
      color: "from-green-500 to-green-400",
    },
    {
      grade: 3,
      title: "2022개정 교육과정 중학교 3학년",
      description: "미래를 향한 중요한 발걸음을 함께합니다.",
      href: "/grade/2022/3",
      color: "from-purple-500 to-purple-400",
    },
  ];

  const grades2015 = [
    {
      grade: 1,
      title: "2015개정 교육과정 중학교 1학년",
      description: "기초를 탄탄하게, 핵심 개념 정복!",
      href: "/grade/2015/1",
      color: "from-orange-500 to-orange-400",
    },
    {
      grade: 2,
      title: "2015개정 교육과정 중학교 2학년",
      description: "심화 학습으로 실력을 한 단계 위로!",
      href: "/grade/2015/2",
      color: "from-teal-500 to-teal-400",
    },
    {
      grade: 3,
      title: "2015개정 교육과정 중학교 3학년",
      description: "성공적인 마무리를 위한 최종 정리!",
      href: "/grade/2015/3",
      color: "from-rose-500 to-rose-400",
    },
  ];

  const guideSteps = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "교과서 열기",
      description: "원하는 학년과 과목의 교과서를 선택하여 학습을 시작합니다.",
    },
    {
      icon: <Bookmark className="h-8 w-8 text-primary" />,
      title: "중요한 내용 표시",
      description: "학습 중 중요한 부분은 북마크로 표시하여 쉽게 다시 찾아보세요.",
    },
    {
      icon: <Pencil className="h-8 w-8 text-primary" />,
      title: "메모 작성",
      description: "필요한 내용이나 생각을 메모 기능으로 교과서에 직접 기록하세요.",
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "복습 시 다시 확인",
      description: "북마크와 메모를 활용하여 중요한 내용을 효율적으로 복습합니다.",
    },
  ];

  const renderGradeCards = (grades: any[]) => (
    <div className="grid md:grid-cols-3 gap-8">
      {grades.map((grade) => (
        <Link to={grade.href} key={grade.grade} className="group">
          <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg shadow-slate-300/20">
            <CardHeader className={`text-white bg-gradient-to-br ${grade.color} p-8`}>
              <BookMarked className="w-12 h-12 mb-4 opacity-80" />
              <CardTitle className="text-2xl font-bold">{grade.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col justify-between">
              <CardDescription className="text-base mb-4 text-foreground/80">{grade.description}</CardDescription>
              <div className="flex items-center font-semibold text-primary">
                교과서 보러가기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob-spin"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-[40rem] h-[40rem] bg-secondary/10 rounded-full filter blur-3xl opacity-50 animate-blob-spin animation-delay-4000"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full filter blur-3xl opacity-50 animate-blob-spin animation-delay-2000"></div>
        </div>
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              더 똑똑하게 배우는 방법, <span className="text-primary">Learnly</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              원하는 교과서를 클릭하고 지금 바로 학습을 시작하세요.
            </p>
            <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/30" asChild>
              <a href="#grade-selection">학습 시작하기</a>
            </Button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" 
              alt="학습 일러스트" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Grade Selection Section */}
      <section id="grade-selection" className="w-full py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold">학년을 선택하고 학습을 시작하세요</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
               Learnly는 여러분의 학년에 맞는 교과서를 제공하여 스마트한 학습 경험을 지원합니다.
             </p>
          </div>
          
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">2022 개정 교육과정</h3>
            {renderGradeCards(grades2022)}
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">2015 개정 교육과정</h3>
            {renderGradeCards(grades2015)}
          </div>
        </div>
      </section>

      {/* Recommended Learning Guide Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">이렇게 활용해 보세요!</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {guideSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 flex flex-col items-center bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg shadow-slate-300/20">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{`Step ${index + 1}. ${step.title}`}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

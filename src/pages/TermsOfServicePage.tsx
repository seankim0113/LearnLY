import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfServicePage = () => {
  const terms = [
    {
      title: "제1조 (목적)",
      content: "이 약관은 웹사이트 개발자 김선우가 제공하는 오픈소스 학습 플랫폼 Learnly(이하 “서비스”)의 이용 조건과 사용자 권리 및 의무를 규정함을 목적으로 합니다. 본 서비스와 관련된 소프트웨어는 GNU General Public License Version 3 (GPLv3) 하에 배포됩니다."
    },
    {
      title: "제2조 (서비스 내용)",
      content: [
        "Learnly는 학생이 교과서를 열람하고, 학교 공지사항을 확인할 수 있는 온라인 학습 플랫폼입니다.",
        "Learnly의 소스코드 및 관련 자료는 GPLv3에 따라 공개되며, 누구나 확인, 복사, 수정, 배포할 수 있습니다."
      ]
    },
    {
      title: "제3조 (사용자 권리)",
      content: [
        "사용자는 Learnly를 개인 학습 목적으로 자유롭게 이용할 수 있습니다.",
        "GPLv3 조건에 따라, 소스코드를 수정하거나 배포하는 경우 수정한 소스코드도 반드시 GPLv3 하에 공개해야 합니다.",
        "상업적 이용은 가능하지만, GPL 규정을 준수해야 하며, 원저작권자를 반드시 명시해야 합니다."
      ]
    },
    {
      title: "제4조 (책임 제한)",
      content: [
        "Learnly는 사용자가 서비스를 이용하는 과정에서 발생한 문제(데이터 손실, 시스템 오류 등)에 대해 책임을 지지 않습니다.",
        "사용자는 Learnly 이용으로 발생하는 모든 결과에 대해 스스로 책임을 집니다."
      ]
    },
    {
      title: "제5조 (저작권 및 라이선스)",
      content: [
        "Learnly 서비스와 소스코드의 저작권은 개발자 김선우에게 있습니다.",
        "소스코드 사용 시, GPLv3 라이선스 전문을 함께 제공해야 하며, 출처와 저작권자를 명시해야 합니다.",
        "Learnly 소스코드와 관련된 특허권, 상표권, 또는 기타 지식재산권은 GPLv3 조건을 따릅니다."
      ]
    },
    {
      title: "제6조 (약관 변경)",
      content: "본 약관은 필요 시 개발자가 사전 공지 없이 변경할 수 있으며, 변경 후 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주됩니다."
    },
    {
      title: "제7조 (GPLv3 전문 링크)",
      content: "본 서비스에 적용되는 GNU General Public License Version 3 전문은 아래에서 확인할 수 있습니다."
    },
    {
      title: "제8조 (문의)",
      content: "Learnly 이용 관련 문의는 개발자 이메일(hello@learnly.kr)로 연락할 수 있습니다."
    }
  ];

  return (
    <div className="container py-12 max-w-4xl mx-auto">
       <div className="flex items-center mb-8">
        <Button asChild variant="outline" size="icon" className="mr-4">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Learnly 이용약관</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Learnly 오픈소스 프로젝트 이용약관 (GPL 3.0 기반, 공지사항 포함)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {terms.map((term, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
              {Array.isArray(term.content) ? (
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  {term.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-muted-foreground">{term.content}</p>
              )}
              {term.title === "제7조 (GPLv3 전문 링크)" && (
                <a 
                  href="https://www.gnu.org/licenses/gpl-3.0.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  GNU GPL v3 전문
                </a>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfServicePage;

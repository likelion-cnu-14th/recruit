import { BookOpen, Users, Layers, Coins, Rocket, Building2, Handshake, Trophy } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <BookOpen size={40} />,
      title: "바이브 코딩 커리큘럼",
      desc: "최신 AI 도구를 활용한 풀스택 개발 및 창업 교육"
    },
    {
      icon: <Trophy size={40} />,
      title: "대외 활동 및 공모전",
      desc: "해커톤, 창업 경진대회 등 다양한 IT/창업 대회 도전 지원"
    },
    {
      icon: <Rocket size={40} />,
      title: "실전 배포 프로젝트",
      desc: "팀 빌딩부터 서비스 배포, 운영까지 경험하는 협업 프로젝트"
    },
    {
      icon: <Users size={40} />,
      title: "선배/운영진 멘토링",
      desc: "멋사 선배, 현업자 및 아기사자들과의 활발한 교류 및 피드백"
    },
    {
      icon: <Layers size={40} />,
      title: "분야별 심화 스터디",
      desc: "프론트/백엔드/AI/디자인 등 관심 분야별 자율 스터디 지원"
    },
    {
      icon: <Coins size={40} />,
      title: "창업 활동비 지원",
      desc: "팀별 프로젝트 제작비 및 운영비 지원 (창업지원단 연계)"
    },
    {
      icon: <Handshake size={40} />,
      title: "창업 연합 네트워킹",
      desc: "충남대 창업 동아리 연합 및 외부 스타트업과의 교류"
    },
    {
      icon: <Building2 size={40} />,
      title: "유성구청 연계 사업",
      desc: "지자체와 협력하여 지역 사회 문제를 해결하는 리빙랩 프로젝트"
    }
  ];

  return (
    <section className="bg-background px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight">
        14기에서 경험할 수 있는 <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">특별한 활동</span>
      </h2>
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="group glass-panel flex flex-col items-center p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 hover:border-primary/30">
            <div className="mb-6 flex justify-center text-primary group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
            <h3 className="mb-3 text-xl font-bold break-keep">{benefit.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 break-keep">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

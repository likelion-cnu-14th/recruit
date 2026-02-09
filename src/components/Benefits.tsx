import { BookOpen, Coins, Trophy, Users } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <BookOpen size={40} />,
      title: "바이브 코딩 커리큘럼",
      desc: "최신 AI 활용 개발 노하우 및 실전 팁 전수"
    },
    {
      icon: <Coins size={40} />,
      title: "창업 활동비 지원",
      desc: "팀별 프로젝트 제작비 및 운영비 지원 (창업지원단 연계)"
    },
    {
      icon: <Trophy size={40} />,
      title: "실전 배포 포트폴리오",
      desc: "기획부터 배포, 운영까지 이어지는 '살아있는' 프로젝트 경험"
    },
    {
      icon: <Users size={40} />,
      title: "13기 운영진의 밀착 멘토링",
      desc: "풍부한 수상 경력을 보유한 선배들의 실전 가이드"
    }
  ];

  return (
    <section className="bg-background px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight">
        14기 정예 사자만을 위한 <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">혜택</span>
      </h2>
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="group rounded-2xl border border-primary/10 bg-primary/5 p-8 text-center transition-all hover:-translate-y-1 hover:bg-primary/10">
            <div className="mb-6 flex justify-center text-primary">{benefit.icon}</div>
            <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
            <p className="text-sm leading-relaxed text-gray-400">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

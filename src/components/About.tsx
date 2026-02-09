import { Zap, Database, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "바이브 코딩(AI 활용 개발)의 정점",
      description: "복잡한 코드 작성은 AI에게 맡기고, 여러분은 서비스의 본질과 사용자 경험에 집중합니다. 비전공자도 8주 안에 실제 서비스를 완성할 수 있습니다."
    },
    {
      icon: <Database size={24} />,
      title: "서버 코딩 없는 '백엔드 아키텍처'",
      description: "지루한 서버 구축 과정은 생략합니다. 강력한 인프라 도구를 활용해 데이터 설계와 보안, 그리고 서비스 안정성에 집중하는 '현대적인 백엔드'를 경험합니다."
    },
    {
      icon: <Rocket size={24} />,
      title: "진짜 '내 서비스' 배포·운영 경험",
      description: "단순한 과제 제출로 끝내지 않습니다. 실제로 돌아가는 웹/앱 서비스를 배포하여 사용자를 만나고, 데이터를 통해 서비스를 개선하는 '운영의 가치'를 배웁니다."
    }
  ];

  return (
    <section className="bg-background px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight">
        14기 멋사, <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">무엇이 다른가요?</span>
      </h2>
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary/30 hover:bg-white/[0.07]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {feature.icon}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-primary">{feature.title}</h3>
            <p className="leading-relaxed text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Zap, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Agentic 코딩",
      description: "NextJS, Supabase, Vercel 기반으로 다양한 AI를 활용하여 빠르게 프로덕트를 완성합니다. Context Engineering, MCP 등을 사용하여 AI를 더 효율적으로 활용합니다."
    },
    {
      icon: <Rocket size={24} />,
      title: "서비스 배포 및 운영",
      description: "단순히 아이디어만 발표하고 끝나는 프로젝트가 아닌 실제 서비스를 배포 및 운영합니다. 직접 사용자의 의견을 듣고 서비스를 개선하는 경험을 할 수 있습니다."
    }
  ];

  return (
    <section className="bg-background px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight">
        14기 멋사, <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">무엇이 다른가요?</span>
      </h2>
      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-primary/30 hover:bg-gray-50/50 hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {feature.icon}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
            <p className="leading-relaxed text-gray-600 break-keep">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

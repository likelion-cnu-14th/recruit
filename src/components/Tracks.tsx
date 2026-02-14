import { Palette, Code, Server } from 'lucide-react';

export default function Tracks() {
  const tracks = [
    {
      role: "Product Builder",
      title: "기획/디자인",
      icon: <Palette strokeWidth={1.5} size={36} />,
      desc: "문제 정의부터 비즈니스 모델, Figma 화면 기획까지 아이디어를 실제 서비스로 구체화합니다. 시장 분석을 통해 핵심 가치를 도출하고, 팀 프로젝트로 실무 협업 역량을 기릅니다."
    },
    {
      role: "Interface & Interaction",
      title: "프론트엔드",
      icon: <Code strokeWidth={1.5} size={36} />,
      desc: "React, Next.js와 AI(AntiGravity, Cursor, Claude 등)를 활용해 상상을 인터페이스로 구현합니다. 아이디어를 빠르게 시각화하고 사용자와 상호작용하는 실제 서비스를 완성하는 능력을 키웁니다."
    },
    {
      role: "Data & Infrastructure",
      title: "백엔드",
      icon: <Server strokeWidth={1.5} size={36} />,
      desc: "Supabase와 AI를 활용해 서비스의 핵심 DB와 시스템을 구축합니다. 데이터 모델링부터 OAuth, 비즈니스 로직까지 실제 서비스가 작동하는 전 과정을 효율적으로 구현합니다."
    }
  ];

  return (
    <section className="bg-surface px-6 py-24 selection:bg-orange-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-20 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">Curriculum</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            14기 트랙별 역할
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 dark:bg-zinc-800"
            >
              <div>
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                  {track.icon}
                </div>
                
                <div className="mb-6 space-y-2">
                  <span className="block text-sm font-bold uppercase tracking-widest text-orange-600">
                    {track.role}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {track.title}
                  </h3>
                </div>

                <p className="break-keep text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

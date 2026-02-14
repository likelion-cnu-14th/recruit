import { Palette, Code, Server } from 'lucide-react';

export default function Tracks() {
  const tracks = [
    {
      role: "Product Builder",
      title: "기획/디자인",
      icon: <Palette strokeWidth={1.5} size={36} />,
      desc: "문제 정의부터 비즈니스 모델 설계까지, 나만의 창업 아이디어를 실제 서비스로 구체화하는 경험을 할 수 있습니다. 시장과 사용자를 분석해 아이템의 핵심 가치를 정리하고, Figma를 활용해 아이디어가 효과적으로 전달되는 화면을 기획합니다. 팀 프로젝트를 통해 창업가에게 필요한 실무 중심의 커뮤니케이션 역량을 함께 기를 수 있습니다."
    },
    {
      role: "Interface & Interaction",
      title: "프론트엔드",
      icon: <Code strokeWidth={1.5} size={36} />,
      desc: "React 기반 Next.js와 AI를 결합해 상상을 인터페이스로 구현하는 경험을 할 수 있습니다. Antigravity, Cursor, Claude 등 AI 도구를 활용해 아이디어를 빠르게 화면으로 구현하고, 사용자와 상호작용하는 기능을 직접 연결해보며 실제 서비스로 완성하는 능력을 키울 수 있습니다."
    },
    {
      role: "Data & Infrastructure",
      title: "백엔드",
      icon: <Server strokeWidth={1.5} size={36} />,
      desc: "Supabase와 AI 도구를 활용해 서비스의 핵심 데이터베이스를 설계하고 시스템의 뼈대를 구축합니다. 서비스에 필요한 데이터 간의 관계를 정의하는 모델링부터 OAuth, 데이터 처리 로직까지 효율적으로 구현하며, 내가 설계한 데이터가 실제 화면과 연결되어 작동하는 전 과정을 경험합니다."
    }
  ];

  return (
    <section className="bg-surface px-6 py-24 selection:bg-orange-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">Curriculum</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white">
            14기 트랙별 역할
            <span className="mt-2 block text-xl font-normal text-gray-500 dark:text-gray-400">우리의 Vibe</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-6">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5 md:p-12 dark:bg-zinc-800"
            >
              <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-12 md:items-center">
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    {track.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <span className="block text-sm font-bold uppercase tracking-widest text-orange-600">
                      {track.role}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {track.title}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9">
                  <p className="break-keep text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {track.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function ActivityTimeline() {
  const activities = [
    {
      period: "3월 중순",
      title: "OT 및 교육 시작",
      description: "멋쟁이사자처럼 14기의 시작을 알리는 오리엔테이션과 함께 본격적인 파트별 교육이 진행됩니다."
    },
    {
      period: "5월",
      title: "중앙 아이디어톤",
      description: "전국 멋쟁이사자처럼 대학생들이 모여 창의적인 아이디어를 구체화하고 공유하는 네트워킹의 장입니다."
    },
    {
      period: "5월 ~ 6월",
      title: "실제 서비스 구현",
      description: "팀을 구성하여 기획부터 개발까지, 실제 사용자가 사용할 수 있는 서비스를 직접 구현해보는 프로젝트 기간입니다."
    },
    {
      period: "7월 ~ 8월",
      title: "중앙 해커톤",
      description: "멋쟁이사자처럼의 꽃, 전국 해커톤! 밤샘 개발을 통해 우리의 아이디어를 실제 프로덕트로 완성합니다."
    },
    {
      period: "2학기 ~",
      title: "프로젝트 고도화",
      description: "해커톤 이후에도 지속적으로 서비스를 개선하고 고도화하며, 실제 배포 및 운영 경험을 쌓습니다."
    }
  ];

  return (
    <section className="bg-white px-6 py-24 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gradient">14기 활동 로드맵</h2>
      <p className="mb-16 text-lg text-gray-500">1년 동안 진행될 멋쟁이사자처럼의 주요 활동을 소개합니다.</p>
      
      <div className="relative mx-auto max-w-4xl px-4 py-8">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:left-1/2 md:-translate-x-1/2"></div>

        {activities.map((item, index) => (
          <div key={index} className={`relative mb-16 flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
             
            {/* Timeline Dot */}
            <div className="absolute left-8 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-4 ring-primary/20 md:left-1/2">
               <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
            </div>
            
            {/* Card */}
            <div className={`w-full pl-20 md:w-1/2 md:px-12 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl shadow-gray-200/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100">

                
                <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-sm font-bold text-primary mb-4">
                  {item.period}
                </span>
                <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Schedule() {
  const events = [
    {
      date: "2026. 2. XX ~ 3. XX",
      title: "서류 접수",
      desc: "종강 전/동박 기간 활용"
    },
    {
      date: "3월 중순 예정",
      title: "면접 전형",
      desc: "개별 연락"
    },
    {
      date: "3월 말",
      title: "최종 합격",
      desc: "14기 아기사자 선발 완료"
    },
    {
      date: "1학기 ~",
      title: "활동 시작",
      desc: "8주 집중 커리큘럼 및 프로젝트"
    }
  ];

  return (
    <section className="bg-surface px-6 py-24 text-center">
      <h2 className="mb-16 text-4xl font-extrabold tracking-tight">모집 일정</h2>
      
      <div className="relative mx-auto max-w-3xl px-4 py-8 before:absolute before:bottom-0 before:left-8 before:top-0 before:w-0.5 before:bg-gray-200 md:before:left-1/2 md:before:-translate-x-1/2">
        {events.map((event, index) => (
          <div key={index} className={`mb-12 flex flex-col items-start md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(255,158,11,0.2)] md:left-1/2"></div>
            
            <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
              <div className="glass-panel p-6 shadow-lg transition-transform hover:-translate-y-1">
                <div className="mb-2 text-lg font-bold text-primary">{event.date}</div>
                <div className="mb-1 text-xl font-bold">{event.title}</div>
                <div className="text-sm text-gray-600">{event.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

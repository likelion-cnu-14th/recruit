import styles from './Schedule.module.css';

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
    <section className={styles.section}>
      <h2 className={styles.title}>모집 일정</h2>
      
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <div className={styles.date}>{event.date}</div>
              <div className={styles.event}>{event.title}</div>
              <div className={styles.desc}>{event.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

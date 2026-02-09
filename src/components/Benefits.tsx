import styles from './Benefits.module.css';
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
    <section className={styles.section}>
      <h2 className={styles.title}>
        14기 정예 사자만을 위한 <span className="text-gradient-primary">혜택</span>
      </h2>
      
      <div className={styles.grid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{benefit.icon}</div>
            <h3 className={styles.cardTitle}>{benefit.title}</h3>
            <p className={styles.cardDesc}>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

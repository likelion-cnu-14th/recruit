import styles from './Tracks.module.css';
import { Palette, Code, Server } from 'lucide-react';

export default function Tracks() {
  const tracks = [
    {
      role: "Product Builder",
      title: "기획/디자인",
      icon: <Palette size={32} />,
      quote: "AI가 이해할 수 있는 언어로 아이디어를 설계하다",
      desc: [
        "서비스 비즈니스 모델 설계",
        "AI가 최고의 결과물을 낼 수 있도록 하는 정교한 UI/UX 기획",
        "핵심: 서비스 기획, Figma 설계, AI 프롬프트 엔지니어링"
      ]
    },
    {
      role: "Interface & Interaction",
      title: "프론트엔드",
      icon: <Code size={32} />,
      quote: "AI와 함께 상상을 인터페이스로 구현하다",
      desc: [
        "AI 코딩 도구를 활용해 상상하던 화면을 광속으로 구현",
        "사용자와 상호작용하는 기능을 연결",
        "핵심: 인터페이스 구현, AI 페어 프로그래밍, API 연동"
      ]
    },
    {
      role: "Data & Infrastructure",
      title: "백엔드",
      icon: <Server size={32} />,
      quote: "시스템의 뼈대와 배포 환경을 책임지다",
      desc: [
        "데이터 모델링 및 보안 정책 설계",
        "서비스가 중단 없이 돌아가도록 인프라 구축 및 운영",
        "핵심: DB 설계, 배포 자동화, 시스템 아키텍처"
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        14기 트랙별 역할 <span className="text-gradient" style={{ display: 'block', fontSize: '1.25rem', marginTop: '0.5rem', fontWeight: 400 }}>우리의 Vibe</span>
      </h2>
      
      <div className={styles.grid}>
        {tracks.map((track, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.role}>{track.role}</span>
                <h3 className={styles.cardTitle}>{track.title}</h3>
              </div>
              <div className={styles.icon}>{track.icon}</div>
            </div>
            
            <blockquote className={styles.quote}>
              "{track.quote}"
            </blockquote>
            
            <ul className={styles.list}>
              {track.desc.map((item, i) => (
                <li key={i} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

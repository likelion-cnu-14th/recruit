import styles from './About.module.css';
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
    <section className={styles.section}>
      <h2 className={styles.title}>
        14기 멋사, <span className="text-gradient-primary">무엇이 다른가요?</span>
      </h2>
      
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

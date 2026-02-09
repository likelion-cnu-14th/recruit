import styles from './Hero.module.css';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        <Sparkles size={16} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'text-bottom' }} />
        충남대학교 멋쟁이사자처럼 14기
      </div>
      
      <h1 className={styles.title}>
        아이디어는 가볍게,<br />
        구현은 <span className="text-gradient-primary">AI와 함께</span><br />
        <span style={{ color: 'var(--accent)' }}>Vibe</span> 있게!
      </h1>
      
      <p className={styles.subtitle}>
        코딩 문법만 배우다 지치는 시간은 이제 끝났습니다.<br />
        최신 AI 도구로 완성하는 압도적인 생산성을 경험하세요.
      </p>
      
      <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
        14기 아기사자 지원하기 <ArrowRight size={20} style={{ display: 'inline-block', marginLeft: '8px', verticalAlign: 'middle' }} />
      </a>
    </section>
  );
}

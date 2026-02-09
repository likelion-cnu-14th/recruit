import styles from './Footer.module.css';
import { Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.slogan}>
        "완벽을 기다리지 마세요.<br />
        일단 배포하고 시작하는 게<br />
        <span className="text-gradient-primary">우리의 Vibe입니다.</span>"
      </h2>
      
      <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
        지금 바로 지원하기 <ArrowRight size={24} style={{ marginLeft: '12px' }} />
      </a>
      
      <div className={styles.links}>
        <a href="https://instagram.com/likelion._.cnu" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <Instagram size={20} style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'text-bottom' }} />
          @likelion._.cnu
        </a>
      </div>
      
      <div className={styles.copy}>
        © 2026 LikeLion CNU 14th. All rights reserved.
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.glow} />
          <div className={styles.num}>404</div>
        </div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.sub}>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className={styles.btns}>
          <Link to="/" className="btn-primary">
            <Home size={16} />
            Return Home
          </Link>
          <button className="btn-outline" onClick={() => window.history.back()}>
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
        <div className={styles.links}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
          <a href="mailto:ramgigatech@gmail.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

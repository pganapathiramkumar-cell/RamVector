import { Link } from 'react-router-dom';
import { Mail, Shield, LifeBuoy, ExternalLink } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const Logo = () => (
  <div className={styles.logoWrap}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="36" height="36" rx="9" fill="#7c3aed"/>
      <rect x="8" y="8" width="20" height="20" rx="5" fill="#5b21b6" transform="rotate(45 18 18)"/>
      <rect x="11" y="11" width="14" height="14" rx="3" fill="#7c3aed" opacity="0.5" transform="rotate(45 18 18)"/>
      <text x="18" y="22" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="9" fontWeight="800" fill="white" letterSpacing="-0.3">RV</text>
    </svg>
    <span className={styles.logoText}>Ram Vector</span>
  </div>
);

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            AI-powered document intelligence for students, professionals, and researchers.
          </p>
          <a href="mailto:ramgigatech@gmail.com" className={styles.email}>
            <Mail size={14} />
            ramgigatech@gmail.com
          </a>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Product</h3>
          <ul className={styles.colLinks}>
            <li><Link to="/">Home</Link></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#why">Why Ram Vector</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Legal & Support</h3>
          <ul className={styles.colLinks}>
            <li>
              <Link to="/privacy">
                <Shield size={13} />
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/support">
                <LifeBuoy size={13} />
                Support Center
              </Link>
            </li>
            <li>
              <a href="mailto:ramgigatech@gmail.com">
                <Mail size={13} />
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Download</h3>
          <ul className={styles.colLinks}>
            <li>
              <a href="#" aria-label="Download on App Store">
                <ExternalLink size={13} />
                App Store
              </a>
            </li>
          </ul>
          <div className={styles.appBadge}>
            <span>Available on iOS</span>
          </div>
        </div>

      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Ram Vector. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/support">Support</Link>
          <a href="mailto:ramgigatech@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

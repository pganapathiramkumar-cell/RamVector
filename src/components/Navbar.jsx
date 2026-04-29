import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const Logo = () => (
  <Link to="/" className={styles.logoWrap} aria-label="Ram Vector Home">
    <div className={styles.logoMark}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#7c3aed"/>
        <rect x="7" y="7" width="18" height="18" rx="4" fill="#5b21b6" transform="rotate(45 16 16)"/>
        <rect x="10" y="10" width="12" height="12" rx="3" fill="#7c3aed" opacity="0.5" transform="rotate(45 16 16)"/>
        <text x="16" y="20" textAnchor="middle" fontFamily="-apple-system, sans-serif" fontSize="8" fontWeight="800" fill="white" letterSpacing="-0.3">RV</text>
      </svg>
    </div>
    <span className={styles.logoText}>Ram Vector</span>
  </Link>
);

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/support', label: 'Support' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav className={styles.desktopLinks} aria-label="Main navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/support" className="btn-primary" style={{ fontSize: 14, padding: '9px 20px' }}>
            Get the App
          </Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.mobileLinks} aria-label="Mobile navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/support"
            className="btn-primary"
            onClick={() => setOpen(false)}
            style={{ marginTop: 8, justifyContent: 'center' }}
          >
            Get the App
          </Link>
        </nav>
      </div>
    </header>
  );
}

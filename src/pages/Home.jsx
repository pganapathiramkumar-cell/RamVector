import { Link } from 'react-router-dom';
import {
  FileText, Zap, CheckSquare, GitBranch,
  BarChart2, ShieldCheck, ArrowRight,
  Sparkles, Lock, Globe, Clock, Users,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Home.module.css';

/* ── Animated hero visual ─────────────────────────────────── */
function HeroVisual() {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <div className={styles.hvGlow} />
      <div className={styles.hvCard}>
        <div className={styles.hvCardHeader}>
          <div className={styles.hvDots}>
            <span /><span /><span />
          </div>
          <span className={styles.hvCardTitle}>document_analysis.pdf</span>
        </div>
        <div className={styles.hvBody}>
          <div className={styles.hvLines}>
            <span className={styles.hvLine} style={{ width: '92%' }} />
            <span className={styles.hvLine} style={{ width: '78%' }} />
            <span className={styles.hvLine} style={{ width: '85%' }} />
            <span className={styles.hvLine} style={{ width: '60%' }} />
            <span className={styles.hvLine} style={{ width: '71%' }} />
          </div>
        </div>
        <div className={styles.hvResult}>
          <div className={styles.hvResultRow}>
            <span className={styles.hvLabel}>Summary</span>
            <span className={styles.hvCheck}>✓</span>
          </div>
          <div className={styles.hvResultRow}>
            <span className={styles.hvLabel}>Action Items</span>
            <span className={styles.hvCheck}>✓</span>
          </div>
          <div className={styles.hvResultRow}>
            <span className={styles.hvLabel}>Workflow</span>
            <span className={styles.hvCheck}>✓</span>
          </div>
        </div>
        <div className={styles.hvBadge}>
          <Sparkles size={12} />
          AI Analysis Complete
        </div>
      </div>
      <div className={styles.hvOrbit} />
      <div className={styles.hvOrbit2} />
    </div>
  );
}

/* ── Features ─────────────────────────────────────────────── */
const features = [
  {
    icon: FileText,
    title: 'Smart PDF Summary',
    desc: 'Get concise, intelligent summaries of any PDF document in seconds. Extract the essence without reading every page.',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: Zap,
    title: 'AI Insights',
    desc: 'Uncover hidden patterns, key concepts, and critical insights powered by advanced AI language models.',
    color: '#4f46e5',
    bg: '#eef2ff',
  },
  {
    icon: CheckSquare,
    title: 'Action Items',
    desc: 'Automatically extract tasks, deadlines, responsibilities, and risks from your documents.',
    color: '#0d9488',
    bg: '#f0fdfa',
  },
  {
    icon: GitBranch,
    title: 'Workflow Recommendations',
    desc: 'Get structured, prioritised workflow steps derived from document content to accelerate execution.',
    color: '#0284c7',
    bg: '#f0f9ff',
  },
  {
    icon: BarChart2,
    title: 'Executive Reports',
    desc: 'Professional-grade executive summaries and entity analysis — ready to share with stakeholders.',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: ShieldCheck,
    title: 'Fast Secure Upload',
    desc: 'End-to-end HTTPS encryption on every upload. Your documents are processed securely and not stored permanently.',
    color: '#0d9488',
    bg: '#f0fdfa',
  },
];

/* ── How it works ─────────────────────────────────────────── */
const steps = [
  { n: '01', title: 'Upload Your PDF', desc: 'Select any PDF document from your device. We support files up to 5 MB.' },
  { n: '02', title: 'AI Processes It', desc: 'Our AI engine analyses the content, extracting summaries, entities, and action items.' },
  { n: '03', title: 'Get Instant Results', desc: 'Review your structured summary, action points, and workflow in a clean interface.' },
];

/* ── Why section bullets ─────────────────────────────────── */
const whyPoints = [
  { icon: Clock, text: 'Save hours of reading with AI-generated summaries in under 30 seconds.' },
  { icon: Users, text: 'Designed for students, researchers, lawyers, business analysts, and executives.' },
  { icon: Lock, text: 'Privacy-first architecture. Documents are processed transiently, never stored permanently.' },
  { icon: Globe, text: 'Works on iPhone and iPad. Native app available on the Apple App Store.' },
  { icon: Sparkles, text: 'Powered by modern AI language models for accurate, context-aware analysis.' },
  { icon: Zap, text: 'Lightning-fast analysis. Most documents processed in under 30 seconds.' },
];

/* ── Section heading helper ─────────────────────────────── */
function SectionHead({ badge, title, sub, center }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={`${styles.sectionHead} ${center ? styles.sectionHeadCenter : ''} reveal ${visible ? 'visible' : ''}`}>
      {badge && <span className="badge">{badge}</span>}
      <h2 className={styles.sectionTitle}>{title}</h2>
      {sub && <p className={styles.sectionSub}>{sub}</p>}
    </div>
  );
}

/* ── Home page ───────────────────────────────────────────── */
export default function Home() {
  const [heroRef, heroVisible] = useScrollAnimation(0.01);

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero} aria-labelledby="hero-headline">
        <div className={`container ${styles.heroInner}`}>
          <div
            ref={heroRef}
            className={`${styles.heroContent} reveal ${heroVisible ? 'visible' : ''}`}
          >
            <span className="badge">
              <Sparkles size={12} />
              AI-Powered Document Intelligence
            </span>
            <h1 id="hero-headline" className={styles.heroH1}>
              Transform PDFs Into<br />
              <span className="gradient-text">Intelligence Instantly</span>
            </h1>
            <p className={styles.heroSub}>
              Upload documents and get AI summaries, action items, insights,
              and workflow recommendations in seconds.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/support" className="btn-primary">
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link to="/support" className="btn-outline">
                Contact Support
              </Link>
            </div>
            <div className={styles.heroTrust}>
              <span>✓ No account required</span>
              <span>✓ HTTPS encrypted</span>
              <span>✓ Privacy first</span>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgBlob1} />
          <div className={styles.heroBgBlob2} />
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className={styles.trustBar} aria-label="Trust signals">
        <div className="container">
          <div className={styles.trustInner}>
            {['Built for iOS', 'Privacy First', 'AI Powered', 'Instant Results', 'Secure Upload'].map(t => (
              <div key={t} className={styles.trustItem}>
                <ShieldCheck size={14} />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" id="features" aria-labelledby="features-heading">
        <div className="container">
          <SectionHead
            badge="Features"
            title="Everything you need from a document"
            sub="Ram Vector extracts maximum intelligence from every PDF — so you don't have to read it twice."
            center
          />
          <div className={styles.featGrid}>
            {features.map(({ icon: Icon, title, desc, color, bg }, i) => {
              const [ref, visible] = useScrollAnimation();
              return (
                <article
                  key={title}
                  ref={ref}
                  className={`${styles.featCard} reveal reveal-delay-${(i % 3) + 1} ${visible ? 'visible' : ''}`}
                >
                  <div className={styles.featIcon} style={{ background: bg, color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.featTitle}>{title}</h3>
                  <p className={styles.featDesc}>{desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={`section ${styles.howSection}`} aria-labelledby="how-heading">
        <div className="container">
          <SectionHead
            badge="How It Works"
            title="Three steps to document intelligence"
            sub="From upload to insights in under 30 seconds."
            center
          />
          <div className={styles.stepsGrid}>
            {steps.map(({ n, title, desc }, i) => {
              const [ref, visible] = useScrollAnimation();
              return (
                <div
                  key={n}
                  ref={ref}
                  className={`${styles.step} reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''}`}
                >
                  <div className={styles.stepNum}>{n}</div>
                  <div className={styles.stepConnector} aria-hidden="true" />
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepDesc}>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Ram Vector ── */}
      <section className="section" id="why" aria-labelledby="why-heading">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <SectionHead
                badge="Why Ram Vector"
                title="Built for the way you work"
                sub="Professional document intelligence in your pocket. No login, no subscription, no friction."
              />
              <div className={styles.whyPoints}>
                {whyPoints.map(({ icon: Icon, text }) => {
                  const [ref, visible] = useScrollAnimation();
                  return (
                    <div
                      key={text}
                      ref={ref}
                      className={`${styles.whyPoint} reveal ${visible ? 'visible' : ''}`}
                    >
                      <div className={styles.whyIcon}>
                        <Icon size={16} />
                      </div>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.whyRight} aria-hidden="true">
              <div className={styles.whyVisual}>
                <div className={styles.wvHeader}>
                  <div className={styles.wvDots}><span/><span/><span/></div>
                  <span>Ram Vector App</span>
                </div>
                <div className={styles.wvContent}>
                  <div className={styles.wvSection}>
                    <span className={styles.wvLabel}>Executive Summary</span>
                    <div className={styles.wvBar} style={{ width: '100%' }} />
                    <div className={styles.wvBar} style={{ width: '82%' }} />
                    <div className={styles.wvBar} style={{ width: '91%' }} />
                  </div>
                  <div className={styles.wvSection}>
                    <span className={styles.wvLabel}>Action Items (4)</span>
                    {['Review contract terms', 'Schedule stakeholder call', 'Prepare proposal', 'Set deadline'].map(t => (
                      <div key={t} className={styles.wvItem}>
                        <div className={styles.wvDot} />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.wvSection}>
                    <span className={styles.wvLabel}>Workflow</span>
                    <div className={styles.wvStep}><div className={styles.wvStepCircle}>1</div><span>Review</span></div>
                    <div className={styles.wvStep}><div className={styles.wvStepCircle}>2</div><span>Approve</span></div>
                    <div className={styles.wvStep}><div className={styles.wvStepCircle}>3</div><span>Execute</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaBg} aria-hidden="true" />
            <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              Available Now
            </span>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Start transforming your documents today
            </h2>
            <p className={styles.ctaSub}>
              Built with privacy, speed, and modern AI intelligence.
              Download Ram Vector on the App Store.
            </p>
            <div className={styles.ctaBtns}>
              <Link
                to="/support"
                className="btn-primary"
                style={{ background: '#fff', color: '#7c3aed', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
              >
                Get the App
                <ArrowRight size={16} />
              </Link>
              <Link to="/support" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

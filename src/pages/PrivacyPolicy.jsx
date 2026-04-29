import { Shield, Mail, Phone, Calendar, Lock, AlertTriangle, Trash2, Eye, Server } from 'lucide-react';
import styles from '../styles/PrivacyPolicy.module.css';

/* ── Contact cards ──────────────────────────────────────── */
const contacts = [
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'For any privacy-related questions or data requests.',
    value: 'ramgigatech@gmail.com',
    href: 'mailto:ramgigatech@gmail.com',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: Phone,
    title: 'Call Us',
    desc: 'Speak to us directly during business hours.',
    value: '+91 7996656111',
    href: 'tel:+917996656111',
    color: '#0d9488',
    bg: '#f0fdfa',
  },
  {
    icon: Calendar,
    title: 'Response Time',
    desc: 'We respond to all privacy enquiries promptly.',
    value: 'Within 24–48 hours',
    href: null,
    color: '#d97706',
    bg: '#fffbeb',
  },
];

/* ── Policy sections ────────────────────────────────────── */
const sections = [
  {
    icon: Eye,
    id: 'information',
    title: '1. Information We Collect',
    content: [
      { type: 'p', text: 'Ram Vector is designed with privacy as a core principle. We collect only what is strictly necessary to operate the service:' },
      { type: 'ul', items: [
        { strong: 'Uploaded PDF documents', text: ' — temporarily processed to generate summaries, insights, and action items. Files are not stored permanently on our servers.' },
        { strong: 'Document metadata', text: ' — file name and file size, used solely for processing validation.' },
        { strong: 'Basic usage data', text: ' — anonymous crash reports and performance diagnostics to improve app stability. No personally identifiable information is captured.' },
        { strong: 'Device information', text: ' — iOS version and device type (anonymised), used for technical compatibility purposes only.' },
      ]},
      { type: 'p', text: 'We do not collect your name, email address, or any account credentials. No login is required to use Ram Vector.' },
    ],
  },
  {
    icon: Server,
    id: 'processing',
    title: '2. How Documents Are Processed',
    content: [
      { type: 'p', text: 'When you upload a PDF to Ram Vector:' },
      { type: 'ul', items: [
        { text: 'Your document is transmitted securely over HTTPS to our processing server.' },
        { text: 'The document text is extracted and analysed by our AI engine to generate summaries, action items, workflow recommendations, and entity extraction.' },
        { text: 'The analysis result is returned to your device immediately.' },
        { strong: 'Your document is not permanently stored', text: ' on our servers. It is transiently processed and purged upon completion or expiry.' },
        { text: 'AI-generated results are delivered exclusively to your device and are not shared with third parties.' },
      ]},
    ],
  },
  {
    icon: Shield,
    id: 'third-party',
    title: '3. Third-Party AI Providers',
    content: [
      { type: 'p', text: 'To power our AI analysis capabilities, Ram Vector may use secure, enterprise-grade third-party AI API providers. These providers:' },
      { type: 'ul', items: [
        { text: 'Process document content solely for the purpose of generating AI summaries and analysis.' },
        { text: 'Are bound by strict data processing agreements and do not retain submitted content beyond the processing window.' },
        { text: 'Operate under industry-standard security frameworks.' },
      ]},
      { type: 'p', text: 'We carefully evaluate all third-party services for compliance with applicable privacy standards before integration.' },
    ],
  },
  {
    icon: Calendar,
    id: 'retention',
    title: '4. Data Retention',
    content: [
      { type: 'p', text: 'Ram Vector operates on a minimal-retention principle:' },
      { type: 'ul', items: [
        { strong: 'Uploaded files', text: ' — transiently processed and automatically deleted. Not stored beyond the analysis session.' },
        { strong: 'AI results', text: ' — returned to your device only. Not stored on our servers.' },
        { strong: 'Usage analytics', text: ' — anonymised and aggregated, retained for up to 90 days for service improvement purposes.' },
      ]},
      { type: 'p', text: 'We do not build user profiles. No persistent user data is maintained.' },
    ],
  },
  {
    icon: Lock,
    id: 'security',
    title: '5. Security',
    content: [
      { type: 'p', text: 'We employ modern security practices to protect your data during transmission and processing:' },
      { type: 'ul', items: [
        { strong: 'TLS/HTTPS encryption', text: ' — all data transmitted between your device and our servers is encrypted in transit.' },
        { strong: 'Server-side security', text: ' — our infrastructure is secured with industry-standard access controls and monitoring.' },
        { strong: 'No permanent storage', text: ' — uploaded documents are not persisted to disk or database after analysis completes.' },
        { strong: 'Privacy screen', text: ' — the app automatically hides document content when switched to the background, preventing data exposure in the app switcher on all supported platforms.' },
      ]},
    ],
  },
  {
    icon: AlertTriangle,
    id: 'disclaimer',
    title: '6. User Responsibility & Disclaimer',
    content: [
      { type: 'p', text: 'While we take significant precautions to protect your data, users are advised:' },
      { type: 'ul', items: [
        { strong: 'Avoid uploading sensitive or confidential documents', text: ' — such as classified government files, sensitive medical records, or proprietary legal contracts — unless you are comfortable with the described processing.' },
        { text: 'Ram Vector is not responsible for the content of documents uploaded by users.' },
        { text: 'Users are solely responsible for ensuring they have the right to upload and process documents they submit.' },
      ]},
    ],
  },
  {
    icon: Trash2,
    id: 'deletion',
    title: '7. User Deletion Requests',
    content: [
      { type: 'p', text: 'Because Ram Vector does not maintain persistent user accounts or stored documents, there is no user data to formally delete. However:' },
      { type: 'ul', items: [
        { text: 'If you have concerns about any data that may have been retained, you may contact us at the email or phone number listed on this page.' },
        { text: 'We will investigate and respond within 30 days.' },
        { text: 'You may uninstall Ram Vector at any time to remove all locally cached data from your device.' },
      ]},
    ],
  },
  {
    icon: Mail,
    id: 'contact',
    title: '8. Contact Us',
    content: [
      { type: 'p', text: 'For any privacy-related questions, concerns, or data requests, please reach us through any of the following:' },
      { type: 'contact' },
    ],
  },
];

/* ── Render section content ─────────────────────────────── */
function SectionContent({ content }) {
  return (
    <div className={styles.sectionBody}>
      {content.map((block, i) => {
        if (block.type === 'p') {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === 'ul') {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>
                  {item.strong && <strong>{item.strong}</strong>}
                  {item.text}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'contact') {
          return (
            <div key={i} className={styles.inlineContacts}>
              <a href="mailto:ramgigatech@gmail.com" className={styles.inlineContact}>
                <div className={styles.inlineContactIcon} style={{ background: '#f5f3ff', color: '#7c3aed' }}>
                  <Mail size={16} />
                </div>
                <div>
                  <span className={styles.inlineContactLabel}>Email</span>
                  <span className={styles.inlineContactValue}>ramgigatech@gmail.com</span>
                </div>
              </a>
              <a href="tel:+917996656111" className={styles.inlineContact}>
                <div className={styles.inlineContactIcon} style={{ background: '#f0fdfa', color: '#0d9488' }}>
                  <Phone size={16} />
                </div>
                <div>
                  <span className={styles.inlineContactLabel}>Phone</span>
                  <span className={styles.inlineContactValue}>+91 7996656111</span>
                </div>
              </a>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroIcon}>
              <Shield size={28} />
            </div>
            <div className={styles.badge}>Legal Document</div>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.sub}>
              Ram Vector is committed to protecting your privacy. This policy explains
              what information we collect, how we use it, and the steps we take to keep it secure.
            </p>
            <div className={styles.meta}>
              <span className={styles.metaItem}><strong>App:</strong> Ram Vector</span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.metaItem}><strong>Effective:</strong> April 29, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className={styles.contactBanner}>
        <div className="container">
          <div className={styles.contactGrid}>
            {contacts.map(({ icon: Icon, title, desc, value, href, color, bg }) => {
              const inner = (
                <>
                  <div className={styles.contactIcon} style={{ background: bg, color }}>
                    <Icon size={20} />
                  </div>
                  <div className={styles.contactBody}>
                    <h3 className={styles.contactTitle}>{title}</h3>
                    <p className={styles.contactDesc}>{desc}</p>
                    <span className={styles.contactValue} style={{ color }}>{value}</span>
                  </div>
                </>
              );
              return href ? (
                <a key={title} href={href} className={styles.contactCard}>
                  {inner}
                </a>
              ) : (
                <div key={title} className={`${styles.contactCard} ${styles.contactCardStatic}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.layout}>

            {/* TOC sidebar */}
            <aside className={styles.toc} aria-label="Table of contents">
              <h2 className={styles.tocTitle}>Contents</h2>
              <nav>
                <ul className={styles.tocList}>
                  {sections.map(({ id, title }) => (
                    <li key={id}>
                      <a href={`#${id}`} className={styles.tocLink}>{title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={styles.tocContact}>
                <p>Questions?</p>
                <a href="mailto:ramgigatech@gmail.com">
                  <Mail size={12} /> ramgigatech@gmail.com
                </a>
                <a href="tel:+917996656111">
                  <Phone size={12} /> +91 7996656111
                </a>
              </div>
            </aside>

            {/* Sections */}
            <div className={styles.sections}>
              {sections.map(({ icon: Icon, id, title, content }) => (
                <section key={id} id={id} className={styles.section} aria-labelledby={`heading-${id}`}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIcon}>
                      <Icon size={18} />
                    </div>
                    <h2 id={`heading-${id}`} className={styles.sectionTitle}>{title}</h2>
                  </div>
                  <SectionContent content={content} />
                </section>
              ))}

              {/* Footer */}
              <div className={styles.policyFooter}>
                <p>
                  This Privacy Policy was last updated on <strong>April 29, 2026</strong>.
                  We reserve the right to update this policy periodically. Continued use of
                  Ram Vector following any changes constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

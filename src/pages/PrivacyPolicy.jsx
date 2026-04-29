import { Shield, Mail, Calendar, Lock, AlertTriangle, Trash2, Eye, Server } from 'lucide-react';
import styles from '../styles/PrivacyPolicy.module.css';

const sections = [
  {
    icon: Eye,
    id: 'information',
    title: '1. Information We Collect',
    content: (
      <>
        <p>Ram Vector is designed with privacy as a core principle. We collect only what is strictly necessary to operate the service:</p>
        <ul>
          <li><strong>Uploaded PDF documents</strong> — temporarily processed to generate summaries, insights, and action items. Files are not stored permanently on our servers.</li>
          <li><strong>Document metadata</strong> — file name and file size, used solely for processing validation.</li>
          <li><strong>Basic usage data</strong> — anonymous crash reports and performance diagnostics to improve app stability. No personally identifiable information is captured.</li>
          <li><strong>Device information</strong> — iOS version and device type (anonymised), used for technical compatibility purposes only.</li>
        </ul>
        <p>We do <strong>not</strong> collect your name, email address, or any account credentials. No login is required to use Ram Vector.</p>
      </>
    ),
  },
  {
    icon: Server,
    id: 'processing',
    title: '2. How Documents Are Processed',
    content: (
      <>
        <p>When you upload a PDF to Ram Vector:</p>
        <ul>
          <li>Your document is transmitted securely over HTTPS to our processing server.</li>
          <li>The document text is extracted and analysed by our AI engine to generate summaries, action items, workflow recommendations, and entity extraction.</li>
          <li>The analysis result is returned to your device immediately.</li>
          <li>Your document is <strong>not permanently stored</strong> on our servers. It is transiently processed and purged upon completion or expiry.</li>
          <li>AI-generated results are delivered exclusively to your device and are not shared with third parties.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Shield,
    id: 'third-party',
    title: '3. Third-Party AI Providers',
    content: (
      <>
        <p>To power our AI analysis capabilities, Ram Vector may use secure, enterprise-grade third-party AI API providers. These providers:</p>
        <ul>
          <li>Process document content solely for the purpose of generating AI summaries and analysis.</li>
          <li>Are bound by strict data processing agreements and do not retain submitted content beyond the processing window.</li>
          <li>Operate under industry-standard security frameworks.</li>
        </ul>
        <p>We carefully evaluate all third-party services for compliance with applicable privacy standards before integration.</p>
      </>
    ),
  },
  {
    icon: Calendar,
    id: 'retention',
    title: '4. Data Retention',
    content: (
      <>
        <p>Ram Vector operates on a minimal-retention principle:</p>
        <ul>
          <li><strong>Uploaded files</strong> — transiently processed and automatically deleted. Not stored beyond the analysis session.</li>
          <li><strong>AI results</strong> — returned to your device only. Not stored on our servers.</li>
          <li><strong>Usage analytics</strong> — anonymised and aggregated, retained for up to 90 days for service improvement purposes.</li>
        </ul>
        <p>We do not build user profiles. No persistent user data is maintained.</p>
      </>
    ),
  },
  {
    icon: Lock,
    id: 'security',
    title: '5. Security',
    content: (
      <>
        <p>We employ modern security practices to protect your data during transmission and processing:</p>
        <ul>
          <li><strong>TLS/HTTPS encryption</strong> — all data transmitted between your device and our servers is encrypted in transit.</li>
          <li><strong>Server-side security</strong> — our infrastructure is secured with industry-standard access controls and monitoring.</li>
          <li><strong>No permanent storage</strong> — uploaded documents are not persisted to disk or database after analysis completes.</li>
          <li><strong>Privacy screen</strong> — the app automatically hides document content when switched to the background, preventing data exposure in the iOS app switcher.</li>
        </ul>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    id: 'disclaimer',
    title: '6. User Responsibility & Disclaimer',
    content: (
      <>
        <p>While we take significant precautions to protect your data, users are advised:</p>
        <ul>
          <li><strong>Avoid uploading sensitive or confidential documents</strong> — such as classified government files, sensitive medical records, or proprietary legal contracts — unless you are comfortable with the described processing.</li>
          <li>Ram Vector is not responsible for the content of documents uploaded by users.</li>
          <li>Users are solely responsible for ensuring they have the right to upload and process documents they submit.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Trash2,
    id: 'deletion',
    title: '7. User Deletion Requests',
    content: (
      <>
        <p>Because Ram Vector does not maintain persistent user accounts or stored documents, there is no user data to formally delete. However:</p>
        <ul>
          <li>If you have concerns about any data that may have been retained, you may contact us at the email address below.</li>
          <li>We will investigate and respond within 30 days.</li>
          <li>You may uninstall Ram Vector at any time to remove all locally cached data from your device.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Mail,
    id: 'contact',
    title: '8. Contact Us',
    content: (
      <>
        <p>For any privacy-related questions, concerns, or requests, please contact:</p>
        <div style={{ marginTop: '12px' }}>
          <strong>Ram Vector Support</strong><br />
          <a href="mailto:ramgigatech@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>ramgigatech@gmail.com</a>
        </div>
        <p style={{ marginTop: '12px' }}>We aim to respond to all enquiries within 24–48 business hours.</p>
      </>
    ),
  },
];

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
              Ram Vector is committed to protecting your privacy. This policy explains what information we collect,
              how we use it, and the steps we take to keep it secure.
            </p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <strong>App Name:</strong> Ram Vector
              </span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.metaItem}>
                <strong>Effective Date:</strong> April 29, 2026
              </span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.metaItem}>
                <strong>Contact:</strong>{' '}
                <a href="mailto:ramgigatech@gmail.com">ramgigatech@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
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
                  <div className={styles.sectionBody}>
                    {content}
                  </div>
                </section>
              ))}

              {/* Effective date footer */}
              <div className={styles.policyFooter}>
                <p>
                  This Privacy Policy was last updated on <strong>April 29, 2026</strong>.
                  We reserve the right to update this policy periodically.
                  Continued use of Ram Vector following any changes constitutes acceptance of the revised policy.
                </p>
                <a href="mailto:ramgigatech@gmail.com" className="btn-primary" style={{ marginTop: 16, display: 'inline-flex' }}>
                  <Mail size={15} />
                  Contact Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

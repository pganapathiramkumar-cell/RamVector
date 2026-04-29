import { useState } from 'react';
import {
  Mail, Clock, ChevronDown, ChevronUp,
  Upload, Cpu, Shield, Bug, Settings, MessageCircle,
} from 'lucide-react';
import styles from '../styles/Support.module.css';

/* ── FAQ data ────────────────────────────────────────────── */
const faqs = [
  {
    q: 'My PDF upload failed. What should I do?',
    a: 'Ensure your PDF file is under 5 MB in size. Check that you have a stable internet connection and try again. If the issue persists, force-quit the app, reopen it, and attempt the upload again.',
  },
  {
    q: 'The summary was not generated. What should I do?',
    a: 'Please wait up to 30 seconds for AI processing to complete. If no result appears, tap "Cancel Analysis" and try uploading again. Our servers occasionally require a moment to warm up — a second attempt typically succeeds.',
  },
  {
    q: 'I have a privacy concern about my uploaded document.',
    a: 'Ram Vector processes your document transiently — it is not stored permanently on our servers. If you have a specific concern, please contact us at ramgigatech@gmail.com and we will respond within 24–48 hours.',
  },
  {
    q: 'I found a bug or the app crashed. How do I report it?',
    a: 'Please email us at ramgigatech@gmail.com with a brief description of what happened, the steps to reproduce the issue, your iOS version, and your device model. Screenshots are very helpful.',
  },
  {
    q: 'What file types does Ram Vector support?',
    a: 'Ram Vector currently supports PDF files only (.pdf), up to 5 MB. Support for additional file formats may be added in future releases.',
  },
  {
    q: 'Can I request a new feature?',
    a: 'Absolutely. We welcome feature suggestions. Please email ramgigatech@gmail.com with the subject line "Feature Request" and describe what you would find useful.',
  },
];

/* ── Topic cards ────────────────────────────────────────── */
const topics = [
  { icon: Upload, label: 'Upload Issues',         color: '#7c3aed', bg: '#f5f3ff' },
  { icon: Cpu,    label: 'AI Summary Questions',  color: '#4f46e5', bg: '#eef2ff' },
  { icon: Settings,label:'Feature Requests',      color: '#0d9488', bg: '#f0fdfa' },
  { icon: Bug,    label: 'Bug Reports',           color: '#dc2626', bg: '#fef2f2' },
  { icon: Shield, label: 'Privacy Questions',     color: '#0284c7', bg: '#f0f9ff' },
  { icon: MessageCircle, label: 'General Help',   color: '#7c3aed', bg: '#f5f3ff' },
];

/* ── FAQ item ───────────────────────────────────────────── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}>
      <button
        className={styles.faqQ}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        id={`faq-q-${index}`}
        aria-controls={`faq-a-${index}`}
      >
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div
        id={`faq-a-${index}`}
        role="region"
        aria-labelledby={`faq-q-${index}`}
        className={`${styles.faqA} ${open ? styles.faqAOpen : ''}`}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Support() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroIcon} aria-hidden="true">
              <MessageCircle size={28} />
            </div>
            <div className="badge">Support Center</div>
            <h1 className={styles.title}>Ram Vector Support</h1>
            <p className={styles.sub}>
              Need help? We are here for you. Browse our FAQ or contact us directly
              — we respond within 24–48 business hours.
            </p>
            <a href="mailto:ramgigatech@gmail.com" className="btn-primary" style={{ marginTop: 8 }}>
              <Mail size={16} />
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className={`section ${styles.contactSection}`} aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactGrid}>

            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon} style={{ background: '#f5f3ff', color: '#7c3aed' }}>
                <Mail size={22} />
              </div>
              <h3 className={styles.contactCardTitle}>Email Support</h3>
              <p className={styles.contactCardDesc}>
                Send us a detailed message and our team will get back to you as quickly as possible.
              </p>
              <a href="mailto:ramgigatech@gmail.com" className={styles.contactCardLink}>
                ramgigatech@gmail.com
              </a>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon} style={{ background: '#f0fdfa', color: '#0d9488' }}>
                <Clock size={22} />
              </div>
              <h3 className={styles.contactCardTitle}>Response Time</h3>
              <p className={styles.contactCardDesc}>
                We aim to respond to all support enquiries promptly during business hours.
              </p>
              <span className={styles.contactCardBadge}>Within 24–48 business hours</span>
            </div>

          </div>
        </div>
      </section>

      {/* Support topics */}
      <section className={`section ${styles.topicsSection}`} aria-labelledby="topics-heading">
        <div className="container">
          <h2 id="topics-heading" className={styles.sectionTitle}>Support Topics</h2>
          <p className={styles.sectionSub}>We can help you with any of the following areas:</p>
          <div className={styles.topicsGrid}>
            {topics.map(({ icon: Icon, label, color, bg }) => (
              <div key={label} className={styles.topicCard}>
                <div className={styles.topicIcon} style={{ background: bg, color }}>
                  <Icon size={20} />
                </div>
                <span className={styles.topicLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqLeft}>
              <div className="badge">FAQ</div>
              <h2 id="faq-heading" className={styles.faqTitle}>Frequently Asked Questions</h2>
              <p className={styles.faqSub}>
                Can't find what you're looking for? Email us and we'll help you directly.
              </p>
              <a href="mailto:ramgigatech@gmail.com" className="btn-outline" style={{ marginTop: 16 }}>
                <Mail size={15} />
                Ask a Question
              </a>
            </div>
            <div className={styles.faqRight} role="list">
              {faqs.map((item, i) => (
                <FAQItem key={i} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Still need help?</h2>
            <p className={styles.ctaSub}>
              Our support team is ready to assist you. Send us an email with your question, issue, or feedback.
            </p>
            <a href="mailto:ramgigatech@gmail.com" className="btn-primary">
              <Mail size={15} />
              ramgigatech@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

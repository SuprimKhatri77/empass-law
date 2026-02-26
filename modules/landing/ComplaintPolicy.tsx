"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface AccordionSection {
  id: string;
  heading: string;
  content: React.ReactNode;
}

// ─── Shared fade-up variant ───────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({
  section,
  isOpen,
  onToggle,
  index,
}: {
  section: AccordionSection;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index * 0.06}
      variants={fadeUp}
      style={{ borderBottom: "1px solid #e2e8f0" }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
        }}
        aria-expanded={isOpen}
      >
        <motion.span
          animate={{ color: isOpen ? "#4ECDC4" : "#05173a" }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(16px, 1.6vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          {section.heading}
        </motion.span>

        <motion.span
          animate={{
            borderColor: isOpen ? "#4ECDC4" : "#cbd5e1",
            backgroundColor: isOpen ? "#4ECDC4" : "transparent",
          }}
          transition={{ duration: 0.3 }}
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1.5px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke={isOpen ? "#05173a" : "#64748b"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                paddingBottom: 28,
                fontSize: "clamp(14px, 1.4vw, 16px)",
                lineHeight: 1.8,
                color: "#445566",
              }}
            >
              {section.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none" }}>
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}
        >
          <span
            style={{
              flexShrink: 0, marginTop: 8, width: 6, height: 6,
              borderRadius: "50%", background: "#4ECDC4", display: "inline-block",
            }}
          />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function ContactCard({
  icon, label, value, href,
}: {
  icon: React.ReactNode; label: string; value: string; href?: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 4, boxShadow: "4px 0 0 0 #4ECDC4" }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14,
        padding: "16px 20px", background: "#f8f9fb", borderLeft: "3px solid #4ECDC4",
      }}
    >
      <span style={{ color: "#4ECDC4", marginTop: 2, flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{
          fontSize: 11, letterSpacing: "0.15em",
          textTransform: "uppercase" as const, color: "#8899aa",
          fontWeight: 600, marginBottom: 3,
        }}>{label}</div>
        {href ? (
          <a href={href} style={{ fontSize: 15, color: "#05173a", textDecoration: "none", fontWeight: 500 }}>
            {value}
          </a>
        ) : (
          <span style={{ fontSize: 15, color: "#05173a", fontWeight: 500 }}>{value}</span>
        )}
      </div>
    </motion.div>
  );
}

function TimelineStep({
  step, title, description, isLast,
}: {
  step: string; title: string; description: string; isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: Number(step) * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", gap: 20 }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#05173a", border: "2px solid #4ECDC4",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Georgia', serif", fontSize: 14, color: "#4ECDC4", fontWeight: 600,
          }}
        >{step}</motion.div>
        {!isLast && (
          <div style={{ width: 1, flexGrow: 1, background: "#e2e8f0", margin: "6px 0" }} />
        )}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : 28 }}>
        <div style={{
          fontFamily: "'Georgia', serif", fontSize: 16,
          fontWeight: 400, color: "#05173a", marginBottom: 6,
        }}>{title}</div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "#556677" }}>{description}</p>
      </div>
    </motion.div>
  );
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const EmailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const PinIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const WebIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
  </svg>
);
const PostIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
  </svg>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ComplaintPolicy() {
  const [openId, setOpenId] = useState<string | null>("how-to-complain");
  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const sections: AccordionSection[] = [
    {
      id: "how-to-complain",
      heading: "How to Give Feedback or Make a Complaint",
      content: (
        <>
          <p style={{ margin: "0 0 14px" }}>
            Wherever possible, we encourage you to discuss any feedback or concerns with the lawyer handling
            your matter informally first, as they may be able to resolve your concerns without a formal complaint.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            If the issue cannot be resolved informally, or is of a serious or sensitive nature, please raise
            your concerns as a formal complaint with our Managing Partner:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10, margin: "20px 0" }}>
            <ContactCard icon={<EmailIcon />} label="Email" value="r.fogla@empasslaw.com" href="mailto:r.fogla@empasslaw.com" />
            <ContactCard icon={<PhoneIcon />} label="Telephone" value="074622 10102" href="tel:07462210102" />
            <ContactCard icon={<PinIcon />} label="Post" value="Rohit Fogla, 13 Hanover Square, London W1S 1HN" />
          </div>
          <p style={{ margin: "14px 0 0", fontSize: 14, color: "#667788" }}>
            Please include: why you feel dissatisfied, how you prefer to be contacted, and anything specific
            you would like us to do to resolve the complaint.
          </p>
        </>
      ),
    },
    {
      id: "what-happens",
      heading: "What Happens After I Make a Complaint?",
      content: (
        <>
          <p style={{ margin: "0 0 20px" }}>
            Our Managing Partner will handle your complaint with care and independence. Here is what you can expect:
          </p>
          <TimelineStep step="1" title="Written Acknowledgement — within 7 days" description="We will send a written acknowledgement within seven days of receiving your complaint. We may ask you to clarify or provide further details to help us investigate properly." />
          <TimelineStep step="2" title="Investigation — within 10 working days" description="The Managing Director will review your matter file and speak to relevant staff. We will arrange a discussion with you to try to agree a resolution within 10 working days." />
          <TimelineStep step="3" title="Written Confirmation — within 5 working days of meeting" description="Following any meeting or video call, we will write to confirm the key points discussed and any solution agreed." />
          <TimelineStep step="4" title="Written Reply (if no meeting) — within 15 working days" description="If you prefer not to meet, the Managing Director will send a written reply including suggestions for resolving the matter within 15 working days of the acknowledgement letter." />
          <TimelineStep step="5" title="Final Response — within 10 working days of review request" description="If you remain dissatisfied, a separate Director will review our decision and provide a formal Final Response setting out conclusions and any proposals to resolve the matter." isLast />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ marginTop: 20, padding: "16px 20px", background: "#f0fafa", borderLeft: "3px solid #4ECDC4", fontSize: 14, color: "#445566", lineHeight: 1.7 }}
          >
            We will not charge you for investigating and responding to your complaint. Your legal matter
            will continue to progress as normal and will not be affected by the complaints procedure.
          </motion.div>
        </>
      ),
    },
    {
      id: "bills",
      heading: "Do I Have to Pay My Bill While Complaining?",
      content: (
        <p style={{ margin: 0 }}>
          Our terms of business provide that invoices remain payable within 14 days, regardless of any ongoing
          complaint investigation. However, if the outcome concludes that an adjustment or reduction in costs is
          warranted, any reimbursement will be paid promptly at that time.
        </p>
      ),
    },
    {
      id: "timeline",
      heading: "How Long Will It Take?",
      content: (
        <>
          <p style={{ margin: "0 0 12px" }}>
            We aim to conclude our investigation and provide our Final Response as quickly as possible.
            Although we always aim for sooner, the process may take{" "}
            <strong style={{ color: "#05173a" }}>up to eight weeks from receipt of your complaint.</strong>
          </p>
          <p style={{ margin: 0 }}>
            In exceptional circumstances it may be necessary to extend these timescales. If this occurs,
            we will let you know in writing and will try to agree any variations with you first.
          </p>
        </>
      ),
    },
    {
      id: "outcome",
      heading: "What Might the Outcome Be?",
      content: (
        <>
          <p style={{ margin: "0 0 12px" }}>
            We regret any dissatisfaction our clients experience. If our investigation concludes that our service
            fell below our usual high standards, we will not hesitate to apologise and will make proposals to
            resolve or improve your situation.
          </p>
          <p style={{ margin: 0 }}>
            We will also take internal steps to ensure that any problems you have experienced do not recur,
            and will ask you to confirm whether we have succeeded in resolving your concerns.
          </p>
        </>
      ),
    },
    {
      id: "ombudsman",
      heading: "What If I Remain Dissatisfied? — Legal Ombudsman",
      content: (
        <>
          <p style={{ margin: "0 0 14px" }}>
            If you remain dissatisfied after receiving our Final Response, or if you have not received a Final
            Response within eight weeks, you may refer your complaint to the{" "}
            <strong style={{ color: "#05173a" }}>Legal Ombudsman.</strong> Time limits apply:
          </p>
          <BulletList items={[
            "Within 6 months of receiving our final response to your complaint, and",
            "No more than 1 year from the date of act or omission you are complaining about; or",
            "No more than 1 year from when you should reasonably have known there was cause for complaint.",
          ]} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, margin: "20px 0 0" }}>
            <ContactCard icon={<WebIcon />} label="Website" value="legalombudsman.org.uk" href="https://www.legalombudsman.org.uk/make-a-complaint" />
            <ContactCard icon={<PhoneIcon />} label="Telephone" value="0300 555 0333 (9am – 5pm)" href="tel:03005550333" />
            <ContactCard icon={<EmailIcon />} label="Email" value="enquiries@legalombudsman.org.uk" href="mailto:enquiries@legalombudsman.org.uk" />
            <ContactCard icon={<PostIcon />} label="Post" value="Legal Ombudsman, PO Box 6167, Slough SL1 0EH" />
          </div>
        </>
      ),
    },
    {
      id: "bill-complaints",
      heading: "Complaints About Your Bill",
      content: (
        <p style={{ margin: 0 }}>
          If you are complaining about our bill, in addition to the Legal Ombudsman, you may be entitled to ask
          the court to assess your costs under Part III of the Solicitors Act 1974. Strict time limits apply —
          applications made within one month of receiving a bill are usually granted as of right; after one month
          but within 12 months, the Court has discretion. Please note that if you apply to the Court, the Legal
          Ombudsman may not be able to consider a complaint about the same issues.
        </p>
      ),
    },
    {
      id: "misconduct",
      heading: "Concerns About Professional Misconduct",
      content: (
        <>
          <p style={{ margin: "0 0 12px" }}>
            The Legal Ombudsman considers complaints about the quality of legal services. In the unlikely event
            that you have more serious concerns about professional misconduct such as dishonesty or fraud, it may
            be appropriate to refer this to the{" "}
            <strong style={{ color: "#05173a" }}>Solicitors Regulation Authority (SRA).</strong>
          </p>
          <p style={{ margin: 0 }}>
            We would ask that you notify the matter supervisor straight away if you have any such concerns.
            More information is available at{" "}
            <a href="https://www.sra.org.uk" target="_blank" rel="noopener noreferrer"
              style={{ color: "#2c5697", textDecoration: "none", borderBottom: "1px solid #4ECDC4" }}>
              www.sra.org.uk
            </a>.
          </p>
        </>
      ),
    },
    {
      id: "adr",
      heading: "Alternative Dispute Resolution (ADR)",
      content: (
        <p style={{ margin: 0 }}>
          Other ADR service providers exist in the legal sector, including ProMediate. However, Empass Law
          believes that our internal complaints procedure and the Legal Ombudsman offer our clients the most
          appropriate forum for resolving concerns. We have therefore not adopted an alternative ADR procedure
          and do not agree to use another ADR organisation.
        </p>
      ),
    },
  ];

  return (
    <section
      id="complaint-policy"
      style={{ background: "#ffffff", padding: "clamp(60px, 8vw, 120px) clamp(24px, 6vw, 80px)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Section Header ───────────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 64, alignItems: "end" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 1, background: "#4ECDC4" }}
              />
              <span style={{ fontSize: 11, letterSpacing: "0.22em", color: "#4ECDC4", textTransform: "uppercase", fontWeight: 600 }}>
                Transparency &amp; Trust
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400,
              color: "#05173a", lineHeight: 1.1, margin: 0,
            }}>
              Client Feedback &amp;{" "}
              <span style={{ fontStyle: "italic", color: "#4ECDC4" }}>Complaints</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            variants={fadeUp}
          >
            <p style={{ fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.8, color: "#445566", margin: "0 0 20px" }}>
              We are committed to providing an excellent standard of service. We value your feedback greatly
              as it helps us to continually improve. If we have fallen short of the high standards we set for
              ourselves, we want the opportunity to put things right. Making a complaint will not affect how
              we handle your matter.
            </p>
            <motion.a
              href="mailto:r.fogla@empasslaw.com"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#2c5697",
                textDecoration: "none", borderBottom: "2px solid #4ECDC4", paddingBottom: 2,
              }}
            >
              Contact Rohit Fogla
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* ── Key Stats ────────────────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 56 }}>
          {[
            { figure: "7 days", label: "Acknowledgement" },
            { figure: "8 weeks", label: "Maximum Resolution Time" },
            { figure: "Free", label: "No Charge for Investigating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              style={{
                padding: "28px 24px",
                background: i === 1 ? "#05173a" : "#f8f9fb",
                textAlign: "center", cursor: "default",
              }}
            >
              <div style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 400,
                color: "#4ECDC4", lineHeight: 1, marginBottom: 8,
              }}>{stat.figure}</div>
              <div style={{
                fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: i === 1 ? "rgba(255,255,255,0.6)" : "#778899", fontWeight: 600,
              }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Accordion ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ borderTop: "1px solid #e2e8f0" }}
        >
          {sections.map((section, i) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              onToggle={() => toggle(section.id)}
              index={i}
            />
          ))}
        </motion.div>

        {/* ── Closing note ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: 48, padding: "32px 40px", background: "#05173a",
            display: "flex", alignItems: "flex-start", gap: 24,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
              border: "1.5px solid #4ECDC4",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="20" height="20" fill="none" stroke="#4ECDC4" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.div>
          <div>
            <p style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(16px, 1.6vw, 20px)", fontStyle: "italic",
              color: "#ffffff", margin: "0 0 8px", lineHeight: 1.5,
            }}>
              &ldquo;Thank you for bringing your concerns to our attention.&rdquo;
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.7 }}>
              We will do our best to address any dissatisfaction you have experienced in using the services
              of this practice. Our primary objective is to put things right.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
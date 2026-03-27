import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useTranslation } from "../contexts/TranslationContext";

type PrivacySection = {
  title: string;
  body: string[];
};

const sections: PrivacySection[] = [
  {
    title: "Introduction",
    body: [
      "Rémi Guillette Group (\"we\", \"our\", \"us\") is committed to protecting the privacy and personal information of our clients and users of our website. This privacy policy describes how we collect, use, disclose, and protect your personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
    ],
  },
  {
    title: "Company Information",
    body: [
      "Legal Name: Rémi Guillette RG Groupe",
      "Operating Name: Rémi Guillette Group",
      "Website: remiguillette.ca",
      "Email: info@remiguillette.ca",
    ],
  },
  {
    title: "What data do we collect?",
    body: [
      "We collect the following personal information when you use our services:",
      "Personal information provided directly",
      "Full name (first and last name)",
      "Email address",
      "Phone number",
      "Mailing address",
      "Information about your business or organization",
      "Messages and communications you send to us",
      "Information about requested services",
      "Automatically collected data",
      "IP address",
      "Browser type and version",
      "Operating system",
      "Pages visited on our website",
      "Date and time of visit",
      "Session duration",
      "Cookie and similar technology data",
    ],
  },
  {
    title: "Why are we collecting this information?",
    body: [
      "We use your personal information for the following purposes:",
      "Provide our professional consulting services",
      "Communicate with you about our services",
      "Process your requests and respond to your inquiries",
      "Improve our website and services",
      "Comply with legal and regulatory obligations",
      "Maintain the security of our systems",
      "Analyze website usage for improvement",
    ],
  },
  {
    title: "How do we obtain consent?",
    body: [
      "We obtain your consent in several ways:",
      "Explicit consent when submitting forms",
      "Implied consent when using our services",
      "Consent through acceptance of terms of use",
      "Consent for cookies via our cookie banner",
    ],
  },
  {
    title: "Who do we share this information with?",
    body: [
      "We do not sell your personal information. We may share it with:",
      "Third-party service providers who help us operate our website (AWS)",
      "Legal or accounting professionals as needed",
      "Government authorities when required by law",
      "Business partners with your explicit consent",
    ],
  },
  {
    title: "International transfers",
    body: [
      "Our website is hosted by Amazon Web Services (AWS), and our domain services are managed by Amazon Web Services (AWS) in the us-east-1 region. Your data may be transferred to and stored in the United States.",
      "AWS implements appropriate security measures to protect your data in accordance with international data protection standards.",
    ],
  },
  {
    title: "How do we protect data?",
    body: [
      "We implement various security measures:",
      "Encryption of data in transit (SSL/TLS)",
      "Limited access to personal information",
      "Regular security monitoring",
      "Staff training on data protection",
      "Regular security system updates",
      "Secure data backup",
    ],
  },
  {
    title: "Cookies and similar technologies",
    body: [
      "We use cookies to improve your experience on our website. These cookies may include session cookies, persistent cookies, and analytics cookies.",
      "AWS also uses cookies for platform functionality. Please refer to AWS privacy policy for more information about their cookie usage.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under PIPEDA, you have the right to:",
      "Access your personal information",
      "Correct inaccurate information",
      "Withdraw your consent (subject to legal restrictions)",
      "Request deletion of your data",
      "File a complaint with the Privacy Commissioner of Canada",
    ],
  },
  {
    title: "Who should I contact if I have questions?",
    body: [
      "For any questions about this privacy policy or your personal information, contact us:",
      "info@remiguillette.ca",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We reserve the right to modify this privacy policy at any time.",
      "We will notify you of significant changes through a notice on our website or by email if you have provided your email address.",
    ],
  },
];

function renderFirstWordBlueRestOrange(value: string) {
  const [firstWord, ...remainingWords] = value.trim().split(/\s+/);

  if (!firstWord) return null;

  return (
    <>
      <span className="accent-blue">{firstWord}</span>
      {remainingWords.length > 0 ? (
        <>
          {" "}
          <span className="accent-orange">{remainingWords.join(" ")}</span>
        </>
      ) : null}
    </>
  );
}

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const text = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  const translatedSections = sections.map((section, sectionIndex) => ({
    title: text(`privacyPolicy.sections.${sectionIndex}.title`, section.title),
    body: section.body.map((paragraph, paragraphIndex) =>
      text(`privacyPolicy.sections.${sectionIndex}.body.${paragraphIndex}`, paragraph),
    ),
  }));

  return (
    <>
      <Header />
      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="container">
            <h1>
              <span className="accent-blue">{text("privacyPolicy.hero.titleLead", "Privacy")}</span>{" "}
              <span className="accent-orange">{text("privacyPolicy.hero.titleAccent", "Policy")}</span>
            </h1>
            <p>{text("privacyPolicy.hero.lastUpdated", "Last updated: March 25, 2026")}</p>
          </div>
        </section>

        <section className="privacy-sections">
          <div className="container privacy-grid">
            {translatedSections.map((section, sectionIndex) => (
              <article key={`${section.title}-${sectionIndex}`} className="privacy-card">
                <h2>{renderFirstWordBlueRestOrange(section.title)}</h2>
                {section.body.map((paragraph, paragraphIndex) => (
                  <p key={`${sectionIndex}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

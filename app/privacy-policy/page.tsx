"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["introduction"])
  );

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to Tese Africa. Tese Africa ("we," "us," or "our") respects
            your privacy and is committed to protecting your personal data in
            accordance with Zimbabwe's Cyber and Data Protection Act [Chapter
            12:07] and Statutory Instrument 155 of 2024. This Privacy Policy
            explains:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>What data we collect</li>
            <li>How we use, disclose and protect it</li>
            <li>Your legal rights regarding your data</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            By using our services, you consent to this policy. If you disagree,
            please discontinue use immediately.
          </p>
        </div>
      ),
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              A. Personal Data (Provided by You)
            </h4>
            <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
              <li>
                <strong>Identity & Contact Data:</strong> Name, email, phone
                number, physical address, government-issued ID (for
                verification)
              </li>
              <li>
                <strong>Financial Data:</strong> Payment details Bank Account
                Details (processed via a secure third-party gateway - Smatpay)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              B. Automated Data (Collected via Technology)
            </h4>
            <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, session duration,
                clickstream data (via cookies)
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              C. Third-Party Data
            </h4>
            <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
              <li>
                Social Media/Login Integrations: If you link accounts (e.g.,
                Google, Facebook)
              </li>
              <li>
                Publicly Available Data: Property records, business directories
                (for due diligence)
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "collection-methods",
      title: "3. How We Collect Information",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Direct Collection
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              When you register, fill out forms, or communicate with us.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Automated Technologies
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Through cookies and similar tracking technologies when you use our
              platform.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "legal-basis",
      title: "4. Legal Basis for Processing",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We process your personal data based on the following legal grounds:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Consent:</strong> Where you have provided explicit consent
              (e.g., marketing emails). You may withdraw consent anytime
            </li>
            <li>
              <strong>Contractual Necessity:</strong> Where processing is
              necessary for the performance of a contract
            </li>
            <li>
              <strong>Legal Obligation:</strong> Anti-fraud, tax, or to comply
              with legal and regulatory obligations under Zimbabwean law
            </li>
            <li>
              <strong>Legitimate Interests:</strong> For purposes such as
              improving our services and ensuring security
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-usage",
      title: "5. How We Use Your Information",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            We use your data for:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>Providing and improving our services</li>
            <li>Processing transactions and verifying identity</li>
            <li>Communicating updates, offers, and legal notices</li>
            <li>
              Complying with legal obligations under Zimbabwean law (e.g., Data
              Protection Act [Chapter 11:12])
            </li>
          </ul>

          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Purpose & Legal Basis
            </h4>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div className="p-3 bg-white rounded dark:bg-gray-700">
                <span className="font-medium text-gray-900 dark:text-white">
                  Provide services (e.g transactions)
                </span>
                <span className="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Contractual Necessity
                </span>
              </div>
              <div className="p-3 bg-white rounded dark:bg-gray-700">
                <span className="font-medium text-gray-900 dark:text-white">
                  Verify identity/ownership (KYC compliance)
                </span>
                <span className="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Legal Obligation
                </span>
              </div>
              <div className="p-3 bg-white rounded dark:bg-gray-700">
                <span className="font-medium text-gray-900 dark:text-white">
                  Prevent fraud, money laundering
                </span>
                <span className="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Legitimate Interest
                </span>
              </div>
              <div className="p-3 bg-white rounded dark:bg-gray-700">
                <span className="font-medium text-gray-900 dark:text-white">
                  Send service updates/promotions (opt-out available)
                </span>
                <span className="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Consent/Legitimate Interest
                </span>
              </div>
              <div className="p-3 bg-white rounded dark:bg-gray-700">
                <span className="font-medium text-gray-900 dark:text-white">
                  Analyze website traffic for improvements
                </span>
                <span className="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                  Legitimate Interest
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "6. Data Sharing & Disclosure",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We may share data with:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Service Providers:</strong> Third parties who assist in
              delivering our services e.g. Payment processors, hosting providers
              etc.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required by law (e.g.,
              fraud prevention) or to protect our rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of mergers or
              acquisitions.
            </li>
            <li>
              <strong>Business Partners:</strong> With your consent, for joint
              marketing initiatives.
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            We ensure that all third parties respect the security of your
            personal data and comply with the Cyber and Data Protection Act.
          </p>
          <p className="font-medium text-gray-700 dark:text-gray-300">
            We never sell your data to third-party advertisers.
          </p>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "7. Data Security",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">We implement:</p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Technical Safeguards:</strong> SSL/TLS encryption,
              firewalls, regular penetration testing
            </li>
            <li>
              <strong>Administrative Controls:</strong> Staff training, strict
              access permissions (role-based)
            </li>
            <li>
              <strong>Physical Protections:</strong> Secure server locations,
              restricted facility access
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            No system is 100% secure, so we advise users to:
          </p>
          <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>Use strong passwords</li>
            <li>Avoid sharing login credentials</li>
            <li>Monitor accounts for suspicious activity</li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "8. Your Rights (Under Zimbabwean Law)",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            You have the right to:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Access:</strong> Request access to your personal data
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate
              or incomplete data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your personal data,
              subject to legal constraints
            </li>
            <li>
              <strong>Objection:</strong> Object to the processing of your data
              under certain circumstances
            </li>
            <li>
              <strong>Withdrawal:</strong> Withdraw consent (where applicable)
            </li>
            <li>
              <strong>Lodge complaints:</strong> With the Zimbabwe Data
              Protection Authority
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            To exercise these rights, contact us at info@smatechgroup.com. We
            respond within 30 days (may extend for complex requests).
          </p>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "9. Data Retention",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We retain your personal data only as long as necessary for the
            purposes outlined in this policy or as required by law:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Active Users:</strong> Until account deletion request
            </li>
            <li>
              <strong>Legal Requirements:</strong> Tax records (5+ years),
              transaction history (7+ years)
            </li>
            <li>
              <strong>Marketing Data:</strong> Until consent withdrawal or 2
              years of inactivity
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "10. Cookies & Tracking Technologies",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We use cookies to enhance user experience. You can disable cookies
            via browser settings. We use:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Essential Cookies:</strong> For site functionality (cannot
              be disabled)
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Google Analytics (anonymized
              IPs, opt-out available)
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Only with your consent
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Manage preferences via browser settings or our Cookie Banner.
          </p>
        </div>
      ),
    },
    {
      id: "international-transfers",
      title: "11. International Data Transfers",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            If data crosses borders (e.g., cloud servers abroad), we ensure:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Adequacy Decisions:</strong> Recipient countries have
              comparable data protection laws
            </li>
            <li>
              <strong>Safeguards:</strong> Standard Contractual Clauses (SCCs)
              or binding corporate rules
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "policy-changes",
      title: "12. Changes to This Policy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We may update this policy periodically. Updates will be posted here
            with a new "Last Updated" date. Material changes (e.g., new data
            uses) may trigger direct notifications. Continued use of our
            services constitutes acceptance of changes.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "13. Contact Us",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            For privacy-related inquiries or your personal data, please contact
            us at:
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Mail className="w-4 h-4" />
              <span>legal@smatechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>13 Brentwood Avenue, Groombridge, Harare</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Privacy Policy
          </h1>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            Last Updated: January 1, 2026
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="secondary"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            <Button
              onClick={() => window.print()}
              className="flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Print Policy</span>
            </Button>
          </div>
        </motion.div>

        {/* Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 bg-white shadow-xl dark:bg-gray-800 rounded-2xl"
        >
          {/* Table of Contents */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => toggleSection(section.id)}
                  className="px-3 py-2 text-sm text-left text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="overflow-hidden border border-gray-200 rounded-lg dark:border-gray-700"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left transition-colors bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <span
                      className={`transform transition-transform ${
                        expandedSections.has(section.id) ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </div>
                </button>
                {expandedSections.has(section.id) && (
                  <div className="px-6 py-4 bg-white dark:bg-gray-800">
                    {section.content}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="pt-6 mt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/terms">
                <Button variant="secondary" className="flex-1">
                  View Terms & Conditions
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="flex-1">Contact Support</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

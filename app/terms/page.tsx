"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Shield,
  Scale,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const TermsAndConditions = () => {
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
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to Tese Africa. This agreement sets forth the terms and
            conditions governing your access to and use of Tese Africa, a secure
            content creator platform owned and operated by Propsmart
            Technologies (Private) Limited ("Propsmart," "we," or "us"). These
            Terms of Service ("Terms") are applicable to you in your capacity as
            a buyer, seller, sender, or receiver of electronic funds
            (collectively, "Users") utilizing Tese Africa.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Your use or access of the Service is contingent upon your acceptance
            of these Terms. IF YOU DO NOT AGREE TO THESE LEGAL TERMS, THEN YOU
            ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>
        </div>
      ),
    },
    {
      id: "definitions",
      title: "2. Definitions",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            For purposes of these Terms:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Platform:</strong> The Tese Africa website, applications,
              APIs, and services
            </li>
            <li>
              <strong>User:</strong> Any individual or entity accessing or using
              the Platform
            </li>
            <li>
              <strong>Creator:</strong> A User who publishes content and
              receives payments through Tese Africa
            </li>
            <li>
              <strong>Supporter:</strong> A User who makes payments to a Creator
            </li>
            <li>
              <strong>Content:</strong> Any text, audio, video, images, or
              digital material uploaded or shared by a Creator
            </li>
            <li>
              <strong>Payment Services:</strong> Payment processing services
              provided through third-party processors, including Smatpay
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "agreement",
      title: "3. Agreement and Language",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            By registering for or otherwise utilizing the Tese Africa service,
            you signify your acknowledgment of having read, understood, and
            agreed to be bound by the terms and conditions set forth in this
            Agreement. For your convenience, it is advisable to review, save, or
            print a copy of this Agreement for your records. Your acceptance
            will be confirmed electronically during the registration process
            through actions such as ticking a checkbox or clicking a button.
          </p>
          <p className="font-medium text-gray-700 dark:text-gray-300">
            Please note that this Agreement is provided exclusively in English.
          </p>
        </div>
      ),
    },
    {
      id: "legal-use",
      title: "4. Using Tese Africa Legally",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Your use of Tese Africa must at-all-times comply with all applicable
            laws and regulations in the Zimbabwean jurisdiction, regardless of
            your purpose for using the service. This includes, but is not
            limited to, financial regulations, consumer protection laws, and
            anti-money laundering (AML) requirements.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Tese Africa is committed to providing a secure and lawful platform,
            and we encourage you to familiarize yourself with relevant
            regulations.
          </p>
          <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
            <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
              Acceptance of the Acceptable Use Policy
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              By using Tese Africa, you acknowledge and agree to be bound by the
              terms and conditions set forth in our Acceptable Use Policy (AUP).
              The AUP outlines specific restrictions and prohibited activities
              on the Tese Africa platform. We consider the AUP an integral part
              of this agreement.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "registration",
      title: "5. Registration Requirements",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            To register for a Tese Africa account and access the Service, you
            must:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              Be a banked individual or company with a financial institution in
              Zimbabwe that participates in the Tese Africa network
            </li>
            <li>
              Possess the legal capacity to enter into binding contracts
              (typically 18 years of age or older)
            </li>
            <li>
              Be a Content Creator, who develops and produces their own content
              with social media presence
            </li>
          </ul>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Individual Accounts:
              </h4>
              <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                <li>National ID</li>
                <li>Proof of residence</li>
                <li>
                  Zimbabwean bank statement (dated within the last 3 months)
                </li>
                <li>Valid payment instrument details</li>
                <li>Mobile money option information (if applicable)</li>
                <li>Bank account number for receiving payments</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                Company Accounts:
              </h4>
              <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                <li>Certified copies of directors' national IDs</li>
                <li>Certificate of incorporation</li>
                <li>Memorandum of association</li>
                <li>Proof of business directors' physical address</li>
                <li>Bank statement</li>
                <li>Letter of permission to open a billing account</li>
                <li>Contact person(s) email address(es)</li>
                <li>Valid payment instrument details</li>
                <li>Bank account number for receiving payments</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            Note: Tese Africa may require additional information or
            documentation during the registration process to verify your
            identity and comply with regulatory requirements.
          </p>
        </div>
      ),
    },
    {
      id: "payout",
      title: "6. Payout Clause",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Payout Requests and Processing:
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
              <li>
                Initial payout for new merchants may take up to 5 business days
                to process
              </li>
              <li>
                Subsequent payouts will be processed within 24-48 hours of
                receiving the payout request
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Transfer and VAT Charges:
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              All transfer charges including VAT incurred at the point of
              transaction shall be borne solely by the merchant. These charges
              will be deducted from the payout amount prior to the transfer.
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Tese Africa Charges (Fee Structure):
            </h4>
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-3 py-2 font-semibold text-left text-gray-900 dark:text-white">
                        Currency
                      </th>
                      <th className="px-3 py-2 font-semibold text-left text-gray-900 dark:text-white">
                        Fee Structure
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                        USD
                      </td>
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                        9.5% + $0.50 per transaction
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                        ZWG
                      </td>
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                        9.5% + ZWG15 per transaction
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                These fees are subject to change and will be communicated to
                clients in advance of any updates.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "branding",
      title: "7. Mandatory Branding",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            All creators using Tese Africa are required to display the "Powered
            by Tese Africa" branding on every payment interface where the Tese
            Africa system is implemented.
          </p>
          <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800">
            <h4 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
              Branding Guidelines
            </h4>
            <ul className="space-y-1 text-sm text-yellow-800 list-disc list-inside dark:text-yellow-200">
              <li>Placement: Clearly visible on payment interface</li>
              <li>Logo Usage: Official logo must be used as provided</li>
              <li>Minimum Size: Must be legible on all screen sizes</li>
              <li>
                Alternative Text: "Powered by Tese Africa" if logo cannot be
                used
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Non-compliance with this clause shall be deemed a material breach of
            this agreement and may result in the suspension or termination of
            the merchant's access to the Tese Africa payment gateway.
          </p>
        </div>
      ),
    },
    {
      id: "service-updates",
      title: "8. Service Updates and Availability",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            We strive to continuously improve Tese Africa and may occasionally
            make changes or updates. This could involve adding new features,
            modifying existing ones, or even temporarily suspending services for
            maintenance.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                Updates and Changes
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Tese Africa may evolve over time with new features or
                adjustments.
              </p>
            </div>
            <div className="p-4 border border-orange-200 rounded-lg bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
              <h4 className="mb-2 font-semibold text-orange-900 dark:text-orange-100">
                Downtime
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Unforeseen events may cause temporary service interruptions.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            While we take all reasonable steps to minimize downtime and ensure
            service continuity, Tese Africa cannot be held liable for any
            interruptions or their consequences.
          </p>
        </div>
      ),
    },
    {
      id: "liability",
      title: "9. Limitation of Liability and Indemnification",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
            <h4 className="mb-2 font-semibold text-red-900 dark:text-red-100">
              Important Note:
            </h4>
            <p className="text-sm text-red-800 dark:text-red-200">
              These Terms do not limit our liability for death or personal
              injury caused by our negligence, fraud, or fraudulent
              misrepresentation, or any other liability that cannot be limited
              or excluded by law.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Disclaimer of Warranties:
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Subject to the above, and to the fullest extent permitted by law,
              Tese Africa disclaims all express or implied conditions,
              warranties, representations, or other terms that might apply to
              the Platform or its content.
            </p>

            <h4 className="font-semibold text-gray-900 dark:text-white">
              Limitations on Our Liability:
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              We will not be held liable for any loss or damage arising from
              your use of, or inability to use, the Platform, or your reliance
              on any content displayed on the Platform.
            </p>

            <h4 className="font-semibold text-gray-900 dark:text-white">
              User Indemnification:
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              You agree to indemnify, defend, and hold harmless Propsmart, its
              officers, directors, employees, agents, licensors, and suppliers
              from and against all losses, expenses, damages, claims, demands,
              liabilities, costs, and attorneys' fees arising out of or related
              to your use of the Service or your violation of these Terms.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "reporting",
      title: "10. Reporting Violations",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Tese Africa is committed to maintaining a safe and secure
            environment for all users. If you encounter any activity that you
            suspect violates our Acceptable Use Policy, please report it to us
            immediately through the following methods:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              <strong>Contact Us Page:</strong> This is the easiest way to
              report a violation. Provide clear details about the suspected
              activity.
            </li>
            <li>
              <strong>Tese Africa Help Center:</strong> Search our Help Center
              for answers to frequently asked questions or browse relevant
              articles for guidance on responsible use of Tese Africa.
            </li>
          </ul>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            For your own protection, if you're ever unsure about the legality or
            legitimacy of a transaction, we strongly recommend contacting your
            issuing financial institution directly.
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      title: "11. Service Termination",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Tese Africa reserves the right to terminate your access to the
            service for any reason, including, but not limited to:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>Inactivity: Prolonged periods of inactivity on your account</li>
            <li>
              Policy Violations: Any breach of our Terms of Service or
              Acceptable Use Policy
            </li>
            <li>
              Fraudulent Activity: Suspected or confirmed fraudulent activity
              associated with your account
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Upon termination, you will no longer be able to access your Tese
            Africa account or its functionalities. You remain liable for any
            outstanding obligations associated with your account at the time of
            termination.
          </p>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "12. Intellectual Property Rights",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Tese Africa acknowledges and protects intellectual property rights.
            The following outlines the ownership and usage of our intellectual
            property:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside dark:text-gray-300">
            <li>
              The Tese Africa website URLs, logos, and any related trademarks or
              service marks used for our products and services are the exclusive
              property of Propsmart Technologies Private Limited ("Propsmart")
              or its licensors
            </li>
            <li>
              All page headers, custom graphics, button icons, and scripts on
              the Tese Africa website are also protected by intellectual
              property rights
            </li>
            <li>
              You may not copy, imitate, modify, alter, or use any of Tese
              Africa's intellectual property without our prior written consent
            </li>
          </ul>
          <div className="p-4 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-800">
            <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
              Limited Exceptions
            </h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              Tese Africa may provide authorized HTML logos for use by merchants
              and partners within approved programs. These logos can be used
              solely to direct web traffic to the Tese Africa service.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "dispute-resolution",
      title: "13. Dispute Resolution",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Tese Africa prioritizes a smooth and secure experience for both
            merchants and customers. However, transaction disputes may
            occasionally arise. We encourage merchants and customers to work
            directly towards resolving any disagreements.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                Direct Communication
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Merchants and customers are encouraged to communicate directly
                to resolve transaction issues.
              </p>
            </div>
            <div className="p-4 border border-green-200 rounded-lg bg-green-50 dark:bg-green-900/20 dark:border-green-800">
              <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
                Tese Africa Support
              </h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                Our representatives can provide guidance and assist in
                facilitating communication between the parties.
              </p>
            </div>
            <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
              <h4 className="mb-2 font-semibold text-purple-900 dark:text-purple-100">
                Formal Process
              </h4>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Tese Africa may offer a separate Dispute Resolution Policy
                outlining a formal process for handling transaction disputes.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "14. Governing Law",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            These Legal Terms shall be governed by and defined following the
            laws of Zimbabwe. Propsmart technologies Pvt Ltd and yourself
            irrevocably consent that the courts of Zimbabwe shall have exclusive
            jurisdiction to resolve any dispute which may arise in connection
            with these Legal Terms.
          </p>
        </div>
      ),
    },
    {
      id: "amendments",
      title: "15. Amendments to Terms",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Tese Africa reserves the right to modify, amend, or update these
            terms and conditions at any time. Any changes will be promptly
            published on our website and communicated to all active clients via
            email.
          </p>
          <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800">
            <h4 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
              Client Acknowledgment
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              It is the responsibility of each client to review the updated
              terms and conditions. Continued use of our services following any
              changes constitutes acceptance of the revised terms. Clients will
              be required to explicitly opt-in to confirm their agreement to the
              updated terms and conditions.
            </p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Any amendments to these terms and conditions will become effective
            immediately upon publication on our website, unless otherwise stated
            in the notification email.
          </p>
        </div>
      ),
    },
    {
      id: "disclaimer",
      title: "16. Disclaimer",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT
            OR COURSE OF DEALING OR USAGE.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
            COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES
            OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO
            LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
            INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
            PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
            ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR
            USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
            AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
            CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
            VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
            THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
            OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
            ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
            TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
            ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
            THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
            MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND
            WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
            MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS
            OF PRODUCTS OR SERVICES.
          </p>
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
            Terms and Conditions
          </h1>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            Version 2.0 | Effective Date: December 9, 2025
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
              <span>Print Terms</span>
            </Button>
          </div>
        </motion.div>

        {/* Terms Content */}
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
                  className="flex items-center px-3 py-2 space-x-2 text-sm text-left text-gray-700 transition-colors rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.title}</span>
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
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {section.title}
                      </h3>
                    </div>
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

          {/* Final Notice */}
          <div className="pt-6 mt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="p-6 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
              <h3 className="mb-2 font-semibold text-red-900 dark:text-red-100">
                By Using Tese Africa, You Acknowledge:
              </h3>
              <p className="text-red-800 dark:text-red-200">
                You have read, understood, and agree to be bound by these Terms.
                If you do not agree to these legal terms, you are expressly
                prohibited from using the services and must discontinue use
                immediately.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-6 sm:flex-row">
              <Link href="/privacy-policy">
                <Button variant="secondary" className="flex-1">
                  View Privacy Policy
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

export default TermsAndConditions;

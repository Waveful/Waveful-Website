/* eslint-disable react/no-unescaped-entities */
//NextJS
import Head from "next/head";
import Link from "next/link";

//Components
import Hero from "@/components/Hero";

const legalDocuments = [
  {
    title: "Terms of Use",
    description: "The general terms and conditions governing the use of the Waveful platform.",
    href: "/legal/terms-of-use"
  },
  {
    title: "Terms of Use - Specific Clauses",
    description: "Important legal clauses related to the Terms of Use that require special attention.",
    href: "/legal/terms-of-use-specific-clauses"
  },
  {
    title: "Terms of Use for Creators",
    description: "Additional terms and conditions specifically for creators participating in the Waveful Creator Program.",
    href: "/legal/terms-of-use-for-creators"
  },
  {
    title: "Privacy Policy",
    description: "Information about how we collect, use, and protect your personal data.",
    href: "/legal/privacy"
  },
  {
    title: "Cookie Policy",
    description: "Details about the cookies and similar technologies used on our platform.",
    href: "/legal/cookies"
  }
];

export default function LegalIndex() {
  return (
    <>
      <Head>
        <title>Legal - Waveful</title>
      </Head>
      <main>
        <section className="mx-auto max-w-4xl mt-24 px-5 py-14">
          <div className="">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Legal Documents</h2>
              <p className="text-gray-200 mb-6">
                Welcome to Waveful's legal center. Here you can find all our legal documents that govern the use of our platform.
                Please read these documents carefully as they outline your rights and obligations when using Waveful.
              </p>
            </div>
            <div className="divide-y divide-gray-800">
              {legalDocuments.map((doc, index) => (
                <Link 
                  key={index} 
                  href={doc.href}
                  className="block p-6 transition-colors duration-150"
                >
                <h3 className="text-lg font-medium underline text-gray-300 mb-1">
                    {doc.title}
                </h3>
                <p className="text-gray-300">
                    {doc.description}
                </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Hero />
      </main>
    </>
  );
}
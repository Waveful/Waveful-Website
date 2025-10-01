//NextJS
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from 'react';

//Components
import Hero from "@/components/Hero";

// Translation
import { useTranslation } from '@/hooks/useTranslation';

interface LegalDocument {
  title: string;
  description: string;
  path: string;
}

export default function LegalIndex() {
  const { t } = useTranslation();
  const [documents, setDocuments] = useState<LegalDocument[]>([]);
  
  useEffect(() => {
    try {
      const docsData = t('legal.documents');
      
      // Handle different possible return types from t()
      if (Array.isArray(docsData)) {
        setDocuments(docsData as unknown as LegalDocument[]);
      } else if (docsData && typeof docsData === 'object') {
        // If it's an object, try to convert it to an array
        const docsArray = Object.values(docsData);
        if (Array.isArray(docsArray)) {
          setDocuments(docsArray as unknown as LegalDocument[]);
        }
      }
    } catch (error) {
      console.error('Error loading legal documents:', error);
      setDocuments([]);
    }
  }, [t]);
  
  return (
    <>
      <Head>
        <title>{t('legal.title')} - Waveful</title>
      </Head>
      <main>
        <section className="mx-auto max-w-4xl mt-24 px-5 py-14">
          <div className="">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">{t('legal.title')}</h2>
              <p className="text-gray-200 mb-6">
                {t('legal.welcome')} {t('legal.description')}
              </p>
            </div>
            
            {documents.length > 0 ? (
              <div className="mt-8 space-y-4">
                {documents.map((doc: LegalDocument, index: number) => (
                  <Link 
                    key={index} 
                    href={doc.path} 
                    className="block p-6 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <h3 className="text-xl font-medium text-white mb-2">{doc.title}</h3>
                    <p className="text-gray-300">{doc.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
                <p className="text-gray-300">Unable to load legal documents at this time. Please try again later.</p>
                <div className="mt-4">
                  <Link 
                    href="/" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Return to home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
        <Hero />
      </main>
    </>
  );
}
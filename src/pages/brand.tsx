//NextJS
import Head from "next/head";
import useTranslation from "@/hooks/useTranslation";
import Hero from "@/components/Hero";

interface IconDownload {
  name: string;
  description: string;
  files: {
    name: string;
    url: string;
    format: string;
    size?: string;
  }[];
}

export default function Brand() {
  const { t } = useTranslation();

  const iconDownloads: IconDownload[] = [
    {
      name: t("brand.appIcons.title"),
      description: t("brand.appIcons.description"),
      files: [
        {
          name: "Circle",
          url: "/app_icon_waveful_circle.png",
          format: "PNG",
          size: "1024x1024"
        },
        {
          name: "Rounded",
          url: "/app_icon_waveful_rounded.png",
          format: "PNG",
          size: "1024x1024"
        },
        {
          name: "Square",
          url: "/app_icon_waveful_square.png",
          format: "PNG",
          size: "1024x1024"
        }
      ]
    },
    {
      name: t("brand.logos.title"),
      description: t("brand.logos.description"),
      files: [
        {
          name: "Black",
          url: "/logo_waveful_black.png",
          format: "PNG"
        },
        {
          name: "Coloured",
          url: "/logo_waveful_coloured.png",
          format: "PNG"
        },
        {
          name: "Social",
          url: "/logo_waveful_social.png",
          format: "PNG"
        },
        {
          name: "White",
          url: "/logo_waveful_white.png",
          format: "PNG"
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>{t("brand.title")} - Waveful</title>
        <meta name="description" content={t("brand.description")} />
      </Head>
      <main className="min-h-screen mt-24 bg-black">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t("brand.title")}
            </h1>
            <p className="text-xl text-gray-200 max-w-xl mx-auto">
              {t("brand.description")}
            </p>
          </div>

          {/* Icon Downloads */}
          <div className="space-y-16">
            {iconDownloads.map((section, sectionIndex) => (
              <div key={sectionIndex} className="rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-black mb-4">
                    {section.name}
                  </h2>
                  <p className="text-lg text-gray-200">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.files.map((file, fileIndex) => (
                    <div
                      key={fileIndex}
                      className="bg-gray-200 rounded-xl p-6"
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center ">
                          <img 
                            src={file.url} 
                            alt={`${file.name} ${file.format}`}
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <h3 className="font-semibold text-black mb-2">
                          {file.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {file.format} {file.size && `• ${file.size}`}
                        </p>
                        <a
                          href={file.url}
                          download
                          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg text-sm font-medium"
                        >
                          {t("brand.download")}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 mb-4">
              {t("brand.contact.text")}
            </p>
            <a
              href="https://help.waveful.com"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-xl transition-colors duration-200 font-medium"
            >
              {t("brand.contact.button")}
            </a>
          </div>
        </div>

        <Hero />
      </main>
    </>
  );
}

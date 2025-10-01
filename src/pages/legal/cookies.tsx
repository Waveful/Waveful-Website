//NextJS
import Head from "next/head";

//Components
import Hero from "@/components/Hero";

// Translation
import useTranslation from "@/hooks/useTranslation";

export default function Cookies() {
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <title>{t('cookies.title')} - Waveful</title>
      </Head>
      <main>
        <section className="mx-auto max-w-[840px] mt-24 px-5 py-14">
          <h1 className="text-3xl font-bold mb-4">{t('cookies.title')}</h1>
          <h2 className="text-xl font-bold mt-6 mb-2">{t('cookies.intro')}</h2>
          <p className="mb-4">{t('cookies.welcome')}</p>
          <p className="mb-4">{t('cookies.description')}</p>
          <p className="mb-6">{t('cookies.mission')}</p>
          <p className="mb-6">{t('cookies.dataUsage')}</p>
          <p className="mb-6" dangerouslySetInnerHTML={{
            __html: t('privacy.contact').replace('${email}', '<a href="mailto:privacy@waveful.app" class="underline">privacy@waveful.app</a>')
          }} />
          
          <p className="mb-6">
            This cookie policy is provided, pursuant to articles 13 and 122 of the Code regarding the protection of personal data 
            (Legislative Decree 196/03, the so-called &quot;Privacy Code&quot;) and the current provisions of the Supervisory Authority 
            regarding Cookies and other Tracking Tools (as defined below), to those who connect (hereafter also defined as &quot;Users&quot;) 
            to this website (hereinafter the &quot;Website&quot;) managed by Waveful S.r.l., with headquarters in Italy, 20121 Milan (MI), 
            Via Daniele Manin 3, VAT Identification Number IT12343330960, e-mail privacy@waveful.app (&quot;Controller&quot;) in relation 
            to the use of cookies.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">{t('cookies.howTrackingToolsWork')}</h2>
          <p className="mb-4">
            The tracking tools (&quot;Tracking Tools&quot;) are divided into two main categories:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Cookies</li>
            <li>The Other Tracking Tools</li>
          </ul>
          
          <p className="mb-4">
            Cookies (&quot;Cookies&quot;) are small text strings - which may include personal data (e.g. IP address, username, 
            e-mail address, etc.) and technical information (e.g. language settings, device type) - that web servers 
            send to the user&apos;s terminal (personal computer or mobile device such as tablet or smartphone), where they 
            are stored (e.g. in the browser&apos;s memory), and then incorporated in any subsequent HTTP request resent.
          </p>
          
          <p className="mb-4">
            Cookies are used for specific purposes, such as computer authentication, session monitoring and the storage 
            of information on websites (without the use of cookies some operations would be very complex or impossible 
            to perform), also with reference to the identification preferences based on the browsing experience. 
            While browsing a website, the User may also receive Cookies on his terminal from different websites or 
            web servers (so-called &quot;Third Parties&quot;) which may contain other information relating to the visited website 
            (such as, for example, images, maps, sounds, specific links to pages of other domains).
          </p>
          
          <p className="mb-6">
            There are also other tracking tools (e.g. the so-called &quot;Fingerprinting&quot;, &quot;Pixel Tag&quot; etc.) which, while based 
            on a different technology, share similar purposes with Cookies and achieve the same results (the &quot;Other Tracking Tools&quot;). 
            These tools, unlike Cookies, do not store information within the user&apos;s device and are not directly removable 
            by the user himself through the browser settings; it is therefore necessary that the user exercises the right 
            to revoke the authorization for their use through the features made available on the website by the Controller 
            to review his choices.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">Classification of Tracking Tools</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Type of tool</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Cookies</li>
              <li>Other Tracking Tools</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">Origin</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2">First party (this Website)</li>
              <li>Third Party (website managed by a different subject than the Controller)</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Temporary (session or for a predetermined period of time)</li>
              <li>Permanent (until cancellation by the user)</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-2">Purposes</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Technical Purposes (relating to the operation of the Website and to aggregate and anonymous statistics on accesses made by the users)
              </li>
              <li>
                Non-technical purposes (e.g. tracking of user activities for the purpose of sending personalized communications)
              </li>
            </ul>
          </div>
          
          <h2 className="text-xl font-bold mt-6 mb-2">How to manage cookies on your browser</h2>
          <p className="mb-6">
            The User is informed that he can authorize, block or delete (in whole or in part) Cookies through the specific settings of his browser or through additional third-party components.
          </p>
          
          <p className="mb-6">
            However, disabling the Website&apos;s Technical Cookies may mean that some of the Website&apos;s services or features will not be available or may not work properly (e.g. the Website may require the User to enter some data or information each time the Website is accessed).
          </p>
          
          <p className="mb-4">
            For more information on how to set preferences on the use of cookies through your browser, see the following instructions:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Chrome
              </a>
            </li>
            <li className="mb-2">
              <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Firefox
              </a>
            </li>
            <li className="mb-2">
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Microsoft Edge
              </a>
            </li>
          </ul>
          
          <h2 className="text-xl font-bold mt-6 mb-2">Cookies and Other Tracking Tools used by this Website</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">a) Cookies with technical purpose</h3>
            <p className="mb-4">
              Cookies with technical purposes (&quot;Technical Cookies&quot;) allow easy use of this Website and easier retrieval of information, simplifying the connection and transmission of data between the user and the server.
            </p>
            
            <p className="mb-4">
              They are defined by the Provision of 8 May 2014 of the Privacy Supervisor Authority, as those used for the sole purpose of &quot;carrying out the transmission of a communication over an electronic communications network, or to the extent strictly necessary for the supplier in order to provide a service requested by the subscriber or user&quot; (see Article 122, paragraph 1, of the Privacy Code).
            </p>
            
            <p className="mb-4">
              This Website uses some Technical Cookies in order to ensure the proper operation of the Website (e.g. by allowing access to restricted areas without the need to login each time) or to customize the user experience.
            </p>
            
            <p className="mb-4">
              Without the use of these Cookies, some of the Website&apos;s services may not be accessible, displayed correctly or may be provided in a non-optimal manner.
            </p>
            
            <p>
              The so-called Third Party Analytical Cookies (e.g. Google Analytics) are considered as Technical Cookies when used directly by the Controller to collect information, in aggregate form, on the number of users and how they visit the Website.
            </p>
          </div>
          
          <div className="mb-6">
            <p className="mb-4">
              The prior consent of the user is not required for the installation of Technical Cookies.
            </p>
            
            <p className="mb-4">
              In any case, the User is informed that the installation of these Technical Cookies can be blocked through the browser settings (see the &quot;Management of cookies on different browsers&quot; section of this policy).
            </p>
            
            <p className="mb-4">
              However, the preventive blocking and/or removal of some Technical Cookies may make the browsing experience less satisfactory and, in some cases, may block some of the Website&apos;s services.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">b) Cookies with non-technical function</h3>
            <p>
              These are tools used to trace certain, specific and recurring behaviours or activities in the use of the services of the Website by certain subjects, in order to associate the different profiles to homogeneous groupings. This is helpful to optimize and customize the services offered and/or send advertising messages in line with the preferences expressed by the User when browsing the web.
            </p>
          </div>
          
          <div className="mb-6">
            <p className="mb-6">
              The user&apos;s consent is always required for the installation of these Cookies.
            </p>
            
            <h3 className="text-lg font-semibold mb-4">List of cookies used by this Website</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-mono">__stripe_sid</span> / <span className="font-mono">__stripe_mid</span>: technical, temporary, third-party cookie created by Stripe; used to prevent fraud on the Stripe payment system.
              </li>
              <li>
                <span className="font-mono">__dd_s</span>: technical, temporary, third party cookie created by Datadog; it allows to group the events generated by a unique user session on multiple pages. Contains the ID of the current session.
              </li>
              <li>
                <span className="font-mono">__ga</span> / <span className="font-mono">__ga*</span> / <span className="font-mono">_gid</span>: technical, temporary, third party cookie created by Google Analytics; used to collect information and generate statistics on the use of websites without providing personal information on individual visitors to Google.
              </li>
              <li>
                <span className="font-mono">_iub-cs*</span> / <span className="font-mono">usprivacy</span>: technical, temporary, third-party cookie created by Iubenda Cookie Solution; used to save cookie preferences and privacy preferences.
              </li>
              <li>
                <span className="font-mono">wf_csrf</span> / <span className="font-mono">wf-csrf.sig</span>: technical, third-party session cookie, created by Webflow to maintain the security of the session, guarantee the safety of navigation by preventing the falsification of requests between sites. These cookies are essential for the security of the website and the visitor.
              </li>
              <li>
                <span className="font-mono">wf-order-id</span> / <span className="font-mono">wf-order-id.sig</span>: temporary, technical, third-party cookie, created by Webflow; used to save the shopping cart of the website.
              </li>
              <li>
                <span className="font-mono">_fbp</span>: temporary, non-technical (profiling), third-party cookie, created by Meta; used to analyze the results of marketing campaigns and promotional campaigns carried out through Meta. This cookie is installed only with the user&apos;s consent. This cookie is currently disabled and not installed anymore.
              </li>
            </ul>
          </div>

        </section>
        <Hero />
      </main>
    </>
  );
}

import Hero from "@/components/Hero";
import Head from "next/head";

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Waveful</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        <section className="mx-auto max-w-[840px] mt-24 px-5 py-14">
          <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
          <h2 className="text-xl font-bold mt-6 mb-2">Hi 👋</h2>
          <p className="mb-4">I'm Waveful, the creator-friendly social network where everyone can become a creator 🌊</p>
          <p className="mb-4">Before diving into our cookie policy, let me tell you what you can find in this page. We will start with a general explanation on how tracking tools (also known as "cookies") work, the current classification of tracking tools and how to manage cookies on your browser. After this introductory explanations you can find a general explanation on which category of cookies are used by Waveful and then an in-depth list of the cookies used by Waveful.</p>
          <p className="mb-6">So let's start...</p>

          <h2 className="text-xl font-bold mt-6 mb-2">Introduction</h2>
          This cookie policy is provided, pursuant to articles 13 and 122 of the Code regarding the protection of personal data (Legislative Decree 196/03, the so-called "Privacy Code") and the current provisions of the Supervisory Authority regarding Cookies and other Tracking Tools (as defined below), to those who connect (hereafter also defined as “Users") to this website (hereinafter the "Website") managed by Waveful S.r.l., with headquarters in Italy, 20121 Milan (MI), Via Daniele Manin 3, VAT Identification Number IT12343330960, e-mail privacy@waveful.app ("Controller") in relation to the use of cookies.

          How Tracking Tools Work
          The tracking tools ("Tracking Tools") are divided into two main categories:

          Cookies;
          the Other Tracking Tools.
          Cookies ("Cookies") are small text strings - which may include personal data (e.g. IP address, username, e-mail address, etc.) and technical information (e.g. language settings, device type) - that web servers send to the user's terminal (personal computer or mobile device such as tablet or smartphone), where they are stored (e.g. in the browser's memory), and then incorporated in any subsequent HTTP request resent.

          Cookies are used for specific purposes, such as computer authentication, session monitoring and the storage of information on websites (without the use of cookies some operations would be very complex or impossible to perform), also with reference to the identification preferences based on the browsing experience. While browsing a website, the User may also receive Cookies on his terminal from different websites or web servers (so-called "Third Parties") which may contain other information relating to the visited website (such as, for example, images, maps, sounds, specific links to pages of other domains).

          There are also other tracking tools (e.g. the so-called "Fingerprinting", "Pixel Tag" etc.) which, while based on a different technology, share similar purposes with Cookies and achieve the same results (the "Other Tracking Tools"). These tools, unlike Cookies, do not store information within the user's device and are not directly removable by the user himself through the browser settings; it is therefore necessary that the user exercises the right to revoke the authorization for their use through the features made available on the website by the Controller to review his choices.

          Classification of Tracking Tools
          Type of tool

          Cookies
          Other Tracking Tools
          Origin

          First party (this Website)
          Third Party (website managed by a different subject than the Controller)
          Duration

          Temporary (session or for a predetermined period of time)
          Permanent (until cancellation by the user)
          Purposes

          Technical Purposes (relating to the operation of the Website and to aggregate and anonymous statistics on accesses made by the users)
          Non-technical purposes (e.g. tracking of user activities for the purpose of sending personalized communications)
          How to manage cookies on your browser
          The User is informed that he can authorize, block or delete (in whole or in part) Cookies through the specific settings of his browser or through additional third-party components.
          ‍
          However, disabling the Website's Technical Cookies may mean that some of the Website's services or features will not be available or may not work properly (e.g. the Website may require the User to enter some data or information each time the Website is accessed).
          ‍
          For more information on how to set preferences on the use of cookies through your browser, see the following instructions:

          Chrome
          Firefox
          Safari
          Microsoft Edge
          Cookies and Other Tracking Tools used by this Website
          a) Cookies with technical purpose
          Cookies with technical purposes ("Technical Cookies") allow easy use of this Website and easier retrieval of information, simplifying the connection and transmission of data between the user and the server.
          ‍
          They are defined by the Provision of 8 May 2014 of the Privacy Supervisor Authority, as those used for the sole purpose of "carrying out the transmission of a communication over an electronic communications network, or to the extent strictly necessary for the supplier in order to provide a service requested by the subscriber or user" (see Article 122, paragraph 1, of the Privacy Code).
          ‍
          This Website uses some Technical Cookies in order to ensure the proper operation of the Website (e.g. by allowing access to restricted areas without the need to login each time) or to customize the user experience.
          ‍
          Without the use of these Cookies, some of the Website's services may not be accessible, displayed correctly or may be provided in a non-optimal manner.
          ‍
          The so-called Third Party Analytical Cookies (e.g. Google Analytics) are considered as Technical Cookies when used directly by the Controller to collect information, in aggregate form, on the number of users and how they visit the Website.

          The prior consent of the user is not required for the installation of Technical Cookies.
          ‍
          In any case, the User is informed that the installation of these Technical Cookies can be blocked through the browser settings (see the "Management of cookies on different browsers" section of this policy).
          ‍
          However, the preventive blocking and/or removal of some Technical Cookies may make the browsing experience less satisfactory and, in some cases, may block some of the Website's services.

          b) Cookies with non-technical function
          These are tools used to trace certain, specific and recurring behaviours or activities in the use of the services of the Website by certain subjects, in order to associate the different profiles to homogeneous groupings. This is helpful to optimize and customize the services offered and/or send advertising messages in line with the preferences expressed by the User when browsing the web.
          ‍
          The user's consent is always required for the installation of these Cookies.

          List of cookies used by this Website
          __stripe_sid / __stripe_mid: technical, temporary, third-party cookie created by Stripe; used to prevent fraud on the Stripe payment system.
          __dd_s: technical, temporary, third party cookie created by Datadog; it allows to group the events generated by a unique user session on multiple pages. Contains the ID of the current session.
          __ga / __ga* / _gid: technical, temporary, third party cookie created by Google Analytics; used to collect information and generate statistics on the use of websites without providing personal information on individual visitors to Google.
          _iub-cs* / usprivacy: technical, temporary, third-party cookie created by Iubenda Cookie Solution; used to save cookie preferences and privacy preferences.
          wf_csrf / wf-csrf.sig: technical, third-party session cookie, created by Webflow to maintain the security of the session, guarantee the safety of navigation by preventing the falsification of requests between sites. These cookies are essential for the security of the website and the visitor.
          wf-order-id/ wf-order-id.sig: temporary, techincal, third-party cookie, created by Webflow; used to save the shopping cart of the website.
          _fbp: temporary, non-techincal (profiling), third-party cookie, created by Meta; used to analyze the results of marketing campaigns and promotional campaigns carried out through Meta. This cookie is installed only with the user's consent. This cookie is currently disabled and not installed anymore.

        </section>

        <Hero />
      </main>
    </>
  );
}

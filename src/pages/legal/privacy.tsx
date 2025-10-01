//NextJS
import Head from "next/head";

//Components
import Hero from "@/components/Hero";

// Translation
import { useTranslation } from '@/hooks/useTranslation';

export default function Privacy() {
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <title>{t('privacy.title')} - Waveful</title>
      </Head>
      <main>
        <section className="mx-auto max-w-[840px] mt-24 px-5 py-14">
          <h1 className="text-3xl font-bold mb-4">{t('privacy.title')}</h1>
          <h2 className="text-xl font-bold mt-6 mb-2">{t('privacy.intro')}</h2>
          <p className="mb-4">{t('privacy.welcome')}</p>
          <h3 className="text-lg font-bold mt-6 mb-2">{t('privacy.missionTitle')}</h3>
          <p className="mb-4">{t('privacy.mission')}</p>
          <h3 className="text-lg font-bold mt-6 mb-2">{t('privacy.dataTitle')}</h3>
          <p className="mb-4">{t('privacy.dataUsage')}</p>
          <p className="mb-6">{t('privacy.noSelling')}</p>
          <p className="mb-6" dangerouslySetInnerHTML={{
            __html: t('privacy.contact').replace('${email}', '<a href="mailto:privacy@waveful.app" class="underline">privacy@waveful.app</a>')
          }} />
          
          <h2 className="text-xl font-bold mt-6 mb-2">Introduction</h2>
          <p className="mb-4">
            <strong>Controller:</strong> Waveful S.r.l., with headquarters in Italy, 20121 Milan (MI), 
            Via Daniele Manin 3, VAT Identification Number IT12343330960, 
            email: privacy@waveful.app.
          </p>
          
          <p className="mb-6">
            Pursuant to and for the purposes of art. 13 of Regulation (EU) no. 2016/679 of the European Parliament 
            and of the Council of 27 April 2016 concerning the protection of individuals with regard to the 
            Processing of Personal Data, as well as the free circulation of such Data (the &quot;Regulation&quot; or the &quot;GDPR&quot;) 
            and legislative decree 30 June 2003, n. 196 &quot;Code regarding the protection of personal data&quot; (&quot;Code&quot;) 
            (Code and Regulations also jointly defined as &quot;Regulations&quot;) we inform the interested parties 
            (&quot;Data Subjects&quot;) that their Personal Data will be processed in compliance with the Regulations 
            and what is specified below.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mt-6 mb-4">0) Definitions</h3>
            
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold">Authorized</dt>
                <dd className="ml-4">
                  The natural persons authorized to carry out Processing operations under the direct authority of the Controller or the Processor, pursuant to art. 29 of the Regulation and art. 2-quaterdecies of the Code.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Communication</dt>
                <dd className="ml-4">
                  The giving knowledge of Personal Data to one or more specific subjects other than the Data Subject, the Controller&apos;s representative in the State, the Processor and the Authorized, in any form, including by making them available or consulting.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Contents</dt>
                <dd className="ml-4">
                  Means any music, sound element, photograph, image, video, message, or other material, uploaded and/or published by the user on the platform (by way of example, posts, comments, messages sent and/or received through the messaging service, etc.).
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Controller</dt>
                <dd className="ml-4">
                  Means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the Processing of Personal Data; where the purposes and means of such Processing are determined by Union or Member State law, the Controller or the specific criteria for its nomination may be provided for by Union or Member State law. For the purposes of this Privacy Policy, the terms &quot;Controller&quot; and &quot;Waveful&quot; are equivalent.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Data Subject</dt>
                <dd className="ml-4">The natural person to whom the Personal Data refers.</dd>
              </div>
              
              <div>
                <dt className="font-semibold">Designated</dt>
                <dd className="ml-4">
                  The natural person who is assigned specific tasks and functions related to the Processing of Personal Data and who operates under the authority of the Controller or the Processor, pursuant to art. 2-quaterdecies of the Code.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Personal Data or Data</dt>
                <dd className="ml-4">
                  Any information relating to a natural person, identified or identifiable, even indirectly, by reference to any other information, with particular reference to an identifier such as the name, an identification number, location data, an identifier online or to one or more characteristic elements of its physical, physiological, genetic, psychic, economic, cultural or social identity.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Privacy Policy</dt>
                <dd className="ml-4">This document.</dd>
              </div>
              
              <div>
                <dt className="font-semibold">Processing</dt>
                <dd className="ml-4">
                  Means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Processor</dt>
                <dd className="ml-4">
                  The natural or legal person, public authority, service or other body that processes Personal Data on behalf of the Controller.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Security Measures</dt>
                <dd className="ml-4">
                  The set of technical (including IT), organizational and physical measures adopted by the Controller to guarantee a level of security adequate to the risk of the Processing, pursuant to art. 32 of the Regulation.
                </dd>
              </div>
              
              <div>
                <dt className="font-semibold">Supervisory Authority</dt>
                <dd className="ml-4">The supervisory authority referred to in art. 51 of the Regulation.</dd>
              </div>
            </dl>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-bold mt-6 mb-4">1) Context of the Processing</h3>
            <p className="mb-6">
              This Privacy Policy is provided by the Controller in relation to the following context:
              Processing of Personal Data relating to the use of the Waveful application and the Waveful website by users.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-4">2) Processing operations</h3>
            <p className="mb-4">
              The Data collected, the purposes for which they are processed, the legal bases and Data retention period are reported below in analytical form.
            </p>

            <div className="space-y-6">
              {/* Operation 1 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">Allow registration to Waveful services.</p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">Allow registration to Waveful services.</p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">Email, Username, Telephone number, Account name, Date of birth, Country of residence, IP address.</p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Data will be stored no later than 30 days from the deactivation of the account.</p>
              </div>

              {/* Operation 2 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">Management of the user&apos;s personal profile on the platform and Contents upload.</p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">Management of the user&apos;s personal profile on the platform and Contents upload.</p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">Profile picture, Contents, Bio, Links to external websites, Username, Account name, User ID, IP address.</p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Data will be stored until cancellation by the user, which can be performed at any time and, in any case, no later than 30 days from the deactivation of the account.</p>
              </div>

              {/* Operation 3 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Interactions with other users (through messaging services and through the ability to &quot;react&quot; to other users&apos; contents, for example, with likes, Superlikes and comments), exporting Contents from other users.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Interactions with other users (through messaging services and through the ability to &quot;react&quot; to other users&apos; contents, for example, with likes, Superlikes and comments), exporting Contents from other users.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">Username, Data of various kinds contained in the message, Contents, Account name, User ID, IP address.</p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Data will be stored until cancellation by the user, which can be performed at any time and, in any case, no later than 30 days from the deactivation of the account.</p>
              </div>

              {/* Operation 4 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Request to find friends and contacts that are already on Waveful through Contacts uploading. Allow to be findable by friends and contacts.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Request to find friends and contacts that are already on Waveful through Contacts uploading. Allow to be findable by friends and contacts.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  Device&apos;s Address Book (only names, phone numbers and emails), Email, Telephone number, User ID, IP address.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Data will be stored until cancellation by the user, which can be performed at any time and, in any case, no later than 30 days from the deactivation of the account.</p>
              </div>

              {/* Operation 5 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Create a unique link to allow the user to receive benefits and/or rewards upon registration of invited friends.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Create a unique link to allow the user to receive benefits and/or rewards upon registration of invited friends.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">Unique link, User ID, IP address.</p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Data will be stored no later than 30 days from the deactivation of the account.</p>
              </div>

              {/* Operation 6 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Purchase of premium/paid services through device stores (e.g., Google Play Store, Apple App Store).
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Purchase of premium/paid services through device stores (e.g., Google Play Store, Apple App Store).
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  Username, Account name, User ID, IP address, Purchase object, Country of purchase.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>10 years starting from each single purchase (expiry of the limitation period applicable to the conservation of accounting records).</p>
              </div>

              {/* Operation 7 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Payments relating to the compensation accrued by a Creator user.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Payments relating to the compensation accrued by a Creator user.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  Name, Surname, E-mail, Fiscal Code/tax code, VAT number, Telephone number, Residence/domicile address, Payment instrument, User ID, IP address.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>10 years (expiry of the limitation period applicable to the conservation of accounting records).</p>
              </div>

              {/* Operation 8 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Receipt and storage of tax documents required by current legislation.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Receipt and storage of tax documents required by current legislation.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  Name, Surname, E-mail, Fiscal code/tax code, VAT number, certified e-mail or SDI code, Residence/domicile address, User ID, IP address.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The processing of such Data is necessary for compliance with a legal obligation to which the Controller is subject [art. 6 c) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>10 years (expiry of the limitation period applicable to the conservation of accounting records).</p>
              </div>

              {/* Operation 9 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Sending of non-commercial communications to the user (notices on activities carried out on the platform).
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Sending of non-commercial communications to the user (notices on activities carried out on the platform).
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  E-mail, Username, Account name, User ID, IP address.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>30 days from the sending of the single notice.</p>
              </div>

              {/* Operation 10 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Sale of physical products through the Controller&apos;s website and subsequent shipment to the user.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Sale of physical products through the Controller&apos;s website and subsequent shipment to the user.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  Name, Surname, E-mail, Shipping address, Payment instrument.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>10 years starting from each single purchase (expiry of the limitation period applicable to the conservation of accounting records).</p>
              </div>

              {/* Operation 11 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Issuing an invoice or equivalent tax documentation relating to the purchase of products on Controller&apos;s website.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Issuing an invoice or equivalent tax documentation relating to the purchase of products on Controller&apos;s website.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  Name, Surname, E-mail, Fiscal code/tax code, VAT number, certified e-mail or SDI code, Residence/domicile address.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The processing of such Data is necessary for compliance with a legal obligation to which the Controller is subject [art. 6 c) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>10 years (expiry of the limitation period applicable to the conservation of accounting records).</p>
              </div>

              {/* Operation 12 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Managing user support requests.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Managing user support requests.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  E-mail, Username, Account name, User ID, IP address, content of the message containing the request for assistance.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Data will be stored no later than 30 days from the deactivation of the account.</p>
              </div>

              {/* Operation 13 */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Operation:</h4>
                <p className="mb-3">
                  Provisioning the services offered by the application.
                </p>
                
                <h4 className="font-semibold mb-2">Purpose of this operation:</h4>
                <p className="mb-3">
                  Provisioning the services offered by the application.
                </p>
                
                <h4 className="font-semibold mb-2">Data processed in this operation:</h4>
                <p className="mb-3">
                  IP address, Navigation Data, User ID.
                </p>
                
                <h4 className="font-semibold mb-2">Legal base of this operation:</h4>
                <p className="mb-3">
                  The Processing of such Data is necessary for the performance of a contract to which the Data Subject is party or in order to take steps at the request of the Data Subject prior to entering into a contract [art. 6 b) GDPR].
                </p>
                
                <h4 className="font-semibold mb-2">Data retention period:</h4>
                <p>Navigation Data are deleted within 30 days from the time of collection, without prejudice to any need for the investigation of crimes by the judicial authority.</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mt-6 mb-4">3) Processing methods and categories of recipients</h3>
            <p className="mb-4">
              Unless otherwise expressly provided for in this Privacy Policy, the Data Subject is informed that the Processing of his/her Personal Data is carried out using manual systems and/or IT, telematic or automated systems, in compliance with the principles of relevance, lawfulness, fairness and purposes provided for by the Regulation.
            </p>
            <p className="mb-4">
              Pursuant to the Regulation, the Controller processes the Personal Data of the Data Subject by adopting the appropriate Security Measures aimed at minimizing the risks of unauthorized access, diffusion, loss and destruction of the aforementioned Data.
            </p>
            <p className="mb-4">
              The Data Subject is also informed that the Processing of Personal Data for the accomplishment of the aforementioned purposes may be carried out by the Controller directly or with the collaboration of other subjects, as Processors, Designated or Authorized (e.g. employees and/or collaborators of the Controller).
            </p>
            <p className="mb-4">
              In particular, the Data may be disclosed to the following categories of recipients (independent Controllers): other platform users (for example when sending messages or interacting with them), Italian revenue agency (fiscal agency).
            </p>
            <p className="mb-4">
              The Data Subject is informed that Personal Data may be disclosed to the following categories of external Processors: cloud service providers, content delivery network (CDN) providers, payment services, accountant, e-mail services.
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-4">
              The list of Processors can be consulted at any time, by request to be sent to the e-mail address indicated at the beginning of this Privacy Policy.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mt-6 mb-4">4) Data Transfer</h3>
            <p className="mb-4">
              The Data Subject is informed that the Personal Data processed by the Controller may be transferred to other countries within the European Union.
            </p>
            <p className="mb-4">
              The Data Subject is informed that the Personal Data processed by the Controller may be transferred to other countries outside the European Union, for which there is an adequacy decision by the EU Commission or for which additional security measures are applied to the outcome of an assessment by the Controller regarding the impact of the transfer on the rights and freedoms of the Data Subject.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mt-6 mb-4">5) Rights of the Data Subject</h3>
            <p className="mb-4">
              The Data Subject may exercise at any time, by means of a notice to be sent to the addresses indicated at the beginning of this Privacy Policy, the rights provided for by the Regulation pursuant to articles 15-22. In particular:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The Data Subject has the right to ask the Controller for access to Personal Data, pursuant to and within the limits of art. 15 of the Regulation.</li>
              <li>The Data Subject has the right to ask the Controller to rectificate inaccurate Personal Data, pursuant to and within the limits set out in art. 16 of the Regulation.</li>
              <li>The Data Subject has the right to ask the Controller to erase the Personal Data, pursuant to and within the limits of art. 17 of the Regulation.</li>
              <li>The Data Subject has the right to ask the Controller to restrict the Processing of Personal Data, pursuant to and within the limits of art. 18 of the Regulation.</li>
              <li>The Data Subject has the right to ask the Controller to transmit his/her Personal Data in a structured, commonly used and machine-readable format, pursuant to and within the limits of art. 20 of the Regulation.</li>
              <li>The Data Subject has the right to object to the Processing by the Controller, pursuant to and within the limits of art. 21 of the Regulation.</li>
              <li>The Data Subject has the right to withdraw consent with reference to those Processing operations that are based on this legal basis. Pursuant to art. 7, paragraph 3 and art. 13, paragraph 2 lett. c) of the Regulation, the Data Subject is informed that, in any case, the withdrawal of consent does not affect the lawfulness of the Processing based on consent before the withdrawal itself.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mt-6 mb-4">6) Changes to this Privacy Policy</h3>
            <p className="mb-4">
              The Controller reserves the right to make changes to this Privacy Policy at any time. The Controller will post the up-to-date Privacy Policy on the Website.
            </p>
            <p className="mb-4">
              This Privacy Policy was published on December 23, 2022.
            </p>
          </div>
        </section>
        <Hero />
      </main>
    </>
  );
}

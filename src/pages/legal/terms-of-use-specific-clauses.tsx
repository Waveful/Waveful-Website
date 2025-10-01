/* eslint-disable react/no-unescaped-entities */
//NextJS
import Head from "next/head";

//Components
import Hero from "@/components/Hero";

export default function TermsOfUseSpecificClauses() {
  return (
    <>
      <Head>
        <title>Terms of Use - Specific Clauses - Waveful</title>
      </Head>
      <main>
        <section className="mx-auto max-w-[840px] mt-24 px-5 py-14">
          <h1 className="text-3xl font-bold mb-4">Terms of Use - Specific Clauses</h1>
          
          <p className="mb-6">The User expressly approves, after having carefully read them, the contents of the following clauses that refer to the <a href="/legal/terms-of-use" className="text-gray-300 underline">Terms of Use</a>:</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 2 - Modification of the Conditions</h2>
          <p className="mb-6">The Provider reserves the right to modify these Conditions at any time, giving notice to the User by publishing the updated version on the Platform. The User's continued use of the Platform after such publication will constitute acceptance of the modified Conditions.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 3.4 - Withdrawal of the Provider without notice in case of incorrect Data; exclusion of liability</h2>
          <p className="mb-6">The Provider has the right to verify the accuracy of the Data provided by the User during Registration. In case of proven inaccuracies or irregularities, the Provider reserves the right to withdraw from this Agreement without notice, with the exclusion of any and all rights of the User to refunds, indemnities and/or damages.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 5 - Intellectual property and licenses; conditions and limits for downloading the Contents</h2>
          <p className="mb-4">5.1. All intellectual property rights related to the Platform and its contents (including but not limited to texts, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software) are the property of the Provider or its content suppliers and are protected by international copyright laws.</p>
          <p className="mb-6">5.2. The User is granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform and its contents for personal, non-commercial purposes, in accordance with these Conditions.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 6 - Warranty exclusion; exclusions and limitations of liability</h2>
          <p className="mb-4">6.1. The Platform is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          <p className="mb-6">6.2. To the maximum extent permitted by applicable law, in no event shall the Provider be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Platform; (b) any conduct or content of any third party on the Platform; (c) any content obtained from the Platform; and (d) unauthorized access, use or alteration of your transmissions or content.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 7 - Indemnity</h2>
          <p className="mb-6">The User agrees to defend, indemnify and hold harmless the Provider and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees and costs, arising out of or in any way connected with (a) your access to or use of the Platform; (b) your violation of these Conditions; (c) your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property or privacy right; or (d) any claim that your Content caused damage to a third party.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 8.3 - Conditions and limits for downloading the Contents in case of withdrawal</h2>
          <p className="mb-6">In the event that the User withdraws from this Agreement, the Provider will keep the User Data and Contents for a period of 30 (thirty) days from the deactivation of the Account. During this period, the User has the right to ask the Provider to return the uploaded Data and Contents in a commonly used and machine-readable format. The Provider undertakes to delete the User Contents and Data from its databases, as soon as possible and, in any case, no later than 30 (thirty) days after the expiry of the previous term.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 9 - Suspension of the use of the Platform</h2>
          <p className="mb-4">The Provider reserves the right to temporarily suspend, in whole or in part - even without notice in cases of necessity and urgency - the User's access to the Platform in the following cases:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>In case of violation of these Conditions by the User;</li>
            <li>In case of technical problems or security issues;</li>
            <li>For maintenance operations or updates to the Platform;</li>
            <li>In case of force majeure events that make the provision of the service impossible or excessively burdensome.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 10 - Express termination clause</h2>
          <p className="mb-6">This Agreement may be terminated immediately by the Provider, by written notice to the User, in case of: (a) material breach by the User of any provision of these Conditions; (b) User's failure to pay any amount due under these Conditions; (c) User's insolvency, bankruptcy, or similar financial distress; or (d) any other event that, in the reasonable judgment of the Provider, justifies termination.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 13.4 - Provider's right to transfer the Contract</h2>
          <p className="mb-6">The User may not assign this Agreement, in whole or in part, or any of the rights deriving from it, without the prior written consent of the Provider. Any transfer that occurs without the prior written consent of the Provider will be null and void. The Provider reserves the right to transfer and/or assign this Agreement, in whole or in part (including individual rights or obligations), for any reason, as long as the User's rights provided herein are not affected.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 13.5 - Tolerance clause</h2>
          <p className="mb-6">Any failure by the Provider to exercise the rights and powers deriving from these Conditions does not in any way constitute a waiver of the same, having to be considered as a mere act of tolerance.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Art. 14.b - Exclusive jurisdiction</h2>
          <p className="mb-6">For any dispute relating to the validity, existence, interpretation, application, execution and/or termination of one or more clauses of this Agreement, or in any case deriving from it in any way, the Court of Rome will have exclusive territorial jurisdiction, with the express exclusion of any alternative and/or competing forum.</p>
        </section>
        <Hero />
      </main>
    </>
  );
}

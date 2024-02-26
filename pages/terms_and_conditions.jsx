import Head from 'next/head';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp_float';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - VidyarthiAdda</title>
      </Head>
      <NavBar />
      <div className="bg-light py-5">
        <div className="container bg-white shadow-sm rounded p-5">
          <h1 className="mb-4 text-center text-primary">Terms and Conditions</h1>
          <hr />
          <p className="text-justify">The User of the web-site <a href="http://www.vidyarthiadda.com" className="text-decoration-none">www.vidyarthiadda.com</a> must carefully read and agree to the following terms and conditions, including any future amendments (hereinafter collectively referred to as the "Terms & Conditions") before using the web-site <a href="http://www.vidyarthiadda.com" className="text-decoration-none">www.vidyarthiadda.com</a>. By using the web-site User is accepting to be bound by the provisions of these terms & conditions.</p>
          
          <h2 className="mt-5 text-secondary">Registration / Login</h2>
          <p className="text-justify">Some areas of the Site require you to be or become a registered user or to provide your information details. When and if a user does the same, he/she agrees to:</p>
          <ul>
            <li>Provide accurate, current and complete information as prompted in the registration form or Lead form or any such form which requires the user to enter personally identifiable information to proceed further.</li>
            <li>Maintain and update information (including email address) to keep it accurate, and complete. A User acknowledges that, if any information provided is untrue, inaccurate, not current or incomplete, Vidyarthiadda reserve the right to terminate this Agreement and the user's use of this web-site.</li>
          </ul>

          <h2 className="mt-5 text-secondary">Ownership of Materials and Restrictions</h2>
          <p className="text-justify">All content on this website, including site layout, software, images, photographs, text, services and other similar materials (collectively, "Materials") are the properties of Vidyarthiadda and are protected under the copyright and other intellectual property laws.</p>

          <h2 className="mt-5 text-secondary">Application Form and Related Materials</h2>
          <p className="text-justify">The College Application Form and other information, forms and materials provided through the Site, including any data, text, graphics, images, audio and video clips, logos, icons and links (collectively, the "Materials"), are intended to educate and inform you about college application form on vidyarthiadda.com.</p>

          <h2 className="mt-5 text-secondary">Limitation of Liability</h2>
          <p className="text-justify">In no event and under no circumstances and under no legal theory, tort, contract, or otherwise shall Vidyarthiadda be liable, without limitation, for any damages whatsoever, including direct, indirect, incidental, consequential or punitive damages, arising out of any access to or any use of or any inability to access or use this website.</p>

          <h2 className="mt-5 text-secondary">Governing Law and Jurisdiction</h2>
          <p className="text-justify">These terms and conditions shall be governed by and construed in accordance with the laws of India without regard to its conflicts of law principles. The User agrees to submit to the sole jurisdiction and venue for any dispute that may arise under or in relation to the subject matter in Jaipur court jurisdiction, India only.</p>

          <h2 className="mt-5 text-secondary">Disclaimer</h2>
          <p className="text-justify">Notwithstanding anything contained in any other agreement or arrangement, Vidyarthiadda receives commission from its partner colleges/universities/institution against its admission related services.</p>

          <h2 className="mt-5 text-secondary">Refund & Cancellation Policy</h2>
          <p className="text-justify">All the monetary transactions done by the user of the site is in lieu with the payment gateway partner of www.vidyarthiadda.com, and we take no responsibility of any payment discrepancies.</p>

          <h2 className="mt-5 text-secondary">T & C for Scholarship</h2>
          <p className="text-justify mb-5">This scholarship is at the sole discretion of the management of Vidyarthiadda. This offer can be withdrawn at any future point in time without any reason whatsoever.</p>
        </div>
      </div>
      <Footer />
      <WhatsAppButton/>
    </>
  );
};

export default TermsAndConditions;

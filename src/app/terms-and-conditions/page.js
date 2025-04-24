import React from 'react';
import "@/app/custom-bootstrap.scss";

export default function page() {
  return (
    <div className='pt-5'>
      <div className='bg-primary d-flex flex-column align-items-center justify-content-center text-center'style={{height:"40vh"}}>
        <h5 className='mt-5 bg-white px-4 py-2 rounded-5 fw-bold'>Last Update: 08 Oct 2024</h5>
        <h1 className='mt-2 text-white fw-bolder'>Terms and Conditions</h1>
      </div>
      <div className='container py-5'>
        <p className='fs-6 fw-semibold'>
          Welcome to SkillMatch. By using our platform, website, and services, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before accessing or using our services.
        </p>

        <ol className='fw-bold fs-5 ps-3'>
          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Acceptance of Terms</h3>
            <p className='fs-6 fw-medium'>By accessing or using SkillMatch, you agree to these Terms and Conditions. If you do not agree to these terms, you should not use our platform. We reserve the right to update these terms at any time, and your continued use of the site signifies your acceptance of any changes.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Eligibility</h3>
            <p className='fs-6 fw-medium'>You must be at least 18 years of age to use our platform. By using SkillMatch, you represent and warrant that you have the legal capacity to enter into a binding agreement.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Account Registration</h3>
            <ul className='fs-6 fw-medium ps-4 pt-2'>
              <li>You must create an account to access certain features on SkillMatch.</li>
              <li>You agree to provide accurate, current, and complete information during the registration process.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            </ul>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Use of Services</h3>
            <p className='fs-6 fw-medium'>SkillMatch provides job listings, candidate assessments, and recruitment services. You agree to use our platform for lawful purposes only and in compliance with all applicable laws and regulations.</p>

            <div className='pt-3'>
              <h5 className='fw-bold'>4.1 User Conduct:</h5>
              <p className='fw-medium'>You agree not to:</p>
              <ul className='fs-6 fw-medium ps-4'>
                <li>Misrepresent your identity or provide false information.</li>
                <li>Use the platform to send unsolicited or unauthorized communications.</li>
                <li>Interfere with or disrupt the integrity or performance of our services.</li>
                <li>Reverse-engineer or attempt to extract the source code of the platform.</li>
              </ul>
            </div>

            <div className='pt-3'>
              <h5 className='fw-bold'>4.2 Content Upload:</h5>
              <ul className='fs-6 fw-medium ps-4'>
                <li>You are solely responsible for any content, resume, or information you upload to SkillMatch.</li>
                <li>You grant us a non-exclusive, royalty-free, worldwide license to use, store, and share such content as necessary to provide our services.</li>
              </ul>
            </div>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Job Listings and Assessments</h3>
            <ul className='fs-6 fw-medium ps-4'>
              <li>SkillMatch serves as a platform for job seekers and recruiters. We do not guarantee employment or the availability of any particular position.</li>
              <li>Assessment results are shared with recruiters as part of the application process. You acknowledge that these results are used to evaluate your qualifications.</li>
            </ul>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Fees and Payments</h3>
            <ul className='fs-6 fw-medium ps-4'>
              <li>Certain services on SkillMatch may require payment, such as premium job postings or advanced candidate assessments.</li>
              <li>All fees are non-refundable unless otherwise stated.</li>
              <li>You agree to pay all fees and applicable taxes associated with your use of the services.</li>
            </ul>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Intellectual Property</h3>
            <p className='fs-6 fw-medium'>All content and materials on the SkillMatch platform, including logos, text, graphics, images, and software, are the property of SkillMatch or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Limitation of Liability</h3>
            <p className='fs-6 fw-medium'>To the fullest extent permitted by law, SkillMatch shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use the platform, including but not limited to damages for loss of employment opportunities or data.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Indemnification</h3>
            <p className='fs-6 fw-medium'>You agree to indemnify, defend, and hold SkillMatch harmless from any claims, liabilities, damages, and expenses, including attorney’s fees, arising out of your use of the platform or breach of these terms.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Termination</h3>
            <p className='fs-6 fw-medium'>We reserve the right to suspend or terminate your account at our sole discretion, without notice, if we determine that you have violated these Terms and Conditions or engaged in unlawful behavior.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Governing Law</h3>
            <p className='fs-6 fw-medium'>These Terms and Conditions are governed by and construed in accordance with the laws of United Arab Emirates. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts of UAE.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Changes to Terms</h3>
            <p className='fs-6 fw-medium'>We may update these Terms and Conditions from time to time. Changes will be effective upon posting on this page, and the "Effective Date" will be updated accordingly.</p>
          </li>

          <li className='pt-4'>
            <h3 className='fw-bold fs-5'>Contact Us</h3>
            <ul className='list-unstyled fs-6 fw-medium'>
              <li>If you have questions or concerns about this policy, please contact us at:</li>
              <li className='pt-3'>SkillMatch</li>
              <li>Email: support@skillmatch.com</li>
            </ul>
          </li>

        </ol>
      </div>
    </div>
  );
}

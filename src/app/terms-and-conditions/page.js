import React from 'react';
import "@/app/custom-bootstrap.scss";


export default function page() {
  return (
    <div className='' style={{ marginTop: "75px" }}>
      <div className='bg-primary ' style={{ height: "40vh" }}>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h5 className='mt-5 bg-white p-3 rounded-5 fw-bold'>Last Update: 08 Oct 2024</h5>
          <h1 className='mt-2 text-white fw-bolder '>Terms and Conditins</h1>
        </div>
      </div>
      <div className='' style={{ padding: "50px 170px 30px 170px" }}>
        <p className='fs-5 fw-semibold w-80'>Welcome to SkillMatch. By using our platform, website, and services, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before accessing or using our services.</p>
        <ol className='fw-bold fs-2'>
          <li>Acceptance of Terms</li> vides job listings, candidate assessments, and recruitment services. You agree to use our platform for lawful purposes only and in compliance with all applicable laws and regulations.</p>
          <h5 className='py-4 fw-bold'>4.1 User Conduct:</h5>
          <h5>You agree not to:</h5>
          <ul className='fs-5 fw-medium mt-4 '>
            <li>Misrepresent your identity or provide false information.</li>
            <li>Use the platform to send unsolicited or unauthorized communications.</li>
            <li>Interfere with or disrupt the integrity or performance of our services.</li>
            <li>Reverse-engineer or attempt to extract the source code of the platform.</li>
          </ul>
          <h5 className='py-4 fw-bold'>4.2 Content Upload:</h5>
          <ul className='fs-5 fw-medium '>
            <li>You are solely responsible for any content, resume, or information you upload to SkillMatch.</li>
            <li>You grant us a non-exclusive, royalty-free, worldwide license to use, store, and share such content as necessary to provide our services.</li></ul>


          <li>Job Listings and Assessments</li>
          <ul className='fs-5 fw-medium py-3 '>
            <li>SkillMatch serves as a platform for job seekers and recruiters. We do not guarantee employment or the availability of any particular position.</li>
            <li>Assessment results are shared with recruiters as part of the application process. You acknowledge that these results are used to evaluate your qualifications.</li></ul>

          <li>Fees and Payments</li>
          <ul className='fs-5 fw-medium py-3'>
            <li>Certain services on SkillMatch may require payment, such as premium job postings or advanced candidate assessments.</li>
            <li>All fees are non-refundable unless otherwise stated.</li>
            <li>You agree to pay all fees and applicable taxes associated with your use of the services.</li>
          </ul>
          <li>Intellectual Property</li>
          <p className='fs-5 fw-medium mt-3'>All content and materials on the SkillMatch platform, including logos, text, graphics, images, and software, are the property of SkillMatch or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.</p>
          <li>Limitation of Liability</li>
          <p className='fs-5 fw-medium mt-3'>To the fullest extent permitted by law, SkillMatch shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use the platform, including but not limited to damages for loss of employment opportunities or data.</p>
          <li>Indemnification</li>
          <p className='fs-5 fw-medium mt-3'>You agree to indemnify, defend, and hold SkillMatch harmless from any claims, liabilities, damages, and expenses, including attorney’s fees, arising out of your use of the platform or breach of these terms.</p>
          <li>Termination</li>
          <p className='fs-5 fw-medium mt-3'>We reserve the right to suspend or terminate your account at our sole discretion, without notice, if we determine that you have violated these Terms and Conditions or engaged in unlawful behavior.</p>
          <li>Governing Law</li>
          <p className='fs-5 fw-medium mt-3'>These Terms and Conditions are governed by and construed in accordance with the laws of United Arab Emirates. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts of UAE.</p>
          <li>Changes to Terms</li>
          <p className='fs-5 fw-medium mt-3'>We may update these Terms and Conditions from time to time. Changes will be effective upon posting on this page, and the "Effective Date" will be updated accordingly.</p>
          <li>Contact Us</li>
          <ol className='list-unstyled'>
            <li className='fs-5 fw-medium mt-3'>If you have questions or concerns about this Privacy Policy, please contact us at:</li>
            <li className='fs-5 fw-medium mt-5'>SkillMatch</li>
            <li className='fs-5 fw-medium '>Email: support@skillmatch.com</li>
          </ol>
        </ol>
      </div>
    </div>
  )
}

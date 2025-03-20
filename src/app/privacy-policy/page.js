import React from 'react';
import "@/app/custom-bootstrap.scss";

export default function page() {
    return (
        <div className='' style={{ marginTop: "75px" }}>
            <div className='bg-primary ' style={{ height: "40vh" }}>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h5 className='mt-5 bg-white p-3 rounded-5 fw-bold'>Last Update: 07 Oct 2024</h5>
                    <h1 className='mt-2 text-white fw-bolder '>Privacy Policy</h1>
                </div>
            </div>
            <div className='' style={{ padding: "50px 170px 30px 170px" }}>
                <p className='fs-6 fw-semibold w-80'>At SkillMatch, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services, website, and platform. By accessing or using SkillMatch, you agree to the terms outlined in this policy.</p>

                <ol className='fw-bold fs-3'>
                    <li>
                        <h3 className='fw-bold fs-3'>Information We Collect</h3>
                        <p className='fs-6 fw-semibold py-3'>We collect the following types of information:</p>
                        <p className='fs-6 fw-bold'>1.1 Personal Information:</p>
                        <ul className='fs-6 fw-medium '>
                            <li>
                                Full name, email address, phone number, and physical address.
                            </li>
                            <li>
                                details such as resume/CV, job history, and skill assessments.
                            </li>
                            <li>
                                Any other information you choose to provide during the sign-up, application, or assessment process.
                            </li>
                        </ul>
                        <p className='fs-6 fw-bold py-2'>1.2 Usage Data:</p>
                        <ul className='fs-6 fw-medium'>
                            <li>
                            IP addresses, browser type, device type, and operating system.
                            </li>
                            <li>
                            Date and time of access, pages viewed, and interactions on the platform.
                            </li></ul>
                            <p className='fs-6 fw-bold py-2'>1.3 Cookies and Tracking Technologies:</p>
                            <p className='fs-6 fw-semibold'>We use cookies, beacons, and similar tracking technologies to improve your experience, analyze trends, and gather demographic information.</p>                        
                        </li>
                    <li>
                    <h3 className='fw-bold fs-3'>How We Use Your Information</h3>
                    <p className='fs-6 fw-semibold py-3'>We use your personal data for the following purposes:</p>
                    <p className='fs-6 fw-bold'>1.1 Personal Information:</p>
                    <ul className='fs-6 fw-medium '>
                        <li>Full name, email address, phone number, and physical address.</li>
                        <li>To create and manage your account.</li>
                        <li>To provide, maintain, and improve our services.</li>
                        <li>To communicate with you regarding your applications, assessments, and recruitment processes.</li>
                        <li>To personalize your experience and offer relevant job opportunities.</li>
                        <li>To comply with legal obligations and enforce our Terms of Service.</li>
                    </ul></li>
                    <li>
                    <h3 className='fw-bold fs-3'>Sharing Your Information</h3>
                    <p className='fs-6 fw-semibold py-3'>We may share your information with:</p>
                    <ul className='fs-6 fw-medium '>
                        <li>Recruiters and Employers: When you apply for a job or take an assessment, your details are shared with the relevant employer or recruiter.</li>
                        <li>Service Providers: We work with third-party vendors to provide support, analytics, and cloud storage services.</li>
                        <li>To provide, maintain, and improve our services.</li>
                        <li>Legal Obligations: If required by law or in response to valid requests by public authorities.</li>
                    </ul></li>
                    <li>
                    <h3 className='fw-bold fs-3'> Data Security</h3>
                    <p className='fs-6 fw-semibold py-3'>We Implement appropriate security measures to safeguard your personal information. However,no method of transmission over the intervet is 100% seure, and we cannot guarantee absolute security.</p>
                    </li>
                    <li>
                    <h3 className='fw-bold fs-3'> Your Rights and Choices</h3>
                    <p className='fs-6 fw-semibold py-3'>You have the right to:</p>
                    <ul className='fs-6 fw-medium '>
                        <li>Access and update your personal information.</li>
                        <li>Request deletion of your data.</li>
                        <li>Opt-out of marketing communications.</li>
                        <li>Withdraw consent at any time.</li>
                    </ul>
                    <p className='fs-6 fw-semibold py-3'>To exercise these rights, contact us at support@skillmatch.tech</p>
                    </li>
                    <li>
                    <h3 className='fw-bold fs-3'> Children's Privacy</h3>
                    <p className='fs-6 fw-semibold py-3'>Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.</p>
                    </li>
                    <li>
                    <h3 className='fw-bold fs-3'> Changes to This Privacy Policy</h3>
                    <p className='fs-6 fw-semibold py-3'>We may update this Privacy Policy periodically. Changes will be posted on this page, and the "Effective Date" will be updated accordingly. We encourage you to review this policy regularly.</p>
                    </li>
                    <li>
                    <h3 className='fw-bold fs-3'>Contact Us</h3>
                    <p className='fs-6 fw-semibold py-3'>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p className='fs-6 fw-semibold mb-0'>SkillMatch</p>
                    <p className='fs-6 fw-semibold'>Email: support@skillmatch.com</p>
                    </li>
                    
                </ol>

            </div>
        </div>)
}
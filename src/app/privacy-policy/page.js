import React from 'react';
import "@/app/custom-bootstrap.scss";

export default function page() {
    return (
        <div className='mt-5'>
            <div className='bg-primary' style={{ height: "40vh" }}>
                <div className='h-100 d-flex flex-column align-items-center justify-content-center text-center'>
                    <h5 className='mt-3 bg-white p-3 rounded-5 fw-bold'>Last Update: 07 Oct 2024</h5>
                    <h1 className='mt-2 text-white fw-bolder'>Privacy Policy</h1>
                </div>
            </div>
            <div className='container py-5'>
                <p className='fs-6 fw-semibold'>
                    At SkillMatch, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services, website, and platform. By accessing or using SkillMatch, you agree to the terms outlined in this policy.
                </p>

                <ol className='fw-bold fs-4 ps-3'>
                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>Information We Collect</h3>
                        <p className='fs-6 fw-semibold'>We collect the following types of information:</p>

                        <p className='fs-6 fw-bold'>1.1 Personal Information:</p>
                        <ul className='fs-6 fw-medium'>
                            <li>Full name, email address, phone number, and physical address.</li>
                            <li>Details such as resume/CV, job history, and skill assessments.</li>
                            <li>Any other information you choose to provide during sign-up, application, or assessment.</li>
                        </ul>

                        <p className='fs-6 fw-bold pt-3'>1.2 Usage Data:</p>
                        <ul className='fs-6 fw-medium'>
                            <li>IP addresses, browser type, device type, and operating system.</li>
                            <li>Date and time of access, pages viewed, and interactions on the platform.</li>
                        </ul>

                        <p className='fs-6 fw-bold pt-3'>1.3 Cookies and Tracking Technologies:</p>
                        <p className='fs-6 fw-semibold'>We use cookies, beacons, and similar tracking technologies to improve your experience, analyze trends, and gather demographic information.</p>
                    </li>

                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>How We Use Your Information</h3>
                        <p className='fs-6 fw-semibold'>We use your personal data for the following purposes:</p>
                        <ul className='fs-6 fw-medium'>
                            <li>To create and manage your account.</li>
                            <li>To provide, maintain, and improve our services.</li>
                            <li>To communicate with you regarding applications and recruitment.</li>
                            <li>To personalize your experience and offer relevant job opportunities.</li>
                            <li>To comply with legal obligations and enforce our Terms of Service.</li>
                        </ul>
                    </li>

                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>Sharing Your Information</h3>
                        <p className='fs-6 fw-semibold'>We may share your information with:</p>
                        <ul className='fs-6 fw-medium'>
                            <li>Recruiters and Employers during applications or assessments.</li>
                            <li>Service Providers for analytics and cloud services.</li>
                            <li>Legal entities if required by law.</li>
                        </ul>
                    </li>

                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>Data Security</h3>
                        <p className='fs-6 fw-semibold'>
                            We implement appropriate security measures to safeguard your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </li>

                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>Your Rights and Choices</h3>
                        <p className='fs-6 fw-semibold'>You have the right to:</p>
                        <ul className='fs-6 fw-medium'>
                            <li>Access and update your personal information.</li>
                            <li>Request deletion of your data.</li>
                            <li>Opt out of marketing communications.</li>
                            <li>Withdraw consent at any time.</li>
                        </ul>
                        <p className='fs-6 fw-semibold pt-2'>To exercise these rights, contact us at <a href="mailto:support@skillmatch.tech">support@skillmatch.tech</a>.</p>
                    </li>

                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>Children's Privacy</h3>
                        <p className='fs-6 fw-semibold'>
                            Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.
                        </p>
                    </li>

                    <li className='mb-4'>
                        <h3 className='fw-bold fs-4'>Changes to This Privacy Policy</h3>
                        <p className='fs-6 fw-semibold'>
                            We may update this Privacy Policy periodically. Changes will be posted on this page, and the "Effective Date" will be updated accordingly. We encourage you to review this policy regularly.
                        </p>
                    </li>

                    <li>
                        <h3 className='fw-bold fs-4'>Contact Us</h3>
                        <p className='fs-6 fw-semibold'>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                        <p className='fs-6 fw-semibold mb-0'>SkillMatch</p>
                        <p className='fs-6 fw-semibold'>Email: <a href="mailto:support@skillmatch.com">support@skillmatch.com</a></p>
                    </li>
                </ol>
            </div>
        </div>
    );
}

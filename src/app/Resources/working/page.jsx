
"use client"
import Cta from "../../../components/Cta"
import "./working.css"
// Import Bootstrap but we'll scope it in our component
import "bootstrap/dist/css/bootstrap.min.css"
export default function HowItWorks() {
  return (
    <main className="how-it-works mt-5">
      <div className="bootstrap-scoped">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="row align-items-center">
              {/* Text Section */}
              <div className="col-md-6 col-12">
                <div className="hero-text">
                  <h1>Recruit top candidates more quickly.</h1>
                  <p>
                    Simplify your hiring process with Skill Match skills-based assessments. Tailor your choices from our
                    collection of 1000+ scientifically-supported skills and personality tests. Identify top candidates
                    without solely depending on resumes.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-md-6 col-12 text-center">
                <div className="hero-image">
                  <img src="/How-it-works/how-hero.svg" alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process">
          <div className="container">
            <h2>Step-by-Step Process (Technical and Non-Technical Assessment)</h2>
            <div className="row justify-content-center">
              {/* Step 1 */}
              <div className="col-lg-4 col-md-6 col-12 d-flex">
                <div className="step w-100">
                  <div className="step-icon">
                    <img src="/How-it-works/step-1.svg" alt="Generate Assessment" />
                  </div>
                  <h2>Step 01</h2>
                  <h4>Generate high-quality assessments, quickly</h4>
                  <p>
                    Choose an ideal assessment title, opt for tests that suit your needs, and add a personal touch with
                    your custom questions.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="col-lg-4 col-md-6 col-12 d-flex">
                <div className="step w-100">
                  <div className="step-icon">
                    <img src="/How-it-works/step-2.svg" alt="Invite Candidates" />
                  </div>
                  <h2>Step 02</h2>
                  <h4 className="s">Invite Candidates</h4>
                  <p>
                    Connect with candidates by sending email invites directly from Skill Match or share a direct link.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-lg-4 col-md-6 col-12 d-flex">
                <div className="step w-100">
                  <div className="step-icon">
                    <img src="/How-it-works/step-3.svg" alt="Evaluate Candidates" />
                  </div>
                  <h2>Step 03</h2>
                  <h4>Evaluate and determine the most suitable candidates</h4>
                  <p>
                    Access immediate assessment outcomes, promptly compare your candidates, and delve into detailed
                    candidate reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="trust">
          <h1 className="Comp">TRUSTED COMPANY</h1>
          <h2>Trusted by Fortune 500</h2>
          <h3>companies and global enterprises</h3>

          <div className="container">
            <div className="row justify-content-center">
              {/* Company Logos */}
              <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center">
                <img src="/How-it-works/vanguard.svg" alt="Vanguard" className="company-logo" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center">
                <img src="/How-it-works/paypal.svg" alt="PayPal" className="company-logo" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center">
                <img src="/How-it-works/united-health.svg" alt="Health" className="company-logo" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center">
                <img src="/How-it-works/deloitte.svg" alt="Deloitte" className="company-logo" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center">
                <img src="/How-it-works/upguard.svg" alt="UpGuard" className="company-logo" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center">
                <img src="/How-it-works/fy.svg" alt="EY" className="company-logo" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <h5 className="choose">CHOOSE</h5>
          <h2>Why Choose Us?</h2>

          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/support.svg" alt="24/7 Support" className="feature-icon" />
                  <div className="feature-text">
                    <h3>24/7 Support</h3>
                    <p>Our team is available 24/7 to provide support. You ask us, we answer it right away</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/understandable.svg" alt="Easy to Understand" className="feature-icon" />
                  <div className="feature-text">
                    <h3>Easy to Understand</h3>
                    <p>
                      We have designed it in such a way that anyone can easily create assessments, add custom questions,
                      rank candidates, export custom CSV files and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/no-cheating.svg" alt="No Cheating" className="feature-icon" />
                  <div className="feature-text">
                    <h3>No Chance of Cheating</h3>
                    <p>
                      Screenshots of candidates as they are being tested, Get Notify if a candidate exits full-screen
                      mode.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/mobile-friendly.svg" alt="Mobile Friendly" className="feature-icon" />
                  <div className="feature-text">
                    <h3>Mobile Friendly</h3>
                    <p>
                      t's created for all platforms. Create and Review assessments anywhere and anytime. Candidates can
                      easily showcase their skills on any device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/Scientifically-Backed.svg" alt="Scientific" className="feature-icon" />
                  <div className="feature-text">
                    <h3>Scientifically-Backed</h3>
                    <p>
                      Our assessments are meticulously designed, drawing on scientific principles to ensure reliability
                      and validity. Trust in assessments that truly reflect candidates' skills and potential
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/library.svg" alt="Skill Library" className="feature-icon" />
                  <div className="feature-text">
                    <h3>Extensive Skill Library</h3>
                    <p>
                      Choose from our extensive library of over 1000+ scientifically-validated skills and personality
                      tests. Tailor your assessments to match the specific needs and nuances of your roles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/affordable.svg" alt="Affordable" className="feature-icon" />
                  <div className="feature-text">
                    <h3>Affordable</h3>
                    <p>
                      We make professional assessments affordable for everyone and smoothen the hiring process for any
                      size business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="feature">
                  <img src="/How-it-works/candidate-exp.svg" alt="Candidate Experience" className="feature-icon" />
                  <div className="feature-text">
                    <h3>Candidate Experience</h3>
                    <p>
                      Providing candidates with such technological advancement while hiring them gives them more trust
                      and reliability towards Skill Match.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Cta />
    </main>
  )
}











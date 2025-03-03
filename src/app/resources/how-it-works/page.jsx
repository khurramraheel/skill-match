
"use client"
import Process from "../../../components/Process"
import Cta from "../../../components/how-it-works/Cta"
import "./working.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Features from "@/components/Features"
export default function HowItWorks() {
  return (
    <main className="how-it-works mt-5">
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
       <Process/>

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
        <Features/>
      <Cta />
    </main>
  )
}











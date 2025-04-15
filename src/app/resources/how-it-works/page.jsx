
"use client"
import Process from "../../../components/Process"
import Cta from "../../../components/how-it-works/Cta"
import "./working.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Features from "@/components/Features"
import Trust from "@/components/Trust"
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

          <Trust />
        </section>

        {/* Features Section */}
        <Features/>
      <Cta />
      
    </main>
  )
}











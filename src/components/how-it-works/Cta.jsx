import React from 'react'
import Link from 'next/link'
import "./cta.css"
const Cta = () => {
    return (
        <section className="cta">
        <div className="container text-center py-5">
          <h2 className="fw-bold">
            Explore Your Hiring Journey with Confidence: Start Assessing Now
          </h2>
          <p className="fs-5">Get Started For Free | No credit card needed</p>
      
          <div className="cta-buttons d-flex justify-content-center gap-3 flex-wrap">
          <Link href="/request-demo">
          <button  className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold">
              Request A Demo
            </button> 
            </Link>
            <Link href="/signup">
            <button className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold">
              Start Free Trial
            </button>
            </Link>
          </div>
        </div>
      </section>
    )
}

export default Cta;

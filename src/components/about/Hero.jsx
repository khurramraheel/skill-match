'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <section 
      className="position-relative overflow-hidden"
      style={{ 
        backgroundColor: 'rgb(45, 194, 158)',
      }}
    >
      <div className="container-fluid px-5 px-md-5 py-5 py-md-4">
        <div className="row">
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center" style={{ gap: '1rem' }}>
            {/* Left Side */}
            <div className="flex-shrink-0 mb-3 mb-md-5 col-12 col-md-6">
              <div className="mb-0">
                <h2 className="h1 fw-bold mb-0 text-nowrap" 
                    style={{ 
                      color: '#E2E8F0', 
                      fontSize: 'clamp(1.75rem, 3.5vw, 4rem)', 
                      fontWeight: 'bold'
                    }}
                > 
                  About our
                </h2>
                <h1 className="h1 fw-bold text-nowrap" 
                    style={{ 
                      color: '#E2E8F0', 
                      fontSize: 'clamp(1.75rem, 3.5vw, 4rem)', 
                      fontWeight: 'bold'
                    }}
                >
                  Company
                </h1>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-grow-1 ps-0 ps-md-2 mt-4 mt-md-3 col-12 col-md-6">
              <div className="d-flex justify-content-start justify-content-md-end">
                <div>
                  <p className="mb-4" 
                     style={{ 
                       color: '#ffffff', 
                       lineHeight: '1',
                       fontSize: 'clamp(1.3rem, 1.2vw, 0.9rem)'
                     }}
                  >
                    SkillMatch is a pioneering app that specializes in the development and provision 
                    of assessment and screening solutions for businesses and organizations worldwide. 
                    Founded in 2023, SkillMatch was established to address the growing need for 
                    efficient and accurate candidate assessment tools in today's competitive job market.
                  </p>
                  <p className="mb-4" 
                     style={{ 
                       color: '#ffffff', 
                       lineHeight: '1',
                       fontSize: 'clamp(1.3rem, 1.2vw, 0.9rem)'
                     }}
                  >
                    A state of the art platform which makes the procedure of hiring smooth and quick. 
                    You can easily get the best candidate while using our services. Skill Match aims 
                    to fulfill the need of business looking for the talented tech teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div> 
          <button className="btn p-0 d-inline-flex align-items-center gap-2 text-nowrap" 
                  style={{ color: '#E2E8F0', fontSize: 'clamp(1rem, 1.8vw, 2.9rem)' }}
          >
            Join our team 
            <HiArrowRight size={20} />
          </button>
        </div>

        <div className="row">
          <div className="col-12 mt-3 mt-md-5">
            <div className="d-flex justify-content-center">
              <img 
                src="/about-us/about-us-avatar.svg" 
                alt="SkillMatch Platform" 
                className="img-fluid shadow-lg"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View Adjustments */}
      <style jsx>{`
        @media (max-width: 767px) {
          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 30px; /* Reduced padding for mobile */
            padding-bottom: 20px; /* Reduced padding for mobile */
          }

          .d-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .col-12 {
            width: 100% !important;
            padding-left: 0;
            padding-right: 0;
          }

          h1, h2 {
            font-size: clamp(1.5rem, 5vw, 2.5rem) !important;
            text-align: left !important;
            margin-bottom: 0 !important; /* Remove bottom margin */
          }

          .mb-4 {
            font-size: clamp(1rem, 4vw, 1.3rem) !important;
            text-align: left !important;
          }

          button {
            font-size: clamp(1rem, 3vw, 1.5rem) !important;
            margin-top: 20px;
            text-align: center;
          }

          img {
            width: 100% !important;
            height: auto;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}

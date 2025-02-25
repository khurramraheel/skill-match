'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Leader() {
  return (
    <>
      <section className="leader py-5">
        <div className="container text-center p-0">
          {/* Leader Badge */}
          <span className="badge px-3 py-2 mb-3 fs-6 fw-bold"
                style={{
                  borderRadius: '12px',
                  backgroundColor: 'rgb(224 248 222)', 
                  color: '#00684a',
                }}>
            LEADER
          </span>

          <h2 className="fw-bold mb-4 display-6">Meet our CEO</h2>
          <p className="mb-4 mx-auto" 
             style={{
               maxWidth: '600px',
               background: 'linear-gradient(to right, #000000, #666666)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               fontSize: '1.1rem',
               lineHeight: '1.7',
               fontWeight: '400',
             }}>
            A visionary leader who drives our company with a potent blend of strategic foresight and
            a hands-on approach. Brings a wealth of experience to guide our team toward new heights.
          </p>

          {/* CEO Image and Social Links */}
          <div className="position-relative d-inline-block">
            <Image
              src="/about-us/ceo-pic.svg"
              alt="Mirza Usman - CEO"
              width={350}
              height={350}
              className= " mb-3 shadow-lg"
              style={{
                objectFit: 'cover',
                backgroundColor: '#d9d9d9',
                borderRadius: '10px',
              }}
            />

            {/* Social Media Links */}
            <div className="d-flex flex-column gap-3 position-absolute" 
                 style={{ right: '-45px', top: '50%', transform: 'translateY(-50%)' }}>
              <Link href="https://telegram.org" 
                    className="btn bg-black rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{ width: '40px', height: '40px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <i className="bi bi-send-fill text-white fs-6"></i>
              </Link>
              <Link href="https://www.whatsapp.com" 
                    className="btn bg-black rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{ width: '40px', height: '40px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <i className="bi bi-telephone-fill text-white fs-6"></i>
              </Link>
              <Link href="https://www.linkedin.com" 
                    className="btn bg-black rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{ width: '40px', height: '40px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <i className="bi bi-linkedin text-white fs-6"></i>
              </Link>
            </div>
          </div>

          {/* CEO Details */}
          <div className="mt-4">
            <h3 className="fw-bold mb-2">Mirza Usman</h3>
            <p className="text-muted mb-1">CEO | NetixSol</p>
            <p className="text-muted">Founder | Web3Geeks</p>
          </div>
        </div>
      </section>

      {/* HR Testimonial Section */}
      <section className="py-4 w-100" style={{ backgroundColor: '#E8F7F1' }}>
        <div className="container-fluid px-5">
          <div className="position-relative mx-auto" style={{ maxWidth: '1200px' }}>
            {/* Testimonial Content */}
            <div className="d-flex flex-column flex-md-row align-items-start gap-4">
              {/* Text Content */}
              <div className="flex-grow-1 pe-4">
                <p className="fs-3 fw-bold mb-4 py-5 border-bottom border-dark"
                   style={{
                     lineHeight: '1.6',
                     color: '#000',
                   }}>
                  "As an HR professional, I rely on tools that streamline the hiring process. Skill Match has made our job easier, delivering accurate insights into candidates' skills and cultural fit. Efficient, user-friendly, and highly effective. Skill Match has become an essential part of our hiring toolkit, helping us build strong, dynamic teams."
                </p>
                
                {/* Quote Author (Now correctly placed below the paragraph) */}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="rounded-circle p-2" 
                       style={{
                         backgroundColor: '#a0eaa3',
                         width: '50px',
                         height: '50px',
                       }}>
                    <i className="bi bi-quote fs-3 text-success"></i>
                  </div>
                  <div>
                    <h3 className="fs-4 fw-bold mb-0">Helen Kailey</h3>
                    <p className="text-muted fs-5 mb-0">Senior HR Manager</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <Image 
                  src="/about-us/hr-pic.svg"
                  alt="Helen Kailey"
                  width={400}
                  height={400}
                  className=" "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

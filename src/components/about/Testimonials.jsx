'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  const cardWidth = 550; // Single card width

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      text: "SkillMatch has given us a huge edge in recruiting top talent. Its assessments provide a level of detail that traditional hiring methods can't match. A phenomenal tool for assessing skills and matching them with job needs. Highly recommended!",
      author: "Michael Patel",
      role: "Chief Operations Officer",
      image: "/about-us/image (1).png"
    },
    {
      text: "With SkillMatch, our hiring process is faster, more reliable, and transparent. Candidates are assessed fairly, and the insights we get are invaluable. This platform every HR department should consider!",
      author: "Sarah Nguyen",
      role: "Human Resources Manager",
      image: "/about-us/sarah.png"
    },
    {
      text: "SkillMatch assessments have enhanced our selection process significantly. It's intuitive, accurate, and provides 5-star service every step of the way. This platform has become a critical part of our hiring strategy!",
      author: "Emily Tan",
      role: "Head of People & Culture",
      image: "/about-us/image.png"
    },
    {
      text: "SkillMatch transformed our recruitment! Accurate skill assessments provide data-driven insights, helping us hire confidently. A 5-star solution for building skilled teams.",
      author: "Olivia Sanders",
      role: "Talent Acquisition Lead",
      image: "/about-us/olivia.png"
    },
    {
      text: "SkillMatch assessments have redefined the quality of our hires. The platform's ease of use and precision in skill evaluation helped us streamline hiring, ensuring only the best candidates make it through. Highly recommend it – truly a game-changer!",
      author: "Daniel Whitaker",
      role: "Senior Recruiter",
      image: "/about-us/daniel (2).png"
    }
  ];

  // Extend testimonials for seamless infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials]; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Prevents negative scrolling
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - cardsToShow)); // Stops at the last valid index
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#E8F7F1' }}>
      <div className="container px-3">
        <div className="mx-auto" style={{ maxWidth: '1200px', overflow: 'hidden', position: 'relative' }}>
          
          {/* Header and Navigation */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fs-2 fw-bold">Loved by Industry Leaders</h2>
            <div className="d-flex gap-2">
              <button onClick={handlePrev} className="rounded-circle border-0 d-flex align-items-center justify-content-center shadow" style={{ width: '40px', height: '40px', backgroundColor: 'white' }}>
                <i className="bi bi-chevron-left"></i>
              </button>
              <button onClick={handleNext} className="rounded-circle border-0 d-flex align-items-center justify-content-center shadow" style={{ width: '40px', height: '40px', backgroundColor: 'white' }}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="overflow-hidden" style={{ width: '100%' }}>
            <motion.div
              className="d-flex gap-3"
              animate={{ x: `-${currentIndex * cardWidth}px` }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
              style={{ display: 'flex', width: `${extendedTestimonials.length * cardWidth}px` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-4 shadow-sm" 
                  style={{ 
                    flex: `0 0 ${cardWidth}px`, 
                    maxWidth: `${cardWidth}px`,
                    minHeight: '270px'
                  }}
                >
                  {/* Stars */}
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
                    {testimonial.text}
                  </p>

                  {/* Author Section with Image */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="rounded-circle overflow-hidden" 
                      style={{ width: '50px', height: '50px' }}
                    >
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        width={50} 
                        height={50} 
                        style={{ objectFit: 'cover', borderRadius: '50%' }} 
                      />
                    </div>
                    <div>
                      <h3 className="fw-bold mb-1" style={{ fontSize: '1.1rem' }}>{testimonial.author}</h3>
                      <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

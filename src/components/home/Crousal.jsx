"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Crousal = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) setCardsPerSlide(1);
      else if (window.innerWidth < 992) setCardsPerSlide(2);
      else setCardsPerSlide(4);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const handleSelect = () => {
    setIndex(selectedIndex);
  };

  const cards = [
    {
      category: "CUSTOM ASSESSMENT",
      title: "JUNIOR BACKEND DEVELOPER",
      description: "Code-writing, algorithmic thinking, communication",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "BUSINESS DEVELOPMENT REPRESENTATIVE",
      description: "Lead-generation through different channels, communication",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "BLOCKCHAIN DEVELOPER",
      description:
        "Programming Languages, Security Knowledge, Familiarity with Blockchain Platforms",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "SOFTWARE ENGINEER",
      description:
        "Machine Learning and AI, Algorithmic thinking, software learning",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "FULL STACK DEVELOPER",
      description:
        "Frontend, Backend, Database, DevOps knowledge and practical skills",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "FULL STACK DEVELOPER",
      description:
        "Frontend, Backend, Database, DevOps knowledge and practical skills",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "Frontend Developer",
      description:
        "Frontend, Backend, Database, DevOps knowledge and practical skills",
    },
    {
      category: "CUSTOM ASSESSMENT",
      title: "Back End DEVELOPER",
      description:
        "Frontend, Backend, Database, DevOps knowledge and practical skills",
    },
  ];

  const prepareSlides = () => {
    let slides = [];
    for (let i = 0; i < cards.length; i += cardsPerSlide) {
      slides.push(cards.slice(i, i + cardsPerSlide));
    }
    return slides;
  };

  return (
    <div
      className="assessment-templates-section py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container mb-5 text-center">
        <h2 className="mb-3 fw-bold">
          Get inspired by our assessment templates
        </h2>
        <p className="text-muted">
          Try out our customizable templates created by industry leaders, or
          create your own skill assessment using more than 500+ pre-built tests.
        </p>
      </div>

      <div className="container position-relative">
        <style jsx>{`
          .carousel-inner {
            overflow: hidden;
          }
          .carousel-item {
            display: flex;
            justify-content: center;
            transition: transform 0.5s ease-in-out;
          }
        `}</style>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          interval={null}
          className="my-4"
          slide={true}
        >
          {prepareSlides().map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="row w-100 gx-0 justify-content-center">
                {slide.map((card, idx) => (
                  <div
                    key={idx}
                    className="col-10 col-md-6 col-lg-3 d-flex justify-content-center"
                  >
                    <div
                      className="card h-100 shadow-sm"
                      style={{ maxWidth: "22rem", width: "95%" }}
                    >
                      <div className="card-body d-flex flex-column">
                        <span
                          className="badge rounded-pill mb-2 align-self-start"
                          style={{
                            backgroundColor: "#ffeeba",
                            color: "#856404",
                            fontSize: "0.75rem",
                            padding: "0.35em 0.8em",
                          }}
                        >
                          {card.category}
                        </span>
                        <h5 className="card-title fw-bold">{card.title}</h5>
                        <p className="card-text text-muted">
                          {card.description}
                        </p>
                        <a
                          href="#"
                          className="mt-auto text-primary text-decoration-none d-flex align-items-center"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right ms-1"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Navigation Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? prepareSlides().length - 1 : prev - 1
            )
          }
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            border: "none",
            cursor: "pointer",
          }}
        >
          ❮
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={() =>
            setIndex((prev) => (prev + 1) % prepareSlides().length)
          }
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            border: "none",
            cursor: "pointer",
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Crousal;

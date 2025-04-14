"use client";

import { useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Card data
  const cards = [
    {
      title: "React redux for absolute beginners",
      image: "/blog/laptoptree.jpg",
      description: "Some representative content for the first half.",
    },
    {
      title: "Why i love data camp and you should too",
      image: "/blog/shadow.jpg",
      description: "Some representative content for the second half.",
    },
    {
      title: "power of nextjs server in reactjs....",
      image: "/blog/laptoptree.jpg",
      description: "Some representative content for the first half.",
    },
    {
      title: "top 3 css server for front end development",
      image: "/blog/btmm.png",
  description: "Some representative content for the second half.",
    },
  ];

  // Move to the next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Move to the previous card
  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <>
      <div className="container my-5 position-relative">
        {/* Carousel */}
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Wrapper to hold all cards */}
            <div
              className="carousel-item active"
              data-bs-interval="10000"
              style={{
                display: "flex",
                width: `${cards.length * 50}%`, // Total width of all cards
                transform: `translateX(${-currentIndex * (100 / cards.length)}%)`, // Slide based on currentIndex
                transition: "transform 0.5s ease", // Smooth transition
              }}
            >
              {/* Map through cards and render them */}
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="card border-dark"
                  style={{
                    borderRadius: "25px",
                    borderWidth: "3px",
                    width: `${100 / cards.length}%`, // Each card takes up equal width
                    flexShrink: 0, // Prevent cards from shrinking
                  }}
                >
                  <div
                    className="card-img-wrapper"
                    style={{ borderRadius: "25px", overflow: "hidden" }}
                  >
                    <img
                      src={card.image}
                      className="card-img-top"
                      alt="..."
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-text" style={{ fontSize: "1.25rem" }}>
                      {card.description}
                    </p>
                    <hr className="my-2" />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "rgb(45, 194, 158)",
                            borderRadius: "30px",
                          }}
                        >
                          Trending
                        </button>
                        <h1 className="ms-3">14 April 2025</h1>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="ms-3">Read more</span>
                        <img
                          src="/blog/arrow-icon.svg"
                          alt="Arrow"
                          style={{ width: "20px", marginLeft: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevCard}
          style={{
            left: "-110px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="/blog/arrow-iconp.svg"
            alt="Previous"
            style={{ width: "13.5px", height: "15px" }}
          />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={nextCard}
          style={{
            right: "-110px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="/blog/arrow-iconf.svg"
            alt="Next"
            style={{ width: "24px", height: "24px" }}
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
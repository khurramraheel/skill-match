"use client";
import "./faqs.css"
import Cta from "@/components/how-it-works/Cta";
import React from "react";


const cardData = [
  {
    icon: "/shutdown.svg",
    title: "Getting Started",
    subtitle: "Welcome to skillmatch! Get started faster by learning some basics",
  },
  {
    icon: "/star.svg",
    title: "Using SkillMatch",
    subtitle: "Learn how skillmatch works, from navigation to board management, and more",
  },
  {
    icon: "/subscription.svg",
    title: "Subscriptions and Billing",
    subtitle: "Have questions about our plans or billing? Find answers here",
  },
  {
    icon: "/admin.svg",
    title: "Administration",
    subtitle: "Master the ins-and-outs of team and user management within SkillMatch",
  },
  {
    icon: "/integration.svg",
    title: "Integrations and Apps",
    subtitle: "Discover the power of skillmatch integrations and apps",
  },
  {
    icon: "/question.svg",
    title: "Technical Questions",
    subtitle: "Troubleshoot issues and review technical guidelines for skillmatch usage",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="pb-5" style={{ backgroundColor: "rgb(217, 249, 223)" }}>


        <div
          className="hero   text-white d-flex align-items-start"
          style={{ minHeight: "50vh", paddingTop: "4rem" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-lg-start text-center">
                <h3
                  className="fw-bold display-5 mb-3"
                  style={{
                    fontSize: "2.5rem",
                    display: "block",
                    marginBottom: "1.5rem",
                  }}
                >
                  FAQ: Advice and answers<br /> from the SkillMatch Team
                </h3>
                <div className="position-relative mb-4">
                  <input
                    type="text"
                    placeholder="Search for articles"
                    className="form-control form-control-lg rounded-pill shadow-lg py-3 fs-6"
                    style={{
                      maxWidth: "100%",
                      padding: "0.6rem",
                    }}
                  />
                  <button className="btn position-absolute top-50 end-0 translate-middle-y me-3 border-0">
                    <svg
                      className="text-secondary"
                      style={{ width: "1.25rem", height: "1.25rem" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Girl Image on large screens */}
              <div className="col-lg-5 d-none d-lg-block text-end">
                <img
                  src="/girl-avatar.svg"
                  alt="Support"
                  className="img-fluid"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* On smaller screens, move the image below the text */}
            <div className="d-lg-none d-flex justify-content-center pt-4">
              <img
                src="/girl-avatar.svg"
                alt="Support"
                className="img-fluid"
                style={{
                  width: "60%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {cardData.map((card, index) => (
          <div key={index} className="row justify-content-center mb-4 mt-5">
            <div className="col-12 col-md-11 col-lg-8">
              <div
                className="d-flex align-items-center bg-white p-4 rounded-4 shadow-sm"
                style={{
                  minHeight: "140px",
                  borderRadius: "16px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center me-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#00C2A8",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="img-fluid"
                    style={{
                      maxWidth: "64px",
                      height: "64px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div>
                  <h5
                    className="mb-1 fw-bold"
                    style={{
                      fontSize: "1.25rem",
                      color: "#000",
                    }}
                  >
                    {card.title}
                  </h5>
                  <h5
                      className="m-0 font-urbanist text-base leading-[23px] md:pt-2 md:text-x1"
                      style={{
                        color: "rgb(163, 163, 163)",
                        fontWeight: 400, // Manually set to ultra-thin weight
                      }}
                    >
                      {card.subtitle}
                    </h5>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <Cta/>

    </>
  );
}




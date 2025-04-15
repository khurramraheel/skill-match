"use client";

import React, { useState } from "react";
import { faqData } from "../../public/PrincingFAQsAssests";
import Image from "next/image";
import styles from "./PricingFAQ.module.css"; // Importing the CSS module

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">FAQ Billing & Payment</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="col">
            <div
              className={`card h-100 border-0 shadow-sm position-relative ${
                activeId === faq.id ? styles.activeFaq : ""
              }`}
            >
              {activeId === faq.id && (
                <div
                  className="position-absolute h-100 bg-success"
                  style={{ width: "4px", right: 0, top: 0 }}
                />
              )}
              <div
                className={`card-header bg-white border-0 d-flex align-items-center cursor-pointer ${
                  activeId === faq.id ? styles.activeHeader : ""
                }`}
                onClick={() => toggleFAQ(faq.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="me-3">
                  <div
                    className={`${styles.faqIcon} ${
                      activeId === faq.id ? styles.active : ""
                    }`}
                  >
                    <Image
                      src={faq.image}
                      alt={faq.alt}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <h5 className="card-title mb-0">{faq.title}</h5>
                <span className="ms-auto">
                  <i
                    className={`bi bi-chevron-${
                      activeId === faq.id ? "up" : "down"
                    }`}
                  ></i>
                </span>
              </div>
              <div
                className={`card-body collapse ${
                  activeId === faq.id ? "show" : ""
                }`}
              >
                <p className="card-text">{faq.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

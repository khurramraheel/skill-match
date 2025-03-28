"use client"

import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./pricing.css"

const Pricing = () => {
  const [activeMobileTab, setActiveMobileTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 992)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Handle mobile tab switching
  const handleMobileTabChange = (index) => {
    if (activeMobileTab !== index) {
      requestAnimationFrame(() => {
        setActiveMobileTab(index)
      })
    }
  }
  // Plans for mobile tabs
  const plans = [
    { name: "Starter", key: "starter" },
    { name: "Recruiter", key: "recruiter" },
    { name: "Enterprise", key: "enterprise" },
  ]

  // Categories and their features
  const categories = [
    {
      name: "Multiple Choice Question",
      features: [
        { name: "Create Question", starter: true, recruiter: true, enterprise: true },
        { name: "Delete Question", starter: true, recruiter: true, enterprise: true },
        { name: "Edit Question", starter: true, recruiter: true, enterprise: true },
        { name: "Question Bank", starter: true, recruiter: true, enterprise: true },
        { name: "Creation Limit", starter: "10", recruiter: "20", enterprise: "unlimited" },
      ],
    },
    {
      name: "Coding Question",
      features: [
        { name: "Create Question", starter: true, recruiter: true, enterprise: true },
        { name: "Delete Question", starter: true, recruiter: true, enterprise: true },
        { name: "Edit Question", starter: true, recruiter: true, enterprise: true },
        { name: "Question Bank", starter: true, recruiter: true, enterprise: true },
        { name: "Creation Limit", starter: "10", recruiter: "20", enterprise: "unlimited" },
      ],
    },
    {
      name: "React Question",
      features: [
        { name: "Create Question", starter: true, recruiter: true, enterprise: true },
        { name: "Delete Question", starter: true, recruiter: true, enterprise: true },
        { name: "Edit Question", starter: true, recruiter: true, enterprise: true },
        { name: "Question Bank", starter: false, recruiter: true, enterprise: true },
        { name: "Creation Limit", starter: "10", recruiter: "20", enterprise: "unlimited" },
      ],
    },
    {
      name: "Test",
      features: [
        { name: "Create Test", starter: true, recruiter: true, enterprise: true },
        { name: "Delete Test", starter: true, recruiter: true, enterprise: true },
        { name: "Edit Test", starter: true, recruiter: true, enterprise: true },
        { name: "Test Bank", starter: true, recruiter: true, enterprise: true },
        { name: "Creation Limit", starter: "10", recruiter: "20", enterprise: "unlimited" },
      ],
    },
    {
      name: "Jobs",
      features: [
        { name: "Create Job", starter: true, recruiter: true, enterprise: true },
        { name: "Delete Job", starter: true, recruiter: true, enterprise: true },
        { name: "Edit Job", starter: true, recruiter: true, enterprise: true },
        { name: "Creation limit", starter: "2", recruiter: "20", enterprise: "unlimited" },
      ],
    },
    {
      name: "Assessment",
      features: [
        { name: "Create Assessment", starter: true, recruiter: true, enterprise: true },
        { name: "Delete Assessment", starter: true, recruiter: true, enterprise: true },
        { name: "Edit Assessment", starter: true, recruiter: true, enterprise: true },
        { name: "Creation Limit", starter: "5", recruiter: "20", enterprise: "unlimited" },
        { name: "Invites Limit", starter: "20", recruiter: "20", enterprise: "unlimited" },
      ],
    },
  ]
  return (
    <div className="pricing-features-container">
      {/* Mobile plan tabs - only visible on mobile */}
      {isMobile && (
        <div className="pricing-mobile-tabs">
          <div className="pricing-tabs-container">
            {plans.map((plan, index) => (
              <button
                key={index}
                className={`pricing-tab-btn ${activeMobileTab === index ? "active" : ""}`}
                onClick={() => handleMobileTabChange(index)}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Categories and features */}
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category-section">
          <div className="category-header">
            <h2>{category.name}</h2>
          </div>

          <div className="features-table">
            {category.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="feature-row">
                <div className="feature-name">{feature.name}</div>

                {/* Desktop view - show all plans */}
                {!isMobile && (
                  <>
                    <div className="feature-value starter">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <img src="/green-tick.svg" alt="Available" className="feature-icon" />
                        ) : (
                            <img src="/fill-cross.svg" alt="Available" className="feature-icon" />
                        )
                      ) : (
                        feature.starter
                      )}
                    </div>
                    <div className="feature-value recruiter">
                      {typeof feature.recruiter === "boolean" ? (
                        feature.recruiter ? (
                          <img src="/green-tick.svg" alt="Available" className="feature-icon" />
                        ) : (
                            <img src="/fill-cross.svg" alt="Available" className="feature-icon" />
                        )
                      ) : (
                        feature.recruiter
                      )}
                    </div>
                    <div className="feature-value enterprise">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <img src="/green-tick.svg" alt="Available" className="feature-icon" />
                        ) : (
                            <img src="/fill-cross.svg" alt="Available" className="feature-icon" />
                        )
                      ) : (
                        feature.enterprise
                      )}
                    </div>
                  </>
                )}

                {/* Mobile view - show only active plan */}
                {isMobile && (
                  <div className="feature-value mobile">
                    {activeMobileTab === 0 &&
                      (typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <img src="/green-tick.svg" alt="Available" className="feature-icon" />
                        ) : (
                            <img src="/fill-cross.svg" alt="Available" className="feature-icon" />
                        )
                      ) : (
                        feature.starter
                      ))}
                    {activeMobileTab === 1 &&
                      (typeof feature.recruiter === "boolean" ? (
                        feature.recruiter ? (
                          <img src="/green-tick.svg" alt="Available" className="feature-icon" />
                        ) : (
                            <img src="/fill-cross.svg" alt="Available" className="feature-icon" />
                        )
                      ) : (
                        feature.recruiter
                      ))}
                    {activeMobileTab === 2 &&
                      (typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <img src="/green-tick.svg" alt="Available" className="feature-icon" />
                        ) : (
                            <img src="/fill-cross.svg" alt="Available" className="feature-icon" />
                        )
                      ) : (
                        feature.enterprise
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Pricing


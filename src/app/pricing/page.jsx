"use client"

import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Check, Star } from 'lucide-react'

import "./page.css"
import Pricing from "@/components/sub-pricing/pricing"

export default function PricingPage() {
  const [activePlan, setActivePlan] = useState("Monthly")
  const [activeMobileTab, setActiveMobileTab] = useState(0)

  const plans = [
    {
      name: "Starter Plan",
      subtitle: "Start Strong, Learn Smart!",
      features: [
        { text: "Create 10 MCQs", highlight: "10" },
        { text: "Create 10 Coding Questions", highlight: "10" },
        { text: "Create 10 React Questions", highlight: "10" },
        { text: "Create 10 Tests Sections", highlight: "10" },
        { text: "Create 10 Assessments", highlight: "10" },
        { text: "20 Invites For Assessments", highlight: "20" },
        { text: "Post 2 Jobs", highlight: "2" },
        { text: "Pre-Built MCQ's" },
        { text: "Pre-Built Coding Questions" },
        { text: "Pre-Built Test Sections" },
      ],
    },
    {
      name: "Recruiter Plan",
      subtitle: "Elevate Your Recruitment Game!",
      popular: true,
      features: [
        { text: "Create 20 MCQs", highlight: "20" },
        { text: "Create 20 Coding Questions", highlight: "20" },
        { text: "Create 20 React Questions", highlight: "20" },
        { text: "Create 20 Tests Sections", highlight: "20" },
        { text: "Create 20 Assessments", highlight: "20" },
        { text: "20 Invites For Assessments", highlight: "20" },
        { text: "Post 20 Jobs", highlight: "20" },
        { text: "Pre-Built MCQ's" },
        { text: "Pre-Built Coding Questions" },
        { text: "Pre-Built React Questions" },
        { text: "Pre-Built Test Sections" },
      ],
    },
    {
      name: "Enterprise Plan",
      subtitle: "Empower Your Hirings!",
      features: [
        { text: "Create Unlimited MCQs", highlight: "Unlimited" },
        { text: "Create Unlimited Coding Questions", highlight: "Unlimited" },
        { text: "Create Unlimited React Questions", highlight: "Unlimited" },
        { text: "Create Unlimited Tests Sections", highlight: "Unlimited" },
        { text: "Create Unlimited Assessments", highlight: "Unlimited" },
        { text: "Unlimited Invites For Assessments", highlight: "Unlimited" },
        { text: "Post Unlimited Jobs", highlight: "Unlimited" },
        { text: "Pre-Built MCQ's" },
        { text: "Pre-Built Coding Questions" },
        { text: "Pre-Built React Questions" },
        { text: "Pre-Built Test Sections" },
      ],
    },
  ]

  // Find the maximum number of features across all plans
  const maxFeatures = Math.max(...plans.map((plan) => plan.features.length))

  // Optimize tab switching for instant response
  const handlePlanChange = (plan) => {
    if (activePlan !== plan) {
      // Use requestAnimationFrame to ensure smooth UI updates
      requestAnimationFrame(() => {
        setActivePlan(plan)
      })
    }
  }

  // Handle mobile tab switching
  const handleMobileTabChange = (index) => {
    if (activeMobileTab !== index) {
      requestAnimationFrame(() => {
        setActiveMobileTab(index)
      })
    }
  }

  return (
    <div className="container-fluid p-0 pt-5">
      <div className="green-header">
        <div className="container text-center text-white">
          <div className="pt-5 pb-4">
            <h2 className="fw-bold mb-3 main-heading">Choose the plan that's right for you</h2>
            <p className="lead mb-0">All of our plans are customized to fit the needs of small and large teams.</p>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="pricing-tabs">
                {["Monthly", "Quarterly", "Biannually", "Annually"].map((plan) => (
                  <button
                    key={plan}
                    className={`btn pricing-btn ${activePlan === plan ? "active" : ""}`}
                    onClick={() => handlePlanChange(plan)}
                  >
                    {plan}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {/* Cards section - visible on all screen sizes */}
        <div className="row g-4 justify-content-center equal-height-row">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 pricing-column">
              {plan.popular && (
                <div className="popular-banner-wrapper">
                  <div className="popular-banner">
                    <Star className="star-icon" size={16} /> Most Popular
                  </div>
                </div>
              )}
              <div className={`card pricing-card ${plan.popular ? "popular" : ""}`}>
                {!plan.popular && <div className="top-border" />}

                <div className="card-content">
                  <div className={plan.popular ? "popular-content-wrapper" : ""}>
                    <h3 className="text-center mb-1">{plan.name}</h3>
                    <p className="text-center text-muted subtitle mb-4">{plan.subtitle}</p>
                    <h2 className="text-center price-text mb-4">TBD</h2>
                  </div>
                  <div className="separator"></div>

                  <div className="features-section">
                    <h6 className="mb-4 plan-includes">This Plan Includes:</h6>
                    <ul className="list-unstyled features-list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-start mb-3">
                          <Check className="text-success me-2 flex-shrink-0 check-icon" size={20} />
                          <span className="feature-text">
                            {feature.text.split(feature.highlight || "").map((part, i, arr) => (
                              <span key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="fw-bold">{feature.highlight}</span>}
                              </span>
                            ))}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Add invisible spacer items to ensure equal height */}
                    {plan.features.length < maxFeatures && <div className="card-spacer"></div>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile tabs - visible on medium and small screens */}
        <div className="mobile-plan-tabs">
          <div className="mobile-tabs-container">
            {plans.map((plan, index) => (
              <button
                key={index}
                className={`mobile-tab-btn ${activeMobileTab === index ? "active" : ""}`}
                onClick={() => handleMobileTabChange(index)}
              >
                {plan.name.replace(" Plan", "").replace(" plan", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Features comparison section - visible on all screens */}
        <div className="features-comparison-container mt-5">
          <div className="row features-comparison">
            <div className="col-lg-3 col-md-3 col-sm-3 features-name-col">
              <h4 className="features-name">Features name</h4>
            </div>
            {plans.map((plan, index) => (
              <div key={index} className="col-lg-3 col-md-3 col-sm-3 plan-details-col">
                <h4 className="plan-name">{plan.name}</h4>
                <p className="plan-subtitle">{plan.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="features-separator"></div>
        </div>
        <Pricing/>
      </div>
    </div>
  )
}

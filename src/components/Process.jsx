import React from "react";
import styles from "./process.module.css";

const steps = [
  {
    id: 1,
    imgSrc: "/How-it-works/step-1.svg",
    alt: "Generate Assessment",
    title: "Step 01",
    subtitle: "Generate high-quality assessments, quickly",
    description:
      "Choose an ideal assessment title, opt for tests that suit your needs, and add a personal touch with your custom questions.",
  },
  {
    id: 2,
    imgSrc: "/How-it-works/step-2.svg",
    alt: "Invite Candidates",
    title: "Step 02",
    subtitle: "Invite Candidates",
    description:
      "Connect with candidates by sending email invites directly from Skill Match or share a direct link.",
  },
  {
    id: 3,
    imgSrc: "/How-it-works/step-3.svg",
    alt: "Evaluate Candidates",
    title: "Step 03",
    subtitle: "Evaluate and determine the most suitable candidates",
    description:
      "Access immediate assessment outcomes, promptly compare your candidates, and delve into detailed candidate reviews.",
  },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <div className="container">
        <h2>Step-by-Step Process (Technical and Non-Technical Assessment)</h2>
        <div className="row justify-content-center">
          {steps.map((step) => (
            <div key={step.id} className="col-lg-4 col-md-6 col-12 d-flex">
              <div className={`${styles.step} w-100`}>
                <div className={styles["step-icon"]}>
                  <img src={step.imgSrc} alt={step.alt} />
                </div>
                <h2>{step.title}</h2>
                <h4 className={styles.s}>{step.subtitle}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

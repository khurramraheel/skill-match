"use client";
import styles from "./features.module.css";

const featuresData = [
  {
    imgSrc: "/How-it-works/support.svg",
    alt: "24/7 Support",
    title: "24/7 Support",
    description: "Our team is available 24/7 to provide support. You ask us, we answer it right away."
  },
  {
    imgSrc: "/How-it-works/understandable.svg",
    alt: "Easy to Understand",
    title: "Easy to Understand",
    description: "We have designed it in such a way that anyone can easily create assessments, add custom questions, rank candidates, export custom CSV files and more."
  },
  {
    imgSrc: "/How-it-works/no-cheating.svg",
    alt: "No Cheating",
    title: "No Chance of Cheating",
    description: "Screenshots of candidates as they are being tested, Get Notify if a candidate exits full-screen mode."
  },
  {
    imgSrc: "/How-it-works/mobile-friendly.svg",
    alt: "Mobile Friendly",
    title: "Mobile Friendly",
    description: "It's created for all platforms. Create and Review assessments anywhere and anytime. Candidates can easily showcase their skills on any device."
  },
  {
    imgSrc: "/How-it-works/Scientifically-Backed.svg",
    alt: "Scientific",
    title: "Scientifically-Backed",
    description: "Our assessments are meticulously designed, drawing on scientific principles to ensure reliability and validity. Trust in assessments that truly reflect candidates' skills and potential."
  },
  {
    imgSrc: "/How-it-works/library.svg",
    alt: "Skill Library",
    title: "Extensive Skill Library",
    description: "Choose from our extensive library of over 1000+ scientifically-validated skills and personality tests. Tailor your assessments to match the specific needs and nuances of your roles."
  },
  {
    imgSrc: "/How-it-works/affordable.svg",
    alt: "Affordable",
    title: "Affordable",
    description: "We make professional assessments affordable for everyone and smoothen the hiring process for any size business."
  },
  {
    imgSrc: "/How-it-works/candidate-exp.svg",
    alt: "Candidate Experience",
    title: "Candidate Experience",
    description: "Providing candidates with such technological advancement while hiring them gives them more trust and reliability towards Skill Match."
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <h5 className={styles.choose}>CHOOSE</h5>
      <h2>Why Choose Us?</h2>

      <div className="container">
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className={styles.feature}>
                <img src={feature.imgSrc} alt={feature.alt} className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

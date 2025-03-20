import Image from "next/image";
import "./herosection.css";

const HeroDark = () => {
  return (
    <>
      <Top />
      <div className="dark-hero">
        <div className="container">
          <div className="dark-hero-grid">
            {/* First Section */}
            <FeatureCard
              icon="/home/dark-hero/diamond.svg"
              title="All you need at one Platform"
              text="With the help of our generated skill assessments, video
                interviews and pre-screening chatbots you can easily access
                technical and soft skills of a candidate."
            />
            {/* Second Section */}
            <FeatureCard
              icon="/home/dark-hero/fourdots.svg"
              title="No More Hiring Errors"
              text="It's better to hire the best by using job simulation assessments
                rather than making poor decisions and spending money on hiring."
            />
            {/* Third Section */}
            <FeatureCard
              icon="/home/dark-hero/diamond.svg"
              title="Cheat Proof Assessments"
              text="Presenting you the most updated features which can ensure
                credibility of candidates assessments."
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Top = () => (
  <div className="brand-banner">
    <div className="container">
      <div className="brand-grid">
        {["Hamana", "Anthem", "Healthcare", "Aetna", "Cigna"].map((brand) => (
          <div
            key={brand}
            className={`brand-item ${
              brand === "Healthcare" ? "healthcare-logo" : ""
            }`}
          >
            <Image
              src={`/home/herosection/${brand}Dark.svg`}
              alt={brand}
              width={100}
              height={30}
              className="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, text }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <img src={icon} alt={title} className="icon" />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-text">{text}</p>
  </div>
);

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-bg">
        <Image
          src="/home/herosection/BG.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Plans for Desktop View */}
      <div className="plans-desktop-upper">
        <Plans position="upper-left" />
        <Plans position="upper-right" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-heading">
          Assess, Advance, Achieve: Your <br />
          Path to Engineering Excellence
        </h1>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn btn-primary hero-btn-primary">
            Book a Demo
          </button>
          <button className="btn btn-light hero-btn-secondary">
            <img
              src="/home/herosection/google-icon.svg"
              alt="Google"
              width="20"
              height="20"
            />
            Start Free Trial
          </button>
        </div>

        {/* Description */}
        <p className="hero-description">
          Our goal is to provide you with the tools and resources you need to
          succeed. Making your hiring journey smooth and quick. Curated 1000+
          custom tests to examine your tech candidates and give you 100%
          accurate results in order for you to choose the best.
        </p>

        {/* Plans for Mobile & Tablet */}
        <div className="plans-mobile">
          <Plans position="upper-left" />
          <Plans position="upper-right" />
          <Plans position="lower-left" />
          <Plans position="lower-right" />
        </div>
      </div>

      {/* Plans for Desktop View (Lower plans) */}
      <div className="plans-desktop-lower">
        <Plans position="lower-left" />
        <Plans position="lower-right" />
      </div>
    </section>
  );
};
const plansData = [
  {
    heading: "UnitedHealthcare",
    description: "Premium Insurance",
    percent: "97%",
    image: "/home/herosection/UnitedHealthcare.svg",
  },
  {
    heading: "Humana",
    description: "Platinum Network",
    percent: "77%",
    image: "/home/herosection/Hamana.svg",
  },
  {
    heading: "Anthem Blue Cross",
    description: "SMB Global Plan",
    percent: "91%",
    image: "/home/herosection/Anthem.svg",
  },
  {
    heading: "Aetna",
    description: "Small Business Alpha",
    percent: "82%",
    image: "/home/herosection/Aetna.svg",
  },
];

const Plans = ({ position }) => {
  let plan = {};
  if (position === "upper-left") plan = plansData[0];
  if (position === "upper-right") plan = plansData[1];
  if (position === "lower-left") plan = plansData[2];
  if (position === "lower-right") plan = plansData[3];

  return (
    <div className="plan-card">
      <Image
        src={plan.image}
        alt={plan.heading}
        width={40}
        height={40}
        className="plan-logo"
      />
      <div className="plan-details">
        <h6 className="plan-heading">{plan.heading}</h6>
        <p className="plan-description">{plan.description}</p>
        <div className="plan-match">
          <span className="plan-percent">{plan.percent}</span>
          <b className="plan-tag">Plan Match for SkillMatch</b>
        </div>
      </div>
      <Image
        src="/home/herosection/arrow.svg"
        alt="Arrow"
        width={20}
        height={20}
        className="plan-arrow"
      />
    </div>
  );
};

export { HeroDark, HeroSection };

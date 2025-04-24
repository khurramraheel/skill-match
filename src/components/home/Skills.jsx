'use client';
import Image from "next/image";
import styles from "./skills.module.css";

export default function SkillAssessment() {
  return (
    <div className="container d-flex justify-content-center align-items-center mx-auto px-3 px-md-4 px-lg-5 py-5 h-auto">
      <div className="row g-4 align-items-center w-100 max-w-5xl">
        
        {/* Left Side - Image */}
        <div className="col-lg-6 d-flex justify-content-center">
          <Image
            src="/home/skills/skilltest.svg"
            alt="Skill Assessment Interface"
            width={500}
            height={400}
            className="img-fluid"
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-lg-6">
          <h1 className="fs-3 fw-bold">
            Create Skill Assessments and Video Interviews in Minutes
          </h1>

          <div className="mt-4">
            {/* Feature 1 */}
            <div className="d-flex gap-3">
              <Image
                src="/home/skills/img.svg"
                alt="Assessment Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="fs-5 fw-bold">
                  Assess Both Hard and Soft Skills
                </h3>
                <p className="fx-semibold">
                  With AI-powered assessments, video interviews, and chatbots,
                  evaluate candidates' technical and cognitive skills
                  effectively.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex gap-3 mt-3">
              <Image
                src="/home/skills/img2.svg"
                alt="Library Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="fs-5 fw-bold">
                  Select from Library or Create Your Own
                </h3>
                <p className="fx-semibold">
                  Choose from 1000+ curated assessments or design custom ones to
                  fit your hiring needs.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
                          className={`btn btn-primary mt-3 px-3 py-2 fw-semibold shadow-sm ${styles.btn}`}
                          onClick={() => window.location.href = '/'}
                          >
                          Learn More →
                          </button>
        </div>
      </div>
    </div>
  );
}

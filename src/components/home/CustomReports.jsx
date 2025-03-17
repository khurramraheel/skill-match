import Image from "next/image";
import styles from "./customreports.module.css";

export default function Report() {
  return (
    <div className="container d-flex justify-content-center align-items-center mx-auto px-3 px-md-4 px-lg-5 py-5 h-auto">
      <div className="row g-4 align-items-center w-100 max-w-5xl">
        
        {/* Left Side - Content */}
        <div className="col-lg-6 order-lg-1 order-2">
          <h1 className="fs-3 fw-bold">
            Enhance your candidate experience by incorporating personalized and
            branded skills assessments
          </h1>

          <div className="mt-4">
            {/* Feature 1 */}
            <div className="d-flex gap-3">
              <Image
                src="/home/skills/img.svg"
                alt="Report Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="fs-5 fw-semibold">
                  Customize your assessment by incorporating comprehensive
                  employer branding
                </h3>
                <p className="text-secondary">
                  Add your branding element by adding your company logo, colors,
                  welcome video, and message to enhance engagement and increase
                  completion rates.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex gap-3 mt-3">
              <Image
                src="/home/skills/img2.svg"
                alt="Analytics Icon"
                width={40}
                height={40}
              />
              <div>
                <h3 className="fs-5 fw-semibold">
                  Craft an exceptional experience for candidates
                </h3>
                <p className="text-secondary">
                  Give candidates the chance to showcase their abilities through
                  practical challenges instead of relying on outdated
                  assessments and knowledge tests that may not accurately
                  represent the demands of the role.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className={`btn btn-primary mt-3 px-3 py-2 fw-semibold shadow-sm ${styles.btn}`}>
            Learn More →
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="col-lg-6 d-flex justify-content-center order-lg-2 order-1">
          <Image
            src="/home/reports/custom.svg"
            alt="Reports and Analytics Interface"
            width={500}
            height={400}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

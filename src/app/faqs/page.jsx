import FaqCard from "@/components/faqs/FaqsCard";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "@/app/custom-bootstrap.scss"; // Adjust path if needed

export default function FAQPage() {
  return (
    <>
      {/* FAQ Header Section */}
      <div className="bg-primary pt-4" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
        <div className="container px-4 pt-5 pb-0 mx-6">
          <div className="row d-flex align-items-center">
            {/* Left Section - Text & Search (col-7 on all screens) */}
            <div className="col-7">
              <h1 className="text-white fw-bold mb-3 display-5 display-md-5 display-lg-4 py-4">
                FAQ: Advice and answers from the SkillMatch Team
              </h1>

              {/* Search Bar */}
              <div className="position-relative mb-3 p-6" style={{ maxWidth: "600px " }}>
                <input
                  type="text"
                  placeholder="Search for articles"
                  className="form-control form-control-lg rounded-pill shadow-lg py-3 fs-6"
                />
                <button className="btn position-absolute top-50 end-0 translate-middle-y me-3 border-0">
                  <svg className="text-secondary" style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section - Image (col-5 on all screens) */}
            <div className="col-5 d-flex justify-content-end py-0 ">
              <img
                src="/faqs/girl-avatar.svg"
                alt="Support illustration"
                // className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
                width="350"
                height="350"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Cards Section */}
      <FaqCard />
    </>
  );
}

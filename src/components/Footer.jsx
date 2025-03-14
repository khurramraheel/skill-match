"use client"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"
import "@/components/footer.css"

const Footer = () => {
  return (
    <footer className="footer-section mt-5">
      <Container fluid className="py-4">
        <div className="newsletter-container mx-auto">
          <Row className="align-items-center">
            <Col xs={12} md={5} className="newsletter-title-container">
              <div className="envelope-icon-container me-3">
                <img src="/letter1.svg" alt="envelope" />
              </div>
              <h5 className="newsletter-title mb-0">Subscribe to our newsletter</h5>
            </Col>
            <Col xs={12} md={7}>
              <div className="subscription-container d-flex justify-content-md-end">
                <InputGroup className="subscription-input-group">
                  <InputGroup.Text className="bg-transparent border-0">
                    <img src="/letter.svg" alt="envelope" />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="subscription-input border-0"
                  />
                  <Button className="subscribe-btn">Subscribe</Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Main Footer Content */}
      <Container className="py-4 px-4 px-sm-3">
        <div className="footer-content-container mx-auto">
          <Row>
            {/* Logo and Contact Info */}
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <div className="logo-container mb-3">
                <img src="/logo.svg" alt="logo" className="footer-logo" />
              </div>
              <p className="tagline">
                Take the guesswork out of
                <br />
                your screening process
              </p>
              <div className="contact-info mt-4">
                <p className="d-flex align-items-center mb-2">
                  <img src="/letter1.svg" alt="envelope" className="me-2" />
                  contact@skillmatch.tech
                </p>
                <p className="d-flex align-items-center">
                  <img src="/call.svg" alt="call" className="me-2" />
                  +971 50 89 23 898
                </p>
              </div>
            </Col>

            {/* Why we're different */}
            <Col lg={3} md={6} className="mb-4 mb-lg-0">
              <h5 className="footer-heading mb-3">Why we're different</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">The Only All in one Screening Platform</a>
                </li>
                <li>
                  <a href="#">It's not just a Test, It's a Job Simulation</a>
                </li>
                <li>
                  <a href="#">Unique and Holistic Approach</a>
                </li>
                <li>
                  <a href="#">Comprehensive Assessment Library</a>
                </li>
                <li>
                  <a href="#">100% Customizable Assessments</a>
                </li>
              </ul>
            </Col>

            {/* Company */}
            <Col lg={2} md={6} className="mb-4 mb-lg-0">
              <h5 className="footer-heading mb-3">Company</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Browse Companies</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </Col>

            {/* Product */}
            <Col lg={2} md={6} className="mb-4 mb-lg-0">
              <h5 className="footer-heading mb-3">Product</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Build Assessment</a>
                </li>
                <li>
                  <a href="#">Create Jobs</a>
                </li>
                <li>
                  <a href="#">Create Questions</a>
                </li>
                <li>
                  <a href="#">Analyze Results</a>
                </li>
              </ul>
            </Col>

            {/* Help Center */}
            <Col lg={2} md={6} className="mb-4 mb-lg-0">
              <h5 className="footer-heading mb-3">Help Center</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Knowledge</a>
                </li>
                <li>
                  <a href="#">Academy</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Footer Bottom */}
      <Container className="px-4 px-sm-3">
        <div className="footer-content-container mx-auto">
          <hr className="footer-divider" />
          <Row className="py-3 align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p className="copyright-text mb-0">Copyright © 2024 SkillMatch. All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-center">
                <div className="footer-bottom-links">
                  <a href="#" className="footer-link me-4">
                    Terms of Services
                  </a>
                  <a href="#" className="footer-link me-4">
                    Privacy Policy
                  </a>
                  <a href="#" className="footer-link me-4">
                    Cookies
                  </a>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon ms-2">
                    <img src="/facebook.svg" alt="Facebook" className="social-img" />
                  </a>
                  <a href="#" className="social-icon ms-2">
                    <img src="/linkedin.svg" alt="LinkedIn" className="social-img" />
                  </a>
                  <a href="#" className="social-icon ms-2">
                    <img src="/instagram.svg" alt="Instagram" className="social-img" />
                  </a>
                  <a href="#" className="social-icon ms-2">
                    <img src="/X.svg" alt="Twitter" className="social-img" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer


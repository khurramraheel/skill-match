"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email!";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }
    if (!formData.agreed) {
      newErrors.agreed = "You must accept the terms!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup Successful!");
    }
  };

  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: "5rem" }}>
      <div className="row w-100 shadow rounded-3 overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Left Side Image */}
        <div className="col-md-5 bg-primary d-none d-md-block p-0" style={{ backgroundImage: "url(/auth-cover.svg)", backgroundSize: "cover", backgroundPosition: "center" }}></div>

        {/* Right Side Form */}
        <div className="col-md-6 p-5 mx-5">
          <h2 className="fw-bold">Sign Up To Your Account</h2>
          <p className="text-muted">Already have an account? <a href="#" className="text-decoration-none">Sign in</a></p>
          
          <div className="d-flex gap-2 mb-4">
            <button className="btn fs-5 border-secondary rounded-pill py-2 w-50 d-flex align-items-center justify-content-center">
              <img src="/google-icon.svg" alt="Google" className="me-2" style={{ width: "20px" }} /> Sign up with Google
            </button>
            <button className="btn border-secondary w-50 d-flex py-2 align-items-center rounded-pill justify-content-center fs-5">
              <img src="/github-icon.svg" alt="Github" className="me-2" style={{ width: "20px" }} /> Sign up with Github
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Email</label>
              <input
                type="email"
                className={`form-control p-2 ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgb(239, 239, 239)", border: "1px solid grey" }}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Your Password</label>
              <input
                type="password"
                className={`form-control p-2 ${errors.password ? "is-invalid" : ""}`}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgb(239, 239, 239)", border: "1px solid grey" }}
              />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className={`form-control p-2 ${errors.confirmPassword ? "is-invalid" : ""}`}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgb(239, 239, 239)", border: "1px solid grey" }}
              />
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className={`form-check-input ${errors.agreed ? "is-invalid" : ""}`}
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                style={{ backgroundColor: "rgb(239, 239, 239)", border: "1px solid grey" }}
              />
              <label className="form-check-label">I agree to the <a href="#" className="text-decoration-none">Terms & Conditions</a></label>
              <div className="invalid-feedback">{errors.agreed}</div>
            </div>

            <button type="submit" className="btn btn-success w-100 py-2 fw-bold">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}
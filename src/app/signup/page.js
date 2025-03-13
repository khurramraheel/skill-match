"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "10px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Your Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
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
            />
            <label className="form-check-label">I agree to the Terms & Conditions</label>
            <div className="invalid-feedback">{errors.agreed}</div>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@/app/custom-bootstrap.scss";

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message || "Registration successful!");
      } else {
        toast.error(result.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="vw-100 min-vh-100 d-flex align-items-center justify-content-center">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      
      <div className="row w-100  overflow-hidden" style={{ maxWidth: "full" }}>
        
        {/* Left image section (hidden on small screens) */}
        <div
          className="col-md-5 d-none d-md-flex flex-column align-items-center justify-content-center p-0"
          style={{
            backgroundImage: "url(/images/auth-cover.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgb(45 194 158) !important", // optional, just to be sure
          }}
        >
          <img src="/logo.svg" alt="SkillMatch Logo" style={{ maxWidth: "200px" }} />
          <p className="fs-5 text-center fw-semibold text-white mb-1">
            Assess, Advance, Achieve: Your path to
          </p>
          <p className="fs-5 text-center fw-semibold text-white mt-0">
            Engineering Excellence
          </p>
        </div>

        {/* Right side form section */}
        <div className="col-12 col-md-7 p-5 bg-white">
          <h2 className="fw-bold fs-1">Sign Up To Your Account</h2>
          <p className="fs-5">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">Sign in</a>
          </p>

          {/* Social buttons */}
          <div className="d-flex gap-2 mb-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="btn border-black rounded-pill w-50 d-flex align-items-center justify-content-center"
              style={{ minHeight: "60px" }}
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                style={{ height: "40px", width: "40px" }}
              />
              <span className="d-none d-sm-inline ms-2 fs-5">Sign up with Google</span>
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="btn border-black rounded-pill w-50 d-flex align-items-center justify-content-center"
              style={{ minHeight: "60px" }}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="GitHub"
                style={{ height: "40px", width: "40px" }}
              />
              <span className="d-none d-sm-inline ms-2 fs-5">Sign up with GitHub</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label fs-5 fw-semibold">Your Email</label>
              <input
                type="email"
                className="form-control bg-light p-3"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/,
                    message: "Only .com emails are allowed",
                  },
                })}
              />
              <p className="text-danger">{errors.email?.message}</p>
            </div>

            <div className="mb-3">
              <label className="form-label fs-5 fw-semibold">Your Password</label>
              <input
                type="password"
                className="form-control bg-light p-3"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <p className="text-danger">{errors.password?.message}</p>
            </div>

            <div className="mb-3">
              <label className="form-label fs-5 fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control bg-light p-3"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === document.querySelector("input[name='password']").value || "Passwords do not match!",
                })}
              />
              <p className="text-danger">{errors.confirmPassword?.message}</p>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input fs-5"
                {...register("agreed", {
                  required: "You must accept the terms!",
                })}
              />
              <label className="form-check-label">
                I agree to the{" "}
                <a href="#" className="text-decoration-none">Terms & Conditions</a> and{" "}
                <a href="#" className="text-decoration-none">Privacy Policy</a>
              </label>
              <p className="text-danger">{errors.agreed?.message}</p>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 py-2 fw-bold fs-4 rounded-4 p-3"
              style={{ height: "60px" }}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

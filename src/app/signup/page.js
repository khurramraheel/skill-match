"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    }
  });

  const onSubmit =async (data) => {
    try {
      console.log("Sending Password:", data.password); // Debugging
  
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
        console.log("Server Response:", result); // Debugging
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
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: "5rem" }}>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="row w-100 shadow rounded-3 overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="col-md-5 bg-primary d-none d-md-block p-0" style={{ backgroundImage: "url(/auth-cover.svg)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="col-md-6 p-5 mx-5">
          <h2 className="fw-bold">Sign Up To Your Account</h2>
          <p className="text-muted">Already have an account? <a href="#" className="text-decoration-none">Sign in</a></p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Your Email</label>
              <input
                type="email"
                className="form-control p-2"
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
              <label className="form-label fw-semibold">Your Password</label>
              <input
                type="password"
                className="form-control p-2"
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
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type="password"
                className="form-control p-2"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === document.querySelector("input[name='password']").value || "Passwords do not match!",
                })}
              />
              <p className="text-danger">{errors.confirmPassword?.message}</p>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                {...register("agreed", {
                  required: "You must accept the terms!",
                })}
              />
              <label className="form-check-label">I agree to the <a href="#" className="text-decoration-none">Terms & Conditions</a></label>
              <p className="text-danger">{errors.agreed?.message}</p>
            </div>

            <button type="submit" className="btn btn-success w-100 py-2 fw-bold">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}
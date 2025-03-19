"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation"; // ✅ Extract token from URL
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // ✅ Get token from URL

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: { password: "", confirmPassword: "" }
  });

  const onSubmit = async (data) => {
    try {
      if (!token) {
        toast.error("Token is missing or invalid!");
        return;
      }

      const response = await axios.post("/api/auth", {
        action: "reset-password",
        token, 
        password: data.password
      });

      if (response.status === 200) {
        toast.success(response.data.message || "Password reset successfully!");
      } else {
        toast.error(response.data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error(error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="mt-2">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="vw-100 vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: "5rem!important" }}>
        <div className="col-md-5 bg-primary d-none d-md-block p-0 d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url(/images/auth-cover.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh"
          }}>
        </div>

        {/* Right Side Form */}
        <div className="col-md-6 p-5 mx-5">
          <h2 className="fw-bold fs-1">Type New Password</h2>
          <p className="text-black fs-4">Enter your New Password below.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Password Field */}
            <div className="mb-3">
              <label className="form-label fs-4 mt-4" style={{ fontWeight: "400" }}>
                Enter New Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control p-3"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              <p className="text-danger">{errors.password?.message}</p>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3">
              <label className="form-label fs-4" style={{ fontWeight: "400" }}>
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control p-3"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match!",
                })}
              />
              <p className="text-danger">{errors.confirmPassword?.message}</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success w-100 py-2 fw-normal rounded-4 fs-4 shadow p-3 mb-5"
              style={{ height: "60px" }}>
              Reset Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

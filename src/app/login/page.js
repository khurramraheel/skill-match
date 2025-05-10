"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/createSlice";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/me", { withCredentials: true });
        dispatch(setUser(res.data.user));
      } catch (error) {
        if (error.response?.status === 401) {
          console.log("User not authenticated");
        } else {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/auth", {
        action: "login",
        email: data.email,
        password: data.password,
      });

      const result = response.data;
      if (response.status === 200) {
        dispatch(setUser(result.user));
        toast.success(result.message || "Login successful!");
        router.push("/dashboard");
      } else {
        toast.error(result.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center ">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="row w-100   overflow-hidden m-2" style={{ maxWidth: "full" }}>
        
        {/* Left Side - Image Section (Hidden on small screens) */}
        <div
  className="col-md-5 d-none d-md-flex p-0 align-items-center justify-content-center"
  style={{
    backgroundImage: "url(/images/auth-cover.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(45 194 158) !important", // optional, just to be sure
  }}
>
  <div className="text-center p-4 text-white">
    <img src="/logo.svg" alt="SkillMatch Logo" style={{ maxWidth: "200px" }} />
    <p className="fs-5 fw-semibold mt-4 mb-0">
      Assess, Advance, Achieve: Your Path to
    </p>
    <p className="fs-5 fw-semibold mt-0">Engineering Excellence</p>
  </div>
</div>


        {/* Right Side - Login Form */}
        <div className="col-12 col-md-7 p-5 bg-white">
          <h2 className="fw-bold fs-1">Sign In To Your Account</h2>
          <p className="fs-5">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-decoration-none">
              Sign up
            </a>
          </p>

          {/* Social Login */}
          <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="btn border-black rounded-pill d-flex align-items-center justify-content-center flex-grow-1"
              style={{ minHeight: "60px" }}
            >
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google Logo"
                style={{ height: "30px", width: "30px" }}
              />
              <span className="ms-2 fs-6">Sign in with Google</span>
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="btn border-black rounded-pill d-flex align-items-center justify-content-center flex-grow-1"
              style={{ minHeight: "60px" }}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="GitHub Logo"
                style={{ height: "30px", width: "30px" }}
              />
              <span className="ms-2 fs-6">Sign in with GitHub</span>
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label fs-5">
                Your Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control p-3 bg-light"
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
              <label className="form-label fs-5">
                Your Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control p-3 bg-light"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <p className="text-danger">{errors.password?.message}</p>
            </div>

            <div className="text-end mb-3">
              <a href="/forgot-password" className="text-muted text-decoration-none fs-6">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 py-3 rounded-4 fs-5"
            >
              Login
            </button>
          </form>

          <label className="form-check-label mt-3 fs-6">
            By Signing in, you agree to our{" "}
            <a href="/terms-and-condition" className="text-decoration-none">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="text-decoration-none">
              Privacy Policy
            </a>.
          </label>
        </div>
      </div>
    </div>
  );
}

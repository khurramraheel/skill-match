"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/createSlice";
import { signIn } from "next-auth/react";

export default function LoginForm() {


  const dispatch = useDispatch();
  const router = useRouter();



  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/api/me", { withCredentials: true });

      dispatch(setUser(res.data.user));
    };
    fetchUser();
  }, [dispatch]);
  




  const onSubmit =  async (data) => {
    try {
     
  
      const response =  await axios.post("/api/auth", {
      
            action: "login", 
            email: data.email,
            password: data.password,
        
      });
  
      const result =  response.data;
      console.log("Server Response:", result); // Debugging
      if (response.status==200) {
        dispatch(setUser(result.user))
        console.log("result.user:", result.user);


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
  
  
        
      
     
    
    

 
    const { register, handleSubmit,setValue,formState: { errors }} = useForm({
     defaultValues:{

       email:"",
       password:""
      }
    });

  return (

    <div className="mt-2"> 
     <ToastContainer position="top-center" autoClose={3000} hideProgressBar ></ToastContainer>
    <div className=" vw-100 vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop:"5rem!important" }}>
      <div className="row w-100 shadow rounded-3 overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Left Side Image */}
        <div
            className="col-md-5 bg-primary d-none d-md-block p-0"
            style={{
              backgroundImage: "url(/images/auth-cover.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              
            }}
          >
                   <h1 className=" text-center fw-semibold text-white " 
              >SkillMatch</h1>


              <p className="fs-5 text-center fw-semibold text-white " style={{marginBottom:"0px"}}
              >Asses Advance Achieve: Your path to </p>
                <p className=" fs-5 text-center fw-semibold text-white leading-none " style={{marginTop:"-9px"}}> Engineering Exillence</p>
          </div>

        {/* Right Side Form */}
        <div className="col-md-6 p-5 mx-5">  
          <h2 className=" fw-bold fs-1">Sign In To Your Account</h2>
          <p className="text-black  fs-5">Dont have an account? <a href="#" className="text-decoration-none">Sign in</a></p>
          
          <div className="d-flex gap-2 mb-4 ">
            <button   onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="btn  fs-5 border-black rounded-pill p-6 w-50 d-flex align-items-center justify-content-center" style={{padding:"15px"}}>
            <img style={{height:"30px", paddingRight:"10px"}} src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo"/> Sign in with Google
            </button>
            <button   onClick={() => signIn("github", { callbackUrl: "/dashboard" })}  className="btn border-black w-50 d-flex py-6 align-items-center rounded-pill justify-content-center fs-5">
              <img style={{height:"30px" , paddingRight:"10px"}}  src="https://img.icons8.com/ios-filled/16/000000/github.png" alt="GitHub Logo"  /> Sign In with Github
            </button>
          </div> 

  
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label  fs-4 "style={{fontWeight:"400"}}>Your Email {" "}
              <span className="text-danger">*</span></label>
           
              <input
                  type="email"
                  className={`form-control p-3 `}
               
                 {...register("email",{
                  required:{
                    value:true,
                    message:"Email is required",
                  },pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/, // ✅ Must contain @ and end with .com
                    message: "Only .com emails are allowed",
                  }
                })}
              />

              <p className="text-danger">{errors.email?.message}</p>
            </div>

            <div className="mb-3">
              <label className="form-label fs-4 " style={{fontWeight:"400"}}>Your Password {" "}
              <span className="text-danger">*</span></label>
              <input
                type="password"
             className={`form-control p-3`}
               
        
                {...register("password",{
                  required:{
                    value:true,
                    message:"Password is required"
                    
                  }
                })}
              />
             <p className="text-danger">{errors.password?.message}</p>
            </div>

           <div className="text-end my-3 " >
            <a className="text-muted text-black fs-5" style={{textDecoration: "none"}}
            href="/forgot-password"> Forgot password?</a >
           </div>

       

            <button type="submit" className="btn btn-success w-100 py-2 fw-normal rounded-4 fs-4 shadow p-3 " style={{height:"60px"}}>Login</button>

            <div className="text-muted pt-3">By Signing in, you are agreeing to our <a href="#" className="text-muted">Terms and Conditions</a> and <a href="#" className="text-muted">Privacy Policy</a>.</div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
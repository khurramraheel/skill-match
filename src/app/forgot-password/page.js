// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSearchParams } from "next/navigation";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth", { 
//         action: "forgot-password",  // ✅ Required field added
//         email
//       });
  
//       toast.success(res.data.message || "Reset link sent to your email!");
//     } catch (error) {
//       toast.error(error.response?.data?.error || "Something went wrong!");
//     }
//   };
  

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100">
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//       <div className="card p-4 shadow" style={{ width: "400px" }}>
//         <h2>Forgot Password</h2>
//         <p>Enter your email to receive a reset link</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             className="form-control my-2"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export function ResetPassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       return toast.error("Passwords don't match!");
//     }

//     try {
//       const res = await fetch("/api/auth", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           action: "reset-password",
//           token,
//           password
//         })
//       });

//       const data = await res.json();
      
//       if (res.ok) {
//         toast.success("Password reset successful!");
//         // Redirect to login after short delay
//         setTimeout(() => window.location.href = "/login", 2000);
//       } else {
//         toast.error(data.error || "Failed to reset password");
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100">
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//       <div className="card p-4 shadow" style={{ width: "400px" }}>
//         <h2>Reset Password</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             className="form-control my-2"
//             placeholder="New Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password" 
//             className="form-control my-2"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="btn btn-primary w-100">
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




// 


 



"use client";
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/custom-bootstrap.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {


  


  const onSubmit = async (data) => {
    try {
      // console.log("Sending Password:", data.password); // Debugging
  
      const response = await axios.post("/api/auth", {
          action: "forgot-password", 
            email: data.email,
            
           });
  
           if (response.status === 200) {
            toast.success(response.data.message || "Reset link sent successfully!");
          } else {
            toast.error(response.data.error || "Something went wrong!");
          }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Something went wrong!");
    }
  };
  
  
        
      
    // let onSubmit = async(data) => {
    //    await  axios.post("/api/auth",{
    //     action:"forgot-password",
    //     email
    //      })
    //  }
    
    

 
    const { register, handleSubmit,setValue,formState: { errors }} = useForm({
     defaultValues:{

       email:"",
      
      }
    });

  return (
    <div className="mt-2"> 
     <ToastContainer position="top-center" autoClose={3000} hideProgressBar ></ToastContainer>
    <div className=" vw-100 vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop:"5rem!important" }}>
    <div className="col-md-5 bg-primary d-none d-md-block p-0 d-flex align-items-center justify-content-center" 
     style={{ 
       backgroundImage: "url(/images/auth-cover.svg)", 
       backgroundSize: "cover", 
       backgroundPosition: "center", 
       height: "100vh"  // 👈 Yeh pura screen height tak stretch karega
     }}>
  
</div>

        {/* Right Side Form */}
        <div className="col-md-6 p-5 mx-5">  
          <h2 className=" fw-bold fs-1">Forgot Your password?</h2>
          <p className="text-black  fs-4">Enter your email address below. and we`ll send you an e-mail allowing you to reset </p>
          
        
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label  fs-4 mt-4 "style={{fontWeight:"400"}}>Your Email {" "}
              <span className="text-danger">*</span></label>
           
              <input
                  type="email"
                  className={`form-control p-3 `}
               
                 {...register("email",{
                  required:{
                    value:true,
                    message:"Email is required",
                  },pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/,
                    message: "Only .com emails are allowed",
                  }
                })}
              />
              <p className="text-danger">{errors.email?.message}</p>
            </div>

          

          

       

            <button type="submit" className="btn btn-success w-100 py-2 fw-normal rounded-4 fs-4 shadow p-3 mb-5" style={{height:"60px"}}>Reset Now</button>

            
          </form>
        </div>
      </div>
    </div>
  
  
  );
}







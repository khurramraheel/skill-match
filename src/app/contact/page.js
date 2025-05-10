"use client";

import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TrustedCompanies from "../../components/TrustedCompanies";
import { vector1, vector2 } from "../../../public/contact";
import Image from "next/image";
import styles from "./page.module.css";
import Cta from "@/components/how-it-works/Cta";

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <style jsx global>{`
        .form-control:focus {
          border-color: #ced4da;
          box-shadow: none;
        }
        .form-control.is-invalid:focus {
          border-color: #dc3545;
          box-shadow: none;
        }
        .react-tel-input .form-control:focus {
          border-color: #ced4da !important;
          box-shadow: none !important;
        }
        .react-tel-input .selected-flag:focus {
          background-color: transparent !important;
        }
        .react-tel-input .selected-flag:hover {
          background-color: transparent !important;
        }
      `}</style>
      <main
        className="min-h-screen "
        style={{ backgroundColor: "rgb(45, 194, 158)" }}
      >
        <div className="container py-5">
          <div className="row">
            <div className=" col-xs-12 col-md-6 text-white my-5">
              <h1
                className={`mt-4 mb-4  text-center text-md-start ${styles.responsiveText}`}
              >
                Get in touch.
              </h1>
              <p className="mb-4 fs-3 ">
                If you have any questions about the subscription or are not sure
                which plan is right for you, contact our team and let&apos;s
                schedule a call.
              </p>
              <p className="mb-5 fs-3 ">
                If you&apos;re a current customer looking for support, please
                contact
                <a
                  href="mailto:support@skillmatch.tech"
                  className="text-white text-decoration-none"
                >
                  support@skillmatch.tech
                </a>
              </p>

              <div className="mt-5 fs-3">
                <h5 className="mb-4">Looking for something else ?</h5>
                <div className="d-flex fw-bold flex-column gap-2">
                  <Link href="/" className="text-white text-decoration-none">
                    Product &gt;
                  </Link>
                  <Link href="/" className="text-white text-decoration-none">
                    Help Center &gt;
                  </Link>
                  <Link href="/" className="text-white text-decoration-none">
                    Careers &gt;
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 position-relative">
              <div
                className="position-absoulute"
                style={{ transform: "rotate(1.7deg)" }}
              >
                <Image
                  src={vector1}
                  alt="Vector Image 1"
                  className="h-10 mt-4"
                  style={{ transform: "rotate(5deg)" }}
                />
                <Image
                  src={vector2}
                  alt="Vector Image2"
                  className="mt-2 "
                  style={{ transform: "rotate(1deg)" }}
                />
              </div>
              <div className=" ms-5  mt-1 card shadow-lg rounded-top-4 p-4 border border-dark border-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your name<span className="text-danger">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control form-control-lg ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                        minLength: {
                          value: 3,
                          message: "Name is too Short",
                        },
                      })}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your email<span className="text-danger">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`form-control form-control-lg ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Your number<span className="text-danger">*</span>
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: "Phone number is required",
                        pattern: {
                          value: /^\+?[1-9]\d{1,14}$/,
                          message: "Invalid phone number",
                        },
                      }}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          country={"pk"}
                          value={value}
                          onChange={(phone) => onChange(phone)}
                          inputProps={{
                            id: "phone",
                            className: `form-control form-control-lg w-100 ${
                              errors.phone ? "is-invalid" : ""
                            }`,
                          }}
                          containerClass="mb-0"
                          placeholder="Enter your number"
                          inputStyle={{
                            width: "100%",
                            height: "48px",
                            fontSize: "1.25rem",
                            backgroundColor: "white",
                            border: "1px solid #ced4da",
                          }}
                          buttonStyle={{
                            backgroundColor: "white",
                            border: "1px solid #ced4da",
                            borderRight: "none",
                          }}
                          dropdownStyle={{
                            width: "300px",
                          }}
                        />
                      )}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback d-block">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address<span className="text-danger">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      className={`form-control form-control-lg ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your address"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is Required",
                        },
                        minLength: {
                          value: 5,
                          message: "Address is too short",
                        },
                      })}
                    />
                    {errors.address && (
                      <div className="invalid-feedback">
                        {errors.address.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message<span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      className={`form-control form-control-lg ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows={4}
                      placeholder="Type a message"
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Message is required",
                        },
                      })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 text-white"
                    style={{ backgroundColor: "#2b7a68" }}
                  >
                    Contact Us
                  </button>
                </form>
                <div
                  className="position-absolute bg-black rounded-2 "
                  style={{
                    width: "calc(100% + 120px)",
                    height: "4px",
                    left: "-60px",
                    bottom: "-4px",
                  }}
                ></div>
                <div
                  className="position-absolute bg-black rounded-2"
                  style={{
                    width: "60px",
                    height: "4px",
                    left: "-140px",
                    bottom: "-4px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TrustedCompanies />
      <Cta/>
    </div>
  );
};

export default Contact;

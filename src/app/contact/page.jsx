"use client";

import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TrustedCompanies from "../../components/TrustedCompanies";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Contact = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name cannot exceed 50 characters")
      .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .required("Phone number is required"),
    address: yup
      .string()
      .min(5, "Address must be at least 5 characters long")
      .required("Address is required"),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters long")
      .required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <main className="min-h-screen bg-secondary">
        <div className="container py-5">
          <div className="row">
            <div className=" col-12 col-lg-6 text-white my-5">
              <h1 className="display-5 mt-4 mb-4 fw-bolder  text-md-start text-center">
                Get in touch.
              </h1>
              <p className="mb-4 fw-bold">
                If you have any questions about the subscription or are not sure
                which plan is right for you, contact our team and let&apos;s
                schedule a call.
              </p>
              <p className="mb-5 fw-bold">
                If you&apos;re a current customer looking for support, please
                contact
                <a
                  href="mailto:support@skillmatch.tech"
                  className="text-white text-decoration-none"
                >
                  support@skillmatch.tech
                </a>
              </p>

              <div className="mt-5">
                <h5 className="mb-4">Looking for something else ?</h5>
                <div className="d-flex flex-column gap-2">
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
            <div className="col-12 col-lg-6">
              <div className="card shadow-lg rounded-4 p-4 border border-dark border-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your name<span className="text-danger">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`form-control form-control-lg   ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your name"
                      {...register("name")}
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
                      className={`form-control form-control-lg${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                      {...register("email")}
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
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          country={"pk"}
                          value={value}
                          onChange={(phone) => onChange(phone)}
                          inputProps={{
                            id: "phone",
                            className: `form-control  form-control-lg w-100 ${
                              errors.phone ? "is-invalid" : ""
                            }`,
                          }}
                          placeholder="Enter your number"
                          inputStyle={{ backgroundColor: "#efefef" }}
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
                      className={`form-control form-control-lg${
                        errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your address"
                      {...register("address", { required: true })}
                    />
                    {errors.address && (
                      <div className="invalid-feedback">
                        Address is required
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
                      {...register("message", { required: true })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">
                        Message is required
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <TrustedCompanies />
    </>
  );
};

export default Contact;

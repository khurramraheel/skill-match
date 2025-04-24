"use client"
import React from 'react';
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoLanguage } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { ImAttachment } from "react-icons/im";

export default function ProfilePage() {
  return (
    <div className="container-fluid mt-5">

      <div className="row gx-5">

        {/* Left Column - Profile Section */}
        <div className='col-2'></div>
        <div className="col-10">
          <h1 className="fw-bold mt-5 text-center text-md-start" style={{ color: "rgb(37, 50, 75)" }}>My Profile</h1>
        </div>

        {/* Header Section */}
        <div className='row mt-3 gap-3'>
          <div className='col-2'></div>
          <div className='col-6'>
            <div className=" p-0 position-relative ">
              <div
                className="rounded-top-4 w-100 "
                style={{
                  height: "30vh",
                  backgroundColor: "rgb(229 231 235)",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                }}
              >
                <button
                  className="btn position-absolute rounded-0 p-0"
                  style={{
                    top: "15px",
                    right: "15px",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "transparent",
                    borderColor: "grey",
                    border: "1px solid grey",
                  }}
                >
                  <FaRegPenToSquare
                    style={{ width: "30px", height: "30px", color: "rgb(45 194 158)" }}
                  />
                </button>
              </div>

              {/* Profile Image */}
              <div
                className="rounded-circle position-absolute"
                style={{
                  width: "140px",
                  height: "140px",
                  backgroundColor: "rgb(189, 189, 189)",
                  border: "2px solid white",
                  left: "25px",
                  top: "calc(30vh - 85px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                  zIndex: 1,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/my-profile/profile-logo.svg"
                  alt="Profile"
                  style={{
                    marginLeft: "15px",
                    width: "80%",
                    height: "70%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Footer Section */}
              <div
                className="rounded-bottom-4 shadow w-100 pt-5 pb-4 px-4"
                style={{
                  height: "30vh",
                  backgroundColor: "#fff",
                  borderTop: "0!important",
                  border: "1px solid silver",
                }}
              >
                <div className="row align-items-center">
                  <div className="col-2" />
                  <div className="col-7 text-center">
                    <h3 className="mb-0">User Name</h3>
                  </div>
                  <div className="col-3 text-end">
                    <button
                      className="fs-6 fw-semibold btn border rounded-4"
                      style={{
                        padding: "10px 20px",
                        color: "rgb(70, 64, 222)",
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "rgb(245 244 255)";
                        e.currentTarget.style.borderColor = "black";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.borderColor = "rgb(70, 64, 222)";
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Sections */}
            {[
              { title: "About Me", icon: <FaRegPenToSquare /> },
              { title: "Experiences", icon: <LuPlus /> },
              { title: "Educations", icon: <LuPlus /> },
              { title: "Technical Skills", icon: <FaRegPenToSquare /> },
              { title: "Soft Skills", icon: <FaRegPenToSquare /> },
              { title: "Areas of Interest", icon: <FaRegPenToSquare /> },
              { title: "Portfolios", icon: <LuPlus /> },
            ].map((section, index) => (
              <div
                key={index}
                className="rounded-4 mt-4 p-4 shadow"
                style={{
                  border: "1px solid silver",
                  width: "100%",
                  minHeight: "25vh",
                  backgroundColor: "white",
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 style={{ color: "rgb(37, 50, 75)" }}>{section.title}</h3>
                  <button
                    className="btn p-0 border-1 rounded-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "transparent",
                      borderColor: "grey",
                    }}
                  >
                    {React.cloneElement(section.icon, {
                      style: { width: "25px", height: "25px", color: "rgb(45 194 158)" },
                    })}
                  </button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <h4 className="text-muted">No Data Found</h4>
                </div>
              </div>
            ))}

            <h1 className="mt-5 fw-bold text-center text-md-start">SkillMatch jobs for you</h1>
          </div>




          {/* Right Column - Widgets */}
          <div className='col-3'>
            <div>
              {/* Complete Profile Box */}
              <div className="rounded-4 p-4 shadow mb-4" style={{ backgroundColor: "#fff", border: "1px solid silver" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-semibold">Complete Profile</h5>
                  <h5 className="fw-semibold">0%</h5>
                </div>
                <div className="mb-3">
                  <div className="rounded-3" style={{ height: "12px", backgroundColor: "#edecee" }} />
                  <h6 className="mt-2 text-end text-muted">0/9 Done</h6>
                </div>
                <div className="mb-4">
                  {[
                    { label: "Profile Picture", percent: 5 },
                    { label: "Cover Image", percent: 5 },
                    { label: "About Section", percent: 5 },
                    { label: "Education", percent: 20 },
                    { label: "Work Experience", percent: 20 },
                    { label: "Portfolios", percent: 20 },
                    { label: "Social Links", percent: 5 },
                    { label: "GitHub", percent: 10 },
                    { label: "LinkedIn", percent: 10 },
                  ].map((item, index) => (
                    <div className="d-flex align-items-center mb-3" key={index}>
                      <div
                        className="rounded-circle d-flex justify-content-center align-items-center me-3"
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: item.percent === 100 ? "#2dc29e" : "#fff",
                          border: `2px solid ${item.percent === 100 ? "#2dc29e" : "grey"}`,
                        }}
                      />
                      <div className="flex-grow-1 text-muted fw-semibold">{item.label}</div>
                      <div className="fw-bold" style={{ color: item.percent === 100 ? "#2dc29e" : "#6c757d" }}>
                        {item.percent}%
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="w-100 btn fw-semibold fs-5 rounded-4 shadow-sm"
                  style={{
                    height: "50px",
                    backgroundColor: "#2dc29e",
                    color: "#fff",
                    border: "none",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#25ad8c";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#2dc29e";
                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  Complete Now
                </button>

              </div>

              {/* Additional Info Widgets */}
              <div className="rounded-4 shadow p-4 mb-4" style={{ backgroundColor: "#fff", border: "1px solid silver" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Additional Details</h5>
                  <button className="btn p-0 border-1 rounded-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "transparent",
                      borderColor: "grey",
                    }}>
                    <FaRegPenToSquare style={{ width: "25px", height: "25px", color: "rgb(45, 194, 158)" }} /></button>

                </div>
                <div className="d-flex flex-column gap-3 text-muted">
                  <div className="d-flex align-items-center gap-3">
                    <HiOutlineMail style={{ width: "35px", height: "35px" }} />
                    <div>
                      <div className="text-muted">Email</div>
                      <div className="fw-semibold text-muted">user@example.com</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <SlScreenSmartphone style={{ width: "35px", height: "35px" }} />
                    <div>
                      <div className="text-muted">Phone</div>
                      <div className="fw-semibold text-muted">+1 (123) 456-7890</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <IoLanguage style={{ width: "35px", height: "35px" }} />
                    <div>
                      <div className="text-muted">Languages</div>
                      <div className="fw-semibold text-muted">N/A</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-4 shadow p-4 mb-4" style={{ backgroundColor: "#fff", border: "1px solid silver" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Social Links</h4>
                  <button className="btn p-0 border-1 rounded-0"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "transparent",
                      borderColor: "grey",
                    }}>
                    <LuPlus style={{ width: "25px", height: "25px", color: "rgb(45 194 158)" }} /></button>

                </div>
              </div>

              {/* Verify LinkedIn */}
              <div className="rounded-4 shadow p-4 mb-4" style={{ backgroundColor: "#fff", border: "1px solid silver" }}>
                <div className="d-flex align-items-center gap-2 mb-3">

                  <h5 className="mb-0">Verify Your Profile</h5>
                  <MdVerified style={{ width: "30px", height: "30px", color: "rgb(66, 153, 254)" }} />
                </div>
                <button
                  className="btn border rounded-4 fw-bold w-100 py-3"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "rgb(0, 119, 181)!important",
                    color: "rgb(0, 119, 181)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  Connect LinkedIn
                </button>

              </div>

              {/* Attach Resume */}
              <div className="rounded-4 shadow p-4 mb-4" style={{ backgroundColor: "#fff", border: "1px solid silver" }}>
                <div className="mb-3">
                  <h5>Attach your Resume</h5>
                </div>
                <button 
                className="btn w-100 d-flex
                 align-items-center justify-content-center gap-3 text-muted py-3 rounded-4  w-100 "
                  style={{
                    border:"1.5px dotted rgb(54 113 103) ",
                    backgroundColor: "transparent",
                    }}>
                  <ImAttachment />
                  Attach Resume/CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

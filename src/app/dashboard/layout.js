// app/(dashboard)/layout.js
"use client";

import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
          
        <nav className="col-md-3 col-lg-2 d-md-block  bg-light bg-gradient sidebar p-0">
        <img className="ms-2"
  src="/logo.svg"
  alt="Logo"
  style={{ height: "28px", width: "173px" }}
/>
  <ul className="nav flex-column mt-5">
    <li className="nav-item">
   
      <Link className={"nav-link text-dark mt-2 fw-medium fs-5 rounded-start-circle "} href="/dashboard">   <i class="bi bi-house-door me-3 ms-3"></i>Dashboard</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-dark mt-2 fw-medium fs-5 rounded-start-circle " href="/dashboard/findjobs">  <i class="bi bi-search me-3 ms-3"></i>Find Jobs</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-dark mt-2 fw-medium fs-5  rounded-start-circle" href="/dashboard/brse-companies"> <i class="bi bi-window-fullscreen me-3 ms-3"></i>Browse Compny</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-dark mt-2 fw-medium fs-5  rounded-start-circle" href=""> <i class="bi bi-person-fill  me-3 ms-3"></i>My Profile</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-dark mt-2 fw-medium fs-5  rounded-start-circle" href=""> <i class="bi bi-gear me-3 ms-3"></i>Setting</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-dark mt-2 fw-medium fs-5  rounded-start-circle" href=""> <i class="bi bi-question-circle  me-3 ms-3"></i>Help Center?</Link>
    </li>
  </ul>
</nav>


        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {children}
        </main>
      </div>
    </div>
  );
}

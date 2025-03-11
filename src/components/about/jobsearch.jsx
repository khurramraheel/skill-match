import React from "react";
import { FaSearch } from "react-icons/fa";

export default function JobSearchBar() {
  return (
    <div className="container py-4">
      {/* ✅ Title */}
      <h1 className="text-center fw-bold mb-3">Job Openings</h1 >

      {/* ✅ Search Bar Section */}
      <div className="shadow-sm rounded p-4 border-1 bg-light">
        <div className="row align-items-center">
          
          {/* 🔍 Search Input */}
          <div className="col-md-4 d-flex align-items-center">
            <FaSearch className="text-muted me-2" />
            <input
              type="text"
              className="form-control border-0 text-muted"
              placeholder="Job title or keyword"

            />
          </div>

          {/* 📁 Department Filter */}
          <div className="col-md-4">
            <select className="form-select border-0 ">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Design</option>
            </select>
          </div>

          {/* 📍 Location Filter */}
          <div className="col-md-4">
            <select className="form-select border-0">
              <option>All Job Locations</option>
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

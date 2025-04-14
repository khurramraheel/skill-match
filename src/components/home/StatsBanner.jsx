'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./statsbanner.module.css"

const StatsBanner = () => {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center"
      style={{
        backgroundColor: '#2DCCA7',
        minHeight: '380px',
        padding: '50px 0', // Default padding
      }}
    >
      <div className="container">
        <div className="row text-center text-white align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className={`display-4 fw-bold ${styles.banner}`}>90%</h2>
            <p className="fs-5">Quicker Hiring</p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-none d-md-block border-start border-end border-white h-100 px-4">
              <h2 className={`display-4 fw-bold ${styles.banner}`}>100%</h2>
              <p className="fs-5">Real Time Feedback</p>
            </div>
            {/* Mobile View ke liye Simple Text */}
            <div className="d-block d-md-none">
              <h2 className={`display-4 fw-bold ${styles.banner}`}>100%</h2>
              <p className="fs-5">Real Time Feedback</p>
            </div>
          </div>

          <div className="col-md-4">
            <h2 className={`display-4 fw-bold ${styles.banner}`}>95%</h2>
            <p className="fs-5">Data Driven Decision Making</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <button className={`btn btn-light rounded-pill px-5 py-3 fs-6 fw-semibold text-dark ${styles.btn}`}>
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;

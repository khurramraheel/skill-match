"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="container-fluid"> 
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar p-3">
          <h4 className="text-center">SkillMatch</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link text-white" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">My Applications</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Find Jobs</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Browse Companies</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Settings</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2 className="mt-4">Good Noon, Taimoor Gill</h2>
          
          <div className="row mt-4">
            {/* Total Jobs Applied */}
            <div className="col-md-4">
              <div className="card text-center p-4">
                <h5>Total Jobs Applied</h5>
                <h2>0</h2>
              </div>
            </div>
            
            {/* Interviewed */}
            <div className="col-md-4">
              <div className="card text-center p-4">
                <h5>Interviewed</h5>
                <h2>0</h2>
              </div>
            </div>
            
            {/* Job Status */}
            <div className="col-md-4">
              <div className="card text-center p-4">
                <h5>Jobs Applied Status</h5>
                <p>0% Unsuitable</p>
                <p>0% Interviewed</p>
              </div>
            </div>
          </div>
          
          {/* Recent Applications */}
          <div className="card mt-4 p-4">
            <h5>Recent Application History</h5>
            <p>No Application Found!</p>
          </div>
        </main>
      </div>
    </div>
  );
}

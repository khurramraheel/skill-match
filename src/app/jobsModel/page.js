"use client"
import { useState } from "react";

export default function JobApplication( ){



    const [formData, setFormData] = useState({
        fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    resume: null,
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'resume') {
          setFormData({ ...formData, resume: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Example: Creating FormData for file submission
        const submissionData = new FormData();
        submissionData.append('fullName', formData.fullName);
        submissionData.append('email', formData.email);
        submissionData.append('phone', formData.phone);
        submissionData.append('portfolio', formData.portfolio);
        submissionData.append('resume', formData.resume);
    
        // For demo purpose
        console.log('Submitted:', {
          ...formData,
          resume: formData.resume?.name || 'No file selected',
        });
    
        // Send `submissionData` via fetch/axios to backend if needed
      };
    return (
       
       <div>

   
   
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style={{width:"115%"}}>
      <div class="modal-header">
        <div class="modal-title " id="exampleModalLabel">

        <h3 className="mb-2">Software Engineer MERN</h3>
      <p className=" mb-1 fs-6 fw-light">
        Netixsol Web3Geeks Faisalabad, Pakistan  Full-Time
      </p>

        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
   
    
      <h3 className="mt-2 mb-3">Submit your application</h3>
      <p className="text-muted mb-3">
        Following information will only be shared with <span className="text-success">Netixsol Web3Geeks</span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full name <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder=""
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address <span className="text-danger">*</span></label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone number <span className="text-danger">*</span></label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+92 000 0000000"
          />
        </div>
  {/* Portfolio URL */}
  <div className="mb-3">
          <label className="form-label fw-bold text-muted">Portfolio URL</label>
          <input
            type="url"
            className="form-control"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="https://yourportfolio.com"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-4">
          <label className="form-label fw-bold">Attach your resume <span className="text-danger">*</span></label>
          <div className="d-flex align-items-center">
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="d-none"
              id="resumeInput"
            />
            <label htmlFor="resumeInput" className="btn btn-outline-success d-flex align-items-center">
              <i className="bi bi-paperclip me-2"></i> Resume/CV
            </label>
            {formData.resume && (
              <span className="ms-3 text-secondary">{formData.resume.name}</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Submit Application
        </button>
      </form>

      <p className="text-muted mt-3" style={{ fontSize: '0.9rem' }}>
        By sending the request you can confirm that you accept our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>
   
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    )
}
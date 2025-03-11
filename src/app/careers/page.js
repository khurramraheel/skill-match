'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trust from '../../components/Trust';
import { FaStar, FaBuilding, FaWifi, FaTh, FaList } from 'react-icons/fa';
import PerksAndBenefits from '@/components/perks';
import '@/app/custom-bootstrap.scss';
import JobSearchBar from '@/components/about/jobsearch';

export default function Page() {
    const [view, setView] = useState('grid');

    const jobs = [
        { title: 'Software Engineer', category: 'Engineering', type: 'Full-Time' },
        { title: 'Marketing Specialist', category: 'Marketing', type: 'Part-Time' },
        { title: 'Financial Analyst', category: 'Finance', type: 'Full-Time' },
        { title: 'Customer Support Representative', category: 'Customer Service', type: 'Remote' },
        { title: 'Graphic Designer', category: 'Design', type: 'Hybrid' },
        { title: 'Human Resources Manager', category: 'Human Resources', type: 'Contract' },
        { title: 'Senior Human Resources Manager', category: 'Human Resources', type: 'Part-Time' },
    ];

    return (
        <div className="pt-5 px-md-0">
            {/* ✅ HERO SECTION */}
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center gap-4 bg-primary text-white text-center py-3"
                style={{
                    height: "93vh",
                    backgroundImage: "url(/about-us/careers-bg.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="row w-100">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-12">
                        <h1 className="fw-bold" style={{ fontSize: "2.6rem" }}>
                            Help us transform the hiring process - join our team of innovators!
                        </h1>
                        <button className="btn btn-light rounded-pill fw-bold px-4 py-2 mt-4 fs-5">
                            View Job Openings
                        </button>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            {/* ✅ TRUST SECTION */}
            <Trust />

            {/* ✅ RATINGS SECTION */}
            <div className=' ' style={{ height: '35vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "rgb(217 249 223)" }}>
                <div className='container d-flex flex-column align-items-center justify-content-center gap-4 py-3' style={{ height: '100%' }}>
                    <h1 className='fw-bold text-center' style={{ fontSize: "2rem" }}>
                        Loved by candidates, trusted by industry leaders
                    </h1>
                    <div className='d-flex gap-4'>
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className='text-warning' style={{ fontSize: '2rem' }} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ✅ VALUES SECTION */}
            <div className='container text-center px-1 my-5'>
                <h2 className='fw-bold'>We live by our values</h2>
                <div className='row mt-4'>
                    <div className='col-md-6 d-flex flex-column align-items-center text-center mb-4'>
                        <h4 className='fw-bold'>Integrity is everything</h4>
                        <p className='fs-5'>Through honesty, we earn and maintain trust.</p>
                    </div>
                    <div className='col-md-6 d-flex flex-column align-items-center text-center mb-4'>
                        <h4 className='fw-bold'>Be bold and innovate</h4>
                        <p className='fs-5'>We're actively driving the transformation of our industry.</p>
                    </div>
                </div>
            </div>

            {/* ✅ PERKS AND BENEFITS */}
            <PerksAndBenefits />
            <JobSearchBar />

            {/* ✅ JOB LISTINGS SECTION */}
            <div className="container px-0 my-5">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="fw-bold">All jobs</h2>
                        <p className="text-muted">Showing {jobs.length} results</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <span className="text-muted ">Sort by:</span>
                        <select className="form-select form-select-sm w-auto border-0">
                            <option>Most relevant</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </select>
                        <button className="btn rounded btn-outline-primary" onClick={() => setView('list')}>
                            <FaList />
                        </button>
                        <button className="btn btn-outline-secondary" onClick={() => setView('grid')}>
                            <FaTh />
                        </button>
                    </div>
                </div>

                {/* ✅ JOB LISTINGS GRID / LIST */}
                <div className={`row g-4 mt-4 ${view === 'list' ? 'flex-column' : ''}`}>
                    {jobs.map((job, index) => (
                        <div className={view === 'grid' ? "col-12 col-sm-6" : "col-12"} key={index}>
                            <div className="border p-4 shadow-sm bg-white rounded d-flex align-items-center">
                                <div className="flex-grow-1">
                                    <h4 className="fw-bold">{job.title}</h4>
                                    <p className="d-flex align-items-center text-muted">
                                        <FaBuilding className="me-2 text-primary" /> {job.category}
                                    </p>
                                    <p className="d-flex align-items-center text-muted">
                                        <FaWifi className="me-2 text-primary" /> {job.type}
                                    </p>
                                </div>
                                <button className="btn btn-outline-primary rounded-pill ms-3">
                                    More Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

"use client"
import { useState } from 'react';
import { BsBorder, BsBorderAll, BsGlobeAmericas } from "react-icons/bs";
import "@/app/custom-bootstrap.scss";
import './page.css'

export default function Companies() {
    const [isIndustry, setIsIndustry] = useState(true);
    const [isGrid, setIsGrid] = useState(false);

    const toggleIndustry = () => setIsIndustry(!isIndustry);
    const toggleView = () => setIsGrid(!isGrid);

    const companies = [
        { logo: "/companies/netixsol.png", name: "Netixsol Web3Geeks", category: "Information Technology (IT)", description: "We're at the forefront of blockchain technology. As a dedicated blockchain development company, we specialize in crafting secure, decentralized ..." , job: 17 },
        { logo: "/companies/blankprofile.png", name: "PrimeHRMS", category: "Information Technology (IT)", job: 0 },
        { logo: "/companies/blankprofile.png", name: "BlocTech Solutions", category: "Information Technology (IT)", job: 0 },
        { logo: "/companies/blankprofile.png", name: "Digital Usama", category: "Marketing", job: 0 },
        { logo: "/companies/blankprofile.png", name: "belgianairways", category: "Retail", job: 0 },
        { logo: "/companies/blankprofile.png", name: "Arthur Lawrence Business & IT Services", category: "Consulting", job: 0 },
        { logo: "/companies/ranksoal.png", name: "RankSol", category: "Information Technology (IT)", description: "RankSol is a leading software development and digital solutions company, offering cutting-edge IT services since 2009. W...", job: 0 },
        { logo: "/companies/blankprofile.png", name: "UNIAL", category: "Information Technology (IT)", job: 1 },
        { logo: "/companies/blankprofile.png", name: "Indus Home", category: "Manufacturing", job: 0 },
        { logo: "/companies/blankprofile.png", name: "Demo Company", category: "Information Technology (IT)", job: 0 }
    ];

    return (
        <div className="main-content container-fluid mb-5 px-0">  <div className="bg-primary  d-flex flex-column align-items-center justify-content-center px-5 " style={{ height: '79vh!important' }}>
        <h1 className="text-white">Find your dream Companies </h1>
        <img
          src="/find-jobs/picture.svg"
          alt="Job search illustration"
          className="flex  mt-1 d-flex" style={{ marginLeft: "170px!important" }} />
  
        <p className="text-white p-3 ">
        Find the dream companies you dream work for
        </p>
  
        <div className=' bg-white px-3 py-4 rounded-3 d-flex flex-row vw-100 gap-4 align-items-center justify-content-center row' style={{ maxWidth: '100%' }}>
          <div className='d-flex flex-row gap-2 align-items-center justify-content-center col-md-3 col-xs-3'
          style={{borderRight:"1px solid grey", }}>
            <img
              src="/find-jobs/search.svg"
              alt="" />
              <div style={{borderBottom:"1px solid grey",opacity:"0.5"}}>
            <input
              type="text"
              placeholder="Companny Name or keyword "
              className="border-0 opacity-75 p-" 
              style={{ outline: 'none',}}
            /></div>
          </div>
  
          <div className='d-flex align-items-center justify-content-center col-md-3 col-xs-3' 
          style={{borderRight:"1px solid grey"}}> 
            <BsGlobeAmericas style={{ height: '20px', width: '20px' }} />
            <div style={{borderBottom:"1px solid grey",opacity:"0.5"}}>
            <select name="" id="" className='border-0 opacity-50 px-3'
             style={{ outline: 'none', }}>
              <option value="">Choose a Country</option>
              <option value="" >AUSTRALIA</option>
              <option value="" >INDIA</option>
              <option value="" >PAKISTAN</option>
              <option value="" >GERMANY</option>
            </select></div>
            </div>
  
          <div className='d-flex  align-items-center justify-content-center col-md-3 col-xs-3'> <img
            src="/find-jobs/location.svg"
            alt="" />
            <div style={{borderBottom:"1px solid grey",opacity:"0.5"}}>
            <select name="" id="" className='border-0 px-3 opacity-50 ' style={{ outline: 'none', }}>
              <option>Choose a City</option>
              <option value="Lahore" >Lahore</option>
              <option value="FAISALABAD" >FAISALABAD</option>
              <option value="MULTAN" >MULTAN</option>
              <option value="KARACHI" >KARACHI</option>
            </select></div>
            </div>
  
          <div className='col-md-2 col-xs-2'><button className='rounded-pill p-2 bg-primary text-white fw-bold border-0' style={{ width: '100px' }}>Search</button></div>
        </div>
        <div className='text-start vw-90 row px-5  text-white  mt-2 '><div className='col-8' style={{width:"100%"}}>
            <p className='text-start'>Popular : UI Designer, UX Researcher, Android, Admin</p>
          </div><div className='col-md-1 col-xs-1'></div>
          
          <div className='col-4'></div>    
          <div className='col-3'></div></div>
      </div>
         <div className="main-content container-fluid mb-5 px-5">   
            <div className='d-flex justify-content-between align-items-start'>
                <div className='col-md-3 p-3'>
                    <div className="d-flex justify-content-between align-items-center cursor-pointer" onClick={toggleIndustry}>
                        <b>Industry</b>
                        <span>{isIndustry ? "▲" : "▼"}</span>
                    </div>
                    {isIndustry && (
                        <ul className='list-unstyled mt-3'>
                            {[
                                "Information Technology (IT)",
                                "Healthcare",
                                "Finance",
                                "Education",
                                "Manufacturing",
                                "Retail",
                                "Construction",
                                "Marketing",
                                "Consulting",
                                "Automotive",
                                "Real Estate",
                                "Energy",
                                "Transportation",
                                "Media And Entertainment",
                                "Telecommunications",
                                "Media"
                            ].map((industry, index) => (
                                <li key={index} className='form-check mb-3'>
                                    <label className='form-check-label'>
                                        <input className='form-check-input' type='checkbox' />
                                        {industry}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='col-md-9 ps-5'>
                    <h3 className='mb-3'>All Companies</h3>
                    <div className='d-flex justify-content-end me-5 mb-4'>
                        <button className={`btn ${!isGrid ? "btn-primary" : "btn-light"}`} onClick={toggleView}>List</button>
                        <button className={`btn ${isGrid ? "btn-primary" : "btn-light"} ms-2`} onClick={toggleView }>Grid</button>
                    </div>

                    <div className={`row ${isGrid ? 'g-5' : 'flex-column'}`}>
                        {companies.map((company, index) => (
                            <div key={index} className={`${isGrid ? 'col-md-6' : ''}`}>
                                <div className='position-relative border p-3 my-4 d-flex flex-column' 
                                  style={{ minHeight: '300px', maxWidth: '800px', padding: '10px' }}
>

                                    <span className='position-absolute top-0 end-0 mt-4 me-4 p-2 fs-6 badge bg-gray border' style={{ color: "#2dc29e" }}>
                                        {company.job} Jobs
                                    </span>
                                    <img src={company.logo} alt={company.name} className='ms-2 my-2' height="90" width="90" />
                                    <h4 className='ms-2'>{company.name}</h4>

                                    {company.description ? (
                                        <p className='p-2 mb-5'>{company.description}</p>
                                    ) : (
                                        <div className='mb-5'></div> 
                                    )}

                                    <div className="mt-auto">
                                        <span className='border border-warning px-2 py-1 rounded-pill text-warning ms-2'>
                                            <b>{company.category}</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div></div>
    );
}

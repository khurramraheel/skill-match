"use client";

import Hero from '@/components/jobs/hero'
import { useEffect, useState } from 'react';


export default function Page() {
    const [companies, setCompanies] = useState([]);



   
    useEffect(() => {
        fetch("/api/userJob")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data);  
                setCompanies(data);
            })
            .catch((error) => console.error("Error fetching companies:", error));
    }, []);
    
    
    const [isIndustryOpen, setIsIndustryOpen] = useState(true);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSalaryOpen, setIsSalaryOpen] = useState(false);
    const [isGrid, setIsGrid] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
   const[selectedsalary , setselectedsalary]=useState(null)
   const [selectedEmploymentType, setSelectedEmploymentType] = useState(null); // ✅ New state


   const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState([]); 
   const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleIndustry = () => setIsIndustryOpen(!isIndustryOpen);
    const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
    const toggleSalary = () => setIsSalaryOpen(!isSalaryOpen);
    const toggleView = () => setIsGrid(!isGrid);

    

    
    const handleEmploymentTypeChange = (employmentType) => {
        setSelectedEmploymentTypes((prev) =>
            prev.includes(employmentType)
                ? prev.filter((type) => type !== employmentType) // Remove if already selected
                : [...prev, employmentType] // Add if not selected
        );
    };
    
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category) // Remove if already selected
                : [...prev, category] // Add if not selected
        );
    };
    

    

    const filteredCompanies = companies.filter(company => {
        return (!selectedEmploymentTypes.length || selectedEmploymentTypes.includes(company.type)) &&
               (!selectedCategories.length || selectedCategories.includes(company.category)) &&
               (!selectedsalary || company.salary === selectedsalary);
    });
    
    
  
    return (
        <div>
            <Hero />

            
            <div className="main-content container-fluid mt-5 mb-5 px-5">
                <div className='d-flex justify-content-between align-items-start'>

                    {/* ✅ Industry Filter */}
                    <div className='col-md-3 p-3'>
                        <div className="d-flex justify-content-between align-items-center cursor-pointer" onClick={toggleIndustry}>
                            <b className='fs-5'>Type Of Employment</b>
                            <span>{isIndustryOpen ? "▲" : "▼"}</span>
                        </div>
                        {isIndustryOpen && (
                            <ul className='list-unstyled mt-3'>
                           {[...new Set(companies.map(company => company.type))].map((employmentType, index) => (
        <li key={index} className='form-check mb-3'>
            <label className='form-check-label'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={() => handleEmploymentTypeChange(employmentType)}
                    checked={selectedEmploymentTypes.includes(employmentType)}
                />
                <b className='fs-5 fw-light'> {employmentType}</b>
            </label>
        </li>
    ))}
                            </ul>
                        )}

                        {/* ✅ Categories Filter */}
                        <div className='mt-5'>
                            <div className="d-flex justify-content-between align-items-center cursor-pointer" onClick={toggleCategory}>
                                <b className='fs-5 '>Categories</b>
                                <span>{isCategoryOpen ? "▲" : "▼"}</span>
                            </div>
                            {isCategoryOpen && (
                                <ul className='list-unstyled mt-3'>
                                 {["Software Engineer", "Retail", "Information Technology (IT)", "Marketing"].map((category, index) => (
        <li key={index} className='form-check mb-3'>
            <label className='form-check-label'>
                <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategories.includes(category)}
                />
                <b className='fs-5 fw-light'> {category}</b>
            </label>
        </li>
    ))}
                                </ul>
                            )}
                        </div>

                        {/* ✅ Salary Range Filter */}
                        <div className='mt-5'>
                            <div className="d-flex justify-content-between align-items-center cursor-pointer" onClick={toggleSalary}>
                                <b className='fs-5 '>Salary Ranges</b>
                                <span>{isSalaryOpen ? "▲" : "▼"}</span>
                            </div>
                            {isSalaryOpen && (
                                <ul className='list-unstyled mt-3'>
                                    {["None", "10k-20k", "50k-90k", "100k-150k"].map((salary, index) => (
                                        <li key={index} className='form-check mb-3'>
                                            <label className='form-check-label'>
                                                <input className='form-check-input' type='radio'
                                                 onChange={() => setselectedsalary(salary)}
                                                 checked={selectedsalary === salary} />
                                                <b className='fs-5 fw-light'> {salary}</b>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* ✅ Companies List */}
                    <div className='col-md-9 ps-5'>
                        <h3 className='mb-3'>All Jobs</h3>
                        <div className='d-flex justify-content-end me-5 mb-4'>
                            <button className={`btn ${!isGrid ? "btn-primary" : "btn-light"}`} onClick={toggleView}>List</button>
                            <button className={`btn ${isGrid ? "btn-primary" : "btn-light"} ms-2`} onClick={toggleView}>Grid</button>
                        </div>

                        <div className={`row ${isGrid ? 'g-5' : 'flex-column'}`}>
                            {filteredCompanies.length > 0 ? (
                                filteredCompanies.map((company, index) => (
                                    <div key={index} className={`${isGrid ? 'col-md-6' : ''}`}>
                                        <div className='position-relative border p-3 my-4 d-flex flex-column' style={{ minHeight: '150px', padding: '10px' }}>
                                         
                                            <div className="d-flex align-items-center">
                                                <img src={company.logo} alt={company.tile} className='ms-2 my-2 ' height="60"  width="60" style={{borderRadius:"50px"}}/>
                                                <h4 className='fw-bold fs-3'  style={{marginLeft:"15px"}}>{company.title}</h4>
                                            </div>
                                            <div className='row'>
                                              <div className='col-1'></div>
                                              <div className='col-9'>

                                                <b className=' fw-light fs-5 '>{company.description}</b>
                                              </div>
                                                <div className='col-2'>
                                                    
                                                <button 
        className={`border fs-4 rounded-pill text-white ${company.site === "closed" ? "bg-danger border-danger" : "bg-primary border-primary"}`} 
        style={{ padding: "10px 24px" }}
    >
        {company.site === "closed" ? "Closed" : "Apply"}
    </button>

                                                </div>
                                                 </div>
                                            
                                            <div className=" ml-4 mb-4">
                                            <div className='row'>
                                              <div className='col-1'></div>
                                              <div className='col-11'>
                                              <span className='border border-0 bg-primary text-primary bg-opacity-25 p-2 g px-2 py-1 rounded-pill text-primary ms-2'>
                                                   
                                              <b>{company.type}</b>
                                                 
                                               </span>
                                               <span className='border border-danger px-2 py-1 rounded-pill text-danger ms-2'>
                                                   
                                                   <b>{company.need}</b>
                                                   
                                               </span>
                                               <span className='border border-danger px-2 py-1 rounded-pill text-danger ms-2'>
                                                   
                                                   <b>{company.needs}</b>
                                                   </span>
                                                 </div></div>
                                               
                                               
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className="fw-bold">No Company Found</h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

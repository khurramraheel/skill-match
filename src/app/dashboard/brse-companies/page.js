"use client"
import { useState,useEffect } from 'react';
import { BsBorder, BsBorderAll, BsGlobeAmericas } from "react-icons/bs";
import "@/app/custom-bootstrap.scss";
import './page.css'

export default function Companies() {

    let [companies, setCompanies] = useState([]); // ✅ Correct way


      useEffect(() => {
            fetch("/api/companiesJob")
                .then((res) => res.json())
                .then((data) => {
                    console.log("Fetched Data:", data);  
                    setCompanies(data);
                })
                .catch((error) => console.error("Error fetching companies:", error));
        }, []);
    const [isIndustry, setIsIndustry] = useState(true);
    const [isGrid, setIsGrid] = useState(false);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    


    const toggleIndustry = () => setIsIndustry(!isIndustry);
    const toggleView = () => setIsGrid(!isGrid);



    // Industry toggle function
    const handleIndustryChange = (industry) => {
        setSelectedIndustries((prevSelected) =>
            prevSelected.includes(industry)
                ? prevSelected.filter((item) => item !== industry) // Unselect
                : [...prevSelected, industry] // Select
        );
    };
    




   
    const filteredCompanies = selectedIndustries.length > 0
    ? companies.filter(company => 
        selectedIndustries.some(industry => company.industry?.includes(industry))
    )
    : companies;

  
    
    return (
        <div className= "  bg-light bg-gradient mt-2 container-fluid mb-5 ">  
        {/* <h1 className="text-white">Find your dream Companies </h1> */}
       
        
        <div className='row '>
  <div className='col-8'></div>

  
  <div className='col-md-4 '>
<div className="card ms-5 " style={{width: "18rem"}}>
  <div className="card-body mb-0">

    <div className='row'>
<div className='col-3 me-0'>
<i class="bi bi-person-circle fs-2 text-body-secondary "></i>

</div>
<div className='col-5  m-0'>
    <h6 className="fw-bold mb-0 ">Hamza9121</h6>
    <p className=" ">Candidate</p>
 

</div>

<div className='col-2'>
<i class="bi bi-bell fs-5 mt-3 fw-bold "></i>
</div>
<div className='col-2'>
  <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    </button>
    <div class="dropdown">
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Dashboard</a></li>
    <li><a class="dropdown-item" href="#">Setting</a></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>

</div>
    </div>


  </div>
</div>
</div>




</div>





     <div className="fs-2 fw-bold mb-3">
   
    Browse Companies
   
     </div>
  
        <div className='text-center   rounded-4 ' style={{backgroundColor:"white", paddingTop:"50px", maxWidth: '100%', height:"200px" }}>
            <div className='border border-1px ms-3   px-7 py-4 row d-flex flex-row gap-4 align-items-center justify-content-center ' style={{width:"95%"}}>

          <div className=' d-flex flex-row gap-2 align-items-center justify-content-center col-md-3 col-xs-3'
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
          <div>
            <p className='text-seondary text-body-secondary text-start ms-3 mt-2'>Popular : Twitter, Microsoft, Apple, Facebook</p>
          </div>
        </div>
       
      
         <div className="main-content container-fluid mb-5 mt-3">   
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
                                    <input
                                        className='form-check-input'
                                        type='checkbox'
                                        value={industry}
                                        onChange={() => handleIndustryChange(industry)}
                                        checked={selectedIndustries.includes(industry)}
                                    />
                                    {industry}
                                </label>
                            </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='col-md-9 ps-2'>
                    <h3 className='mb-3 fw-bold'>All Companies</h3>
                    <div className='d-flex justify-content-end me-5 mb-4'>
                        <button className={`btn ${!isGrid ? "btn-primary" : "btn-light"}`} onClick={toggleView}>List</button>
                        <button className={`btn ${isGrid ? "btn-primary" : "btn-light"} ms-2`} onClick={toggleView }>Grid</button>
                    </div>

                    <div className={`row ${isGrid ? 'g-5' : 'flex-column'}`}>
                     {filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company, index) => (
                            <div key={index} className={`${isGrid ? 'col-md-6' : ''}`}>
                                <div className='position-relative border p-3 my-4 d-flex flex-column' 
                                  style={{ minHeight: '300px', maxWidth: '950px', padding: '10px',backgroundColor:"white" }}
>

                                    <span className='position-absolute top-0 end-0 mt-4 me-4 p-2 fs-6 badge bg-gray border' style={{ color: "#2dc29e" }}>
                                        {company.job} Jobs
                                    </span>
                                    <img src={company.logo} alt={company.name} className='ms-2 my-2 ' height="90" width="90" />
                                    <h3 className='ms-2  fw-bold mt-2'>{company.name}</h3>

                                    {company.description ? (
                                        <p className='p-2 mb-2 fs-5 text-body-secondary'>{company.description}</p>
                                    ) : (
                                        <div className='mb-2'></div> 
                                    )}

                                    <div className="mt-auto">
                                        <span className='border border-warning px-2 py-1 rounded-pill text-warning ms-2'>
                                            <b>{company.needs}</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 class="fw-bold" >No Company Found</h1> 
                   ) }
                    </div>

                </div>
            </div>
        </div></div>
    );
}   //   agr Information Technology flexbox py click ho to only Netixsol Web3Geeks company show ho baki na ho..
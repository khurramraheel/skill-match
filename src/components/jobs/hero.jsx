import React from 'react';
import "@/app/custom-bootstrap.scss";
import { BsBorder, BsBorderAll, BsGlobeAmericas } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="bg-primary vh-100 d-flex flex-column align-items-center justify-content-center px-5 " style={{ height: '90vh!important' }}>
      <h1 className="text-white">Find your dream job</h1>
      <img
        src="/find-jobs/picture.svg"
        alt="Job search illustration"
        className="flex  mt-1 d-flex" style={{ marginLeft: "170px!important" }} />

      <p className="text-white p-3 ">
        Find your next career at companies like HubSpot, Nike, and Dropbox
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
            placeholder="Job title or keyword "
            className="border-0 opacity-50 p-" 
            style={{ outline: 'none',}}
          /></div>
        </div>

        <div className='d-flex align-items-center justify-content-center col-md-3 col-xs-3' 
        style={{borderRight:"1px solid grey"}}> 
          <BsGlobeAmericas style={{ height: '20px', width: '20px' }} />
          <div style={{borderBottom:"1px solid grey",opacity:"0.5"}}>
          <select name="" id="" className='border-0 opacity-25 px-3'
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
          <select name="" id="" className='border-0 px-3 opacity-25 ' style={{ outline: 'none', }}>
            <option>Choose a City</option>
            <option value="Lahore" >Lahore</option>
            <option value="FAISALABAD" >FAISALABAD</option>
            <option value="MULTAN" >MULTAN</option>
            <option value="KARACHI" >KARACHI</option>
          </select></div>
          </div>

        <div className='col-md-2 col-xs-2'><button className='rounded-pill p-2 bg-primary text-white fw-bold border-0' style={{ width: '100px' }}>Search</button></div>
      </div>




      
      <div className='row px-5 vw-100 text-white  mt-2 '><div className='col-5'>
          <p className=''>Popular : UI Designer, UX Researcher, Android, Admin</p>
        </div><div className='col-md-1 col-xs-1'></div>
        
        <div className='col-4'></div>
        <div className='col-3'></div></div>
    </div>
  );
}


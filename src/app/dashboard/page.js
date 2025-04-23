"use client";
import { setUser } from '@/store/createSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function DashboardPage() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    
  }, []);
  

  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(setUser({
       
        email: session.user.email,
       
      }));
    }
  }, [session, dispatch]);


  const user = useSelector((state) => state.auth.user);


  
  function getCleanUsername(email) {
    if (!email || typeof email !== "string") return "User";
    return email.split("@")[0];
  }


  return (
    <div className="container-fluid"> 
<div className='row mt-3'>
  <div className='col-8'></div>

  
  <div className='col-md-4 '>
<div className="card ms-5 " style={{width: "18rem"}}>
  <div className="card-body mb-0">

    <div className='row'>
<div className='col-2 me-0'>
<i class="bi bi-person-circle fs-2 text-body-secondary "></i>

</div>
<div className='col-6  ms-0'>
    <h6 className="fw-bold mb-0 ">{user?.name || getCleanUsername(user?.email)}</h6>
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




<div className='row mt-3'>
<div className='col-2'>
  <p className='fw-bold fs-2'>Dashboard</p>
</div>
<div className='col-10'>

  <a href='/dashboard/findjobs' className='btn rounded-3 text-white p-3 fs-5 fw-semibold' style={{backgroundColor:"#336E63", width:"100%"}}>Find Jobs <i class="bi bi-search fw-bold ms-1 fs-5"></i></a>
</div>
</div>




      <div className="row">
        {/* Sidebar */}
    

        {/* Main Content */}
        <main className=" ms-sm-auto col-lg-12 px-md-4">
          <h2 className="mt-4">
          Welcome, {user?.name || getCleanUsername(user?.email)}
         
                    </h2>

          
          <div className="row mt-4">
            {/* Total Jobs Applied */}
            <div className="col-md-4 " >
              <div className="card mb-3">
                <h5 className='ms-3 mt-3'>Total Jobs Applied</h5>
                <h1 className='fw-bold ms-3'>0</h1>
                <div className='row'>
                  <div className='col-8'>

                  </div>
                  <div className='col-4 mb-0'>
                  <i class="bi bi-bar-chart-fill fs-1 text-body-secondary" ></i>
                  </div>

                </div>
              
              </div>
       
       


            {/* Interviewed */}
          
              <div className="card ">
                <h5 className='ms-3 mt-3 fw-bold'>Interviewed</h5>
                <p className='ms-3 mt-3 fw-bold fs-1'>0</p>
                <div className='row'>
                  <div className='col-8'>

                  </div>
                  <div className='col-4'>
                  <img src="/images/9189094.png" height="40px" width="40px" ></img>
                  </div>

                </div>
              </div>
            </div>
            {/* Job Status */}

          
 




      
            <div className="col-md-8" style={{height:'100px'}}>
              <div className="card  p-4 "  >
                <h5 className='mb-4'>Jobs Applied Status</h5>

<div className='row '>
  <div className='col-4 mt-4 mb-4'>


  <div className="progress-circle" >
  <span className="progress-text">25%</span>
</div>



  </div>
   
   <div className='col-8 mt-3'>



   <div className='mt-3'>
 <h5 className='fw-bold '>0%</h5>
</div>

    <div>

    <h5 className='text-body-secondary'>
    Unsuitable
   </h5>
      </div>

      <div className='mt-3'>
 <h5 className='fw-bold '>0%</h5>
</div>

<div >
<h5 className='text-body-secondary'>
    Interviewed
   </h5>
</div>
   
   </div>
</div>


   <div className='mt-8 mt-3 '>

<p className='text-success fw-semibold  mb-1'>
View All Applications  <i className="bi bi-arrow-right ms-2"></i>
</p>

   </div>

              
                
              </div>
            </div>

                   
          
          </div>



          <div className=''>

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

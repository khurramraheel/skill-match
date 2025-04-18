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
                  <div className='col-4'>
                  <img src="/images/images.png" height="40px" width="40px" ></img>
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
                <h5 >Jobs Applied Status</h5>

<div className='row mt-4'>
  <div className='col-5'>
    <img src='/images/images (1).png' height="80%" width="80%"></img>
  </div>
   
   <div className='col-7'>



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

<div>
<h5 className='text-body-secondary'>
    Interviewed
   </h5>
</div>
   
   </div>
</div>


   <div className='mt-8'>

<p className='text-success fw-semibold '>
View All Applications  <i class="bi bi-arrow-right ms-2"></i>
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

import Container from '../shared/Container'

export default function Mission() {
  return (
    <section className="py-3 bg-light">
      <Container>
        <div className="row g-4 px-5">
          <div className="col-md-6">
            {/* <div className="p-4"> */}
              <h2 className=" fw-bold mb-3">Our Mission</h2>
              <p className="fs-5">
                To finish the existing skill gap in the job market by assessing the candidates through fair assessment which leads to less time consuming hiring for the business.
              </p>
            {/* </div> */}
          </div>
          <div className="col-md-6">
            {/* <div className="px-5"> */}
              <h2 className=" fw-bold ">Our Vision</h2>
              <p className="fs-5">
                Our vision is to bridge the existing skill gap in the job market by providing an advanced, online platform that assesses candidates in a fair and efficient manner. We aim to revolutionize the hiring process, making it less time-consuming and more effective for businesses while simultaneously creating a level playing field for job seekers. A user friendly platform for both the employee and employer.
              </p>
            {/* </div> */}
          </div>
        </div>
      </Container>
    </section>
  )
}

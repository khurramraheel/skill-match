import Image from "next/image";
import { contactAssests } from "../../public/contact";

const TrustedCompanies = () => {
  return (
    <section className="container text-center py-5">
      <div
        className="d-inline-block px-3 py-1 mb-3 rounded-pill"
        style={{ backgroundColor: "#e7f4ef" }}
      >
        <span className="text-success fw-medium">TRUSTED COMPANY</span>
      </div>

      <h2 className="h3 mb-5">
        Trusted by Fortune 500 companies
        <br className="d-none d-sm-block" />
        and global enterprises
      </h2>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center align-items-center">
        {contactAssests.map((item) => {
          return (
            <div key={item.id} className="col">
              <Image
                src={item.image}
                alt={item.alt}
                className="img-fluid opacity-75"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TrustedCompanies;

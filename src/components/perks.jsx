import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const benefits = [
  { src: '/about-us/tree.svg', alt: 'Family/Parental Leave', text: 'Family/parental leave' },
  { src: '/about-us/vacation.svg', alt: 'Generous Vacation', text: 'Generous vacation' },
  { src: '/about-us/remote.svg', alt: 'Remote Work', text: 'Remote Work' },
  { src: '/about-us/medical.svg', alt: 'Medical, life insurance', text: 'Medical, life insurance' },
  { src: '/about-us/tech.svg', alt: 'Technology Allowance', text: 'Technology allowance' },
  { src: '/about-us/work.svg', alt: 'Flexible Work Schedule', text: 'Flexible work schedule' },
  { src: '/about-us/retire.svg', alt: 'Retirement Plan', text: 'Retirement plan' },
  { src: '/about-us/invest.svg', alt: 'Company Equity', text: 'Company equity' }
];

const PerksAndBenefits = () => {
  return (
    <div className="text-center py-5 bg-white px-5">
      <h1 className="fw-bold text-dark mb-3">Perks and benefits</h1>
      <p className="text-muted mb-4 " style={{ width: '50%', margin: 'auto' }}>
        SkillMatch is dedicated to promoting the happiness and well-being of our employees.<br />
        We take pride in offering a generous bundle of benefits designed to support our team members both inside and outside of the office.
      </p>

      <div className="row g-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="d-flex flex-column align-items-center text-center p-3">
              <Image src={benefit.src} alt={benefit.alt} width={100} height={100} className="mb" />
              <p className="fw-medium fs-4 text-dark ">{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksAndBenefits;

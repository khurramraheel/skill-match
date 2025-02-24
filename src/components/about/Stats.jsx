import Container from '../shared/Container'

export default function Stats() {
  const stats = [
    { 
      id: 1, 
      value: '25K', 
      name: 'Global Users', 
      description: 'Our platform boasts a diverse and extensive global user community. With users spanning across continents, our reach extends to professionals, businesses, and individuals from various cultural and professional backgrounds.'
    },
    { 
      id: 2, 
      value: '700+', 
      name: 'Capital Raised', 
      description: 'This investment demonstrates confidence in our vision and positions us for continued innovation and expansion. We\'re excited about the opportunities ahead and grateful for the support that enables us to achieve new heights.'
    },
    { 
      id: 3, 
      value: '15+', 
      name: 'Team Members', 
      description: 'We take pride in our diverse and talented team members each bringing a unique set of skills and experiences to the table. From seasoned industry veterans to creative minds fresh out of academia, our team is united by a shared passion for SkillMatch.'
    }
  ]

  return (
    <section className="py-5 py-md-7" style={{ marginLeft: '45px' }}>
      <Container style={{ marginLeft: '25px' }}>
        <div className="r mb-5">
          <h2 className="display-7 fw-bold mb-3">We do this differently</h2>
        </div>
        <div className="row g-5">
          {stats.map((stat) => (
            <div key={stat.id} className="col-md-4">
              <div className="d-flex flex-column gap-3 pt-4 position-relative">
                <div className="position-absolute top-0 start-0 w-100 border-top border-2 border-dark"></div>
                <h2 className="display-3 fw-bold mb-0">{stat.value}</h2>
                <p className="fs-4 fw-bold mb-2" style={{ color: 'rgb(8, 114, 105)' }}>{stat.name}</p>
                <p className="text-muted mb-0">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

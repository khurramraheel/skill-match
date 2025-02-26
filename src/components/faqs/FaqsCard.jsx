import { Power } from "lucide-react"; 

import "bootstrap/dist/css/bootstrap.min.css";

const cardData = [
  {
    title: "Getting Started",
    subtitle: "Welcome to skillmatch! Get started faster by learning some basics",
    image: "/faqs/shutdown.svg",
  },
  {
    title: "Using SkillMatch",
    subtitle: "Learn how skillmatch works, from navigation to board management, and more",
    image: "/faqs/star.svg",
  },
  {
    title: "Subscription and Billing",
    subtitle: "Have questions about our plans or billing? Find answers here",
    image: "/faqs/subscription.svg",
  },
  {
    title: "Administration",
    subtitle: "Master the ins-and-outs of team and user management within SkillMatch",
    image: "/faqs/admin.svg",
  },
  {
    title: "Integrations and Apps",
    subtitle: "Discover the power of skillmatch integrations and apps",
    image: "/faqs/integration.svg",
  },
  {
    title: "Technical Questions",
    subtitle: "Troubleshoot issues and review technical guidelines for skillmatch usage",
    image: "/faqs/question.svg",
  },
];

export default function FaqCard() {
  return (
    <div className="p-5" style={{backgroundColor: "rgb(224 248 222)"}}>
    <div className="container p-5 " >
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-12 col-sm-12 mb-4">
            <div className="card shadow-sm p-4 border-0 rounded" style={{ minWidth: "300px" }}>
              <div className="d-flex align-items-center gap-3">
                <div className=" p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }}>
                  <img src={card.image} alt={card.title} />
                </div>
                <div> 
                  <h3 className="mb-2 fw-bold " >{card.title}</h3>
                  <p className="text-muted mb-0">{card.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
import Container from "@/components/container/page";
import Blog from "@/components/blog/page";
import Testimonials from "@/components/slider/page";
import Slider from "@/components/slider/page";
import Cards from "@/components/cards/page";
import Cta from "@/components/how-it-works/Cta";
export default function Home() {
  return (
    <div>
 <Blog/> 
 <Container/>
 <Slider/>
 <Cards/>
 <Cta/>
    </div>
  
 );
}

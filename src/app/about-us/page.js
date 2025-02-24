import Hero from '@/components/about/Hero'
import Stats from '@/components/about/Stats'
import Mission from '@/components/about/Mission'
import Leadership from '@/components/about/Leadership'
import Testimonials from '@/components/about/Testimonials'

export const metadata = {
  title: "SkillMatch - About Us",
  description: "Learn about SkillMatch - A pioneering app specializing in assessment and screening solutions for businesses worldwide.",
};

export default function AboutUs() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Leadership />
      <Testimonials />
    </>
  )
} 
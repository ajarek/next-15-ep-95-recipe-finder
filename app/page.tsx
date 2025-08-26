import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";


export default function Home() {
  return (
   <div className='min-h-[calc(100vh-64px)] mb-4'>
   
    <HeroSection/>
    <Features/>
    <ContentSection/>
    <CallToAction/>
   
   </div>

  );
}

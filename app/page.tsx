import DontMiss from "@/components/ui/DONTMISS";
import Essential from "@/components/ui/ESSENTIAL";
import Featured from "@/components/ui/FEATURED";
import Footer from "@/components/ui/FOOTER";
import GearUp from "@/components/ui/GEARUP";
import Nav from "@/components/ui/HEADER";
import Hero from "@/components/ui/HERO";
import Navigation from "@/components/ui/Navigation";
import { CarouselSize } from "@/components/ui/BEST"


export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
    <Footer/>
  </main>
  )
}
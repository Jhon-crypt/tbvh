//import Image from 'next/image'
import IntroHero from "./components/hero/IntroHero";
import FeaturesList from "./components/lists/featuresList";
import FeaturesHeroOne from "./components/hero/FeaturesHeroOne";
import HowItWorksHero from "./components/hero/HowItWorksHero";
import CallToAction from "./components/hero/CallToActionHero"
import Footer from './components/footer/footer'

export default function Home() {
  return (

    <>

      <IntroHero />

      <FeaturesList />

      <FeaturesHeroOne />

      <HowItWorksHero />

      <CallToAction />

      <Footer />

    </>
  )
}

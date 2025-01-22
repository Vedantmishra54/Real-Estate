import React from 'react'
import HeroSection from '../../Subcomponents/HeroSection'
import TopVillas from '../../Subcomponents/TopVillas'
import Regions from '../../Subcomponents/Regions'
import OurSpecialities from '../../Subcomponents/OurSpecialities'
import Host from '../../Subcomponents/Host'
import About from '../../Subcomponents/About'
import Contact from '../../Subcomponents/Contact'

function home() {
  return (
    <>
      <article className="page">
        <HeroSection/>
        <TopVillas/>
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <Contact/>
      </article>
      
    </>
  )
}

export default home

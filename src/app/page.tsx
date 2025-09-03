import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import TourCategories from '@/components/TourCatagories'
import PopularTours from '@/components/PopularTour'
import Opportunities from '@/components/Opportunities'
import Footer from '@/components/Footer'

function travelPakitan() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TourCategories/>
      <PopularTours/>
      <Opportunities/>
      <Footer/>
    </div>
  )
}

export default travelPakitan

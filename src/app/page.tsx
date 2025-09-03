import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import TourCategories from '@/components/TourCatagories'
import PopularTours from '@/components/PopularTour'
import Opportunities from '@/components/Opportunities'

function travelPakitan() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TourCategories/>
      <PopularTours/>
      <Opportunities/>
    </div>
  )
}

export default travelPakitan

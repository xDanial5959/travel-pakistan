import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import TourCategories from '@/components/TourCatagories'
import PopularTours from '@/components/PopularTour'
import Opportunities from '@/components/Opportunities'
import TravelStats from '@/components/TravelsStats'
import OffersToInspire from '@/components/OffersToInspire'
import Testimonials from '@/components/Testimonials'
import Articles from '@/components/Articles-Posts'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'


function travelPakitan() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TourCategories/>
      <PopularTours/>
      <Opportunities/>
      <TravelStats/>
      <OffersToInspire/>
      <Testimonials/>
      <Articles/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default travelPakitan

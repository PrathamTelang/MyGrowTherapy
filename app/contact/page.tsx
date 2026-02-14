import React from 'react'
import Connect from '../components/Connect'
import Header from '../components/Header'
import SocialAccordion from '../components/SocialAccordion'
import BookAppointment from '../components/BookAppointment'
import Footer from '../components/Footer'
import OfficeSection from '../components/OfficeLocation'

function page() {
  return (
    <div>
      <Header />
      <Connect />
      <BookAppointment />
      <OfficeSection />
      <SocialAccordion />
      <Footer />
    </div>
  )
}

export default page
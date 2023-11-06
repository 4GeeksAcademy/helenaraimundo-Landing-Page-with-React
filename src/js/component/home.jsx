import React from 'react'

import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'

const Home = () => {
  return (
    <div className='contianer-fluid'>
      <Navbar />
      <div className='container'>
        <Header />
        <div className='row g-4'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

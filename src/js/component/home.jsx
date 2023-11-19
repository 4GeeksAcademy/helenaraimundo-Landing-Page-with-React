import React from 'react'

import {Navbar} from './Navbar.jsx'
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import {CardContainer} from './CardContainer.jsx'

const Home = () => {
  return (
    <div className='contianer-fluid'>
    <Navbar />
    <div className='container'>
      <Header />
      <div className='row g-4'>
        <CardContainer />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home


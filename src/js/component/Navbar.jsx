import React from 'react'
import {NavItem} from './NavItem'


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-warning bg-warning sticky-top px-lg-3'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          FRIDA KAHLO
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse flex-row-reverse'
          id='navbarText'>
            <NavItem/>
        </div>
      </div>
    </nav>
  )
}

export {Navbar}
import React from 'react'

function Card (props) {
  return (
    <div className='col-sm-12 col-md-4 col-lg-3'>
      <div className='card text-center'>
        <img
          src={props.imageSrc} 
          className='card-img-top'
          alt={props.imageAlt}
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>
            {props.text}
          </p>
          <a href={props.buttonLink} className='btn btn-warning'>
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export {Card}


import React from 'react'
import {Card} from './Card.jsx'
import rigoImage from "../../img/rigo-baby.jpg"

function CardContainer () {
    return (
        <div className="d-flex flex-column flex-sm-row my-5" >

    <Card
        imageSrc={rigoImage}
        imageAlt="Image 1"
        tittle="Card tittle"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        buttonLink="/link1"
        buttonText="Find Out More"
    />

    <Card
        imageSrc={rigoImage}
        imageAlt="Image 2"
        tittle="Card tittle"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        buttonLink="/link2"
        buttonText="Find Out More"
    />

    <Card
        imageSrc={rigoImage}
        imageAlt="Image 3"
        tittle="Card tittle"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        buttonLink="/link3"
        buttonText="Find Out More"
    />

    <Card
        imageSrc={rigoImage}
        imageAlt="Image 4"
        tittle="Card tittle"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        buttonLink="/link4"
        buttonText="Find Out More"
    />
   </div> 
    )
}

export {CardContainer}
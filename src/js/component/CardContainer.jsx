import React from 'react'
import {Card} from './Card.jsx'

function CardContainer () {
    return (
        <div className="d-flex flex-column flex-sm-row my-5" >

    <Card
        imageSrc="https://www.fridakahlo.org/images/paintings/the-two-fridas.jpg"
        imageAlt="Image 1"
        tittle="The Two Fridas"
        text="This painting was completed shortly after her divorce with Diego Rivera. This portrait shows Frida's two different personalities. One is the traditional Frida in Tehuana costume, with a broken heart, sitting next to an independent, modern dressed Frida. In Frida's diary, she wrote about this painting and said it is originated from her memory of an imaginary childhood friend. Later she admitted it expressed her desperation and loneliness with the separation.  "
        buttonLink="https://www.fridakahlo.org/the-two-fridas.jsp"
        buttonText="Find Out More"
    />

    <Card
        imageSrc="https://www.fridakahlo.org/images/paintings/self-portrait-with-necklace-of-thorns.jpg"
        imageAlt="Image 2"
        tittle="Self-Portrait with Thorn Necklace and Hummingbird"
        text="Self-Portrait with Thorn Necklace and Hummingbird, was painted by Frida Kahlo in 1940. Although this painting has a small size (about 16x24), it draws lots of interest, since it contains so many aspects which are symbolic to Frida Kahlo. In this portrait, Frida Kahlo faces the viewer with a background of large green leaves and a yellow leaf right behind her. The thorns are around her neck like a necklace which is held by a black monkey."
        buttonLink="https://www.fridakahlo.org/self-portrait-with-thorn-necklace-and-hummingbird.jsp"
        buttonText="Find Out More"
    />

    <Card
        imageSrc="https://www.fridakahlo.org/images/paintings/me-and-my-parrots.jpg"
        imageAlt="Image 3"
        tittle="Me and My Parrot"
        text="Frida Kahlo remarried to Diego Rivera in December of 1940 after they separated for a few years. After this Frida's life seems to be settled down to some extent of calmer routine. They remained to live separably through even they have married again. Frida still lives with her animals, dolls, and flowers in the countryside that she is interested in. They are still the main part of her life.
        The rigidity of Me and My Parrot is broken by details within the work."
        buttonLink="https://www.fridakahlo.org/me-and-my-parrots.jsp"
        buttonText="Find Out More"
    />

    <Card
        imageSrc="https://www.fridakahlo.org/images/paintings/thinking-about-death.jpg"
        imageAlt="Image 4"
        tittle="Thinking about death"
        text="During the later years of Frida's life, she was tortured by numerous illness and complications. This self portrait was painted in 1943 and Frida's health was deteriorated during that period and she had to be bedridden most of the time.Due to her poor health condition, death is an inevitable thought which lingering over her mind. In this painting, death is symbolized as a skull and crossbones which shows up in her forehead."
        buttonLink="https://www.fridakahlo.org/thinking-about-death.jsp"
        buttonText="Find Out More"
    />
   </div> 
    )
}

export {CardContainer}
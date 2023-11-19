import React from 'react'

const Header = () => {
  return (
    <div className='p-5 my-4 bg-light rounded-3'>
      <div className='container-fluid bg-light'>
        <h1 className='display-4'>Frida Kahlo Paintings</h1>
        <p>
        Magdalena Carmen Frida Kahlo y Calderón (6 July 1907 - 13 July 1954) was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy. In addition to belonging to the post-revolutionary Mexicayotl movement, which sought to define a Mexican identity, Kahlo has been described as a surrealist or magical realist. She is also known for painting about her experience of chronic pain.
        </p>
        <a href="https://www.fridakahlo.org/frida-kahlo-paintings.jsp" className='btn btn-warning'>Find More!</a>
      </div>
    </div>
  )
}

export {Header}


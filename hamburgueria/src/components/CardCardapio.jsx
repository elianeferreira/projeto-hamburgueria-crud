import React from 'react'

const CardCardapio = ({image, title, hamburguer, ingredientes , Preço}) => {
  return (

    <>
    <img src={image} alt={title} />
    <h1>{hamburguer}</h1>
    <p>{ingredientes}</p>
    <h2>{Preço}</h2>
    </>

   
  )
}

export default CardCardapio
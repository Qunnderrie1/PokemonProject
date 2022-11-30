import React from 'react'
import '../App.css'

export const PokemonCard = ({id , img ,name , num , weakness , type}) => {
  return (
    <div key={id} className='cardContainer container'>
       <p>{num}</p>
        <img src={img} alt="" />
        <div className='descriptionContainer'>
        <h3>{`${name}`}</h3>
        <p>{`Type: ${type}`}</p>
            <article>
              <h4>Weakness</h4>
                {weakness}
            </article>
        </div>
    </div>
  )
}   

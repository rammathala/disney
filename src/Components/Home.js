import React from 'react'
import './Home.css'
import View from './View'
import disney from './card/1564674844-disney.mp4';
import dis from './card/viewers-disney.png'
import mar from './card/viewers-marvel.png'
import pix from './card/viewers-pixar.png'
import pl from './card/viewers-starwars.png'
import nat from './card/viewers-national.png'
export default function Home() {
    const images = [
        {
            image: dis,
            vide : disney
        },
        { image: mar },
        { image: pix },
        { image: pl},
        { image: nat }     
    ]
  return (
      <div className='Homee'>
          {
              images.map((imag) => (
                  <View image={imag.image} video={ imag.vide} />  
              ))
          }
         
    </div>
  )
}

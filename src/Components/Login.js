import React from 'react'
import './Login.css'
import cat from '../cta-logo-one.svg'
import is from '../cta-logo-two.png'
export default function Login() {
  return (
      <div className='Login'>
          <div className='Cont'>
              <img className='img' src={cat} />
              <button className='button'>Get all there</button>
              <p>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
                  and The Disney Bundle will increase by $1.</p>
              <img className='img' src={is}/>
          </div>
          </div>

  )
}

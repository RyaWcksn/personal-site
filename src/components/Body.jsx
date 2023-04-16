import React from 'react';
import profile from '../assets/profile.jpeg'
import '../assets/styles/body.css'

function Body() {
    return(
        <div className='body-container'>
          <div className='body-picture'>
            <img src={profile} alt='Profile' className='profile-picture'/>
          </div>
          <div className='body-profile'>
            <div className='body-heading'>
            <h1>
              Hello There! <br />
              My name is Pramudya Arya Wicaksana
            </h1>
            </div>
            <div className='body-subheading'>
            <h2>
              Software Engineer who passionate in Cloud Engineering and Fintech!
            </h2>
            </div>
          </div>
        </div>
    )
}

export default Body

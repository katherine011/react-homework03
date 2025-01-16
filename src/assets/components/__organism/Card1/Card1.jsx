import React from 'react'
import '../Card1/Card1.css'
import Header1 from '../../__molecules/Header1/Header1'
import Round from '../../__molecules/Round/Round'
import Footer from '../../__molecules/Footer/Footer'

const Card1 = () => {
  return (
    <div className='Card1'>
      <Header1/>
      <Round/>
      <Footer/>
    </div>
  )
}

export default Card1
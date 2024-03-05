import React from 'react'
import MainHeader from '../layout/MainHeader'
import Parallax from '../common/Parallax'
import HotelService from '../common/HotelService'

const Home = () => {
  return (
    <section>

    <MainHeader />
    <section className='container'>
<Parallax />
<HotelService />
<Parallax />

    </section>

    </section>
  )
}

export default Home
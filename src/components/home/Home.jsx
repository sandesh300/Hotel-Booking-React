import React from 'react'
import MainHeader from '../layout/MainHeader'
import Parallax from '../common/Parallax'
import HotelService from '../common/HotelService'
import RoomCarousel from '../common/RoomCarousel'

const Home = () => {
  return (
    <section>

    <MainHeader />
    <section className='container'>
<RoomCarousel />
<Parallax />
<RoomCarousel />
<HotelService />
<Parallax />

    </section>

    </section>
  )
}

export default Home
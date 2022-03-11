import React from 'react'
import HomeAbout from './HomeAbout'
import Slider from './Slider'
import "../Css/Home.css";
import Count from './Count';

const Home = () => {
  return (
    <div className='ts-home'>
    <Slider />
    <HomeAbout />
    <Count />
    </div>
  )
}

export default Home
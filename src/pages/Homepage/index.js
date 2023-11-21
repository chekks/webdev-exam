import React from 'react'

import './homepage.css';

import Category from '../../component/Products/Category'
import TopTrending from '../../component/Products/TopTrending';

const home = () => {
  return (
    <>
        <div className='banner'>
            <div className='banner-content'>
                <h2>THIS SEASON’S BIGGEST DROP OF NEW GEAR</h2>
                <p>Get your hands on our latest and greatest gear and technology— all built to make you better.</p>
                <button className='banner-cta'>Shop New Arrivals</button>
            </div>
        </div>

        <Category />

        <TopTrending />
    </>
  )
}

export default home
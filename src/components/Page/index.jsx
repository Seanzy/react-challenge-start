import React from 'react'
import Header from '../Header/Header.jsx'
import Gallery from '../Gallery/Gallery.jsx'

const Page = () => {
  return (
    <div>
      <h1>Restaurant App Starter Template</h1>      
      <Header />
      <Gallery className='gallery' />
    </div>
  )
}

export default Page;

import React from 'react'

const Nav = () => {
  return (
    <div>
      <ul className='nav-ul'>
        <li><a href='#menu'><button className='button'>Menu</button></a></li>
        <li><a href='#gallery'><button className='button'>Gallery</button></a></li>
        <li><a href='#location'><button className='button'>Location</button></a></li>
        <li><a href='#our-story'><button className='button'>Our Story</button></a></li>
      </ul>
    </div>
  )
}

export default Nav; 

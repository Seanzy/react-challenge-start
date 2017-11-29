import React from 'react'
import menuItems from '../../menu-data.js'
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuItems: menuItems
    }
  }

  render() {
    return (
      <div>
        <h2 className='gallery'>Our Fresh Meals</h2>
        <div>
          {menuItems.map((menuItem, index) => 
            <GalleryItem menuItem={menuItem} key={index}/>
          )}
          }
        </div>
      </div>
    )
  }
}

export default Gallery

// <div className='gallery'>
//   <h2>Our Fresh Meals</h2>
//   <div className='gallery-items'>
//     {renderItems}
//   </div>
// </div>
import React from 'react'

class GalleryItem extends React.Component {
  constructor(props) {
    super(props) 


  }

  render() {
    return (
      <div className='gallery-item'>
        <img className='gallery-item-image img-responsive' src={this.props.menuItem.image}  alt={this.props.menuItem.title} />
        <div className='gallery-item-title'>{this.props.menuItem.title}</div>
        <div className='gallery-item-description'>{this.props.menuItem.description}</div>
        <div id='gallery-item-price'>{this.props.menuItem.price}</div>
      </div>        
    )  
  }
}

export default GalleryItem
//why not just simply import menuItems instead of passing through props?

        // <table>
        //   <tr>
        //     <th></th>
        //     <th></th>
        //     <th></th>
        //   </tr>
        //     <img src={this.props.menuItem.image} alt=''></img>
        //   <tr>
        //     <td>{this.props.menuItem.title}</td>
        //     <td>{this.props.menuItem.description}</td>
        //     <td>{this.props.menuItem.price}</td>
        //   </tr>
        // </table>
import React from 'react'
import './ListingItem.css'

function ListingItem(props) {
  const listing = props.listing
  return (
    <div className="itemStyle">
      <table>
        <tbody>
          <tr>
            <td><img className="imageStyle" src={listing.thumbnail} /></td>
            <td>{listing.title}</td>
          </tr>
          <tr>
            <td colSpan="2" className="secStyle">{listing.highlight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListingItem

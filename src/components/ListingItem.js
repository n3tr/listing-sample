import React from 'react'
import './ListingItem.css'

function ListingItem(props) {
  const listing = props.listing
  return (
    <div className="itemStyle">
      <div className="item__image">
        <img role="presentation" src={listing.thumbnail} />
      </div>
      <div className="item__info">
        <p className="title">{listing.title}</p>
        <p className="highlight">{listing.highlight}</p>
      </div>
    </div>
  )
}

export default ListingItem

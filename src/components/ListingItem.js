import React from 'react'

function ListingItem(props) {
  const listing = props.listing
  return (
    <div>
      <img src={listing.thumbnail} />
      <p>{listing.title}</p>
      <p>{listing.highlight}</p>
    </div>
  )
}

export default ListingItem

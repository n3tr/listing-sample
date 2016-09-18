import React from 'react'

function ListingItem(props) {
  const listing = props.listing
  return (
    <div>
      <p>{listing.title}</p>
    </div>
  )
}

export default ListingItem

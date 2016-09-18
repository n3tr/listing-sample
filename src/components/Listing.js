import React from 'react'
import ListingItem from './ListingItem'

class Listing extends React.Component {
  renderListing() {
    return this.props.allListing.map((listing, idx) => {
      return <ListingItem listing={listing} key={idx} />
    })
  }

  render() {
    return (
      <div>
        { this.renderListing() }
      </div>
    )
  }
}



export default Listing

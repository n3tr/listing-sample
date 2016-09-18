import React from 'react'
import ListingItem from './ListingItem'
import getListing from '../api/getListing'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allListing: []
    }
  }

  componentDidMount() {
    // Fetch API Here

    getListing().then((json) => {

      this.setState({
        allListing: json
      })
    })
  }

  renderListing() {
    if (this.state.allListing.length === 0) {
      return <p>Loading...</p>
    }

    return this.state.allListing.map((listing, idx) => {
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

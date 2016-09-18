import React from 'react'
import ListingItem from './ListingItem'
import getListing from '../api/getListing'

class Listing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allListing: [ {

        title: 'Title 1'
      }, {
        title: 'Title 2'
      } ]
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

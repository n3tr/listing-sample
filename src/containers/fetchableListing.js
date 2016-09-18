import React from 'react'

// fetchableListing allow you define how to fetch listing data for compoennt
// fetchFn: function that return promise<array<listing>>
// return:
// - ReactComponent
function fetchableListing(AComponent, fetchFn) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        allListing: [],
        loading: true
      }
    }

    componentDidMount() {
      fetchFn().then((json) => {
        this.setState({
          allListing: json,
          loading: false
        })
      } )
    }

    render() {
      if (this.state.loading) {
        return <p>Loading</p>
      }
      return <AComponent {...this.state} />
    }
  }
}

export default fetchableListing

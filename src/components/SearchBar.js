import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "Hello",
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    console.log(this.refs);
    let keyword = this.refs.searchInput.value
    console.log('Searching', keyword);
    return ;
    // this.props.onSubmitForm(this.refs.searchInput.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this._onSubmit.bind(this)}
    			className="blackPearl-search" action="">
          <input
            type="text"
            ref={(c) => this._value = c}
            placeholder="Keyword"
            defaultValue={this.state.value} />
          <input
            type="submit"
            value="Search"
            data-testid="search-submit" />
        </form>
      </div>
    )
  }
}



export default SearchBar

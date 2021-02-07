import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import ResultList from '../ResultList/ResultList'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchStr: '', results: [] };
    this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchStringChange(searchStr) {
    this.setState({ searchStr });
  }

  handleSearch(results) {
    this.setState({ results });
  }

  render() {
    return (
      <React.Fragment>
        <SearchInput
          onSearchStringChange={this.handleSearchStringChange}
          onSearch={this.handleSearch}
          searchStr={this.state.searchStr} />
        <ResultList results={this.state.results} />
      </React.Fragment>
    )
  }
}

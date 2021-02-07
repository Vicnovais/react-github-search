import React from 'react';
import GitHubApi from '../../api/github.api'

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.delayedCallback = this.debounce(this.search, 500);
    this.GitHubApi = new GitHubApi();
  }

  onChange(event) {
    this.props.onSearchStringChange(event.target.value);
    this.delayedCallback();
  }

  async search() {
    const results = await this.GitHubApi.getRepos(this.props.searchStr);
    this.props.onSearch(results);
  }

  debounce(func, wait) {
    let timeout;

    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

  render() {
    const searchStr = this.props.searchStr;

    return (
      <input type="text" placeholder="BUSCAR" value={searchStr} onChange={this.onChange}></input>
    );
  }
}

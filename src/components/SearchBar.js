import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Seach Videos</label>
            <input
              type="text"
              name="search"
              value={this.state.searchTerm}
              onChange={(event) =>
                this.setState({ searchTerm: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

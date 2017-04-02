import React, {Component} from 'react';
// bc below is essentailly react.createElement, you need the react library

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};

    //important for scope issues!
    this.onInputChange =this.onInputChange.bind(this);

  }
  render() {
    return (
    <div>
      <input
        // now a controlled component..value is set by state
        value={this.state.term}
        onChange={this.onInputChange}
      />
    </div>
    );
  }
  onInputChange(e){
    this.setState({term:e.target.value});
  }


}

export default SearchBar;

//two steps to handle events
//1. delcare event handler
//2. pass that handler to element

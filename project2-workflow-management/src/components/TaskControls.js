import React, { Component } from 'react';

import Sort from './TaskSort';
import Search from './TaskSearch';
class Controls extends Component {
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render() {
    return (
    <div className="">
        <Search
          onSearch = { this.props.onSearch}
        />
        <Sort
        
          onSort = {this.props.onSort}
          sort = {this.props.sort}
        />
    </div>
      
    );
  }
}
export default Controls;

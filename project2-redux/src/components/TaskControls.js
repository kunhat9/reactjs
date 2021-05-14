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
        <Search />
        <Sort />
    </div>
      
    );
  }
}
export default Controls;

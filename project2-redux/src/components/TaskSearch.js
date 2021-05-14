import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './../actions/index';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword : ''
    }
  }
  onChange = (event) => {
    this.setState({
      keyword:event.target.value
    });
  }
  onSearch = () => {
    this.props.onSearchProps(this.state.keyword);
  }
  render() {
    var { keyword } =this.state;
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." value = {keyword} name="keyword" onChange={this.onChange} />
                <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                                <span className="fa fa-search mr-5"></span>Tìm
                </button>
                </span>
            </div>
        </div>
    );
  }
}

const mapStateToProp = (state) => {
  return { 

  }
};

const mapDispathToProps = (dispatch,props) => {
  return {
      onSearchProps : (keyword) =>  {
          dispatch(actions.SEARCH(keyword))
      }
  }
}

export default connect(mapStateToProp,mapDispathToProps)(Search);

import React , { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img data-src="" alt="iphone6" src="http://vansuloi.sapp.asia/Files/product/logo/20042021/may-tien-ngang-bang-nghieng-bang-truot-tuyen-tinh-nl201ha_20042021_144324.jpg" />
          <div className="caption">
            <h3>Iphone 12</h3>
            <p>
              16.000.000 VNĐ
            </p>
            <button className="btn btn-primary">Mua hàng</button>
            <p>
              <a className="btn btn-primary">Action</a>
              <a className="btn btn-default">Action</a>
            </p>
          </div>
        </div>
       
      </div>
    );
  }
}
export default Product;
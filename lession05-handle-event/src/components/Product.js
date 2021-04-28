import React, { Component } from 'react';
class Products extends Component {
	// su dung constructor khi su dung event handle trong components
	// nen su dung constructor vi cach nay de su dung cung nhu handle cac event nay theo y muon su dung
	constructor(props){
		super(props);
		this.onAddToCart = this.onAddToCart.bind(this);
	}
	onAddToCart(id){
		alert('Đã nhấn vào sản phẩm có id : ' + this.props.id);
	}
	// neu khong muon bind data thi su dung arrow function ()
	onAddToCart2 = () => {
		alert('Đã nhấn vào sản phẩm có id : ' + this.props.id);
	}
  render() {
    return (
		<div>
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div className="thumbnail">
					<img data-src="#" alt= {this.props.name} />
					<div className="caption">
						<h3>Tên sản phẩm : {this.props.children}</h3>
						<p>
							Giá : {this.props.price} VNĐ 
						</p>
						<p>

						{
							/* 
							u dung arrow function :
							<a href="#" className="btn btn-primary" onClick={ () => { this.onAddToCart(this.props.id) } } >Mua ngay</a>
							- neu khong su dung arrow function thi su dung constructor va sung  tung supper()
						
						*/
						} 
							<a href="#" className="btn btn-primary" onClick={ this.onAddToCart } >Bind Data</a>
							<a href="#" className="btn btn-primary" onClick={ this.onAddToCart2 } >Arrow Function</a>
						</p>
					</div>
				</div>
			</div>
		</div>

    );
  }
}
export default Products;

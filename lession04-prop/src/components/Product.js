import React, { Component } from 'react';
class Products extends Component {
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
							<a href="#" className="btn btn-primary">Mua ngay</a>
						</p>
					</div>
				</div>
			</div>
		</div>

    );
  }
}
export default Products;

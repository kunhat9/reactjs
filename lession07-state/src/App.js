import './App.css';
import React, { Component } from 'react';
// import Product from './components/Product';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products : [
				{
					id :1,
					name : "Apple Iphone X",
					price : "15.000.000",
					status : 1
				},
				{
				  id :2,
				  name : "Samsung Galaxy S10",
				  price : "16.000.000",
				  status : 1
			  },
			  {
				  id :3,
				  name : "Sony Xperia X",
				  price : "17.000.000",
				  status : 1
			  },
			  {
				  id :4,
				  name : "Oppo",
				  price : "17.000.000",
				  status : 1
			  }
			],
			isActive : true
		};
	}
	onChangeActive = () => {
		this.setState({
			isActive : !this.state.isActive
		})
	}
  render() {
	let elementsProduct = this.state.products.map((product,index)=>{
		var html ="";
		if(product.status ===1){
			html = <tr key={index}>
						<td>{ index + 1 }</td>
						<td> { product.name }</td>
						<td>
							<span className="label label-default">{ product.price}</span>
						</td>
					</tr>
		}
		return html;
	});
    return (
		<div>
			<nav className="navbar navbar-inverse">
				<a className="navbar-brand" href="#">State in React</a>
			</nav>
			<div className="container">
				<div className="row">
					<div className="row">
						<table className="table table-bordered table-hover">
							<thead>
								<tr>
									<th>STT</th>
									<th>Tên sản phẩm</th>
									<th>Giá</th>
								</tr>

							</thead>
							<tbody>
								{elementsProduct}
							</tbody>
						</table>
						<button type="button" className="btn btn-danger" onClick={ this.onChangeActive }>
							Active : { this.state.isActive ===true ? "true":"false"}
						</button>
					
					</div>
				</div>
			</div>
		</div>



    );
  }
}
export default App;

import './App.css';
import React, { Component } from 'react';
import Product from './components/Product';
class App extends Component {
	onClick(){
		alert('Đây là compents App');
	}
	onClick2(){
		alert('Đây là compents App2');
	}
  onAddProduct = () =>{
    console.log(this.refs.name.value);
  }
  render() {
	  var products = [
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
		},
	  ];
	let elementsProduct = products.map((product,index)=>{
		var html ="";
		if(product.status ===1){
			html = <Product 
						key = {product.id}
						id = {product.id}
						price={product.price}
					>
						{product.name}
					</Product>;

		}
		return html;
	});
    return (
		<div>
			<nav className="navbar navbar-inverse">
				<a className="navbar-brand" href="#">Props</a>
				<ul className="nav navbar-nav">
					<li className="active">
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Link</a>
					</li>
				</ul>
			</nav>
			<div className="container">
				<div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h3 className="panel-title">Thêm sản phẩm</h3>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="" className="form-controls">Tên sản phẩm</label>
                  <input type="text" className="form-controls" ref="name" />

                </div>
                <button className="btn btn-suscess" type="button" onClick = { this.onAddProduct } >
                  Lưu
                </button>
              </div>
            </div>
            

          </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elementsProduct}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button className="btn btn-warning" type="button" onClick={ this.onClick } >
                Click Me
              </button>
            </div>
            <button className="btn btn-warning" type="button" onClick={ () => { this.onClick2('ClickMe 2') }  } >
                Click Me2
            </button>
          </div>
			</div>
		</div>
    
    
    
    );
  }
}
export default App;

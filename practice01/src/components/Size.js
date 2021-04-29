import React , { Component } from 'react';
class Size extends Component {
    constructor(props){
        super(props);
        this.state = {
            size : this.props.size,
            maxSize : 36,
            minSize : 12
        }
    }
    UpSize = () => {
        if(this.state.size === this.state.maxSize){
            this.setState({
                size : this.state.maxSize
            });
            
        }else {
            this.setState({
                size : ++this.state.size 
            })
        }
        this.props.onReceiveSize(this.state.size);
    }
    DownSize = () => {
        if(this.state.size === this.state.minSize){
            this.setState({
                size : this.state.minSize
            });
        }else {
            this.setState({
                size : --this.state.size 
            })
        }
        this.props.onReceiveSize(this.state.size);
    }
    render() {
        return(
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span className="bg-warning">Size :  { this.state.size } px</span>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button className="btn btn-success" type="button" onClick={ this.UpSize }>Tăng</button>
                    <button className="btn btn-warning" type="button" onClick={ this.DownSize }>Giảm</button>
                </div>

            </div>          

            
        );
    }
}
export default Size;
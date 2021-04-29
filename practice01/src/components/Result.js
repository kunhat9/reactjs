import React , { Component } from 'react';

class Result extends Component {
    
    setStyle(){
        return{
            color : this.props.color,
            'font-size' : this.props.size + "px",
            border : this.props.size +'px solid'
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div style={this.setStyle()}>
                    Nội dung text

                </div>
            </div>
        );
    }
}
export default Result;
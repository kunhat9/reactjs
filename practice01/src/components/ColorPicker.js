import React , { Component } from 'react';
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            style:{
                width : 50,
                height : 50,
            },
            color : this.props.color
        };
    }
    onSelect(type){
        this.props.onReceiveColor(type);
    }
    render() {
        return(
            <div>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                  </div>
                  <div className="panel-body">
                        <div className="container">
                                <div className="row">
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                        <div className="bg-danger" style={ this.state.style} onClick={ () => { this.onSelect('red') }  }></div>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                        <div className="bg-success" style={ this.state.style} onClick={ () => {this.onSelect('green')} }></div>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                        <div className="bg-primary" style={ this.state.style} onClick={ () => { this.onSelect('blue')} }></div>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                        <div className="bg-warning" style={ this.state.style} onClick={ () => {this.onSelect('yellow')} }></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default ColorPicker;
import React , { Component } from 'react';
import './App.css';
import Size from './components/Size';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      size : 12
    }
  }
  onSetColor = (params)=>{
    this.setState({
      color : params
    });
  }
  onSetSize = (params)=>{
    this.setState({
      size : params
    });
  }
  render() {
    return(    
      <div className="mt-50">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <ColorPicker 
                color = { this.state.color }
                onReceiveColor = { this.onSetColor }
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Size
                size = { this.state.size }
                onReceiveSize = { this.onSetSize }
              />
            </div>
        </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Reset />
          </div>
            
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result 
              color = { this.state.color }
              size = { this.state.size }

            />
          </div>
      </div>

      
    );
  }
}

export default App;

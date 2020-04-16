import React, { Component } from 'react';
import YouTube from 'react-youtube';
 
class Youtube extends Component {
  state={
    width: "590",
    height: "290"
  }

  componentDidMount(){
    this.widthHanlder(window.screen.availWidth)
  }

  widthHanlder = (screenWidth) =>{
    if(screenWidth < 1200){
      this.setState({width: '400'})
    } else if(screenWidth < 600){
      this.setState({width: "200", height: "160" })
    }
  }

    videoOnReady(event){
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        if(postMessage === undefined){
            this.videoOnReady()
        }
      }

  render() {
    const opts = {
      height: this.state.height,
      width: this.state.width,
    };
 
    return <YouTube videoId={this.props.trailer} opts={opts} onReady={this.videoOnReady} />;
  }
}

export default Youtube
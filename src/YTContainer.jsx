import React from 'react';
import YouTube from 'react-youtube';
import './App.css';
 
class YTContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "YTContainer"
    };
  }


  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        controls: 0,
        autoplay: 1,
        disablekb: 1,
        loop: 1,
        modestbranding: 1,
        listType: 'playlist',
        list: 'PL_8O6mbFKG8FxJEsy8Z_uzyL5A9GdE5-1',

      },
    };
 
    return (
        <div className="App">
        <header className="App-header">
            <YouTube videoId="oYx4LKK9LhU" opts={opts} onReady={this._onReady} />
        </header>
        </div>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}

export default YTContainer;
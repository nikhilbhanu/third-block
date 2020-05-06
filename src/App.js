import React from 'react';
import YTContainer from './YTContainer'

class App extends React.Component {
  constructor () {
    super();
    
    this.state = {
      name: "App",
      showYTContainer: false
    }
    
    this.showPlayer = this.showPlayer.bind(this);
  }  

  showPlayer(name) {
    console.log(name);
    switch (name) {
      case "showYTContainer":
        this.setState({ showYTContainer: true});
        break;
      default:
        break;
    }
  }

  render() {
    const {showYTContainer} = this.state;  
    document.title = 'third block';
    return (
      <div>
        {showYTContainer && <YTContainer />}
        <div className="App-button">
          <button className="App-button2" onClick={() => this.showPlayer("showYTContainer")}>
              welcome to third block.
          </button>
        </div>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import Avatar from './components/Avatar';
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown';
import Card from './components/Card';
class App extends Component {
	


	
  render() {
    return (
      <div className="App">
     	<h1 className="text-center">UI component Library</h1>
		<Avatar/>
		<Buttons />
        <Dropdown />
		<Card />
      </div>
    );
  }
}

export default App;



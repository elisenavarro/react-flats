import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    // defines initial state
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }
  selectFlat = (index) => {
    this.setState({selectedFlat: flats[index]});
  }

// BUILD AND RETURN HTML
  render() {
    return ( 
      <div>
        {/* reference the child FlatList component */}
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div>
          {/* contain the map */}
        </div>
      </div>  
    );
  }
}

export default App;

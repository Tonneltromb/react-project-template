import React, {Component} from 'react';

import './App.css';
import Popup from "./components/Popup/Popup";
import Spinner from "./components/Spinner/Spinner";
import SlidesScrollContainer from "./components/SlidesScrollContainer/SlidesScrollConatainer";

class App extends Component {
  componentDidMount() {
   console.log('componentDidMount')
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className="App">
        <Popup />
        <Spinner />
        <SlidesScrollContainer />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import './App.css';
import * as popupService from './service/popup.service';
import Popup from "./components/Popup/Popup";
import Spinner from "./components/Spinner/Spinner";

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
        <button onClick={() => popupService.show('<h1>hello</h1>')}>Show</button>
      </div>
    );
  }
}

export default App;

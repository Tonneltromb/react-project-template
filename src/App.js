import React, {Component} from 'react';

import './App.css';
import * as popupService from './service/popup.service';
import Popup from "./components/Popup/Popup";
import Spinner from "./components/Spinner/Spinner";

class App extends Component {
  componentDidMount() {
    this.initPopup();
    this.initSpinner();
  }

  render() {
    return (
      <div className="App">
        <Popup />
        <Spinner />
      </div>
    );
  }

  initPopup() {
    popupService.get();
  }

  initSpinner() {

  }
}

export default App;

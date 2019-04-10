import React, {Component} from 'react';

import './App.css';
import Popup from "./components/Popup/Popup";
import Spinner from "./components/Spinner/Spinner";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
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
        {/*<div className='App__background'> </div>*/}
        <Header />
        <Content />
        <Footer />
        <SlidesScrollContainer />
      </div>
    );
  }
}

export default App;

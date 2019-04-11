import React, {useEffect, useState} from 'react';

import './App.css';
import Popup from "./components/Popup/Popup";
import Spinner from "./components/Spinner/Spinner";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    const [expandHeader, setExpandHeader] = useState(true);
    useEffect(() => {
        console.log('App componentDidMount')
    }, []);

    const onAppScroll = (event) => {
        if (event.target.scrollTop > 100) {
            if (expandHeader) {
                setExpandHeader(false);
            }
        } else {
            if (!expandHeader) {
                setExpandHeader(true);
            }
        }
    };

    return (
        <div className="App" onScroll={onAppScroll}>
            <Popup/>
            <Spinner/>
            <Header expand={expandHeader} />
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;

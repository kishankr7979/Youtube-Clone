import React from 'react';
import ReactDOM from 'react-dom';
import SearchArea from './SearchArea';
import { Router, Link } from '@reach/router';
import WatchArea from './WatchArea';
import Footer from './footer.js';

const App = () => {

    return ( <
        div >
        <
        header >
        <
        Link to = "/" > ReacTube < /Link> < /
        header >
        <
        Router >
        <
        SearchArea path = "/" / >
        <
        WatchArea path = "/watch/:id" / >

        <
        /Router>

          <Footer path = "/" />
        
       < /
        div >



    )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

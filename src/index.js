import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//{ Robots } and if it was another one
// { Robots, Cat }
// import CardList from './CardList';
import App from './container/App';
// import { Robots } from './Robots';

//possibly work offline to make app faster
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

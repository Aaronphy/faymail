import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../app/index';
// Import the styles here to process them with webpack
import './style.scss';


ReactDOM.render(
    <App/> ,
    document.getElementById('app'));

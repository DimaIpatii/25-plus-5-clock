import React from 'react';
import reander, { render } from 'react-dom';


/* Styles */
import './sass/main.scss';

/* React Component */
import App from './react/App.js';

render(
    <App />,
    document.getElementById('root')
);
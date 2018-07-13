import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello(props) {
    return <h1>Hello at {props.now}</h1>
};

function World(args) {
    return <h1>World at {args.now}</h1>
};

ReactDOM.render(<World now={new Date().toISOString() } />,
    document.getElementById('root')
);

registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const myName = "my friend";

ReactDOM.render(
    <h1>Hello {myName} </h1>,
    document.getElementById('reactTypeScriptContainer')
);
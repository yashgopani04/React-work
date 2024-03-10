import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


/* const language = 'React'

const reactElement = React.createElement(

   'a',
   {href: 'https://google.com' , target: '__blank'},
   'Clike me to Visit Google',

   language // add your variable here to access their values

 ) */  // this is How we create individual elements in react


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <App />
  // reactElement
  
);


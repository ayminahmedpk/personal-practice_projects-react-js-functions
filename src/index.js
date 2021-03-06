import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
    <App />
);


// root.render( 
//   <React.StrictMode>
//     <App />
// </React.StrictMode>
// );


// StrictMode can mess up effects HARD
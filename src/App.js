import React from 'react';

import './App.css';

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Chomba chanda</h1>
//       </div>
//     )
//   }
// }

function tick () {
  return (
    <div>
        <h1>Hello, world</h1>
        <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
   
}

export default tick;

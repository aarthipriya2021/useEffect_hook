// Class Component
// import React from 'react';

// class Counter extends React.Component {
//   constructor() {
//     this.state = { count: 0 };
//     this.incrementCount = this.incrementCount.bind(this);
//   }
//   incrementCount() {
//     this.setState({ count: this.state.count + 1 });
//   }
  
//   componentDidMount() { document.title = `You clicked ${this.state.count} times`; }
//   componentDidUpdate() { document.title = `You clicked ${this.state.count} times`; }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.incrementCount}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default Counter;


//Function Component
import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

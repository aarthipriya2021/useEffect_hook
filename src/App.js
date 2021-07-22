// import React, { useState, useEffect } from 'react';
// export default function Greeting() {

  
//   const [firstName, setFirstName] = useState(() =>
//     window.localStorage.getItem('hooksFirstName') || ''
//   );
//   const [lastName, setLastName] = useState(() =>
//     window.localStorage.getItem('hooksLastName') || ''
//   );
//   const handleFirstNameChange = (e) => setFirstName(e.target.value);
//   const handleLastNameChange = (e) => setLastName(e.target.value);

//   useEffect(() => {
//     window.localStorage.setItem('hooksFirstName', firstName);
//     window.localStorage.setItem('hooksLastName', lastName);
//   });

//   return (
//     <div>
//       <input value={firstName} onChange={handleFirstNameChange} /><br />
//       <input value={lastName} onChange={handleLastNameChange} />
//       <p>
//         Hello, <span>{firstName} {lastName}</span>
//       </p>
//     </div>
//   );
// }


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

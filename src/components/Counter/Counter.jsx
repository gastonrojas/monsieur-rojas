import React, { useState} from "react";


export default function App() {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    count < 25 ? setCount(prev => prev +1) : alert('Deja algo para los demas che')
  }

  const handleDecrement = () => {
    count > 1 ? setCount(prev => prev -1) : alert('Menos que uno no se puede che')
  }

  const reset = () => {
    setCount(1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick = { () => handleIncrement() } >+</button>
      <button onClick = { () => handleDecrement() } >-</button>
      <button onClick = { () => reset() }> reset </button>
    </div>
  );
}
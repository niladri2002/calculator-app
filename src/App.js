import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }
    switch (operation) {
      case '+': setResult(a + b); break;
      case '-': setResult(a - b); break;
      case '*': setResult(a * b); break;
      case '/': setResult(b !== 0 ? a / b : 'Cannot divide by 0'); break;
      default: setResult('Unknown operation');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Simple Calculator</h1>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="First number" />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second number" />
      <br /><br />
      <button onClick={() => calculate('+')}>+</button>
      <button onClick={() => calculate('-')}>-</button>
      <button onClick={() => calculate('*')}>*</button>
      <button onClick={() => calculate('/')}>/</button>
      <br /><br />
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;

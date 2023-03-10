
import './App.css';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  }
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert("Zero limit reached")
    }

  }

  return (
    <div className="main_div">
      <div className='center_div'>
        <h1>{num}</h1>
        <div className='btn_dov'>
          <button onClick={incNum}>Increm</button>
          <button onClick={decNum}>Decrem</button>
        </div>
      </div>
    </div>
  );
}

export default App;

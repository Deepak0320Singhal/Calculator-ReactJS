import './App.css'
import Container from '../components/Container'
import { useState } from 'react';
function App() {
  let [inpVal, setInpval] = useState("");


  let buttons = ["8", "9", "/", "6", "7", "*", "4", "5", "-", "2", "3", "+", "0", "1", ".", "=", "C"]

  let onButtonClick = (event) => {
    console.log(`Button clicked ${event}`);
    if (event == "=") {
      let result = eval(inpVal)
      setInpval(result);
    }
    else if (event == "C") {
      setInpval("");
    }
    else {
      setInpval(inpVal + event);
    }
  }


  return (
    <>
      <Container>
        <h1 style={{ backgroundColor: 'white' }}>Calculator</h1>
        <input
          type="text"
          value={inpVal}
          readOnly
          style={{ width: '15rem', height: '3rem', backgroundColor: 'white', color: 'black', }} className='m-2 mb-2' />
        <div className="container">
          <div className="row mt-3">
            {buttons.map((button, index) => (
              <div key={index} className="col-4">
                <button
                  onClick={() => onButtonClick(button)
                  }
                  className="btn btn-primary m-2"
                  style={{ width: '50px', height: '50px' }}>{button}</button>
              </div>
            ))}
          </div>
        </div>

      </Container >
    </>
  )
}

export default App

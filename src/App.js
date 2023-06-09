import { useEffect, useState } from 'react';
import './App.css';
import Element from './components/Element/Element';
import bubbleSort from './Algorithms/bubbleSort';

const App = () => {

  const [arr, setArr] = useState([20, 10, 14, 15, 7, 2, 12, 16, 17, 5])
  const [elements, setElements] = useState()
  bubbleSort(arr, setArr)


  useEffect(() => {
     setElements(arr.map((el, i) => {
      return (
        <Element
          key={i}
          orderNo={i}
          height={el*10}
          active={false}
          sorted={false}
        />
      )
    }))
  }, [arr])

  return (
    <div className="App">
      <div className='elements'>
        {elements}
      </div>
    </div>
  )
}

export default App;
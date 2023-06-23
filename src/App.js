import { useState, useEffect } from 'react';
import './App.css';
import Element from './components/Element/Element';
import bubbleSort from './Algorithms/bubbleSort';
import selectionSort from './Algorithms/selectionSort';
import insertionSort from './Algorithms/insertionSort';
import mergeSort from './Algorithms/mergeSort';
import heapSort from './Algorithms/heapSort';
import cocktailSort from './Algorithms/cocktailSort';
import shellSort from './Algorithms/shellSort';
import quickSort from './Algorithms/quickSort';
import Navigation from './components/Navigation/Navigation';


const App = () => {

  const [delay, setDelay] = useState(50)
  const [activeIndex, setActiveIndex] = useState([])
  const [currentArray, setCurrentArray] = useState(
    [39, 12, 44, 28, 6, 22, 18, 7, 49, 48, 15, 50, 42, 14, 16, 26, 36, 1, 29, 34, 40, 25, 43, 2, 9, 38, 24, 13, 4, 46, 35, 3, 19, 10, 17, 23, 31, 8, 20, 5, 45, 30, 47, 32, 37, 11, 21, 27, 33, 41,  44, 28, 6, 22, 18, 7, 49, 48, 15, 50, 42, 14, 16, 26, 36, 1, 29, 34, 40, 25, 43, 2, 9, 38, 24, 13, 4, 46, 35]
  )
  useEffect(() => {
    heapSort(currentArray, setCurrentArray, setActiveIndex, delay)
  }, [])


  
  const elements = currentArray.map((el, index) => {
      return (
        <Element
          key={index}
          orderNo={index}
          width={0.85}
          height={el*12}
          active={activeIndex.includes(index) ? true : false}
          sorted={false}
        />
      )
  })

  return (
    <div className="App">
      <Navigation/>
      <div className='main'>
        <div className='visualization'>
          {elements}
        </div>
      </div>
    </div>
  )
}

export default App;
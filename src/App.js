import { useState, useEffect } from 'react';
import './App.css';
import Element from './components/Element/Element';
import bubbleSort from './Algorithms/bubbleSort';
import selectionSort from './Algorithms/selectionSort';
import insertionSort from './Algorithms/insertionSort';
import mergeSort from './Algorithms/mergeSort'; // replaced with iterative version
import mergeSortIterative from './Algorithms/mergeSortIterative';
import heapSort from './Algorithms/heapSort';


const App = () => {

  const [delay, setDelay] = useState(50)
  const [activeIndex, setActiveIndex] = useState([])
  const [currentArray, setCurrentArray] = useState(
    [39, 12, 44, 28, 6, 22, 18, 7, 49, 48, 15, 50, 42, 14, 16, 26, 36, 1, 29, 34, 40, 25, 43, 2, 9, 38, 24, 13, 4, 46, 35, 3, 19, 10, 17, 23, 31, 8, 20, 5, 45, 30, 47, 32, 37, 11, 21, 27, 33, 41]
  )
  useEffect(() => {
    heapSort(currentArray, setCurrentArray, setActiveIndex, delay)
  }, [])


  
  const elements = currentArray.map((el, index) => {
      return (
        <Element
          key={index}
          orderNo={index}
          height={el*10}
          active={activeIndex.includes(index) ? true : false}
          sorted={false}
        />
      )
  })

  return (
    <div className="App">
      <div className='elements'>
        {elements}
      </div>
    </div>
  )
}

export default App;
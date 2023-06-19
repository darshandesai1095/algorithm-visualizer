import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"

const heapSort = async (arr, updateArr, setActiveIndex, delayMilliSeconds) => {
    const length = arr.length
    if (length <= 1) return arr
  
    // build max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      await heapify(arr, length, i, updateArr, setActiveIndex, delayMilliSeconds)
    }
  
    // Heap sort
    for (let i = length - 1; i > 0; i--) {
      // Swap root with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]]
      setActiveIndex([0, i])
      updateArr([...arr])
      await delay(delayMilliSeconds)
  
      // Maintain max heap property on reduced heap
      await heapify(arr, i, 0, updateArr, setActiveIndex, delayMilliSeconds)
    }

    sequenceHighlight(length, setActiveIndex, delayMilliSeconds)
}
  
const heapify = async (arr, length, i, updateArr, setActiveIndex, delayMilliSeconds) => {
let largest = i;
const leftChildIndex = 2 * i + 1
const rightChildIndex = 2 * i + 2

if (leftChildIndex < length && arr[leftChildIndex] > arr[largest]) {
    largest = leftChildIndex;
}

if (rightChildIndex < length && arr[rightChildIndex] > arr[largest]) {
    largest = rightChildIndex;
}

if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    setActiveIndex([i, largest])
    updateArr([...arr])
    await delay(delayMilliSeconds)

    await heapify(arr, length, largest, updateArr, setActiveIndex, delayMilliSeconds)
}
}

export default heapSort
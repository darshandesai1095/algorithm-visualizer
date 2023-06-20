import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"

const gravitySortInPlace = async (arr, setterFunc, setActiveIndex, delayMilliSeconds) => {
    const max = Math.max(...arr) // Find the maximum value in the array
  
    // Increment the corresponding bucket/rail for each element in the input array
    for (let i = 0; i < arr.length; i++) {
      arr[arr[i]] += max + 1 // Add a value greater than the maximum element to preserve the original value
    }
  
    let index = 0
  
    // Place the elements in the sorted order by "dropping" them back into the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        await delay(delayMilliSeconds)
        arr[i] -= max + 1 // Subtract the added value to retrieve the original value
        arr[index++] = arr[i]
      }
      setterFunc([...arr])
    }

    console.log(arr)
  
  }

  export default gravitySortInPlace
  
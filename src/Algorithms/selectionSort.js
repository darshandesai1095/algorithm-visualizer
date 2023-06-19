import delay from "../functions/delay"

const selectionSort = async (arr, updateArray, setActiveIndex, delayMilliSeconds) => {
    const len = arr.length
    if (len <= 1) return arr

    for (let i=0; i<len-1; i++) {
        let currentIndex = i
        let minIndex = i+1
        for (let j=i+1; j<len; j++) {
            // find minimum
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (arr[currentIndex] > arr[minIndex]) {
            [ arr[currentIndex], arr[minIndex] ] = [ arr[minIndex], arr[currentIndex] ]
        }
        setActiveIndex([currentIndex, minIndex])
        await delay(delayMilliSeconds)
        // pass in new array ∵ react compares by reference
        updateArray([...arr])
    }

    for (let i=0; i<len; i++) {
        setActiveIndex([i])     
        await delay(delayMilliSeconds)   
    }
    setActiveIndex([]) 

}

export default selectionSort
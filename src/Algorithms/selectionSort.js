const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

const selectionSort = async (arr, updateArray, setActiveIndex, delayMilliSeconds) => {
    const len = arr.length
    if (len <= 1) return arr

        for (let i=0; i<len-1; i++) {
            let currentIndex = i
            let minIndex = i+1
            for (let j=i+1; j<len; j++) {
                await delay(delayMilliSeconds)
                // find minimum
                if (arr[j] < arr[minIndex]) {
                    minIndex = j
                }
            }
            if (arr[currentIndex] > arr[minIndex]) {
                [ arr[currentIndex], arr[minIndex] ] = [ arr[minIndex], arr[currentIndex] ]
            }
            setActiveIndex([currentIndex, minIndex])
            // pass in new array ∵ react compares by reference
            updateArray([...arr])
        }

        for (let i=0; i<len; i++) {
          await delay(delayMilliSeconds)
          setActiveIndex([i])        
        }
        setActiveIndex([]) 

}

export default selectionSort
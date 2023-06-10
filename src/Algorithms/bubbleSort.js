const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

const bubbleSort = async (arr, setterFunc, setActiveIndex, delayMilliSeconds) => {
    const len = arr.length
    if (len <= 1) return arr

        for (let i=0; i<len; i++) {
            for (let j=0; j<len-i-1; j++) {
                await delay(delayMilliSeconds)
                if (arr[j] > arr[j+1]) {
                    [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
                }
                setActiveIndex([j, j+1])
                // pass in new array ∵ react compares by reference
                setterFunc([...arr])
            }
        }

        for (let i=0; i<len; i++) {
          await delay(delayMilliSeconds)
          setActiveIndex([i])        
        }
        setActiveIndex([]) 

}

export default bubbleSort
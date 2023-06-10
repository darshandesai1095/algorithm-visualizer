const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

const insertionSort = async (arr, updateArr, setActiveIndex, delayMilliSeconds) => {
    const len = arr.length
    if (len <= 1) return arr

    for (let i=0; i<len; i++) {
        let key = arr[i]

        let j = i-1
        while (j >= 0 && key < arr[j]) {
            await delay(delayMilliSeconds)
            arr[j+1] = arr[j]
            setActiveIndex([i,j])
            j -=1
        }
        arr[j+1] = key
        updateArr([...arr])
    }

    for (let i=0; i<len; i++) {
        await delay(delayMilliSeconds)
        setActiveIndex([i])        
    }
    setActiveIndex([]) 


}

export default insertionSort
import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const shellSort = async (setterFunc, setActiveIndex, delayMilliSeconds, arrayLength) => {

    const arr = generateRandomSequence(arrayLength)
    setterFunc([...arr])
    await delay(500)

    const length = arr.length

    let interval = Math.floor(length/2)

    while (interval >= 1) {
        for (let i=0; i+interval<length; i++) {
            await delay(delayMilliSeconds)
            setActiveIndex([i, i+interval])
            if (arr[i] > arr[i+interval]) {
                [ arr[i], arr[i+interval] ] = [ arr[i+interval], arr[i] ]    
                setterFunc([...arr])        
            }

            let j = i
            while (j - interval >= 0 && arr[j - interval] > arr[j]) {
                [ arr[j], arr[j-interval] ] = [ arr[j-interval], arr[j]] 
                setActiveIndex([j, j-interval])
                await delay(delayMilliSeconds)
                setterFunc([...arr])
                j -= interval
            }
        }
        
        interval = Math.floor(interval/2)
    }

    sequenceHighlight(length, setActiveIndex, 10)
}

export default shellSort
  
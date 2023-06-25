import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const shellSort = async (setterFunc, setActiveIndex, delayMilliSeconds, 
    arrayLength, setMetaData, metaData, cancellationCheckFn) => {

    if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([])
        return
    }

    let iterations = 0
    let comparisons = 0
    let swaps = 0
    let shifts = 0

    setMetaData({
        iterations: iterations,
        comparisons: comparisons,
        swaps: swaps,
        shifts: shifts
    })

    const arr = generateRandomSequence(arrayLength)
    setterFunc([...arr])
    await delay(500)

    const length = arr.length

    let interval = Math.floor(length/2)

    while (interval >= 1) {

        if (cancellationCheckFn && cancellationCheckFn()) {
            setActiveIndex([])
            return
        }

        for (let i=0; i+interval<length; i++) {

            if (cancellationCheckFn && cancellationCheckFn()) {
                setActiveIndex([])
                return
            }

            await delay(delayMilliSeconds)
            setActiveIndex([i, i+interval])
            if (arr[i] > arr[i+interval]) {
                [ arr[i], arr[i+interval] ] = [ arr[i+interval], arr[i] ]    
                setterFunc([...arr])   
                
                setMetaData({
                    iterations: iterations,
                    comparisons: comparisons,
                    swaps: swaps+=1,
                    shifts: shifts
                })

            }

            setMetaData({
                iterations: iterations+=1,
                comparisons: comparisons+=1,
                swaps: swaps,
                shifts: shifts
            })

            let j = i
            while (j - interval >= 0 && arr[j - interval] > arr[j]) {

                if (cancellationCheckFn && cancellationCheckFn()) {
                    setActiveIndex([])
                    return
                }

                [ arr[j], arr[j-interval] ] = [ arr[j-interval], arr[j]] 
                setActiveIndex([j, j-interval])
                await delay(delayMilliSeconds)
                setterFunc([...arr])
                j -= interval

                setMetaData({
                    iterations: iterations+=1,
                    comparisons: comparisons,
                    swaps: swaps+=1,
                    shifts: shifts
                })

            }
        }
        
        interval = Math.floor(interval/2)
    }

    sequenceHighlight(length, setActiveIndex, 10)
}

export default shellSort
  
import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const insertionSort = async (updateArr, setActiveIndex, delayMilliSeconds, arrayLength, 
    setMetaData, metaData, cancellationCheckFn) => {

    if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([])
        return
    }

    let iterations = 0
    let comparisons = 0
    let swaps = 0
    let shifts = 0

    const arr = generateRandomSequence(arrayLength)
    updateArr([...arr])
    await delay(500)


    const length = arr.length
    if (length <= 1) return arr

    for (let i=0; i<length; i++) {

        if (cancellationCheckFn && cancellationCheckFn()) {
            setActiveIndex([])
            return
        }

        let key = arr[i]

        let j = i-1
        while (j >= 0 && key < arr[j]) {
            if (cancellationCheckFn && cancellationCheckFn()) {
                setActiveIndex([])
                return
            }
            await delay(delayMilliSeconds)
            arr[j+1] = arr[j]
            setActiveIndex([i,j])
            setMetaData({
                iterations: iterations+=1,
                comparisons: comparisons+=1,
                swaps: swaps,
                shifts: shifts+=1
            })
            j -=1
            await delay(delayMilliSeconds)
            updateArr([...arr])
            await delay(delayMilliSeconds)
        }
        arr[j+1] = key
        setMetaData({
            iterations: iterations,
            comparisons: comparisons,
            swaps: swaps,
            shifts: shifts+=1
        })
        updateArr([...arr])
    }

    sequenceHighlight(length, setActiveIndex, 10)

}

export default insertionSort
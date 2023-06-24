import delay from "../functions/delay"
import generateRandomSequence from "../functions/generateRandomSequence"
import sequenceHighlight from "../functions/sequenceHighlight"

const selectionSort = async (updateArray, setActiveIndex, delayMilliSeconds, arrayLength, setMetaData) => {

    let iterations = 0
    let comparisons = 0
    let swaps = 0
    let shifts = 0

    const arr = generateRandomSequence(arrayLength)
    updateArray([...arr])
    await delay(500)

    const len = arr.length
    if (len <= 1) return arr

    for (let i=0; i<len-1; i++) {
        setMetaData({
            iterations: iterations+=1,
            comparisons: comparisons+=1,
            swaps: swaps,
            shifts: shifts
        })
        let currentIndex = i
        let minIndex = i+1
        for (let j=i+1; j<len; j++) {
            setMetaData({
                iterations: iterations+=1,
                comparisons: comparisons+=1,
                swaps: swaps,
                shifts: shifts
            })
            // find minimum
            if (arr[j] < arr[minIndex]) {
                minIndex = j
                setActiveIndex([j])
                await delay(delayMilliSeconds)
            }
        }
        if (arr[currentIndex] > arr[minIndex]) {
            [ arr[currentIndex], arr[minIndex] ] = [ arr[minIndex], arr[currentIndex] ]
            setActiveIndex([currentIndex, minIndex])
            await delay(delayMilliSeconds)
            setMetaData({
                iterations: iterations,
                comparisons: comparisons,
                swaps: swaps+=1,
                shifts: shifts
            })
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

    sequenceHighlight(len, setActiveIndex, 10)

}

export default selectionSort
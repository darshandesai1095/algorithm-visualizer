import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const quickSort = async (updateArray, setActiveIndex, delayMilliSeconds, 
    arrayLength, setMetaData, metaData, cancellationCheckFn) => {

    if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([])
        return
    }

    setMetaData({
        iterations: metaData.iterations,
        comparisons: metaData.comparisons,
        swaps: metaData.swaps,
        shifts: metaData.shifts
    })

    const arr = generateRandomSequence(arrayLength)
    updateArray([...arr])
    await delay(500)

    const length = arr.length
    if (length <= 1) return arr

    const left = 0
    const right = length-1
    await partition(arr, left, right, updateArray, setActiveIndex, 
        delayMilliSeconds, setMetaData, metaData, cancellationCheckFn)

    if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([])
        return
    }

    sequenceHighlight(length, setActiveIndex, 10)

}

export default quickSort

const partition = async (arr, left, right, updateArray, setActiveIndex, 
    delayMilliSeconds, setMetaData, metaData, cancellationCheckFn) => {

    if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([])
        return
    }

    if (left >= right) return
    const pivot = arr[right]
    setActiveIndex([right])
    let i = left - 1
    for (let j=left; j<right; j++) {

        if (cancellationCheckFn && cancellationCheckFn()) {
            setActiveIndex([])
            return
        }

        setActiveIndex([right, i, j])
        await delay(delayMilliSeconds)
        if (arr[j] < pivot) {
            [ arr[j], arr[i+1] ] = [ arr[i+1], arr[j] ]
            i +=1

            setMetaData({
                iterations: metaData.iterations,
                comparisons: metaData.comparisons,
                swaps: metaData.swaps+=1,
                shifts: metaData.shifts
            })

        }
        if (j === right-1 ) {
            [ arr[right], arr[i+1] ] = [ arr[i+1], arr[right] ]

            setMetaData({
                iterations: metaData.iterations,
                comparisons: metaData.comparisons,
                swaps: metaData.swaps+=1,
                shifts: metaData.shifts
            })
        }
        setActiveIndex([i+1])
        updateArray([...arr])

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons+=1,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })
        
    }

    await partition(arr, left, i, updateArray, setActiveIndex, delayMilliSeconds, setMetaData, metaData, cancellationCheckFn)
    await partition(arr, i+2, right, updateArray, setActiveIndex, delayMilliSeconds, setMetaData, metaData, cancellationCheckFn)
}
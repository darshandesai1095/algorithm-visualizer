import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"

const quickSort = async (arr, updateArray, setActiveIndex, delayMilliSeconds) => {
    const length = arr.length
    if (length <= 1) return arr

    const left = 0
    const right = length-1
    await partition(arr, left, right, updateArray, setActiveIndex, delayMilliSeconds)

    sequenceHighlight(length, setActiveIndex, delayMilliSeconds)

}

export default quickSort

const partition = async (arr, left, right, updateArray, setActiveIndex, delayMilliSeconds) => {
    if (left >= right) return
    const pivot = arr[right]
    setActiveIndex([right])
    let i = left - 1
    for (let j=left; j<right; j++) {
        setActiveIndex([right, i, j])
        await delay(delayMilliSeconds)
        if (arr[j] < pivot) {
            [ arr[j], arr[i+1] ] = [ arr[i+1], arr[j] ]
            i +=1
        }
        if (j === right-1 ) {
            [ arr[right], arr[i+1] ] = [ arr[i+1], arr[right] ]
        }
        setActiveIndex([i+1])
        updateArray([...arr])
    }

    await partition(arr, left, i, updateArray, setActiveIndex, delayMilliSeconds)
    await partition(arr, i+2, right, updateArray, setActiveIndex, delayMilliSeconds)
}
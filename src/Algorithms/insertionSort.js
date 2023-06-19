import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"

const insertionSort = async (arr, updateArr, setActiveIndex, delayMilliSeconds) => {
    const length = arr.length
    if (length <= 1) return arr

    for (let i=0; i<length; i++) {
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

    sequenceHighlight(length, setActiveIndex, delayMilliSeconds)

}

export default insertionSort
import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const insertionSort = async (updateArr, setActiveIndex, delayMilliSeconds, arrayLength) => {

    const arr = generateRandomSequence(arrayLength)
    updateArr([...arr])
    await delay(500)


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

    sequenceHighlight(length, setActiveIndex, 10)

}

export default insertionSort
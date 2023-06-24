import delay from "../functions/delay"
import generateRandomSequence from "../functions/generateRandomSequence"
import sequenceHighlight from "../functions/sequenceHighlight"

const selectionSort = async (updateArray, setActiveIndex, delayMilliSeconds, arrayLength) => {

    const arr = generateRandomSequence(arrayLength)
    updateArray([...arr])
    await delay(500)

    const len = arr.length
    if (len <= 1) return arr

    for (let i=0; i<len-1; i++) {
        let currentIndex = i
        let minIndex = i+1
        for (let j=i+1; j<len; j++) {
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
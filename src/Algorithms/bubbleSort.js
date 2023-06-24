import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const bubbleSort = async (setterFunc, setActiveIndex, delayMilliSeconds, arrayLength) => {

    const arr = generateRandomSequence(arrayLength)
    setterFunc([...arr])
    await delay(500)

    if (arrayLength <= 1) return arr

        for (let i=0; i<arrayLength; i++) {
            for (let j=0; j<arrayLength-i-1; j++) {
                await delay(delayMilliSeconds)
                if (arr[j] > arr[j+1]) {
                    [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
                }
                setActiveIndex([j, j+1])
                // pass in new array ∵ react compares by reference
                setterFunc([...arr])
            }
        }

        sequenceHighlight(arrayLength, setActiveIndex, 10)

}

export default bubbleSort
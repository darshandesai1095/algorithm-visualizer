import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"


const bubbleSort = async (arr, setterFunc, setActiveIndex, delayMilliSeconds) => {
    const length = arr.length
    if (length <= 1) return arr

        for (let i=0; i<length; i++) {
            for (let j=0; j<length-i-1; j++) {
                await delay(delayMilliSeconds)
                if (arr[j] > arr[j+1]) {
                    [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
                }
                setActiveIndex([j, j+1])
                // pass in new array ∵ react compares by reference
                setterFunc([...arr])
            }
        }

        sequenceHighlight(length, setActiveIndex, delayMilliSeconds)

}

export default bubbleSort
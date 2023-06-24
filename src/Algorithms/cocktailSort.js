import delay from "../functions/delay"
import generateRandomSequence from "../functions/generateRandomSequence"
import sequenceHighlight from "../functions/sequenceHighlight"


const cocktailSort = async (setterFunc, setActiveIndex, delayMilliSeconds, arrayLength, setMetaData) => {

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
    if (length <= 1) return arr

        for (let i=0; i<length/2; i++) {
            for (let j=i; j<length-i-1; j++) {
                await delay(delayMilliSeconds)
                setMetaData({
                    iterations: iterations+=1,
                    comparisons: comparisons+=1,
                    swaps: swaps,
                    shifts: shifts
                })
                if (arr[j] > arr[j+1]) {
                    [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
                    setMetaData({
                        iterations: iterations,
                        comparisons: comparisons,
                        swaps: swaps+=1,
                        shifts: shifts
                    })
                }
                setActiveIndex([j, j+1])
                // pass in new array ∵ react compares by reference
                setterFunc([...arr])
            }
            for (let k=length-i-1; k>i; k--) {
                setMetaData({
                    iterations: iterations+=1,
                    comparisons: comparisons+=1,
                    swaps: swaps,
                    shifts: shifts
                })
                await delay(delayMilliSeconds)
                if (arr[k] < arr[k-1]) {
                    [ arr[k], arr[k-1] ] = [ arr[k-1], arr[k] ]
                    setMetaData({
                        iterations: iterations,
                        comparisons: comparisons,
                        swaps: swaps+=1,
                        shifts: shifts
                    })
                }
                setActiveIndex([k, k-1])
                // pass in new array ∵ react compares by reference
                setterFunc([...arr])
            }

        }

        sequenceHighlight(length, setActiveIndex, 10)

}

export default cocktailSort
import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"

const mergeSortIterative = async (arr, updateArr, setActiveIndex, delayMilliSeconds) => {

    const length = arr.length
    console.log("length ", length)
    let width = 1

    while (width < length) {
        let left = 0 // start index of left array

        while (left < length) {
            const mid = left + width
            const right = Math.min(left + 2 * width, length) // start index of right array
            await merge(arr, left, mid, right, updateArr, setActiveIndex, delayMilliSeconds)
            left += 2 * width
        }

        width *= 2
    }

    sequenceHighlight(length, setActiveIndex, delayMilliSeconds)

}


const merge = async (arr, left, mid, right, updateArr, setActiveIndex, delayMilliSeconds) => {
    const leftArr = arr.slice(left, mid)
    const rightArr = arr.slice(mid, right)
    let [i, j, k] = [0, 0, left]

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            setActiveIndex([left+i, mid+j])
            console.log(right)
            arr[k] = leftArr[i]
            updateArr([...arr])
            await delay(delayMilliSeconds)            
            i++
        } else {
            setActiveIndex([left+i, mid+j])
            console.log(right)
            arr[k] = rightArr[j]
            updateArr([...arr])
            await delay(delayMilliSeconds)
            j++
        }

        k++
    }

    while (i < leftArr.length) {
        setActiveIndex([left+i, mid+j])
        console.log(right)
        arr[k] = leftArr[i]
        updateArr([...arr])
        await delay(delayMilliSeconds)
        i++
        k++
    }

    while (j < rightArr.length) {
        setActiveIndex([left+i, mid+j])
        console.log(right)
        arr[k] = rightArr[j]
        updateArr([...arr])
        await delay(delayMilliSeconds)
        j++
        k++
    }

}

export default mergeSortIterative

// await delay(delayMilliSeconds)
// updateArr([...arr])
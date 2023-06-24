import delay from "../functions/delay"
import sequenceHighlight from "../functions/sequenceHighlight"
import generateRandomSequence from "../functions/generateRandomSequence"

const mergeSort = async (updateArr, setActiveIndex, delayMilliSeconds, arrayLength, setMetaData, metaData) => {

    setMetaData({
        iterations: metaData.iterations,
        comparisons: metaData.comparisons,
        swaps: metaData.swaps,
        shifts: metaData.shifts
    })

    const arr = generateRandomSequence(arrayLength)
    updateArr([...arr])
    await delay(500)

    const length = arr.length
    let width = 1

    while (width < length) {

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })
        
        let left = 0 // start index of left array

        while (left < length) {

            setMetaData({
                iterations: metaData.iterations+=1,
                comparisons: metaData.comparisons,
                swaps: metaData.swaps,
                shifts: metaData.shifts
            })

            const mid = left + width
            const right = Math.min(left + 2 * width, length) // start index of right array
            await merge(arr, left, mid, right, updateArr, setActiveIndex, delayMilliSeconds, setMetaData, metaData)
            left += 2 * width
        }

        width *= 2
    }

    sequenceHighlight(length, setActiveIndex, 10)

}


const merge = async (arr, left, mid, right, updateArr, setActiveIndex, delayMilliSeconds, setMetaData, metaData) => {
    const leftArr = arr.slice(left, mid)
    const rightArr = arr.slice(mid, right)
    let [i, j, k] = [0, 0, left]

    while (i < leftArr.length && j < rightArr.length) {

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons+=1,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })

        if (leftArr[i] <= rightArr[j]) {
            setActiveIndex([left+i, mid+j])
            arr[k] = leftArr[i]
            updateArr([...arr])
            await delay(delayMilliSeconds)            
            i++
        } else {
            setActiveIndex([left+i, mid+j])
            arr[k] = rightArr[j]
            updateArr([...arr])
            await delay(delayMilliSeconds)
            j++
        }

        k++
    }

    setMetaData({
        iterations: metaData.iterations,
        comparisons: metaData.comparisons+=1,
        swaps: metaData.swaps,
        shifts: metaData.shifts
    })

    while (i < leftArr.length) {

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })

        setActiveIndex([left+i, mid+j])
        arr[k] = leftArr[i]
        updateArr([...arr])
        await delay(delayMilliSeconds)
        i++
        k++
    }

    while (j < rightArr.length) {

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })

        setActiveIndex([left+i, mid+j])
        arr[k] = rightArr[j]
        updateArr([...arr])
        await delay(delayMilliSeconds)
        j++
        k++
    }

}

export default mergeSort


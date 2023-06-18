const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

const mergeSort = async (arr, updateArr, setActiveIndex, delayMilliSeconds, startIndex = 0) => {

    const len = arr.length
    if (len <= 1) return arr

    const mid = Math.floor(len/2)

    const left = arr.slice(0, mid)
    const right = arr.slice(mid, len)

    const left1 = await mergeSort(left, updateArr, setActiveIndex, delayMilliSeconds)
    const right1 = await mergeSort(right, updateArr, setActiveIndex, delayMilliSeconds)

    return merge(left1, right1, updateArr, setActiveIndex, delayMilliSeconds)

}

const merge = async (left, right, updateArr, setActiveIndex, delayMilliSeconds) => {
    const tempArr = []

    while (left.length > 0 && right.length > 0) {
        await delay(delayMilliSeconds)
        if (left[0] > right[0]) {
            tempArr.push(right[0])
            right.shift()
        } else {
            tempArr.push(left[0])
            left.shift()
        }
    }

    while (left.length > 0) {
        await delay(delayMilliSeconds)
        tempArr.push(left[0])
        left.shift()
    }

    while (right.length > 0) {
        await delay(delayMilliSeconds)
        tempArr.push(right[0])
        right.shift()
    }

    // updateArr(tempArr)
    return tempArr
}

export default mergeSort
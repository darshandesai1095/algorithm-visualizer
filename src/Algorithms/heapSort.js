import delay from "../functions/delay"
import generateRandomSequence from "../functions/generateRandomSequence"
import sequenceHighlight from "../functions/sequenceHighlight"

const heapSort = async (updateArr, setActiveIndex, delayMilliSeconds, arrayLength) => {

    const arr = generateRandomSequence(arrayLength)
    updateArr([...arr])
    await delay(500)

    const length = arr.length
    if (length <= 1) return arr

    // Build max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        await heapify(arr, length, i, updateArr, setActiveIndex, delayMilliSeconds)
    }

    // Heap sort
    for (let i = length - 1; i > 0; i--) {
        // Swap root with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]]
        setActiveIndex([0, i])
        updateArr([...arr])
        await delay(delayMilliSeconds)

        // Maintain max heap property on reduced heap
        let currentIndex = 0
        let isHeapified = false

        while (!isHeapified) {
            let largest = currentIndex;
            const leftChildIndex = 2 * currentIndex + 1
            const rightChildIndex = 2 * currentIndex + 2

            if (leftChildIndex < i && arr[leftChildIndex] > arr[largest]) {
                largest = leftChildIndex;
            }

            if (rightChildIndex < i && arr[rightChildIndex] > arr[largest]) {
                largest = rightChildIndex
            }

            if (largest !== currentIndex) {
                [arr[currentIndex], arr[largest]] = [arr[largest], arr[currentIndex]]
                setActiveIndex([currentIndex, largest])
                updateArr([...arr])
                await delay(delayMilliSeconds)

                currentIndex = largest
            } else {
                isHeapified = true
            }
        }
    }

    sequenceHighlight(length, setActiveIndex, 10)

}
  
const heapify = async (arr, heapSize, i, updateArr, setActiveIndex, delayMilliSeconds) => {
    let currentIndex = i
    let isHeapified = false

    while (!isHeapified) {
        let largest = currentIndex
        const leftChildIndex = 2 * currentIndex + 1
        const rightChildIndex = 2 * currentIndex + 2

        if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largest]) {
            largest = leftChildIndex
        }

        if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largest]) {
            largest = rightChildIndex
        }

        if (largest !== currentIndex) {
            [arr[currentIndex], arr[largest]] = [arr[largest], arr[currentIndex]]
            setActiveIndex([currentIndex, largest])
            updateArr([...arr])
            await delay(delayMilliSeconds)
            currentIndex = largest
        } else {
            isHeapified = true
        }
    }
}

export default heapSort
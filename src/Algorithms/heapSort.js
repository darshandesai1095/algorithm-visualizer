import delay from "../functions/delay"
import generateRandomSequence from "../functions/generateRandomSequence"
import sequenceHighlight from "../functions/sequenceHighlight"

const heapSort = async (updateArr, setActiveIndex, delayMilliSeconds, 
    arrayLength, setMetaData, metaData, cancellationCheckFn) => {
    
    if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([])
        return
    }

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
    if (length <= 1) return arr

    // Build max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        if (cancellationCheckFn && cancellationCheckFn()) {
            setActiveIndex([])
            return
        }

        setMetaData({
            iterations: metaData.iterations+=0,
            comparisons: metaData.comparisons,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })

        await heapify(arr, length, i, updateArr, setActiveIndex, delayMilliSeconds, 
            setMetaData, metaData, cancellationCheckFn)
    }

    // Heap sort
    for (let i = length - 1; i > 0; i--) {

        if (cancellationCheckFn && cancellationCheckFn()) {
            setActiveIndex([])
            return
        }

        // Swap root with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]]
        setActiveIndex([0, i])
        updateArr([...arr])
        await delay(delayMilliSeconds)

        // Maintain max heap property on reduced heap
        let currentIndex = 0
        let isHeapified = false

        while (!isHeapified) {

            if (cancellationCheckFn && cancellationCheckFn()) {
                setActiveIndex([])
                return
            }

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

                setMetaData({
                    iterations: metaData.iterations,
                    comparisons: metaData.comparisons,
                    swaps: metaData.swaps+=1,
                    shifts: metaData.shifts
                })


            } else {
                isHeapified = true
            }
            
            setMetaData({
                iterations: metaData.iterations+=1,
                comparisons: metaData.comparisons+=2,
                swaps: metaData.swaps,
                shifts: metaData.shifts
            })

            updateArr([...arr])
            await delay(delayMilliSeconds)
            
        }

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })
    }

    sequenceHighlight(length, setActiveIndex, 10)

}
  
const heapify = async (arr, heapSize, i, updateArr, setActiveIndex, 
    delayMilliSeconds, setMetaData, metaData, cancellationCheckFn) => {
    let currentIndex = i
    let isHeapified = false

    while (!isHeapified) {

        if (cancellationCheckFn && cancellationCheckFn()) {
            setActiveIndex([])
            return
        }

        setMetaData({
            iterations: metaData.iterations+=1,
            comparisons: metaData.comparisons+=2,
            swaps: metaData.swaps,
            shifts: metaData.shifts
        })

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

            setMetaData({
                iterations: metaData.iterations,
                comparisons: metaData.comparisons,
                swaps: metaData.swaps+=1,
                shifts: metaData.shifts
            })


        } else {
            isHeapified = true
        }
    }
}

export default heapSort
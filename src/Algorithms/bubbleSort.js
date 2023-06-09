const delay = (time) => new Promise(resolve => setTimeout(resolve, time))

const bubbleSort = async (array, setArray) => {
    const len = array.length
    if (len <= 1) return array

        for (let i=0; i<len; i++) {
            for (let j=0; j<len-i-1; j++) {
                await delay(500)
                if (array[j] > array[j+1]) {
                    [ array[j], array[j+1] ] = [ array[j+1], array[j] ]
                }
                setArray(array)
                console.log(array)
            }
        }

    // return array
}

export default bubbleSort
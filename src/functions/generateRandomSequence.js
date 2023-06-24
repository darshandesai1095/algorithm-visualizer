const generateRandomSequence = (n) => {

    const sequence = []

    // Populate the sequence array with numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        sequence.push(i)
    }

    // Perform Fisher-Yates shuffle to randomize the sequence
    for (let i = sequence.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = sequence[i]
        sequence[i] = sequence[j]
        sequence[j] = temp
    }

    return sequence
}

export default generateRandomSequence
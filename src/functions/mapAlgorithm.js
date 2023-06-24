import bubbleSort from "../Algorithms/bubbleSort";
import cocktailSort from "../Algorithms/cocktailSort";
import heapSort from "../Algorithms/heapSort";
import insertionSort from "../Algorithms/insertionSort";
import mergeSort from "../Algorithms/mergeSort";
import quickSort from "../Algorithms/quickSort";
import selectionSort from "../Algorithms/selectionSort";
import shellSort from "../Algorithms/shellSort";

const bubble = bubbleSort
const cocktail = cocktailSort
const heap = heapSort
const insertion = insertionSort
const merge = mergeSort
const quick = quickSort
const selection = selectionSort
const shell = shellSort

const mapAlgorithm = (algorithmName) => {
    const algorithms = {
        "Bubble Sort": bubble,
        "Cocktail Sort": cocktail,
        "Heap Sort": heap,
        "Insertion Sort": insertion,
        "Merge Sort": merge,
        "Quick Sort": quick,
        "Selection Sort": selection,
        "Shell Sort": shell
    }

    return algorithms[algorithmName]
}

export default mapAlgorithm
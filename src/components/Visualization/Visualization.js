import { useState, useEffect } from 'react';
import './Visualization.css';
import Element from '../Element/Element';
import { useSelector } from 'react-redux';
import mapAlgorithm from '../../functions/mapAlgorithm';


const Visualization = (props) => {

    const sortingAlgorithm = useSelector(state => state.algorithm.value)
    const toggleRerun = useSelector(state => state.toggleRerun.value)
    const delay = useSelector(state => state.delay.value)

    const [arrayLength, setArrayLength] = useState(100)
    const [activeIndex, setActiveIndex] = useState([])
    const [currentArray, setCurrentArray] = useState([])


    useEffect(() => {
        let sort = mapAlgorithm(sortingAlgorithm)
        sort(setCurrentArray, setActiveIndex, delay, arrayLength, props.setMetaData, {
            iterations: 0,
            comparisons: 0,
            swaps: 0,
            shifts: 0
        })

    }, [sortingAlgorithm, toggleRerun])

    
    const elements = currentArray.map((el, index) => {
        return (
            <Element
                key={index}
                orderNo={index}
                width={0.7}
                height={el*6}
                active={activeIndex.includes(index) ? true : false}
                sorted={false}
            />
        )
    })

    return (
        <div className="visualization">
            {elements}
        </div>
    )
}

export default Visualization;
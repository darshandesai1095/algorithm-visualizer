import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/delaySlice';
import './MetaData.css';

const MetaData = (props) => {

    const sortingAlgorithm = useSelector(state => state.algorithm.value)
    const delay = useSelector(state => state.delay.value)
    const dispatch = useDispatch()

    return (
        <div className="meta-data">
            <p className='meta-data__algorithm'>{sortingAlgorithm}</p>
            <p>Iterations: {props.metaData.iterations}</p>
            <p>Comparisons: {props.metaData.comparisons}</p>
            <p>Swaps: {props.metaData.swaps}</p>
            <p>Shifts: {props.metaData.shifts}</p>
            {/* <p>Length: 100</p> */}
            <p>
                Delay: {delay}ms
                &nbsp;
                    <span 
                        className='change-delay increase'
                        onClick={() => dispatch(increment())}
                    >
                        &#9650;
                    </span>

                    &nbsp;

                    <span 
                        className='change-delay decrease'
                        onClick={() => dispatch(decrement())}
                    >
                        &#9660;
                    </span> 

            </p>
        </div>
    )
}

export default MetaData;
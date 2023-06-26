import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/delaySlice';
import './MetaData.css';
import padNumberWithZeros from '../../functions/padNumbersWithZeros';

const MetaData = (props) => {

    const sortingAlgorithm = useSelector(state => state.algorithm.value)
    const delay = useSelector(state => state.delay.value)
    const dispatch = useDispatch()



    return (
        <div className="meta-data">
            <p className='meta-data__algorithm'>{sortingAlgorithm}</p>
            <p>Iterations: {padNumberWithZeros(props.metaData.iterations)}</p>
            <p>Comparisons: {padNumberWithZeros(props.metaData.comparisons)}</p>
            <p>Swaps: {padNumberWithZeros(props.metaData.swaps, 3)}</p>
            <p>Shifts: {padNumberWithZeros(props.metaData.shifts, 3)}</p>
            {/* <p>Length: 100</p> */}
            <p>
                Delay: {padNumberWithZeros(delay, 3)}ms
                &nbsp;
                    <span 
                        className='change-delay increase'
                        onClick={() => dispatch(increment())}
                    >&#9650;
                    </span>

                    &nbsp;

                    <span 
                        className='change-delay decrease'
                        onClick={() => dispatch(decrement())}
                    >&#9660;
                    </span> 

            </p>
        </div>
    )
}

export default MetaData;
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/delaySlice';
import './MetaData.css';

const MetaData = () => {

    const sortingAlgorithm = useSelector(state => state.algorithm.value)
    const delay = useSelector(state => state.delay.value)
    const dispatch = useDispatch()


    return (
        <div className="meta-data">
            <p className='meta-data__algorithm'>{sortingAlgorithm}</p>
            <p>Iterations: 250</p>
            <p>Comparisons: 120</p>
            <p>Swaps: 100</p>
            <p>Shifts: 20</p>
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
import './MenuItem.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAlgorithm } from '../../features/algorithm/algorithmSlice';

const MenuItem = ({ algorithmName, setMenuVisible }) => {

    const currentAlgorithm = useSelector(state => state.algorithm.value)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setAlgorithm(algorithmName))
        setMenuVisible(false)
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className={`menu-item ${currentAlgorithm === algorithmName ? "active-algorithm" : null}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p>{algorithmName}</p>
            <div className={`${isHovered ? "highlight" : "unhighlight"}`} >
            </div>
        </div>
    )
}

export default MenuItem;
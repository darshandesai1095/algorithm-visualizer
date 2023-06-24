import './Navigation.css';
import AppsIcon from '@mui/icons-material/Apps';
import Menu from '../Menu/Menu';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useEffect, useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRerun } from '../../features/toggleRerunSlice';
import MenuIcon from '@mui/icons-material/Menu';
import RemoveIcon from '@mui/icons-material/Remove';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';


const Navigation = () => {

    const dispatch = useDispatch()
    const delay = useSelector(state => state.delay.value)

    const [style, setStyle] = useState({
        transform: "scale(1.1))",
        color: "#FCF7F8",
    })

    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <div className="navigation">

            <div className = "nav__items">
                
                <div 
                    className='nav__item'
                    onClick={() => setMenuVisible(prev => !prev)}    
                >
                    {
                        menuVisible ?
                        <DisabledByDefaultIcon 
                            style={{...style, color: "#FF194D"}}
                        />
                        :
                        <AppsIcon
                            style={{...style, transform: "rotate(0deg)"}}
                        />
                    }
                </div>
                
                <div className='nav__item' onClick={() => dispatch(toggleRerun())}>
                    <RefreshIcon
                        style={{...style, transform: ""}}
                    />
                </div>

                <div className='nav__item'>
                    <PauseSharpIcon
                        style={style}
                    />
                </div>

            </div>

            <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>

        </div>
    )
}

export default Navigation;
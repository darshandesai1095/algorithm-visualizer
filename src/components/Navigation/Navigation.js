import './Navigation.css';
import AppsIcon from '@mui/icons-material/Apps';
import Menu from '../Menu/Menu';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRerun } from '../../features/toggleRerunSlice';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';


const Navigation = () => {

    const dispatch = useDispatch()

    const [style, setStyle] = useState({
        transform: "scale(1.1))",
        color: "#FCF7F8",
    })

    const [menuVisible, setMenuVisible] = useState(false)

    const handleRerun = () => {
        dispatch(toggleRerun())
    }

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
                
                <div className='nav__item' onClick={handleRerun}>
                    <RefreshIcon
                        style={{...style, transform: ""}}
                    />
                </div>

                <div className='nav__item' onClick={() => window.open("https://65kyyf-3000.csb.app/", "_blank")}>
                    <CheckBoxOutlineBlankSharpIcon
                        style={{...style, transform: "scale(0.9)"}}
                    />
                </div>

            </div>

            <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>

        </div>
    )
}

export default Navigation;
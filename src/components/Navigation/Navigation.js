import './Navigation.css';
import AppsIcon from '@mui/icons-material/Apps';
import Menu from '../Menu/Menu';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useDispatch } from 'react-redux';
import { toggleRerun } from '../../features/toggleRerunSlice';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import Tooltip from '../Tooltip/Tooltip';


const Navigation = () => {

    const dispatch = useDispatch()

    const [style, setStyle] = useState({
        transform: "scale(1.1))",
    })

    const [menuVisible, setMenuVisible] = useState(false)

    const handleRerun = () => {
        dispatch(toggleRerun())
        
    }

    return (
        <div className="navigation">

            <div className = "nav__items">
                
                <div>
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
                                style={style}
                            />
                        }
                    </div>
                </div>

                <div>
                    <Tooltip content="Rerun Sort">
                        <div className='nav__item' onClick={handleRerun}>
                            <RefreshIcon
                                style={{style}}
                            />
                        </div>
                    </Tooltip>
                </div>
                

                <div>
                    <Tooltip content="CodeSandbox">
                        <div className='nav__item' onClick={() => window.open("https://codesandbox.io/s/interesting-satoshi-ht35gs", "_blank")}>
                            <CheckBoxOutlineBlankSharpIcon
                                style={{...style, transform: "scale(0.9)"}}
                            />
                        </div>
                    </Tooltip>
                </div>
               

            </div>

            <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>

        </div>
    )
}

export default Navigation;
import './Navigation.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import RefreshIcon from '@mui/icons-material/Refresh';
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';

const Navigation = () => {

    const style = {
        transform: "scale(1.1))",
        color: "#FCF7F8",
    }

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
                            style={style}
                        />
                    }
                </div>
                
                <div className='nav__item'>
                    <RefreshIcon
                        style={style}
                    />
                </div>

                <div className='nav__item'>
                    <CropSquareSharpIcon style={style} />
                </div>
                
            </div>

            <Menu menuVisible={menuVisible}/>

        </div>
    )
}

export default Navigation;
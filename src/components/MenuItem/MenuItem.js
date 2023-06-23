import './MenuItem.css';
import { useState } from 'react';

const MenuItem = ({ item }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className="menu-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p>{item}</p>
            <div className={`${isHovered ? "highlight" : "unhighlight"}`} >
            </div>
        </div>
    )
}

export default MenuItem;
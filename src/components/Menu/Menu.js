import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';

const Menu = ({ menuVisible, setMenuVisible }) => {

    const menuItems = [
        "Bubble Sort", "Cocktail Sort", "Heap Sort", "Insertion Sort",
        "Merge Sort", "Shell Sort", "Selection Sort", "Quick Sort"
        ]

    const renderMenuItems = menuItems.map(item => (
        <MenuItem key={item} algorithmName={item} setMenuVisible={setMenuVisible}/>
    ))

    return (
        <div className={`menu ${menuVisible ? "visible" : "hidden"}`}>
            {renderMenuItems}
        </div>
    )
}

export default Menu;
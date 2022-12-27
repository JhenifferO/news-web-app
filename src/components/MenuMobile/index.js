// import { IoClose } from 'react-icons/Io5'
import style from './menuMobile.module.scss'
const MenuMobile = () => {
    return (
        <>
        <a href='#'>Trocar Menu</a>
        {/* <IoClose size={45}/> */}
        <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>New</a>
                </li>
                <li>
                    <a href='#'>Popular</a>
                </li>
                <li>
                    <a href='#'>Trending</a>
                </li>
                <li>
                    <a href='#'>Categories</a>
                </li>
            </ul>
        </>
    )
}

export default MenuMobile
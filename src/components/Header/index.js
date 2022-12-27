import style from './header.module.scss'
import logo from '../../assets/logo.svg'
import { GrFormClose } from "react-icons/gr";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import classNames from 'classnames'

const Header = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
        <header>
            <img src={logo} />
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
                <li>
                    <GiHamburgerMenu size={45}/>
                </li>
            </ul>

            <ul className={style.headerMobile} >
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
                <li>
                    <GiHamburgerMenu size={45}/>
                </li>
            </ul>
        </header>        
    )
}


export default Header
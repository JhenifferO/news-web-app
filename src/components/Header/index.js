import style from './header.module.scss'
import logo from '../../assets/logo.svg'

const Header = () => {
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
            </ul>
        </header>        
    )
}


export default Header
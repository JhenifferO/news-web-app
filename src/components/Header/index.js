import style from './header.module.scss'
import logo from '../../assets/logo.svg'

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {

    return (
        <header>
            <img src={logo} />

            <Navigation />
            <MobileNavigation />


        </header>
    )
}


export default Header
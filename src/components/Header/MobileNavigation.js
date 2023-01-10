import NavLinks from "./NavLinks"
import style from './header.module.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react' 

const MobileNavigation = () =>{
    const [menuMobile, setMenuMobile] = useState(false)
    
    return (
        <nav className={style.mobileNavigation}>
            {!menuMobile && 
            <GiHamburgerMenu 
                className={style.hamburger} 
                size={'40px'}
                onClick={()=> setMenuMobile(true)}
            />}

            {menuMobile && 
            <GrClose 
                className={style.close} 
                size={'40px'}
                onClick={()=> setMenuMobile(false)}
            />}

            {menuMobile === true && <NavLinks/>}
        </nav>
    )
}

export default MobileNavigation
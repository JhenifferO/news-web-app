import NavLinks from "./NavLinks"
import style from './header.module.scss'
const Navigation = () =>{
    return (
        <nav className={style.Navigation}>
            <NavLinks/>
        </nav>
    )
}

export default Navigation
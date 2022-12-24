import style from './techArea.module.scss'

const TechArea = ({ image, number, title, text }) => {
    return (
        <div className={style.box}>

            <div className={style.imageBox}><img src={image} /></div>

            <div className={style.contentBox}>
                <h2>{number}</h2>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default TechArea
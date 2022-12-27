import style from './App.module.scss';
import banner from './assets/banner-desktop.jpg'
import bannerMobile from './assets/banner-mobile.jpg'
import img1 from './assets/image-retro-pcs.jpg'
import img2 from './assets/image-top-laptops.jpg'
import img3 from './assets/image-gaming-growth.jpg'
import Header from './components/Header';
import TechArea from './components/TechArea';
import { useState } from 'react';
import MenuMobile from './components/MenuMobile';


function App() {

  const [menuIsVisible, setMenuIsVisible] = useState('')

  return (
    <section className={style.page}>
      <main>
        {/* <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        /> */}
        <Header />

        <section className={style.content}>
          {/* <div className={style.banners}><img src={banner} /></div> */}
          <div className={style.banners}><img src={bannerMobile} /></div>

          <div className={style.reading}>
            <h1>The Bright <br></br> Future of Web 3.0?</h1>
            <div className={style.text}>
              <p>We dive into the next evolution od the web that claims to put the power of the plataforms back into the hands od the people. But is it really fulfilling its promise?</p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className={style.news}>
            <h2>New</h2>
            <div className={style.newBox}>
              <h4>Hydrogen VS Eletric Cars</h4>
              <p>Will hydrogen-fueled cars ever catch up to EVs</p>
              <div className={style.line}></div>
            </div>

            <div className={style.newBox}>
              <h4>The Downsides of Al Artist</h4>
              <p>What are the possible adverse effects of on-demand Al image generation</p>
              <div className={style.line}></div>
            </div>

            <div className={style.newBox}>
              <h4>IsVC Funding Drying Up</h4>
              <p>Private funding by VC firms is down 50% YOY. WE take a look what that means</p>
            </div>
          </div>

        </section>

        <section className={style.techAreaContainer}>

          <TechArea
            image={img1}
            number={'01'}
            title={'Reviving Retro PCs'}
            text={'What happens when old PCs are giver modern upgrades?'}
          />

          <TechArea
            image={img2}
            number={'02'}
            title={'Top 10 Laptops od 2022'}
            text={'Our best picks for various needs and budgets'}
          />

          <TechArea
            image={img3}
            number={'03'}
            title={'The Growth of Gaming'}
            text={'How the pandemic has sparked fresh opportunities'}
          />

        </section>
      </main>
    </section>
  )
}

export default App;
import "./Footer.scss"
import { Photo } from "../../Images.js"
import { Link } from "react-router-dom"


export default function Footer(){

    return(
        <>
            <footer>
                <div className="ftr-container">
                    <div className="ftr-top-row">
                        <div className="ftr-top-col-logo">
                            <button><img src={Photo.LogoFooter} alt="" /></button>
                            <p>Инженерные изыскания в строительстве</p>
                            <div><img src={Photo.Phone} alt="" /><p>+7 (495) 755-02-29</p></div>
                        </div>
                        <div className="ftr-top-col-nav">
                            <div>
                                <Link to="/projects">Проекты</Link>
                                <Link to="/about">О нас</Link>
                                <Link to="/empty">Услуги</Link>
                            </div>
                            <div id="ftr-nav-mid">
                                <Link to="/empty">Цены</Link>
                                <Link to="/empty">Статьи</Link>
                                <Link to="/empty">Вакансии</Link>
                            </div>
                            <div>
                                <Link to="/empty">Контакты</Link>
                            </div>
                        </div>
                        <div className="ftr-top-col-social">
                            <button onClick={() => window.open('https://facebook.com', '_blank')}><img src={Photo.FacebookLogo} alt="" /></button>
                            <button onClick={() => window.open('https://vk.ru', '_blank')}><img src={Photo.VKLogo} alt="" /></button>
                            <button onClick={() => window.open('https://instagram.com', '_blank')}><img src={Photo.InstagramLogo} alt="" /></button>
                        </div>
                    </div>
                    <div className="ftr-bot-row">
                        <p>НОЭКС. Все права защищены 2021©. Инженерные изыскания с 1999 года.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
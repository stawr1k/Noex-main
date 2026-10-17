import "./Section1.scss"
import React, { useRef, useState } from 'react';
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const bg = [
    {
        title: "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ",
        bg_img: Photo.BackgroundImage1,
        descr: "С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.",
        button1: "ПОСМОТРЕТЬ УСЛУГИ",
        button2: "НАШИ ПРОЕКТЫ",
        ad_text: "Выполняем инженерные изыскания в строительстве с 1988 года"
    },
    {
        title: "ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ",
        bg_img: Photo.BackgroundImage2,
        descr: "",
        button1: "ПОДРОБНЕЕ",
        button2: "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК",
        ad_text: ""
    },
]

export default function Section1(){

    const [activeDot, setActiveDot] = useState(0)
    const [swiperRef, setSwiperRef] = useState(null)

    const totalSlides = 4;

    const goPrev = () => {
        setActiveDot((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }
    const goNext = () => {
        setActiveDot((next) => (next === totalSlides - 1 ? 0 : next + 1))
    }

    const params = {
        navigation: {
            nextEl: '.swp-btn-next',
            prevEl: '.swp-btn-prev'
        }
    }
    
    return(
        <>
            <Swiper
                params
                rewind = {true}
                className="hero-swiper-el"
                spaceBetween={50}
                slidesPerView={1}
                navigation = {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                
            >
                <SwiperSlide className="swp-slide-1">
                    <section className="s1-hero-section">
                        <div className="s1-content-inner">
                            <div className="s1-content-top">
                                <div className="s1-title-wrap">
                                    <h1>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ</h1>
                                    <p>С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.</p>
                                </div>
                                <div className="s1-cta-wrap">
                                    <div className="s1-cta-btns">
                                        <Link to="/empty" className="btn-look-more">ПОСМОТРЕТЬ УСЛУГИ</Link>
                                        <Link to="/projects" className="btn-our-projects">НАШИ ПРОЕКТЫ</Link>
                                    </div>
                                    <p>Выполняем инженерные изыскания в строительстве с 1988 года</p>
                                </div>
                            </div>
                            <div className="s1-content-bot">
                                <div className="s1-pagination-dots">
                                    {Array.from({ length:totalSlides }).map((_,meow) => (
                                        <button
                                            key={meow}
                                            className={activeDot === meow ? "is-active" : ""}
                                            onClick={() => setActiveDot(meow)}
                                        >
                                            <div></div>
                                        </button>
                                    ))}
                                </div>
                                <div className="s1-pagination-right">
                                    <div className="s1-nav-arrows">
                                        <button onClick={goPrev} className="swp-btn-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="swp-btn-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="swp-slide-2">
                    <section className="s1-hero-section">
                        <div className="s1-content-inner">
                            <div className="s1-content-top">
                                <div className="s1-title-wrap">
                                    <h1>ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ</h1>
                                    <div className="s1-geo-list">
                                        <div>
                                            <h3>Бурение инженерно-геологических скважин</h3>
                                            <p>от 600₽ / п.м</p>
                                        </div>
                                        <div>
                                            <h3>Штамповые испытания грунтов</h3>
                                            <p>от 18 000₽ / опыт</p>
                                        </div>
                                        <div>
                                            <h3>Лабораторные испытания со скидкой от 50% (с понижающим коэффициентом от 0.5)</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="s1-cta-wrap">
                                    <div className="s1-cta-btns">
                                        <Link to="/empty" className="btn-look-more">ПОДРОБНЕЕ</Link>
                                        <Link to="/projects" className="btn-our-projects">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="s1-content-bot">
                                <div className="s1-pagination-dots">
                                    {Array.from({ length:totalSlides }).map((_,meow) => (
                                        <button
                                            key={meow}
                                            className={activeDot === meow ? "is-active" : ""}
                                            onClick={() => setActiveDot(meow)}
                                        >
                                            <div></div>
                                        </button>
                                    ))}
                                </div>
                                <div className="s1-pagination-right">
                                    <div className="s1-nav-arrows">
                                        <button onClick={goPrev} className="swp-btn-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="swp-btn-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="swp-slide-3">
                    <section className="s1-hero-section">
                        <div className="s1-content-inner">
                            <div className="s1-content-top">
                                <div className="s1-title-wrap">
                                    <h1>ЭКОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ</h1>
                                    <div className="s1-eco-grid">
                                        <p>Комплекс инженерно-экологических изысканий:</p>
                                        <div className="s1-eco-grid-wrap">
                                            <div>
                                                <p>0.5 Га</p>
                                                <span></span>
                                                <p className="txt-price-highlight">от 50 000₽</p>
                                            </div>
                                            <div>
                                                <p>1.0 Га</p>
                                                <span></span>
                                                <p className="txt-price-highlight">от 70 000₽</p>
                                            </div>
                                            <div>
                                                <p>2.0 Га</p>
                                                <span></span>
                                                <p className="txt-price-highlight">от 90 000₽</p>
                                            </div>
                                            <div>
                                                <p>3.0 Га</p>
                                                <span></span>
                                                <p className="txt-price-highlight">от 110 000₽</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="s1-cta-wrap">
                                    <div className="s1-cta-btns">
                                        <Link to="/empty" className="btn-look-more">ПОДРОБНЕЕ</Link>
                                        <Link to="/projects" className="btn-our-projects">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="s1-content-bot">
                                <div className="s1-pagination-dots">
                                    {Array.from({ length:totalSlides }).map((_,meow) => (
                                        <button
                                            key={meow}
                                            className={activeDot === meow ? "is-active" : ""}
                                            onClick={() => setActiveDot(meow)}
                                        >
                                            <div></div>
                                        </button>
                                    ))}
                                </div>
                                <div className="s1-pagination-right">
                                    <div className="s1-nav-arrows">
                                        <button onClick={goPrev} className="swp-btn-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="swp-btn-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="swp-slide-4">
                    <section className="s1-hero-section">
                        <div className="s1-content-inner">
                            <div className="s1-content-top">
                                <div className="s1-title-wrap">
                                    <h1>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</h1>
                                    <div className="s1-geo-list">
                                        <div>
                                            <h3>Создание инженерно-топографических планов масштаба 1:500, рельеф 0.5 метра на незастроенной территории</h3>
                                            <p>от 10 000₽ / Га</p>
                                        </div>
                                        <div>
                                            <h3>Создание опорных геодезических сетей</h3>
                                            <p>от 50 000₽ / пункт</p>
                                        </div>
                                        <div>
                                            <h3>Дендрологические исследования</h3>
                                            <p>от 40 000₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="s1-cta-wrap">
                                    <div className="s1-cta-btns">
                                        <Link to="/empty" className="btn-look-more">ПОДРОБНЕЕ</Link>
                                        <Link to="/projects" className="btn-our-projects">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="s1-content-bot">
                                <div className="s1-pagination-dots">
                                    {Array.from({ length:totalSlides }).map((_,meow) => (
                                        <button
                                            key={meow}
                                            className={activeDot === meow ? "is-active" : ""}
                                            onClick={() => setActiveDot(meow)}
                                        >
                                            <div></div>
                                        </button>
                                    ))}
                                </div>
                                <div className="s1-pagination-right">
                                    <div className="s1-nav-arrows">
                                        <button onClick={goPrev} className="swp-btn-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="swp-btn-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <div className=""></div>
                <div className=""></div>
            </Swiper>
        </>
    )
}
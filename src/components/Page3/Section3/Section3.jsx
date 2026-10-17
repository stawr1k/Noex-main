import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const stats = [
    {title: "0", text: "Отрицательных заключений экспертизы"},
    {title: "100%", text: "Соблюдения сроков договоров"},
    {title: "2.5", text: "Тонны и терабайты архивной информации"},
    {title: "1000", text: "Более 1000 крупных объектов"},
    {title: "100", text: "Более 100 уникальных объектов"},
    {title: "", text: ""},
]

export default function Section3(){

    return(
        <>
            <section className="p3s3-section">
                <div className="p3s3-inner">
                    <p className="sub-label">Инженерные изыскания</p>
                    <div className="p3s3-right-col">
                        <div className="p3s3-title-block">
                            <h2>МЫ ЗНАЕМ ОБ ЭТОМ ВСЕ!</h2>
                            <p>Мы стоим за крупнейшими и самыми сложными проектами столицы: все высотные здания комплекса «Москва сити», Стадион «Спартак Арена», станция метро «Окская», и многие другие работы.</p>
                        </div>
                        <div className="p3s3-stats-grid">
                            {stats.map((meow, index) => (
                                <div key={index}>
                                    <h2>{meow.title}</h2>
                                    <p>{meow.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
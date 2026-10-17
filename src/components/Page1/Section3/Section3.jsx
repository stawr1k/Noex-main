import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const variants = [
    {image: Photo.Stone, title: "Геологические", descr: "Получение востребованных материалов исследований для обоснования возможностей проектирования и стройки в существующей геологической ситуации"},
    {image: Photo.Camera, title: "Геодезические", descr: "Комплексные мероприятия по изучению и анализу ситуационных данных о рельефе земельного участка, его гидросети, растительности, текущем использовании, наличии и расположении зданий и сооружений, линейных объектов, наземных и подземных коммуникаций"},
    {image: Photo.Tree, title: "Экологические", descr: "Мероприятия по изучению и мониторингу текущего состояния окружающей среды, прогнозирование вероятных негативных изменений экосистемы от социально-экономических факторов и техногенной нагрузки"},
]

export default function Section3(){

    const [isOpen, setIsOpen] = useState(0)
    const toggleArticle = (art) => {
        setIsOpen((prev) => (prev === art ? null : art))
    }

    return(
        <>
            <section className="s3-section">
                <div className="s3-inner">
                    <h1>ОСНОВНЫЕ ВИДЫ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ</h1>
                    <div className="s3-bottom">
                        <p className="sub-label">Главные направления деятельности</p>
                        <div className="s3-variants-list">
                            {variants.map((meow) => (
                                <article key={meow.title}>
                                    <img src={meow.image} alt="" />
                                    <div className="card-text-wrap">
                                        <h3>{meow.title}</h3>
                                        <p>{meow.descr}</p>
                                        <p className={`card-text-hidden ${isOpen === meow ? "is-opened" : ""}`}>Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida. </p>
                                        <button onClick={() => toggleArticle(meow)}>{isOpen === meow ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
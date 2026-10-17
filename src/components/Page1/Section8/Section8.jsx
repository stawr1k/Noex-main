import "./Section8.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const questions = [
    {title: "Сколько вы работаете в этой области?", descr: "Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк"},
    {title: "Вы работаете по всей России?", descr: "Да"},
    {title: "Какие услуги в плане инженерных изысканий Вы оказываете?", descr: "Многие"},
    {title: "Есть ли у Вас прайс-лист?", descr: "Есть"},
    {title: "Как оценивается время работ?", descr: "«Очень быстро»"},
    {title: "Есть ли у Вас вакансии?", descr: "Нет"},
    {title: "Где расположен Ваш офис?", descr: "Не знаю"},
]

export default function Section8(){

    const [isOpen, setIsOpen] = useState(0)
    const toggleQuestion = (que) => {
        setIsOpen((prev) => (prev === que ? null : que))
    }

    return(
        <>
            <section className="s8-section">
                <div className="s8-inner">
                    <h1>ВЫСОКИЙ УРОВЕНЬ И ПРОФЕССИОНАЛЬНАЯ КОМАНДА</h1>
                    <div className="s8-bottom">
                        <p className="sub-label">Подтверждение наших компетенций в специализации</p>
                        <div className="s8-accordion-list">
                            {questions.map((meow, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <div>
                                        <img src={isOpen === index ? Photo.Minus : Photo.Plus} alt="" className={isOpen === index ? "is-rotated" : ""}/>
                                        <h2>{meow.title}</h2>
                                    </div>
                                    {/* <p className={isOpen === index ? "is-opened" : ""}>{meow.descr}</p> */}
                                    {isOpen === index && <p>{meow.descr}</p>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
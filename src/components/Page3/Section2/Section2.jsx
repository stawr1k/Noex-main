import "./Section2.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

export default function Section2(){

    return(
        <>
            <section className="p3s2-section">
                <div className="p3s2-inner">
                    <p className="sub-label">Мы обеспечиваем качество реализации проекта</p>
                    <div className="p3s2-right-col">
                        <p>Для реализации Вашего проекта, будь то строительство коттеджа или масштабного архитектурного сооружения, необходимы качественные инженерные изыскания. Геологические, экологические и климатические условия уникальны для каждой местности. Они способны повлиять на Ваш проект. Для изучения этих условий и прогноза возможных последствий необходимо изучить и предвидеть все возможные факторы.</p>
                        <div>
                            <img src={Photo.Image1} alt="" />
                            <img src={Photo.Image2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
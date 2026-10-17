import { Link } from "react-router-dom"
import "./Section1.scss"
import { Photo } from "../../../Images.js"


export default function Section1(){
    return(
        <>
            <section className="pg-title-section">
                <div className="pg-title-inner">
                    <h1>О НАС</h1>
                    <Link to="/"><img src={Photo.ArrowToLeft} alt="" />На главную</Link>
                </div>
            </section>
        </>
    )
}
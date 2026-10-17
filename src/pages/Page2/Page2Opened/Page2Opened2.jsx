import "./Page2Opened.scss"
import { Link } from "react-router-dom"
import Section1 from "../../../components/Page2/Page2Opened/Section1/Variant2/Section1.jsx"
import Section2 from "../../../components/Page2/Page2Opened/Section2/Section2.jsx"

export default function Page2Opened2(){
    return(
        <>
            <div className="p2o-main-wrap">
                <Section1/>
                    <Section2/>
            </div>
        </>
    )
}
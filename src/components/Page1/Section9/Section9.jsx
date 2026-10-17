import "./Section9.scss"
import { Photo } from "../../../Images.js"


export default function Section9(){


    return(
        <>
            <section className="s9-section">
                <div className="s9-inner">
                    <h1>НЕОБХОДИМО РАСЧИТАТЬ СМЕТУ?</h1>
                    <div className="s9-bottom">
                        <div className="s9-form-left">
                            <div className="s9-phone-field">
                                <p>Номер телефона</p>
                                <p>Не заполнено</p>
                            </div>
                            <div className="s9-tech-field">
                                <p>Загрузите техническое задание (если есть)</p>
                                <p>DOC, DOCX, TXT, OFC</p>
                            </div>
                        </div>
                        <div className="s9-form-right">
                            <input type="text" placeholder="+7 (---) --- -- --"/>
                            <div className="s9-file-upload-area">
                                <button className="s9-file-upload-btn">
                                    <img src={Photo.DownloadImage} alt="" />
                                    <p>Загрузить файл</p>
                                </button>
                                <div className="s9-file-attachments">
                                    <span>
                                        <p>ТЗ_Технониколь.doc</p>
                                        <img src={Photo.DeleteImage} alt="" />
                                    </span>
                                    <span>
                                        <p>ТЗ-2_Технониколь.doc</p>
                                        <img src={Photo.DeleteImage} alt="" />
                                    </span>
                                </div>
                                <button id="calc-submit-id">РАССЧИТАТЬ СМЕТУ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
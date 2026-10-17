import "./Section10.scss"
import { Photo } from "../../../Images.js"


export default function Section10(){

    return(
        <>
            <section className="s10-section">
                <div className="s10-inner">
                    <h1>СВЯЗАТЬСЯ С НАМИ</h1>
                    <div className="s10-bottom">
                        <div className="s10-form-wrap">
                            <div className="s10-form-fields">
                                <label>
                                    <p>Имя</p>
                                    <input type="text" placeholder="Введите имя"/>
                                </label>
                                <label>
                                    <p>Номер телефона</p>
                                    <input type="text" placeholder="+7 (---) --- -- --"/>
                                </label>
                                <label>
                                    <p>Текст сообщения (необязательно)</p>
                                    <input type="text" placeholder="Введите текст"/>
                                </label>
                            </div>
                            <button>ОТПРАВИТЬ</button>
                        </div>
                        <div className="s10-form-note">
                            <p>Напишите нам, если у Вас есть вопросы. Мы ответим Вам в самое ближайшее время (в течении 1 часа). Также вы можете описать в сообщении суть вопроса, это поможет нам более оперативно справиться с вашей проблемой</p>
                            <p>Нажимая на кнопку, Вы принимаете <span>Положение</span> и <span>Согласие</span> на обработку персональных данных</p>                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
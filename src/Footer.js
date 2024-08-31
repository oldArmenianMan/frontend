import WhiteBear from "./public/whiteBear.png"
import Runa from "./public/runa.png"

function Footer()
{
    return(
        <div className="footer">
            <div className="footerBody">
                <img src={WhiteBear} width={"150px"} alt="Логотип"/>
                <div className="footerContact">
                    <h3>Телеграм-канал Бесстрашных - мы воины ГВ "Север"!</h3>
                    <div className="footerDescription">
                        <p>Сводки с фронта</p>
                        <p>Новости Белгородской, <br/> Курской и Брянской областей</p>
                        <p>Обстановка на Украине</p>
                    </div>
                    
                    <p>Наш телеграм: <a href="tg://resolve?domain=warriorofnorth">t.me/warriorofnorth</a></p>
                </div>
                <img src={Runa} width={"150px"} alt="Руна"/>
            </div>
            <p className="developer">Developed by Studio 24</p>


        </div>
    )
}

export default Footer;
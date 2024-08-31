import React from "react";
import Rt from "./photo/partners/rt.jpg";
import Majors from "./photo/partners/Majors.jpg";
import Uaru from "./photo/partners/uaru.jpg";
import Workbrat from "./photo/partners/workbrat.jpg";
import Voindv from "./photo/partners/voindv.jpg";
import Dozor from "./photo/partners/dozor.jpg";
import OperZ from "./photo/partners/oper_z.jpg";
import Angel from"./photo/partners/angel.jpg";
import Lebedeva from "./photo/partners/jurnalists/lebedeva.jpg";
import Simonov from "./photo/partners/jurnalists/simonov.jpg";
import Tamir from "./photo/partners/jurnalists/tamir.jpg";
import Rozhin from "./photo/partners/jurnalists/rozhin.png";
import Poddubnii from "./photo/partners/jurnalists/poddubnii.jpg";
import Kots from "./photo/partners/jurnalists/kots.jpg";

function Partners()
{
    return(
        <div className="partnersBody">
            <div className="underHeader"></div>
            <h2>Наши партнеры</h2>
            <div className="partnersList">
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Rt} alt="RT" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=rt_russian">Подписаться</a></p>
                        <p>Эксклюзивные репортажи. Кадры с передовой. Самые обсуждаемые и важные события в России и мире </p>
                    </div>
                    
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Majors} alt="Два майора" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=dva_majors">Подписаться</a></p>
                        <p>Будет интересно. Мы здесь думаем.</p>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Uaru} alt="Украина.ру" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=ukraina_ru">Подписаться</a></p>
                        <p>Главный по Украине. Официальная страница интернет-издания Ukraina.ru в Telegram</p>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Workbrat} alt="Работайте братья" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=btr80">Подписаться</a></p>
                        <p>Мы там, где воюет Россия.</p>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Voindv} alt="Воин ДВ" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=voin_dv">Подписаться</a></p>
                        <p>Мы рассказываем о дальневосточной группировке [V]</p>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Dozor} alt="Развед Дозор" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=razved_dozor">Подписаться</a></p>
                        <p>Фронтовые истории и эксклюзивы с передовой.</p>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={OperZ} alt="Операция Z" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=RVvoenkor">Подписаться</a></p>
                        <p>Добровольцы, волонтеры и военные корреспонденты Русской Весны действуют в боевых порядках 
                            войск на Донбассе, Украине и САР, получая информацию из самых горячих точек. </p>
                    </div>
                </div>
                <div className="partner">
                    <div className="partnerLogo">
                        <img src={Angel} alt="Архангел Спецназа" width="100%"/>
                    </div>
                    <div className="parnterContacts">
                        <p>Telegram: <a href="tg://resolve?domain=rusich_army">Подписаться</a></p>
                        <p>Новости. <br/> Канал военнослужащих ВДВ. <br/> Доверие от народа. <br/> Эксклюзивный контент.
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <h2 className="jurAndCor"> Журналисты и корреспонденты</h2>
            <div className="Journalists">
                <div className="Journalist">
                    <div className="jurnalistPhoto">
                        <img src={Poddubnii} alt="Евгений Поддубный" width={"100%"}/>
                    </div>
                    <div className="jurnalistDesc">
                        <h3>Евгений Поддубный</h3>
                        <p><i>Журналист, телеведущий, блогер.</i></p>
                        <p>
                            С начала 2022 года Евгений находился в зоне СВО, освещая события в специальных репортажах и своем телеграм-канале. 
                            Осенью 2023-го военкор работал над ситуацией в Газе — там начался военный конфликт между группировкой ХАМАС и 
                            израильской армией ЦАХАЛ. 
                        </p>
                        <p>
                            Telegram-канал: <a href="tg://resolve?domain=epoddubny" >t.me/epoddubny</a>
                        </p>
                    </div>
                </div>
                <div className="Journalist">
                    <div className="jurnalistPhoto">
                        <img src={Kots} alt="Александр Коц" width={"100%"}/>
                    </div>
                    <div className="jurnalistDesc">
                        <h3>Александр Коц</h3>
                        <p><i>Журналист, корреспондент.</i></p>
                        <p>
                            С 1999 года работает корреспондентом «Комсомольской правды», специальный корреспондент отдела политики, отвечает за освещение военных 
                            конфликтов, природных стихий и других катаклизмов. Работал в Косово, Афганистане, на Северном Кавказе,
                            в Ливии, Сирии, Египте, Ираке, Украине и Нагорном Карабахе. Также ведёт программы на радио «Комсомольская правда». 
                        </p>
                        <p>
                            Telegram-канал: <a href="tg://resolve?domain=sashakots" >t.me/sashakots</a>
                        </p>
                    </div>
                </div>
                <div className="Journalist">
                    <div className="jurnalistPhoto">
                        <img src={Rozhin} alt="Борис Рожин" width={"100%"}/>
                    </div>
                    <div className="jurnalistDesc">
                        <h3>Борис Рожин</h3>
                        <p><i>Военно-политический эксперт, блогер.</i></p>
                        <p>
                            Борис Рожин специализируется на аналитике исторических материалов, а также военно-политических
                            и экономических ситауций современности. С 2014 года активно освещает события в Крыму, на Донбассе и Украине.
                        </p>
                        <p>
                            Telegram-канал: <a href="tg://resolve?domain=boris_rozhin" >t.me/boris_rozhin</a>
                        </p>
                    </div>
                </div>
                <div className="Journalist">
                    <div className="jurnalistPhoto">
                        <img src={Lebedeva} alt="Ксения Лебедева" width={"100%"}/>
                    </div>
                    <div className="jurnalistDesc">
                        <h3>Ксения Лебедева</h3>
                        <p><i>Журналист и телеведущая.</i></p>
                        <p>Специальный корреспондент отдела экономических новостей главной дирекции Агентства телевизионных новостей. 
                            Ведущая авторской информационно-аналитической рубрики «Это другое» на канале Беларусь 1
                        </p>
                        <p>
                            Telegram-канал: <a href="tg://resolve?domain=lebedeva_xeniya" >t.me/lebedeva_xeniya</a>
                        </p>
                    </div>
                </div>
                <div className="Journalist">
                    <div className="jurnalistPhoto">
                        <img src={Simonov} alt="Александр Симонов" width={"100%"}/>
                    </div>
                    <div className="jurnalistDesc">
                        <h3>Александр Симонов</h3>
                        <p><i>Военный корреспондент RT.</i></p>
                        <p>Автор телеграмм-канала "Позывной Брюс".
                        </p>
                        <p>
                            Telegram-канал: <a href="tg://resolve?domain=brussinf" >t.me/brussinf</a>
                        </p>
                    </div>
                </div>
                <div className="Journalist">
                    <div className="jurnalistPhoto">
                        <img src={Tamir} alt="Тамир Шихалиев" width={"100%"}/>
                    </div>
                    <div className="jurnalistDesc">
                        <h3>Тамир Шейх</h3>
                        <p><i>Российский корреспондент, блогер.</i></p>
                        <p>Автор телеграмм-канала "Шейх Тамир".
                        </p>
                        <p>
                            Telegram-канал: <a href="tg://resolve?domain=sheyhtamir1974" >t.me/sheyhtamir1974</a>
                        </p>
                    </div>
                </div>
               
                
                
            </div>
        </div>   
    )
}

export default Partners;
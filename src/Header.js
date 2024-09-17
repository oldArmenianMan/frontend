import { useState, useRef, useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Bear from "./public/bear.png"
import whiteBear from "./public/whiteBear.png"

function Header()
{
    const [headerStyle, setHeaderStyle] = useState({
        height: '200px',
        logoHeight: '180px',
    });
    const [visible, setVisible] = useState(false);
    const node = useRef(null);

    function handleClickSetVisible()
    {
        setVisible(!visible);
    }
    

    const handleClickOutside = (event) => {
        if (node.current && !node.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 200; // Максимальная прокрутка, после которой изменения достигнут максимума
            const newHeight = Math.max(100, 210 - scrollY / (maxScroll / 90)); // 60px минимальная высота
            const newLogoHeight = Math.max(90, 200 - scrollY / (maxScroll / 150)); // 50px минимальный размер логотипа

            setHeaderStyle({
                height: `${newHeight}px`,
                logoHeight: `${newLogoHeight}px`,
            });
        };

        window.addEventListener('scroll', handleScroll);
        
        // Удаление обработчика при размонтировании компонента
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
   


    return (
        <div 
            className="header"
            style={{
                '--header-height': headerStyle.height,
                opacity: headerStyle.opacity
        }}
        >
            <div className={visible ? "visibleMenu" : "invisibleMenu"} ref={node}>
                <div className='menuWrapper'>
                    <p><Link to="/"><span>Главная</span></Link></p>
                    <p><Link to="/command"><span>Командование</span></Link></p>
                    {/* <p><Link to="/heroes"><span>Наши герои</span></Link></p> */}
                    <p><Link to="/uafamily"><span>Членам семей<br/> украинских <br/> военнослужащих</span></Link></p>
                    {/* <li><Link to="/mill-applied"><span>Военно-прикладное дело</span></Link></li> */}
                    <p><Link to="/history"><span>Этот день в истории</span></Link></p>
                    <p><Link to="/partners"><span>Партнеры</span></Link></p>
                </div>
            </div>
            <div className="headerItemsWrapper">
                <div className="headerLeftSide">
                    <button onClick={handleClickSetVisible}>Меню</button>
                    <h2>СЕВЕРНЫЙ ВЕТЕР</h2>
                </div>
                {/* <Clock/> */}
            </div>
            <div className="headerItemsWrapper" id='opacityItem'>
                <img
                    src={whiteBear}
                    className="headerLogo"
                    alt="Logo"
                    style={{ height: headerStyle.logoHeight }}
                />
            </div>
            <div className="headerItemsWrapper" id="opacityContacts">
                <div className="headerContacts">
                    <ul>
                    <li><a href="tg://resolve?domain=Polar_nightbot">Поделиться историей</a></li>
                        <li><a href="tg://resolve?domain=SaveurLive_bot">Украинским солдатам</a></li>
                        
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Header;
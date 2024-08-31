import { useState, useRef, useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Bear from "./public/bear.png"

function Header()
{
    const [classMenu, setClassMenu] = useState();
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
   


    return (
        <>
        <div className="header">
            <div>
                <img src={Bear} alt='Логотип' width={'260px'}/>
            </div>
            <h2>Северный Ветер</h2>
            <div className='dropdownZone' ref={node}>
                <button onClick={handleClickSetVisible}>Меню</button>
                <ul style={{ listStyleType: 'none'}} className={visible ? "visible" : "invisible"}>
                    <li><Link to="/"><span>Главная</span></Link></li>
                    <li><Link to="/command"><span>Командование</span></Link></li>
                    <li><Link to="/heroes"><span>Наши герои</span></Link></li>
                    <li><Link to="/uafamily"><span>Членам семей украинских <br/> военнослужащих</span></Link></li>
                    <li><Link to="/mill-applied"><span>Военно-прикладное дело</span></Link></li>
                    <li><Link to="/history"><span>Этот день в истории</span></Link></li>
                    <li><Link to="/partners"><span>Партнеры</span></Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;
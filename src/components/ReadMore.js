import React, { useState } from "react";


const ReadMoreStyle = 
{
    color: 'white',
    "text-decoration": 'underline', 
}

const ReadMore = ({children}) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
                style={ReadMoreStyle}>
                    {isReadMore ? "...Подробнее" : " Скрыть подробности"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div className="container">
            {}
            <ReadMore>
            МОСКВА, 25 июл — РИА Новости. 
            Президент России Владимир Путин 
            накануне провел встречу с лидером 
            Сирии Башаром Асадом в Кремле, 
            сообщил корреспондент РИА Новости.
            «"Уважаемый господин президент, 
            очень рад вас видеть. У нас есть 
            возможность поговорить по всему 
            комплексу наших отношений, мы не 
            виделись давно уже", — сказал
             российский лидер.
            </ReadMore>
        </div>
    )
}

export default Content;
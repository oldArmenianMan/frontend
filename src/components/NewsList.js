import React, { useState, useEffect} from "react";
import axios from "axios";

const ReadMoreStyle = 
{
    color: 'blue',
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


const NewsList = () =>
{
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/messages');
                    setMessages(response.data);
                    console.log("Ответ: ", response.data)
                } catch (error) {
                    console.log('Error fetching messages:', error);
                }
            };
            fetchMessages();
         
    }, []);

    return (
        <>
            {messages.slice().reverse().map((message, index) =>
            <div key={index} className="newsItem container">
                <ReadMore>
                    {message.text}
                </ReadMore>
            </div>
        )}
        </>
    );
};

export default NewsList;
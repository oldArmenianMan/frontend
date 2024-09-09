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
    const [messages, setMessages] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/messages');
                    setMessages(response.data[0]);
                    setPhotos(response.data[1]);
                    setVideos(response.data[2]);
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
                    {message.text}
                
                    <div>
                    {typeof photos[photos.length - (index + 1)] === 'string' && photos[photos.length - (index + 1)].trim() !== "" && (
                        <img height="150px" width="auto" src={photos[photos.length - (index + 1)].linkP.replace(/^"|"$/g, '')} alt="Изображение" />
                    )}
                    </div>
            </div>
        )}
        </>
    );
};

export default NewsList;
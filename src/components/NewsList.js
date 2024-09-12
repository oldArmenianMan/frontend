import React, { useState, useEffect} from "react";
import axios from "axios";
import videoPreload from "./public/videoPreload.jpg"

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
                <div className="newsItemMediaContainer">
                    {typeof(photos[photos.length - (index + 1)].linkP) === 'string'  && (
                        <img  src={photos[photos.length - (index + 1)].linkP.replace(/^"|"$/g, '')} alt="Изображение" />
                    )}
                    {typeof(videos[videos.length - (index + 1)].linkV) === 'string'  && (
                        <video controls preload="none" poster={videoPreload}>
                            <source src={videos[videos.length - (index + 1)].linkV.replace(/^"|"$/g, '')} type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    )}
                </div>
                <div className="newsItemTextContainer" dangerouslySetInnerHTML={{ __html: message.text }}>
                </div>  
            </div>
        )}
        </>
    );
};

export default NewsList;
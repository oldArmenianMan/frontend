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
    const [halfMessages, setHalfMessages] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    const [howMany, setHowMany] = useState(10);
    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/messages');
                    setMessages(response.data[0]);
                    setPhotos(response.data[1]);
                    setVideos(response.data[2]);
                    let halfMess = [];
                    for (let i = 0; i < howMany; i++)
                    {
                        halfMess[i] = response.data[0][i];
                    }
                    setHowMany(howMany + 10)
                    setHalfMessages(halfMess);
                } catch (error) {
                    console.log('Error fetching messages:', error);
                }
            };
            fetchMessages();
    }, []);
    

    const showMoreNews = (event) =>
    {
        setHowMany(howMany + 10);
        let halfMess = [];
        for (let i = 0; i < howMany; i++)
        {
            halfMess[i] = messages[i]
        }
        setHalfMessages(halfMess);
    }
    return (
        <div className="mainNewsWrapper">
            {halfMessages.slice().map((message, index) =>
               <div key={index} className="newsItem container">                        
                    <div className="newsItemMediaContainer">
                        {typeof(photos[index].linkP) === 'string'  && (
                            <img  src={photos[index].linkP.replace(/^"|"$/g, '')} alt="Изображение" />
                        )}
                        {typeof(videos[index].linkV) === 'string'  && (
                            <video controls preload="none" poster={videoPreload}>
                                <source src={videos[index].linkV.replace(/^"|"$/g, '')} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        )}
                    </div>
                    <div className="newsItemTextContainer" dangerouslySetInnerHTML={{ __html: message.text }}></div> 
                </div>
            )}            
                <button onClick={showMoreNews} className="showMoreNewsBtn">Посмотреть более старые новости</button>

        </div>
    );
};

export default NewsList;
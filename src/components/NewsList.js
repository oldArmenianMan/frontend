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
    // const [photoUrl, setPhotoUrl] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/messages');
                    const { text, photo, video } = response.data;

                    setMessages(text || []);
                    setPhotos(photo || []);
                    setVideos(video || []);

                console.log("Ответ от API:", response.data);
                    // setPhotoUrl(response.data.responseData.photo);
                    console.log("Ответ: ", response.data.responseData)
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
                    {message}
                </ReadMore>
                <img src={messages.photoUrl} alt="Фото"></img>
            </div>
        )}
            
            <h2>Фотографии</h2>
            {photos.slice().reverse().map((photoUrl, index) => (
                <div key={index}>
                    <img src={photoUrl} alt={`Фото ${index}`} />
                </div>
            ))}
            
            <h2>Видео</h2>
            {videos.slice().reverse().map((videoUrl, index) => (
                <div key={index}>
                    <video controls width="250">
                        <source src={videoUrl} type="video/mp4" />
                        Ваш браузер не поддерживает тег видео.
                    </video>
                </div>
            ))}
        </>
    );
};

export default NewsList;
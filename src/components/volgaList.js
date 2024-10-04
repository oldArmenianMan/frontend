import React, { useState, useEffect} from "react";
import axios from "axios";
import videoPreload from "./public/videoPreload.jpg"
const VolgaList = () =>
{
    const [messages, setMessages] = useState([])
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/volga');
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
            {messages.slice().map((message, index) =>
            <div key={index} className="prisoner">
                <div className="prisonerWrapper">
                    <div className="newsItemMediaContainer">
                        {typeof(photos[index].linkP) === 'string'  && (
                            <img src={`http://xn--b1aahbbaz5a0afbu7i.su/media/${photos[index].linkP.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/photos/', '')}`} 
                            alt="Изображение" />
                        )}
                        {typeof(videos[index].linkV) === 'string'  && (
                            <video controls preload="none" poster={videoPreload}>
                                <source src={`http://xn--b1aahbbaz5a0afbu7i.su/media/${videos[index].linkV.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/videos/', '')}`} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        )}
                    </div>
                    <div className="newsItemTextContainer" dangerouslySetInnerHTML={{ __html: message.text }}></div> 
                </div>
            </div>
        )}
        </>
    );
};

export default VolgaList;
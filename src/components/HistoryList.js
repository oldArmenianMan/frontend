import React, { useState, useEffect} from "react";
import axios from "axios";

const HistoryList = () =>
{
    const [messages, setMessages] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/history');
                    setMessages(response.data[0]);
                    setPhotos(response.data[1]);
                } catch (error) {
                    console.log('Error fetching messages:', error);
                }
            };
            fetchMessages();
         
    }, []);

    return (
        <>
            {messages.slice().map((message, index) =>
            <div key={index} className="fact">                      
                    <div className="newsItemMediaContainer">
                        {typeof(photos[index].linkP) === 'string'  && (
                            <img  src={`http://xn--b1aahbbaz5a0afbu7i.su/media/${photos[index].linkP.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/photos/', '')}`} alt="Изображение" />
                        )}
                    </div>
                <div className="newsItemTextContainer" dangerouslySetInnerHTML={{ __html: message.text }}></div>
            </div>
        )}
        </>
    );
};

export default HistoryList;


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
            {messages.slice().reverse().map((message, index) =>
            <div key={index} className="fact">
                <p>{message.text}</p>
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

export default HistoryList;


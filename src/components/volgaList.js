import React, { useState, useEffect} from "react";
import axios from "axios";

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
            {messages.slice().reverse().map((message, index) =>
            <div key={index} className="prisoner">
                <p>{message.text}</p>
                <div>
                    <img src={photos[index]} alt="Изображение"></img>
                </div>
            </div>
        )}
        </>
    );
};

export default VolgaList;
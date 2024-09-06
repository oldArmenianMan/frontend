import React, { useState, useEffect} from "react";
import axios from "axios";

const MessageList = () =>
{
    const [messages, setMessages] = useState([])
    const [photoUrl, setPhotoUrl] = useState([]);

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/messages');
                    setMessages(response.data.responseData);
                    setPhotoUrl(response.data.responseData.photo);
                    console.log("Ответ: ", response.data)
                } catch (error) {
                    console.log('Error fetching messages:', error);
                }
            };
            fetchMessages();
         
    }, []);

    return (
        <div>
            {messages.slice().reverse().map((message, index) =>
            <div key={index}>
                <p>{message.text}</p>
                <img src={photoUrl} alt="Фото"></img>
            </div>
        )}
        </div>
    );
};

export default MessageList;
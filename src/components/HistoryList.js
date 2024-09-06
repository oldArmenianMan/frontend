import React, { useState, useEffect} from "react";
import axios from "axios";

const HistoryList = () =>
{
    const [messages, setMessages] = useState([])
    // const [photoUrl, setPhotoUrl] = useState([]);

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/history');
                    setMessages(response.data.responseData);
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
            <div key={index} className="fact">
                <p>{message.text}</p>
                <img src={messages.photoUrl} alt="Фото"></img>
            </div>
        )}
        </>
    );
};

export default HistoryList;


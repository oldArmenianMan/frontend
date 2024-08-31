import React, { useState, useEffect} from "react";
import axios from "axios";

const HistoryList = () =>
{
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('http://localhost:3010/history');
                    setMessages(response.data);
                    console.log("Ответ: ", response.data)
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
            </div>
        )}
        </>
    );
};

export default HistoryList;
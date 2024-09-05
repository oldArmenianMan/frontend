import React, { useState, useEffect} from "react";
import axios from "axios";

const MessageList = () =>
{
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:3010/messages');
                    setMessages(response.data);
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
            </div>
        )}
        </div>
    );
};

export default MessageList;
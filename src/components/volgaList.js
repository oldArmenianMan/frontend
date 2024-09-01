import React, { useState, useEffect} from "react";
import axios from "axios";

const VolgaList = () =>
{
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://3c3faa853f13.vps.myjino.ru:3010/volga');
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
            <div key={index} className="prisoner">
                <p>{message.text}</p>
            </div>
        )}
        </>
    );
};

export default VolgaList;
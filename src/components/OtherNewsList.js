import React, { useState, useEffect} from "react";
import axios from "axios";

const OtherNewsList = () =>
{

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/othernews');
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
            <div key={index} className="factOtherNews" dangerouslySetInnerHTML={{ __html: message.text }}>
            </div>
        )}
        </>
    );
};

export default OtherNewsList;
import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoryList = () => {
    const [messages, setMessages] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [dates, setDates] = useState([]);
    const [expandedIndices, setExpandedIndices] = useState(new Set());
    let classTextContainer = 'newsItemTextContainer';

    const toggleExpand = (index) => {
        setExpandedIndices((prev) => {
            const newIndices = new Set(prev);
            if (newIndices.has(index)) {
                newIndices.delete(index);
            } else {
                newIndices.add(index);
            }
            return newIndices;
        });
    };

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49307/history');
                setMessages(response.data[0]);
                setPhotos(response.data[1]);
                let newDatesArr = [];
                for (let i = 0; i < response.data[2].length; i++)
                {
                    if (response.data[3][i].date != null)
                    {
                        const fullDate = new Date(Date.parse(response.data[2][i].date))
                        const year = fullDate.getFullYear().toString();
                        let month = String(fullDate.getMonth() + 1);
                        if (month.length === 1)
                            {
                                month = '0' + month;
                            }
                        let day = String(fullDate.getDate());
                        if (day.length === 1)
                        {
                            day = '0' + day;
                        }
                        newDatesArr[i] = `Дата публикации: ${day}.${month}.${year}`
                    }
                    else
                    {
                        newDatesArr[i] = 0;
                    }            
                }
                setDates(newDatesArr);
            } catch (error) {
                console.log('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    return (
        <>
            {messages.map((message, index) => (
                <div key={index} className="fact">
                    <div className="newsItemMediaContainer">
                        {typeof(photos[index]?.linkP) === 'string' && (
                            <img 
                                src={`http://xn--b1aahbbaz5a0afbu7i.su/media/${photos[index].linkP.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/photos/', '')}`} 
                                alt="Изображение" 
                            />
                        )}
                        <p>4 октября</p>
                    </div>
                    {expandedIndices.has(index) && (
                        <div className='newsItemTextContainer' dangerouslySetInnerHTML={{ __html: message.text }}></div>
                    )}
                    <button onClick={() => toggleExpand(index)} className="showMoreHistoryFactBtn">
                        {expandedIndices.has(index) ? '<' : '>'}
                    </button>
                </div>
            ))}
        </>
    );
};

export default HistoryList;
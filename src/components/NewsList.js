import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import videoPreload from "./public/videoPreload.jpg"


const NewsList = () =>
{
    const [messages, setMessages] = useState([]);
    const [halfMessages, setHalfMessages] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    const [dates, setDates] = useState([]);
    const [newDates, setNewDates] = useState([]);
    const [howMany, setHowMany] = useState(10);
    const [fullSize, setFullSize] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');
    const node = useRef(null);

    useEffect(() => {
        const fetchMessages = async () =>
            {
                try {
                    const response = await axios.get('https://xn--b1aahbbaz5a0afbu7i.su:49397/messages');
                    setMessages(response.data[0]);
                    setPhotos(response.data[1]);
                    setVideos(response.data[2]);
                    setDates(response.data[3]);
                    let halfMess = [];
                    for (let i = 0; i < howMany; i++)
                    {
                        halfMess[i] = response.data[0][i];
                    };
                    let newDatesArr = [];
                    for (let i = 0; i < response.data[3].length; i++)
                    {
                        if (response.data[3][i].date != null)
                        {
                            const fullDate = new Date(Date.parse(response.data[3][i].date))
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
                    setNewDates(newDatesArr);
                    setHowMany(howMany + 10)
                    setHalfMessages(halfMess);
                } catch (error) {
                    console.log('Error fetching messages:', error);
                }
            };
            fetchMessages();
    }, []);
    

    const showMoreNews = (event) =>
    {
        setHowMany(howMany + 10);
        let halfMess = [];
        for (let i = 0; i < howMany; i++)
        {
            halfMess[i] = messages[i]
        }
        setHalfMessages(halfMess);
    }

    const showFullSizeIMG = (imgSrc) =>
    {
        setSelectedImg(imgSrc);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImg('');
    }

    const handleClickOutside = (event) => {
        if (node.current && !node.current.contains(event.target)) {
            setFullSize(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="mainNewsWrapper">
            {halfMessages.slice().map((message, index) =>
               <div key={index} className="newsItem container">                        
                    <div className="newsItemMediaContainer">
                        {typeof(photos[index].linkP) === 'string'  && (
                            <img 
                            src={`http://xn--b1aahbbaz5a0afbu7i.su/server/media/${photos[index].linkP.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/photos/', '')}`} 
                            onClick={() => showFullSizeIMG(`http://xn--b1aahbbaz5a0afbu7i.su/media/${photos[index].linkP.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/photos/', '')}`)} 
                            alt="Изображение" 
                            ref={node}/>
                        )}
                        {isOpen && (
                            <div className="modal" onClick={closeModal}>
                                <span className="clone" onClick={closeModal}>&times;</span>
                                <img className="modal-content" src={selectedImg} alt="Полноразмерное фото" />
                            </div>
                        )}
                        {typeof(videos[index].linkV) === 'string'  && (
                            <video controls preload="none" poster={videoPreload}>
                                
                                <source src={`http://xn--b1aahbbaz5a0afbu7i.su/server/media/${videos[index].linkV.replace(/^"|"$/g, '').replace('file://localhost/telegram-bot-api/7411430341:AAE5RoM3qvRQ-gMHOQth2ha1uZdhEqTgBv0/videos/', '')}`} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        )}
                    </div>
                    <div className="newsItemTextContainer" dangerouslySetInnerHTML={{ __html: message.text }}></div> 
                    <div className="newsDate">{newDates[index] !== 0 && (newDates[index])}</div>
                </div>
            )}            
                <button onClick={showMoreNews} className="showMoreNewsBtn">Посмотреть более старые новости</button>

        </div>
    );
};

export default NewsList;
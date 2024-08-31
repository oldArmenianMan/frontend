import React from "react";
import ParalaxBlock from "../ParalaxBlock";
import News from "../MainPage/News";
function Home()
{
    return (
        <>
        <div className="underHeader"></div>
            <ParalaxBlock></ParalaxBlock>
            <News></News>
        </>
        
    )
}

export default Home;
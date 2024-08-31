import React from "react";
import HistoryList from "../components/HistoryList";

function History()
{
    return(
        <div className="historyBody">
            <div className="underHeader"></div>
            <h2>В этот день в истории произошло</h2>
            <div className="historyList">
                <HistoryList></HistoryList>
            </div>
        </div>   
    )
}

export default History;
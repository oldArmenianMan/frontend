import React from "react";

function Heroes ()
{

    return(
        
        <div className="heroesBody">
            <div className="underHeader"></div>
            <div className="heroesList">
            <h2>Герои Специальной военной операции</h2>
                <div className="hero">
                    <div className="heroPhoto">
                        <img alt="Фото"></img>
                    </div>
                    <div className="heroDescription"></div>
                </div>
            </div>
        </div>
    )
}

export default Heroes;
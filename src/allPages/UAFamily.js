import React from "react";
import VolgaList from "../components/volgaList";

function UAFamily()
{
    return(
        <div className="UAFamilyBody">
            <div className="underHeader"></div>
            <h2>Членам семей украинских военнослужащих</h2>
            <div className="prisonerList">
                <VolgaList></VolgaList>
            </div>
        </div>   
    )
}

export default UAFamily;
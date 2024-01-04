import React from "react";
import List from "../../Custom/List/List.jsx";
export default function Archived({activities,activeTab,updateCallStatus}){
    return (
        <div className="archive-container">
            <List list={activities} activeTab={activeTab} updateCallStatus={updateCallStatus}/>
        </div>
    )
}
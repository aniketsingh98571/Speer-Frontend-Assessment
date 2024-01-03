import React from "react";
import List from "../../Custom/List/List.jsx";
export default function Archived({activities}){
    return (
        <div className="archive-container">
            <List list={activities}/>
        </div>
    )
}
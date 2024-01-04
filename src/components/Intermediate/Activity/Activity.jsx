import React from "react"
import List from "../../Custom/List/List.jsx"
export default function Activity({activities,activeTab,updateCallStatus}){
    return (
       <div className="activity-container">
            <List list={activities} activeTab={activeTab} updateCallStatus={updateCallStatus}/>
       </div>
    )
}
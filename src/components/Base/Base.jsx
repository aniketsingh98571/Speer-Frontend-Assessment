import React,{useState} from "react"
import Intermediate from "../Intermediate/Intermediate.jsx"
export default function Base(){
    const [activeTab,setActiveTab]=useState("Activity")
    const activeTabHandler=(state)=>{
        console.log(state)
        setActiveTab(state)
    }
    return(
        <div className="outer__base-container">
            <div className="inner_base-container">
                <div className="tabs-container">
                    <div className={activeTab==="Activity"?["activity-tab", "active-tab"].join(" "):"activity-tab"}>
                        <button onClick={()=>activeTabHandler("Activity")}  type="button">Activity</button>
                    </div>
                    <div className={activeTab==="Archived"?["activity-tab", "active-tab"].join(" "):"activity-tab"}>
                        <button onClick={()=>activeTabHandler("Archived")} type="button">Archived</button>
                    </div>
                </div>
               
                <div className="intermediate-container">
                    <Intermediate activeTab={activeTab}/>
                </div>
            </div>
        </div>
    )
}
import React,{useEffect,useState} from "react"
import Archived from "./Archived/Archived.jsx"
import Activity from "./Activity/Activity.jsx"
import { getRequest } from "../Server/axiosClient/axiosClient.js"
import Button from "../Custom/Button/Button.jsx"
export default function Intermediate({activeTab}){
    const [activities,setActivities]=useState([])
    const [archive,setArchive]=useState([])
    useEffect(()=>{
        getActivities()
    },[])
    const getActivities=async()=>{
        const data=await getRequest("activities")
        console.log(data.data)
        const sortDataByDate=data.data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        const nonArchiveData=sortDataByDate.filter((item)=>{
            return !item.is_archived
        })
        console.log(nonArchiveData,"nonn archive")
        setActivities(nonArchiveData)
        const archiveData = sortDataByDate.filter((item)=>{
            return item.is_archived
        })
        console.log(archiveData,"archive")
        setArchive(archiveData)
    }
    return (
       <div className="outer-intermediate">
            <div className="action-button">
                {
                    activeTab==="Activity"?
                    <Button text="Archive All"/>:
                    <Button text="Unarchive All"/>
                }
            </div>
            <div className="activity-container-intermediate">
                {
                    activeTab==="Activity"?
                    <Activity activities={activities} activeTab={activeTab}/>:
                    <Archived activities={archive} activeTab={activeTab}/>
                }
            </div>
       </div>
    )
}
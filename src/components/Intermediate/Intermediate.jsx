import React,{useEffect,useState} from "react"
import Archived from "./Archived/Archived.jsx"
import Activity from "./Activity/Activity.jsx"
import { getRequest,patchRequest } from "../Server/axiosClient/axiosClient.js"
import Button from "../Custom/Button/Button.jsx"
import Loader from "../Custom/Loader/Loader.jsx"
export default function Intermediate({activeTab}){
    const [activities,setActivities]=useState([])
    const [archive,setArchive]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        getActivities()
    },[])
    const getActivities=async()=>{
     let data;
    try{
         data=await getRequest("activities")
         setLoading(false)
      }
      catch(err){
        console.log(err)
        setLoading(false)
        alert("Something went wrong")
      }
        const sortDataByDate=data.data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        const nonArchiveData=sortDataByDate.filter((item)=>{
            return !item.is_archived
        })
        setActivities(nonArchiveData)
        const archiveData = sortDataByDate.filter((item)=>{
            return item.is_archived
        })
        setArchive(archiveData)
    }
    const updateCallStatus=(callId)=>{
        let prevData;
        const prevCallData=[...activities]
        const prevArchives=[...archive]
        if(activeTab==="Activity"){
          const updatedActivities=prevCallData.filter((call)=>{
                if(call.id==callId)
                    prevData=call
                return call.id!==callId
            })
            prevArchives.push(prevData)
            setActivities(updatedActivities)
            setArchive(prevArchives)
        }
        else if(activeTab==="Archived"){
            const updatedArchives=prevArchives.filter((call)=>{
                if(call.id===callId)
                    prevData=call
                return call.id!==callId
            })
            prevCallData.push(prevData)
            setActivities(prevCallData)
            setArchive(updatedArchives)
        }
    }
    const updateDataRequest=async(array)=>{
        const apiResult=await Promise.all(array.map((call)=>{
            const payload={
                "is_archived": !call.is_archived
            }
            try {
             return patchRequest(`activities/${call.id}`,payload)
            }
            catch(err){
                console.log(err)
            }
        }))
        return apiResult
    }
    const archiveAll=async()=>{
        const prevActivities=[...activities]
        const prevArchives=[...archive,...prevActivities]
        setActivities([])
        setArchive(prevArchives)
        const data=await updateDataRequest(prevActivities)
    }
    const unArchiveAll=async()=>{
        const prevArchives=[...archive]
        const prevActivities=[...activities,...prevArchives]
        setActivities(prevActivities)
        setArchive([])
        const data=await updateDataRequest(prevArchives)
    }
    return (
       <div className="outer-intermediate">
            <div className="action-button">
                {
                    activeTab==="Activity"?
                    <Button text="Archive All" action={archiveAll}/>:
                    <Button text="Unarchive All" action={unArchiveAll}/>
                }
            </div>
            {
                loading&&
                <Loader/>
            }
            <div className="activity-container-intermediate">
                {
                    activeTab==="Activity"?
                    <Activity activities={activities} activeTab={activeTab} updateCallStatus={updateCallStatus} />:
                    <Archived activities={archive}  activeTab={activeTab} updateCallStatus={updateCallStatus}/>
                }
            </div>
       </div>
    )
}
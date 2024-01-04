import React,{useState} from "react"
import MoreDetails from "../MoreDetails/MoreDetails.jsx"
export default function SingleItem({listItem,activeTab,updateCallStatus}){
    const [showMore,setShowMore]=useState(false)
    const showMoreDetails=(data)=>{
        setShowMore(true)
    }
    const closeMoreDetails=()=>{
        setShowMore(false)
    }
    return (
        <div className="single-list-container">
            {
            <div className={`hidden-more ${showMore ? 'slide-in' : 'slide-out'}`}>
                {
                    showMore?
                    <MoreDetails closeMoreDetails={closeMoreDetails} updateCallStatus={updateCallStatus} callId={listItem.id}/>:null
                }
            </div>
            }
            {
            listItem.call_type==="voicemail"||listItem.call_type==="missed"&&
           <div className="outer-list"> 
                <div className="date-container">
                {`${new Date(listItem.created_at).getDate()}/${new Date(listItem.created_at).getMonth()}/${new Date(listItem.created_at).getFullYear()}`}
                </div>
                <div className="single-list">
                    <div className="icon-container">
                        📞
                    </div>
                    <div className="number-container">
                        {listItem.from}
                    </div>
                    <div className="time-container">
                        {`${new Date(listItem.created_at).getHours()}:${new Date(listItem.created_at).getMinutes()}`}
                    </div>
                    <div className="more-container">
                        <button type="button" onClick={()=>showMoreDetails(listItem)}>Show More</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
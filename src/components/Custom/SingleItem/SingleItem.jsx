import React from "react"
export default function SingleItem({listItem,activeTab}){
    console.log(listItem)
    return (
        <div className="single-list-container">
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
                </div>
            </div>
            }
        </div>
    )
}
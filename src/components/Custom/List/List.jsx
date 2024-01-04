import React from "react"
import SingleItem from "../SingleItem/SingleItem.jsx"
export default function List({list,activeTab,updateCallStatus}){

    return (
        <div className="outer-list">
            <div className="inner-list">
                {
                    list&&
                    list.map((listItem)=>{ 
                        return (
                            <SingleItem activeTab={activeTab} key={listItem.id} listItem={listItem} updateCallStatus={updateCallStatus}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
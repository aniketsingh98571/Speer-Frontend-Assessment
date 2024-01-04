import React,{useEffect,useState} from "react"
import {getRequest,patchRequest} from '../../Server/axiosClient/axiosClient'
import Loader from '../Loader/Loader.jsx'
export default function MoreDetails({callId,closeMoreDetails,updateCallStatus}){
const [callDetailsData,setCallDetailsData]=useState({})
const [serverResponse,setServerResponse]=useState("")
const [loader,setLoader]=useState(true)
useEffect(()=>{
    getCallDetails()
},[])
const getCallDetails=async()=>{
    let callDetails;
 try{
    callDetails=await getRequest(`activities/${callId}`)
    setLoader(false)
  }
  catch(err){
    console.log(err)
    setLoader(false)
    alert("Something went wrong")
  }
    setCallDetailsData(callDetails.data)
}
const changeCallStatus=async()=>{
    setServerResponse("Please wait...")
    const payload={
        "is_archived": !callDetailsData.is_archived
    }
    let changeStatusResponse;
    try{      
     changeStatusResponse=await patchRequest(`activities/${callId}`,payload)
    }
    catch(err){
        console.log(err)
    }
    if(changeStatusResponse.status===200){
        setServerResponse("Call Updated")
        updateCallStatus(callId)
    }
}
    return (
        <div className="more-details-outer">
            <div className="more-details-inner">
                <div className="top-container">
                    <div className="top-text">
                        <p>Call Details</p>
                    </div>
                    <div className='cross-container'>
                        <p onClick={closeMoreDetails}>&#x2716;</p>
                    </div>
                </div>
               {
                !loader?
                <div className="details-container">
                    <p><span>Call Type:</span> {callDetailsData.call_type}</p>
                    <p><span>When :</span> {`${new Date(callDetailsData.created_at)}`}</p>
                    <p><span>From :</span> {callDetailsData.from}</p>
                    <p><span>To:</span> {callDetailsData.to}</p>
                    <div className="more-action-button">
                        <button type="button" onClick={changeCallStatus}>
                            {callDetailsData.is_archived?"Unarchive":"Archive"}
                        </button>
                    </div>
                    <p>{serverResponse}</p>
                </div>:<Loader/>
                 }
            </div>
        </div>
    )
}
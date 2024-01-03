import React from "react"
export default function Button({text,action}){
    return (
        <div className="custom-button">
            <button type="button" onClick={action}>{text}</button>
        </div>
    )
}
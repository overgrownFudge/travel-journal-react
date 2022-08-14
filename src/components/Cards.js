import React from "react"
import ping_logo from "../images/location-ping.png"


export default function Cards(props) {
    return (
        <div className="cards">
            <div className="images">
                <img src={props.img}/>
            </div>
            <div className="card">
                <p><img className= "ping-logo" src ={ping_logo}/>
                    {props.location} 
                    <a href={props.googleMaps}>View on Google Maps</a>
                </p>
                <h1>{props.title}</h1>
                <p className="dates">{props.start} - {props.end}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
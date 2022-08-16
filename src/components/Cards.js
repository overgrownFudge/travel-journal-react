import React from "react"
import ping_icon from "../images/location-ping.png"


export default function Cards(props) {
    return (
        <div className="cards">
            <div className="images">
                <img src={props.img} />
            </div>
            <div className="card">
                <div className="location-info">
                    <img className="ping-icon" src={ping_icon} />
                    <p>{props.location} <a href={props.googleMaps}>View on Google Maps</a></p>
                </div>
                <h1>{props.title}</h1>
                <p className="dates">{props.start} - {props.end}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
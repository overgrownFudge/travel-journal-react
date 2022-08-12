import React from "react"

export default function Cards(props) {
    return (
        <div className="cards">
            <div className = "images">
                <img src={props.img} />
            </div>
            <div className = "card">
                <p>"logo" {props.location} <a href = {props.googleMaps}>View on Google Maps</a> </p>
                <h1>{props.title}</h1>
                <p className = "dates">{props.start} - {props.end}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
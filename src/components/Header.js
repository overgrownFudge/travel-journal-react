import React from "react"
import logo from "../images/main-logo.png"
export default function Header() {
    return (
        <div className = "header">
            <img src = {logo}/>
            <p>my travel journal.</p>
        </div>
    )
}
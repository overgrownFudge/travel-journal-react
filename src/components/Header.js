import React from "react"
import logo from "../images/main-logo.png"
export default function Header() {
    return (
        <div className = "header">
            <img className = "header-logo" src = {logo} alt="globe icon"/>
            <p>my travel journal.</p>
        </div>
    )
}
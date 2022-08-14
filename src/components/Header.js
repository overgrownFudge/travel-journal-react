import React from "react"
import logo from "../images/main-logo.png"
export default function Header() {
    return (
        <div className = "header">
            <p><img src = {logo}/> my travel journal.</p>
        </div>
    )
}
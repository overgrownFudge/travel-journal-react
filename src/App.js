import React from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {
    const CardsElement = data.map((data) => {
        return (<Cards 
                key = {data.title}
                img = {data.imageUrl}
                location = {data.location}
                googleMaps = {data.googleMapsUrl}
                title = {data.title}
                start = {data.startDate}
                end = {data.endDate}
                description = {data.description} />)
    })
    
    return (
        <div>
            <Header />
            <main className = "main">
                {CardsElement}
            </main>
        </div>
    )
}

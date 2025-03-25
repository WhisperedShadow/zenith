import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "../pages/home/Home"
import Event from "../pages/events/Event"
import Events from "../pages/events/Events"
import Contact from "../pages/contact/Contact"

const Routings = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/event/:id" element={<Event/>}/>
            <Route path="/:event" element={<Events/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Routings;
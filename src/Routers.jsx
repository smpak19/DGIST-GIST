import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Survey from "./pages/Survey"
import Gist from "./pages/Gist"
import Dgist from "./pages/Dgist"
import Unist from "./pages/Unist"
import Courses from "./pages/Courses"

function Routers() {
    return (
        <div>
        <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/login" element = {<Login/>} />
            <Route path ="/courses" element = {<Courses/>} />
            <Route path ="/survey" element = {<Survey/>}/>
                <Route path ="/survey/dgist" element={<Dgist/>} />
                <Route path ="/survey/unist" element = {<Unist/>} />
                <Route path ="/survey/gist" element = {<Gist/>}/>
        </Routes>
        </div>
    )
}

export default Routers
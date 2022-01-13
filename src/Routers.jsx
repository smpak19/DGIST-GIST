import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"

function Routers() {
    return (
        <div>
        <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/login" element = {<Login/>} />
        </Routes>
        </div>
    )
}

export default Routers
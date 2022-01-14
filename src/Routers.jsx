import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Survey from "./pages/Survey"
import Courses from "./pages/Courses"
import Result from "./pages/Result";

function Routers() {
    return (
        <div>
        <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/login" element = {<Login/>} />
            <Route path ="/courses" element = {<Courses/>} />
            <Route path ="/survey" element = {<Survey/>}/>
            <Route path = "/courses" element= {<Courses/>} /> 
            <Route path = "/result" element= {<Result/>} />  
        </Routes>
        </div>
    )
}

export default Routers
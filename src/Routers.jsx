import React from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Survey from "./pages/Survey"
import Courses from "./pages/Courses"
import Result from "./pages/Result"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import Register from "./pages/Register"

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
            <Route path = '/oauth/kakao/callback' element = {<Auth/>}/>
            <Route path = '/profile' element = {<Profile/>}/>
            <Route path = '/register' element = {<Register/>}/> 
        </Routes>
        </div>
    )
}

export default Routers
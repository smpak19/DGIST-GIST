import {React, useState} from "react";
import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Survey from "./pages/Survey"
import Courses from "./pages/Courses"
import Result from "./pages/Result"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import SchoolSurvey from "./SchoolSurvey";
import GistSurvey from "./gistpages/GistSurvey"
import GistCourses from "./gistpages/GistCourses"
import GistResult from "./gistpages/GistResult"

function Routers() {
    const [userId,setUserId] = useState("");

    return (
        <div>
        <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path ="/login" element = {<Login getId={setUserId} />} />
            <Route path ="/courses" element = {<Courses userId = {userId} setId={setUserId} />} />
            <Route path ="/survey" element = {<Survey userId = {userId} setId={setUserId} />}/>
            <Route path = "/result" element= {<Result userId = {userId} setId={setUserId} />} /> 
            <Route path = '/oauth/kakao/callback' element = {<Auth userId = {userId} setId={setUserId}/>}/>
            <Route path = '/profile' element = {<Profile userId = {userId} setId={setUserId}/>}/>
            <Route path = '/register' element = {<Register/>}/>

            <Route path = '/schoolsurvey' element = {<SchoolSurvey userId = {userId} setId = {setUserId} />} />
            <Route path ="/gistsurvey" element = {<GistSurvey userId = {userId} setId={setUserId} />}/> 
            <Route path ="/gistcourses" element = {<GistCourses userId = {userId} setId={setUserId} />} />
            <Route path = "/gistresult" element= {<GistResult userId = {userId} setId={setUserId} />} />  
        </Routes>
        </div>
    )
}

export default Routers
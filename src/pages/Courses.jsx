
import React, { useState} from 'react';
import CourseInfo from "../Component/CourseInfo";
import data from "./until19.json"
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom'

function Courses() {
    // const [courses, setcourse] = useState([{courseId : 'cse496', courseName : '몰입캠프'}, {courseId : 'cse123', courseName : '데이터 구조'}, {courseId : 'cse234', courseName : '운영체제'}])
    // 전체 과목
    const course = data
    // 사용자가 들은 과목
    const [search, setSearch] = useState('')
    const [isheard, setisheard] = useState([])
    const nav = useNavigate()
    const loc = useLocation()
    

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.!!!');
        console.log(isheard)
        nav("/result", {state: {arr: isheard, num: loc.state}})
        axios.post("http://192.249.18.176:443/user", {userid : "강준서" , taken : {isheard}});
    }


    function getInfo(e) {
        e.preventDefault();
        console.log('You clicked submit.!!!');
        axios.get("http://192.249.18.176:443/user/강준서").then(result => {
            console.log(result.data)
            setisheard(result.data)
            console.log("isheard",isheard)
        })
    }

      const boxstyle = {
        width : "90%",
        margin : "0 auto"
    }

    return (
        
        <div>
            <div>
                <input type="text" placeholder="Search" onChange={e => {
                    setSearch(e.target.value)
                }}/>
                <button>Search</button>
            </div>
            <div style={boxstyle}>{ (course.filter((item) => item.과목번호.toLowerCase().includes(search) ||
                     item.과목번호.includes(search) ||
                     item.교과목명.includes(search)))
                     .map((e, index) => (<CourseInfo course = {e} taken = {isheard} settaken = {setisheard} key = {index} />)) } </div>
            <form onSubmit={handleSubmit}>
                <button onClick={() => handleSubmit}>제출하기 </button>
            </form>
            <form onSubmit={getInfo}>
                <button onClick={() => getInfo}>정보 가져오기 </button>
            </form>
        </div>
        
    )
}

export default Courses
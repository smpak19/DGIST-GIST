import React, { useState} from 'react';
import CourseInfo from "../Component/CourseInfo";
import data from "./from20.json"
import {useNavigate, useLocation} from 'react-router-dom'

function FreshCourse() {
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
      }


    const boxstyle = {
        width : "90%",
        margin : "0 auto"
    }
    // json column name 다름 전공트랙 추가해줘야 함.
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
                     .map(e => (<CourseInfo course = {e} taken = {isheard} settaken = {setisheard} />)) } </div>
            <form onSubmit={handleSubmit}>
                <button onClick={() => handleSubmit}>제출하기 </button>
            </form>
        </div>
        
    )
}

export default FreshCourse
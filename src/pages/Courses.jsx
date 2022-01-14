
import React, { useState} from 'react';
import CourseInfo from "../Component/CourseInfo";
import data from "./until19.json"
import {useNavigate, useLocation} from 'react-router-dom'

function Courses() {
    // const [courses, setcourse] = useState([{courseId : 'cse496', courseName : '몰입캠프'}, {courseId : 'cse123', courseName : '데이터 구조'}, {courseId : 'cse234', courseName : '운영체제'}])
    // 전체 과목
    const course = data
    // 사용자가 들은 과목
    const [isheard, setisheard] = useState([])
    const nav = useNavigate()
    const loc = useLocation()


    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.!!!');
        console.log(isheard)
        nav("/result", {state: {arr: isheard, num: loc.state}})
      }


    return (
        
        <div>
            <div>{ course.map(e => (<CourseInfo course = {e} taken = {isheard} settaken = {setisheard} />)) } </div>
            <form onSubmit={handleSubmit}>
                <button onClick={() => handleSubmit}>제출하기 </button>
            </form>
        </div>
        
    )
}

export default Courses
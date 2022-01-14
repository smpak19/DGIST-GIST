
import React, { useState, useEffect } from 'react';
import CourseInfo from "../Component/CourseInfo";

function Courses() {
    // const [courses, setcourse] = useState([{courseId : 'cse496', courseName : '몰입캠프'}, {courseId : 'cse123', courseName : '데이터 구조'}, {courseId : 'cse234', courseName : '운영체제'}])
    // 전체 과목
    const course = [{courseId : 'cse496', courseName : '몰입캠프', credit: 3}, {courseId : 'cse123', courseName : '데이터 구조', credit: 3}, {courseId : 'cse234', courseName : '운영체제', credit: 3}]
    // 사용자가 들은 과목
    const [isheard, setisheard] = useState(['cse496', 'cse123',])

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.!!!');
        console.log(isheard)
      }

    return (
        
        <div>
            <div>{ course.map(e => (<CourseInfo course = {e} taken = {isheard} settaken = {setisheard} />)) } </div>
            <form onSubmit={handleSubmit}>
                <button onclick={() => handleSubmit}> Activate Lasers </button>
            </form>
        </div>
        
    )
}

export default Courses
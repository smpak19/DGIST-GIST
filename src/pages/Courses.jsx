
import React, { useState, useEffect} from 'react';
import CourseInfo from "../Component/CourseInfo";
import data from "./until19.json"
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom'

function Courses( {userId} ) {
    // const [courses, setcourse] = useState([{courseId : 'cse496', courseName : '몰입캠프'}, {courseId : 'cse123', courseName : '데이터 구조'}, {courseId : 'cse234', courseName : '운영체제'}])
    // 전체 과목
    const course = data
    // 사용자가 들은 과목
    const [search, setSearch] = useState('')
    const [isheard, setisheard] = useState([])
    const nav = useNavigate()
    const loc = useLocation()
    
    useEffect(() => {
        console.log(`userId`, {userId})
        const b = {userId}.userId
        axios.get(`http://192.249.18.176:443/user/${b}`).then(result => {
            setisheard(result.data.taken)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        let SI = loc.state
        nav("/result", {state: {arr: isheard, num: SI}})
        axios.post("http://192.249.18.176:443/user", {userid : {userId} , taken : {isheard}, SI: {SI}});
    }


    function getInfo(e) {
        e.preventDefault();
        // console.log('You clicked submit.!!!');
        // console.log(`userId`, {userId}.userId)
        const a = {userId}.userId
        axios.get(`http://192.249.18.176:443/user/${a}`).then(result => {
            setisheard(result.data.taken)
        })
    }
    let style = {
        border: "1px solid black",
        padding: "20px"
    }
    const boxstyle = {
        width : "90%",
        height : "32rem",
        margin : "0 auto",
        overflow: "auto",
        border: "1px solid black"
    }
    const headstyle = {
        width : "90%",
        height : "2rem",
        margin : "0 auto",
        overflow: "auto",
        
    }
    
    let number = {
        width : "5rem"
    }
    let name = {
        width : "17.5rem"
    }
    let type = {
        width : "4.375rem"
    }
    let area = {
        width : "6.25rem"
    }
    let credit = {
        width : "3.125rem",
        textalign: "center"
    }

    return (
        
        <div>
            <div>
                <input type="text" placeholder="Search" onChange={e => {
                    setSearch(e.target.value)
                }}/>
                <button>Search</button>
            </div>
            <div style = {headstyle}>
                <table >
                    <tr style = {style}>
                            <th style = {number}>
                            <b> 과목번호 </b>
                            </th>
                            <th style = {name}>
                                <span> 교과목명  </span>
                            </th>
                            <th style = {type}>
                                <span> 이수구분  </span>
                            </th>
                            <th style = {credit}>
                                <span>학점</span>
                            </th>
                            <th style ={area}>
                                <span> 교과 영역 </span> 
                            </th>
                    </tr>
                </table>
            </div>
            
            
            <div style={boxstyle}>
                { (course.filter((item) => item.과목번호.toLowerCase().includes(search) ||
                     item.과목번호.includes(search) ||
                     item.교과목명.includes(search)))
                     .map(e => (<CourseInfo course = {e} taken = {isheard} settaken = {setisheard} />)) }
             </div>
             <div>
                <form onSubmit={handleSubmit} >
                    <button onClick={() => handleSubmit}>제출하기 </button>
                </form>
                <form onSubmit={getInfo} >
                    <button onClick={() => getInfo}>가져오기 </button>
                </form>
             </div>
        </div>
        
    )
}

export default Courses
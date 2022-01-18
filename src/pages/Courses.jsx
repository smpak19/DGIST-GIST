import React, { useState, useEffect} from 'react';
import CourseInfo from "../Component/CourseInfo";
import data from "./until19.json"
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom'
import "./Courses.css"

function Courses( {userId, setId} ) {
    // const [courses, setcourse] = useState([{courseId : 'cse496', courseName : '몰입캠프'}, {courseId : 'cse123', courseName : '데이터 구조'}, {courseId : 'cse234', courseName : '운영체제'}])
    // 전체 과목
    const course = data
    // 사용자가 들은 과목
    const [search, setSearch] = useState('')
    const [isheard, setisheard] = useState([])
    const nav = useNavigate()
    const loc = useLocation()
    console.log(loc.state)
    
    useEffect(() => {
        if({userId}.userId === '') {
            setId(window.sessionStorage.getItem('Id'))
        } else {
            const b = {userId}.userId
            axios.get(`http://192.249.18.176:443/user/${b}`).then(result => {
                setisheard(result.data.taken)
            })
        }
    }, [userId, setId])

    function handleSubmit(e) {
        e.preventDefault();
        let SI = loc.state
        nav("/result", {state: {arr: isheard, num: SI}})
        axios.post("http://192.249.18.176:443/user", {userid : {userId} , taken : {isheard}, SI: {SI}, School: "dgist", Major: null});
    }


    function getInfo(e) {
        e.preventDefault();
        // console.log('You clicked submit.!!!');
        // console.log(`userId`, {userId}.userId)
        // const a = {userId}.userId
        // axios.get(`http://192.249.18.176:443/user/${a}`).then(result => {
        //     console.log(result)
        //     setisheard(result.data.taken)
        // })
        window.location.replace('/courses')
    }



    return (
        <div className='dgistbackground'>
            <div className='top'/>
            <div className='divgroup1'>
            <div className='searchbody'>
                <input className='searchbutton' type="text" placeholder="Search" onChange={e => {
                    setSearch(e.target.value)
                }}/>
                <button className='searchbutton'>Search</button>
            </div>
            <div className = "boxstyle">
                <table className = "entiretable">
                    <thead>
                        <tr>
                            <td className = "space"></td>
                            <td className = "number"><b> 과목번호 </b></td>
                            <td className = "name"><span> 교과목명  </span></td>
                            <td className = "type"><span> 이수구분  </span></td>
                            <td className = "credit"><span>학점</span></td>
                            <td className = "area"><span> 교과 영역 </span> </td>
                            <td className = "bigo"><span> 비고 </span> </td>
                        </tr>
                    </thead>
                    <tbody>
                        {(course.filter((item) => item.과목번호.toLowerCase().includes(search) ||
                        item.과목번호.includes(search) ||
                        item.교과목명.includes(search) ||
                        item.교과목명.toLowerCase().includes(search) ||
                        item.이수구분.includes(search) ||
                        item.교과영역.includes(search)))
                        .map((e) => (<CourseInfo  key={e.과목번호 + e.교과목명} course = {e} taken = {isheard} settaken = {setisheard}  />)) }
                    </tbody>
                </table>
            </div>
             <div className='searchbody'>
                <form onSubmit={handleSubmit} >
                    <button className='searchbutton' onClick={() => handleSubmit}>제출하기 </button>
                </form>
                <form onSubmit={getInfo} >
                    <button className='searchbutton' onClick={() => getInfo}>가져오기 </button>
                </form>
             </div>
             </div>
             
             <div className='bottom'/>
             
        </div>
        
    )
}

export default Courses
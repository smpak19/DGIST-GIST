import {React,useState,useEffect, useCallback, useRef} from "react";
import {useLocation, Link} from 'react-router-dom'
import { gist, getlimit } from './modelgist.js'
import axios from 'axios';
import './GistResult.css';
import ProgressBar from "../Component/progress.jsx";

// [언어, 인문사회, hus, ppe, 소프트웨어, 기초과학, 새내기, 주전공, 연구, 공통과목, 복/부전공, 무학점필수 , 총학점]
function GistResult( {userId, setId} ) {
    let txt = ["언어", "인문사회", "HUS", "PPE", "소프트웨어", "기초과학", "신입생 세미나, GIST전공탐색", "주전공", "주전공필수", "연구", "대학 공통과목", "복/부전공", "복/부전공 필수", "무학점 필수", "총 학점"]
    const location = useLocation()

    const [arr, setArr] = useState([])
    const [res, setRes] = useState([])
    // major information should be passed 

    const SI = useRef(0)
    const Major = useRef([]) 
    
    const getdata = useCallback((() => {
        if({userId}.userId === '') {
            let newid = window.sessionStorage.getItem('Id')
            setId(newid)
        } else {
            if (location.state === null){
                axios.get(`http://192.249.18.176:443/user/${userId}`).then((result) => {
                    SI.current = result.data.SI
                    Major.current = result.data.Major
                    setArr(gist(result.data.Major, result.data.taken))
                    setRes(getlimit(result.data.SI, result.data.Major))
                }).catch((err) => console.log(err))
            }
            else {
                console.log(gist(location.state.Major, location.state.arr))
                setArr(gist(location.state.Major, location.state.arr))
                setRes(getlimit(location.state.num, location.state.Major))
                SI.current = location.state.num
                Major.current = location.state.Major
            }
        } 
    }), [location.state, userId, setId])
    
    useEffect(() => {
        getdata()
    }, [getdata])

    function mklst() {
        return( 
            txt.map((item, i) =>
                <div key={i} className="resulttable">
                    <div className="resultitem">
                        {item} {arr[i]}학점 이수, {(res[i] - arr[i] > 0)? res[i] - arr[i] +" 학점": arr[i] - res[i] +" 학점"}
                        <span style={ (res[i] - arr[i] > 0) ?{color : 'red'}  : { color:'blue'}} > {(res[i] - arr[i] > 0)?"부족":"초과" }</span>
                    </div>
                    <div>
                        <ProgressBar bgcolor = {"#6a1b9a"} completed = {(arr[i]*100/res[i] >= 100 || res[i] === 0) ? 100 : (arr[i]*100/res[i]).toFixed(1)} />
                        <span className="progressletter"> {(arr[i]*100/res[i] >= 100 || res[i] === 0) ? 100 : (arr[i]*100/res[i]).toFixed(1)}% 이수</span>
                    </div>
                </div>
            )
        )}

    function handlelogout() {
        window.sessionStorage.clear()
        setId('')
    }

    return(
        <div className="mainbackground">
            <div className="top"/>
            <div className="divgroup1">
                <div className="domain">수강 신청 결과</div>
                <div>
                    <div className="buttongroup">
                        <div>
                            <Link to="/gistcourses" state = {{SI: SI.current, major : Major.current}} >
                                <button className="searchbutton">수강 내역 수정</button>
                            </Link>
                            <Link to="/profile">
                                <button className="searchbutton">유저 정보</button>
                            </Link>
                        </div>
                        <Link to="/">
                                <button className="logoutbutton" onClick={() => handlelogout()}>로그아웃</button>
                        </Link>
                    </div>
                </div>
                <div className="resultbody">
                {mklst()}
                </div>
            </div>
            <div className="bottom"/>
        </div>
    )
}

export default GistResult
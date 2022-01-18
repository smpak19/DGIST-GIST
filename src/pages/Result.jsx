import {React,useState,useEffect, useCallback, useRef} from "react";
import {useLocation, Link} from 'react-router-dom'
import { ratio19, getlimit } from './model.js'
import axios from 'axios';
import './Result.css';
import ProgressBar from "../Component/progress.jsx";

function Result( {userId, setId} ) {
    let txt = ["공통필수", "교선필수", "수학", "물리", "화학", "생물", "컴퓨터, 자동제어, 통계, 디자인공학", "융복합(UGRP, 기타)", "영어", "리더십", "음악, 체육", "인문사회, 기술경영", "융복합 이학사", "융복합 공학사"]
    const location = useLocation()

    const [arr, setArr] = useState([])
    const [res, setRes] = useState([])
    
    const SI = useRef(0) 
    
    const getdata = useCallback((() => {
        if({userId}.userId === '') {
            let newid = window.sessionStorage.getItem('Id')
            setId(newid)
        } else {
            if (location.state === null){
                axios.get(`http://192.249.18.176:443/user/${userId}`).then((result) => {
                    // await console.log("result data", result.data)
                    // console.log(`data`, data)
                    // arr = ratio19(data, 19)
                    SI.current = result.data.SI
                    setArr(ratio19(result.data.taken))
                    setRes(getlimit(result.data.SI))
                    // mklst()
                }).catch((err) => console.log(err))
            }
            else {
                setArr(ratio19(location.state.arr))
                setRes(getlimit(location.state.num))
                SI.current = location.state.num
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
                        <ProgressBar bgcolor = {"#6a1b9a"} completed = {(arr[i]*100/res[i] >= 100) ? 100 : (arr[i]*100/res[i]).toFixed(1)} />
                        <span className="progressletter"> {(arr[i]*100/res[i] >= 100) ? 100 : (arr[i]*100/res[i]).toFixed(1)}% 이수</span>
                    </div>
                </div>
            )
        )}

    function handlelogout() {
        window.sessionStorage.clear()
        setId('')
    }

    return(
        <div className="dgistbackground">
            <div className="top"/>
            <div className="divgroup1">
                <div className="domain">수강 신청 결과</div>
                <div>
                    <div className="buttongroup">
                        <div>
                            <Link to="/courses" state={SI.current} >
                                <button className="searchbutton">수강 내역 수정</button>
                            </Link>
                            <Link to="/profile" state = {{SI: SI.current, school: "DGIST"}}>
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

export default Result
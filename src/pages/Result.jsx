import {React,useState,useEffect, useCallback} from "react";
import {useLocation, Link} from 'react-router-dom'
import { ratio19, getlimit } from './model.js'
import axios from 'axios';

function Result( {userId, usernum} ) {
    let txt = ["공통필수", "교선필수", "수학", "물리", "화학", "생물", "컴퓨터, 자동제어, 통계, 디자인공학", "융복합(UGRP, 기타)", "영어", "리더십", "음악, 체육", "인문사회, 기술경영"]
    const location = useLocation()

    const [arr, setArr] = useState([])
    const [res, setRes] = useState([]) 
    
    console.log(`loc state`, location.state)
    
    const getdata = useCallback((() => {
        if (location.state === null){
            axios.get(`http://192.249.18.176:443/user/${userId}`).then((result) => {
                // await console.log("result data", result.data)
                // console.log(`data`, data)
                // arr = ratio19(data, 19)
                console.log(result.data)
                setArr(ratio19(result.data.taken))
                setRes(getlimit(result.data.SI))
                // mklst()
            }).catch((err) => console.log(err))
        }
        else {
            setArr(ratio19(location.state.arr))
            setRes(getlimit(location.state.num))
        }
    }), [location.state, userId])
    
    useEffect(() => {
        getdata()
    }, [getdata])

    function mklst() {
        return( 
            txt.map((item, i) =>
                <div>
                    <h2>
                        {item} {arr[i]}학점 이수, {res[i] - arr[i]}학점 부족
                    </h2>
                    <progress value = {arr[i]/ res[i]} max = "1"></progress>
                    <span> {arr[i]*100/res[i]}% 이수</span>
                </div>
            )
        )}

    return(
        <div> 
            <div>
                <Link to="/">
                    <button>Logout</button>
                </Link>
                <Link to="/courses">
                    <button>Edit lecture list</button>
                </Link>
                <Link to="/profile">
                    <button>User Info</button>
                </Link>
            </div>
            {mklst()}
        </div>
    )
}

export default Result
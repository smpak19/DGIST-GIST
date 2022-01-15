import React from "react";
import {useLocation, Link} from 'react-router-dom'
import { ratio19, getlimit } from './model.js'

function Result() {
    let txt = ["공통필수", "교선필수", "수학", "물리", "화학", "생물", "컴퓨터, 자동제어, 통계, 디자인공학", "융복합(UGRP, 기타)", "영어", "리더십", "음악, 체육", "인문사회, 기술경영"]
    const location = useLocation()
    const num = Number(location.state.num)
    let arr = ratio19(location.state.arr, num)
    let res = getlimit(num)

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
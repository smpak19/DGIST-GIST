import React from "react";
import {useLocation} from 'react-router-dom'
import { ratio19, ratio20 } from './model.js'

function Result() {

    const location = useLocation()
    const num = Number(location.state.num)
    let arr = []

    if(num > 19) {
        arr = ratio20(location.state.arr, num) 
    } else {
        arr = ratio19(location.state.arr, num)
    }
    console.log(location.state)
    return(
        <div>
            <h1>gongtong pilsu {arr[1]}</h1>
            <h1>gyosun pilsu {arr[0]}</h1>
            <h1>math {arr[2]}</h1> 
            <h1>phy {arr[3]}</h1>
            <h1>chem {arr[4]}</h1>
            <h1>bio {arr[5]}</h1>
            <h1>comset {arr[6]}</h1>
            <h1>ugrp {arr[7]}</h1>
            <h1>eng {arr[8]}</h1>
            <h1>leader {arr[9]}</h1>
            <h1>music {arr[10]}</h1>
            <h1>lit {arr[11]}</h1>
        </div>
    )
}

export default Result
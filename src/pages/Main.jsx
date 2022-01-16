import React from "react";
import {Link} from "react-router-dom"
import './Main.css'

function Main() {
    return (
        <>
            <div className="top"/>
            <div className="domain">DGIST 졸업요건 계산기</div>
            <div className="mainbody">
                <div className="start">
                    <Link to ="/login">
                        <button >시작하기</button>
                    </Link> 
                </div>
                <div className="editor">Made by Junyoung, Junseo, Seungmin</div>
            </div>
        </>
    )
}

export default Main
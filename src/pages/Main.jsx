import React from "react";
import {Link} from "react-router-dom"
import './main.css'

function Main() {
    return (
        <div className="Main">
             <header className ="Header">
                <h1>치타는 오늘도 달리고 있다.</h1>
            </header>

            <div className= "Body">
                <h1>DGIST 졸업요건 계산기</h1>
                <Link to ="/login">
                    <button><h3>시작하기</h3></button>
                </Link> 
            </div>

            <footer className= "Footer">
               <h4>
                <p>Made by Junyoung, Junseo, Seungmin</p>   
                </h4> 
            </footer>
        </div>
    )
}

export default Main
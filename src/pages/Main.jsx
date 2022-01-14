import React from "react";
import {Link} from "react-router-dom"
import './main.css'

function Main() {
    return (
        <div className="Main">
             <header className ="Header">
                <h1>Madcamp week 3</h1>
            </header>

            <div className= "Body">
                <h1>DGIST-UNIST-GIST</h1>
                <Link to ="/survey">
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
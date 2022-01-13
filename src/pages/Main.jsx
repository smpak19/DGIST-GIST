import React from "react";
import {Link} from "react-router-dom"

function Main() {
    return (
        <div className="Main">
            <h1>
                This is Main Screen
            </h1>
            <hr/>
            <Link to ="/login">
            <button>시작하기</button>
            </Link>
        </div>
    )
}

export default Main
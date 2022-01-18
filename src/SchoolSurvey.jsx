import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import './SchoolSurvey.css';

function SchoolSurvey({userId, setId}) {

    useEffect(() => {
        if({userId}.userId === '') {
            setId(window.sessionStorage.getItem('Id'))
        }
    }, [setId, userId]);

    return(
        <div className="mainbackground">
            <div className="maintop"/>
            <div className="divgroup3">
                <div className="domain">학교 선택</div>
                <div className="schoolchoosebutton">
                    <Link to="/survey">
                        <button className="schoolbutton">DGIST</button>
                    </Link>
                    <Link to= "/gistsurvey">
                        <button className="schoolbutton">GIST</button>
                    </Link>
                </div>
            </div>
            <div className="bottom"/>
        </div>
    )
}

export default SchoolSurvey
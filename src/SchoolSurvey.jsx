import {React, useEffect} from "react";
import { Link } from "react-router-dom";

function SchoolSurvey({userId, setId}) {

    useEffect(() => {
        if({userId}.userId === '') {
            setId(window.sessionStorage.getItem('Id'))
        }
    }, [setId, userId]);

    return(
        <div>
            <Link to="/survey">
                <button>DGIST</button>
            </Link>
            <Link to= "/gistsurvey">
                <button>GIST</button>
            </Link>
        </div>
    )
}

export default SchoolSurvey
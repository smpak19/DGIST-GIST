import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';

function Profile({userId, setId}) {

    function handlelogout() {
        window.sessionStorage.clear()
        setId('')
    }

    useEffect(() => {
        if({userId}.userId === '') {
            setId(window.sessionStorage.getItem('Id'))
        }
    }, [setId, userId]);


    return (
     <div>
        <div>
            <Link to="/">
                <button onClick={() => handlelogout()}>Logout</button>
            </Link>
            <Link to="/courses">
                <button>Edit lecture list</button>
            </Link>
            <Link to="/result">
                <button>Back to result</button>
            </Link> 
            </div>
        <h1>hello, {userId}, from {window.sessionStorage.getItem('Provider')}</h1>
     </div> 
    )
}




export default Profile;
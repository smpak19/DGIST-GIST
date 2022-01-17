import {Link} from 'react-router-dom'
import React, { useEffect } from 'react';
import './Profile.css'

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
     <div className='mainbackground'>
        <div className='maintop'/>
        <div className='divgroup2'>
            <div className='domain'>프로필</div>
            <div className='buttongroup1'>
                <div>
                    <Link to="/result">
                        <button className="searchbutton">결과 보기</button>
                    </Link>     
                    <Link to="/courses">
                        <button className="searchbutton">강의 목록 추가</button>
                    </Link>
                </div>
                    <Link to="/">
                        <button className='logoutbutton1' onClick={() => handlelogout()}>로그아웃</button>
                    </Link>
            </div>
            <div className='hellouser'>hello, {userId}, from {window.sessionStorage.getItem('Provider')}</div>
        </div>
        <div className='bottom'/>
     </div> 
    )
}




export default Profile;
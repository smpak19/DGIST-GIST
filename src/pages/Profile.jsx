import {Link, useLocation} from 'react-router-dom'
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

    const loc = useLocation()
    const SI = loc.state.SI
    const sch = loc.state.school
    const major = loc.state.major

    const btns = () => (sch === "GIST") ? (
        <div>
        <div className='buttongroup1'>
                <div>
                    <Link to="/gistresult">
                        <button className="searchbutton">결과 보기</button>
                    </Link>     
                    <Link to="/gistcourses">
                        <button className="searchbutton" state = {{SI: SI, major : major}}>강의 목록 추가</button>
                    </Link>
                </div>
                    <Link to="/">
                        <button className='logoutbutton1' onClick={() => handlelogout()}>로그아웃</button>
                    </Link>
            </div>
                <div>
                    <h1>전공 현황</h1>
                    <h1>주전공: {major.전공명1}</h1>
                    <h1>복/부전공: {major.전공명2}</h1>
                </div>
        </div>
    ) : (
        <div className='buttongroup1'>
                <div>
                    <Link to="/result">
                        <button className="searchbutton">결과 보기</button>
                    </Link>     
                    <Link to="/courses">
                        <button className="searchbutton" state = {{SI: SI}}>강의 목록 추가</button>
                    </Link>
                </div>
                    <Link to="/">
                        <button className='logoutbutton1' onClick={() => handlelogout()}>로그아웃</button>
                    </Link>
            </div>
    )

    return (
     <div className='mainbackground'>
        <div className='maintop'/>
        <div className='divgroup2'>
            <div className='domain'>프로필</div>
            {btns()}
            <div className='hellouser'>
            <h3>안녕하세요, {sch} {SI}학번 {userId}님</h3>
            <h4>login state: {window.sessionStorage.getItem('Provider')}</h4>
            </div>
        </div>
        <div className='bottom'/>
     </div> 
    )
}




export default Profile;
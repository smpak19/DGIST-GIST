import axios from 'axios';
import React from 'react';
import {useNavigate} from "react-router-dom"
import './Login.css';


function Login( {getId} ) {
	const nav = useNavigate();
	const REST_API_KEY = "a77e93ca6119c6cecfe89bad506f9e1b";
	const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	function handleClick(e) {
		e.preventDefault();
		var json = {id: e.target.id.value, pw: e.target.pw.value};

		axios.post('http://192.249.18.176:443/kakao', json).then( res => {
			// console.log(`res.data`, res.data)
			if( res.data === "courses"){
				getId(e.target.id.value)
				window.sessionStorage.setItem('Id', e.target.id.value);
				window.sessionStorage.setItem('Provider', 'Normal')
				nav("/result")
			}
			if( res.data === "correct"){
				getId(e.target.id.value)
				window.sessionStorage.setItem('Id', e.target.id.value);
				window.sessionStorage.setItem('Provider', 'Normal')
				nav("/survey")
			}
		});
  }
  return (
	<>
		<div className='top'/>
		<div className='domain'>로그인</div>
		<div className='loginbody'>
			<form onSubmit={handleClick}>
				<div className='loginparent'>
					<div className='loginchild'> 
						<div>
							<input className='inputid' name="id" type = "text"  placeholder='user ID' required/>
						</div>
						<div>
							<input className='inputpw' name="pw" type = "password" placeholder='password' required/>
						</div>
					</div>
					<button className='loginbutton' type="submit">로그인</button>
				</div>
			</form>
			<div><a href={KAKAO_AUTH_URL}>카카오톡으로 로그인하기</a></div>
			<div><a href="/register">회원가입</a></div>
		</div>
	</>
  );
}

export default Login;
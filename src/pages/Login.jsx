import axios from 'axios';
import React from 'react';
import {Link, useNavigate} from "react-router-dom"


function Login( {getId} ) {
	const nav = useNavigate();
	const REST_API_KEY = "a77e93ca6119c6cecfe89bad506f9e1b";
	const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	function handleClick(e) {
		e.preventDefault();
		var json = {id: e.target.id.value, pw: e.target.pw.value};

		axios.post('http://192.249.18.176:443/login', json).then( res => {
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
      <h1>login</h1>
			<form onSubmit={handleClick}>
				<div>
					<label>ID : </label>
					<input name="id" type = "text"  placeholder='user ID' required/>
				</div>
				<div>
					<label>PW : </label>
					<input name="pw" type = "password" placeholder='password' required/>
				</div>
				<button type="submit">로그인</button>
				<Link to = "/register">
				<button type='submit'>회원가입</button>
				</Link>
				<div>
					<a href={KAKAO_AUTH_URL}>Kakao Login</a>
				</div>
			</form>
      </>
    
  );
}

export default Login;
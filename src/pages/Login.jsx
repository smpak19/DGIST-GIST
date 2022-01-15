import axios from 'axios';
import React, { useState } from 'react';
import {Link} from "react-router-dom"


function Login() {

	const REST_API_KEY = "a77e93ca6119c6cecfe89bad506f9e1b";
	const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	function handleClick(e) {
		e.preventDefault();
    
		console.log(e.target.id.value);
    console.log(e.target.pw.value);
		
		var json = {id: e.target.id.value, pw: e.target.pw.value};

		axios.post('http://192.249.18.176:443/login', json);
  }
  return (
    <>
      <h1>login</h1>
			<form onSubmit={handleClick}>
				<div>
					<text>ID : </text>
					<input name="id" type = "text"  placeholder='user ID' required/>
				</div>
				<div>
					<text>PW : </text>
					<input name="pw" type = "password" placeholder='password' required/>
				</div>
				<button type="submit">로그인</button>
				<Link to = "/register">
				<button>회원가입</button>
				</Link>
				<div>
					<a href={KAKAO_AUTH_URL}>Kakao Login</a>
				</div>
			</form>
      </>
    
  );
}

export default Login;
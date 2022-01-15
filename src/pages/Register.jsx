import axios from 'axios';
import React, { useState } from 'react';


function Register() {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
    const [rpw, setRpw] = useState('');

	function handleClick(e) {
		e.preventDefault();
    
		console.log(e.target.id.value);
        console.log(e.target.pw.value);
        console.log(e.target.rpw.value);

        if(e.target.pw.value == e.target.rpw.value){
            var json = {id: e.target.id.value, pw: e.target.pw.value};
		    axios.post('http://192.249.18.176:443/register', json);
        }
        else{
            window.alert('wrong password');
        }
		
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
                <div>
					<text>Confirm PW : </text>
					<input name="rpw" type = "password" placeholder='password' required/>
				</div>
				<button type="submit">회원가입</button>
				
			</form>
      </>
    
  );
}

export default Register;
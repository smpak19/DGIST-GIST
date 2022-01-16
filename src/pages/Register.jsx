import axios from 'axios';
import React from 'react';
import {useNavigate} from "react-router-dom"


function Register() {
    const nav = useNavigate()

	function handleClick(e) {
		e.preventDefault();
    
		// console.log(e.target.id.value);
        // console.log(e.target.pw.value);
        // console.log(e.target.rpw.value);

        if(e.target.pw.value === e.target.rpw.value){
            var json = {id: e.target.id.value, pw: e.target.pw.value};

		    axios.post('http://192.249.18.176:443/register', json).then((res) =>{
                if(res.data === "duplicated ID"){
                    window.alert('duplicated ID');
                }
                else{
                    nav("/login", {id: e.target.id.value, pw: e.target.pw.value})
                    // console.log(res.data)
                }
            });

        }
        else{
            window.alert('wrong password');
        }
		
  }
  return (
    <>

      <h1>Register</h1>
			<form onSubmit={handleClick}>
				<div>
					<label>ID : </label>
					<input name="id" type = "text"  placeholder='user ID' required/>
				</div>
				<div>
					<label>PW : </label>
					<input name="pw" type = "password" placeholder='password' required/>
				</div>
                <div>
					<label>Confirm PW : </label>
					<input name="rpw" type = "password" placeholder='password' required/>
				</div>


				<button type='submit'>회원가입</button>
								
			</form>
      </>
    
  );
}

export default Register;
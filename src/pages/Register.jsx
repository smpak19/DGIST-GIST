import axios from 'axios';
import React from 'react';
import {useNavigate} from "react-router-dom"
import './Register.css';


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
    <div className='mainbackground'>
		<div className='maintop'/>
		<div className='divgroup'>
			<div className='domain'>회원가입</div>
			<div className='registerbody'>
				<form onSubmit={handleClick}>
					<div className='registerparent'>
						<div className='registerchild'> 
							<div>
								<input className='inputid' name="id" type = "text"  placeholder='user ID' required/>
							</div>
							<div>
								<input className='inputpw' name="pw" type = "password" placeholder='password' required/>
							</div>
							<div>
								<input className='inputrpw' name="rpw" type = "password" placeholder='confirm password' required/>
							</div>
						</div>
						<button className = "registerbutton" type='submit'>회원가입</button>
					</div>
				</form>
			</div>
		</div>
		<div className='bottom'/>
	</div>
    
  );
}

export default Register;
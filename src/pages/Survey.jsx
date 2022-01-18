import {React, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import './Survey.css';


let anslist = []

function Survey( {userId, setId} ) {

    console.log(`userId`, {userId})
    const survey = {
    question: "학번을 선택해주세요.",
    answers: [{text: "14"} ,{text: "15"} ,{text: "16"}, {text: "17"}, {text: "18"}, {text: "19"}]
    }
    const nav = useNavigate()

    const handleClick = (text) => {
        anslist.push(text)
        nav("/courses", {state: text})
    }
    
    useEffect(() => {
        if({userId}.userId === '') {
            setId(window.sessionStorage.getItem('Id'))
        }
    }, [setId, userId]);
   
   return(
        <div className="dgistbackground">
            <div className="maintop"/>
            <div className="divgroup">
                <div className="domain">Survey</div>
                <div className="surveybody">
                    <div className="userid">user ID : {userId}</div>
                    <div className="question">{survey.question}</div>
                    <div>
                        {survey.answers.map((ans) => 
                        <button key = {ans.text} className="answer" value={ans.text} onClick={() => handleClick(ans.text)}>{ans.text}</button>)}
                    </div>
                </div>
            </div>
            <div className="bottom"/>
        </div>
   ) 
}

export default Survey
import {React, useEffect} from "react";
import {useNavigate} from "react-router-dom"


let anslist = []

function Survey( {userId, setId} ) {

    console.log(`userId`, {userId})
    const survey = {
    id: 1,
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
        <>
            <div className="top"/>
            <div className="domain">Survey</div>
            <div>
                <div>
                    <div>
                        <h1>
                            <span>{survey.id}</span>
                            <span>{userId}</span>
                        </h1>
                        <h1>
                            {survey.question}
                        </h1>
                    </div>
                    <div className="Answer">
                            {survey.answers.map((ans, i) => 
                            <button key={i} value={ans.text} onClick={() => handleClick(ans.text)}>{ans.text}</button>)}
                    </div>
                </div>
            </div>
        </>
   ) 
}

export default Survey
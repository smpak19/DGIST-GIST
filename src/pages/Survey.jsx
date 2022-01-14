import React from "react";
import { useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom"


let anslist = []

function Survey() {
   const [surNo, setSurNo] = useState(0)
   const survey = [{
       id: 1,
       question: "학교를 선택해주세요.",
       answers: [{text: "DGIST"}, {text: "GIST"}, {text: "UNIST"}]
   },
   {
    id: 2,
    question: "학번을 선택해주세요.",
    answers: [{text: "16"}, {text: "17"}, {text: "18"}, {text: "19"}, {text: "20"}, {text: "21"}]
    }
    ]
    const nav = useNavigate()

    const handleClick = (text) => {
        anslist.push(text)
        setSurNo(surNo + 1)
        if(surNo === 1) {
            nav(`/survey/${anslist[0].toLowerCase()}`, {replace: true})
        }
    } 
   
   return(
       <div>
           <div>
               <div className="Quiz">
                <h1>
                    <span>{survey[surNo].id}/</span>{survey.length}
                </h1>
                <h1>
                    {survey[surNo].question}
                </h1>
               </div>
               <div className="Answer">
                    {survey[surNo].answers.map((ans) => 
                    <button value={ans.text} onClick={() => handleClick(ans.text)}>{ans.text}</button>)}
               </div>
           </div>
       </div>
   ) 
}

export default Survey
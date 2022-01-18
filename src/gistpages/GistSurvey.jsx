import {React, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import './GistSurvey.css';



function GistSurvey( {userId, setId} ) {

    console.log(`userId`, {userId})
    const survey = {
    question: "학번을 선택해주세요.",
    answers: [{text: "15"} ,{text: "16"}, {text: "17"}, {text: "18"}, {text: "19"}, {text: "20"}, {text: "21"}]
    }
    const nav = useNavigate()

    const option1 = [
        {value : "single", name: "단일전공"},
        {value : "double", name: "복수전공"},
        {value : "semi", name: "부전공"},
    ]

    // major
    const option2 = [
        {value : "none", name: "복수/부전공"},
        {value : "phy", name: "물리전공"},
        {value : "chem", name: "화학전공"},
        {value : "bio", name: "생명과학전공"},
        {value : "ee", name: "전기전자컴퓨터전공"},
        {value : "mech", name: "기계공학전공"},
        {value : "material", name: "신소재공학전공"},
        {value : "eco", name: "지구환경공학전공"},
        {value : "math", name: "수학부전공"},
        {value : "energy", name: "에너지부전공"},
        {value : "med", name: "의생명공학부전공"},
        {value : "cult", name: "문화기술부전공"},
        {value : "robot", name: "지능로봇부전공"},
        {value : "chembu", name: "화학부전공"},
        {value : "phybu", name: "물리부전공"},
        {value : "biobu", name: "생명과학부전공"},
        {value : "ecobu", name: "지구환경공학부전공"},
        {value : "mechbu", name: "기계공학부전공"},
        {value : "materialbu", name: "신소재공학부전공"},
        {value : "eebu", name: "전기전자컴퓨터부전공"},
    ]

    const option4 = [
        {value : "none", name: "주전공"},
        {value : "phy", name: "물리전공"},
        {value : "chem", name: "화학전공"},
        {value : "bio", name: "생명과학전공"},
        {value : "ee", name: "전기전자컴퓨터전공"},
        {value : "mech", name: "기계공학전공"},
        {value : "material", name: "신소재공학전공"},
        {value : "eco", name: "지구환경공학전공"},
    ]
    
    useEffect(() => {
        if({userId}.userId === '') {
            setId(window.sessionStorage.getItem('Id'))
        }
    }, [setId, userId]);

    const [input, setInput] = useState('')
    const [op1, setOp1] = useState('single')
    const [op2, setOp2] = useState('')
    const [op3, setOp3] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleChange1 = (e) => {
        setOp1(e.target.value)
    }
    const handleChange2 = (e) => {
        setOp2(e.target.value)
    }
    const handleChange3 = (e) => {
        setOp3(e.target.value)
    }

    function onclick() {
        nav('/gistcourses', {state: {SI: input, major: {"전공타입":op1, "전공명1":op2, "전공명2":op3}}})
    }
   
   return(
        <div className="gistbackground">
            <div className="gisttop"/>
            <div className="divgroup4">
                <div className="domain">학과 선택</div>
                <div className="optiongroup">
                    <select className="option" onChange={handleChange1}>
                        {option1.map((option) => (
                        <option  key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                    </select>
                    <select className="option" onChange={handleChange2}>
                        {option4.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                    </select>
                    <select className="option" onChange={handleChange3}>
                        {option2.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="chooseresult">
                    {survey.answers.map((ans) =>
                    <div>
                    <input key = {ans.text} id={ans.text} type="radio" checked={input === ans.text}  value={ans.text} onChange={handleChange}/>
                    <span>{ans.text}학번</span>
                    </div>
                    )}   
                </div>
                <div>
                    <button className="gistresult" onClick={() => onclick()}>입력</button>
                </div>
            </div>
            <div className="bottom" />
        </div>
   ) 
}

export default GistSurvey
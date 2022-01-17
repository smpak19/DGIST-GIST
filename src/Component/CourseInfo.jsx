import {React, useState, useEffect} from "react";
import "./CourseInfo.css"


function CourseInfo({course, taken, settaken}) {
    const {과목번호,교과목명,이수구분,교과영역,학점,비고} = course;
    const takencourse = taken;
    const [checkbox, setcheckbox] = useState(false);
    const [ishover, setishover]= useState(false);
    const [isLoaded, setLoad] = useState(false);

    // let takenthiscourse = false; 
    useEffect(() => {
        if(!isLoaded) {
            takencourse.forEach((e)=>{
                if(e.과목번호 === 과목번호 && e.교과목명 === 교과목명) {
                    setcheckbox(true)
                    setLoad(true) 
                }
            })
        } 
     }
    , [takencourse, 과목번호, isLoaded, 교과목명]) 

    function handleCheck(e) {
        console.log('You clicked submit.');
        if(checkbox){
            setcheckbox(false)
            settaken(taken.filter(tkn => (tkn.교과목명 !== course.교과목명) || (tkn.과목번호 !== course.과목번호) ))
            console.log(taken)
        }
        else {
            const nextstate = [...takencourse, course]
            setcheckbox(true)
            settaken(nextstate)
            console.log(taken)
        }
      }


    return ( 
        <tr  className="style1" onClick={() => handleCheck()}>
                <td>
                    <input type = "checkbox" 
                    onChange={() => 1}
                    checked = {checkbox} />
                </td>
                <td className="number">
                <b> {과목번호} </b>
                </td>
                <td className = "name">
                    {교과목명}  
                </td>
                <td className = "type">
                    {이수구분} 
                </td>
                <td className = "credit">
                    {학점}
                </td>
                <td className = "area">
                    {교과영역}
                </td>
                <td className = "space">
                    <span onMouseOver={() => setishover(true)}
                onMouseOut={() => setishover(false)}>
                    {ishover ? "" : "비고 보기"}
                    {ishover ? 비고 : ""}
                </span></td>
        </tr>
       
        
    )
}

export default CourseInfo
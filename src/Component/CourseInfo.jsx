
import {React, useState} from "react";


function CourseInfo({course, taken, settaken}) {
    const {과목번호,교과목명,이수구분,교과분야,교과영역,학위구분,학점,비고} = course;
    const takencourse = taken;

    let takenthiscourse = false; 
    takencourse.forEach((e)=>{
        if(e === course) takenthiscourse = true;
    })

    const [checkbox, setcheckbox] = useState(takenthiscourse);

    function handleCheck(e) {
        
        console.log('You clicked submit.');
        if(checkbox){
            setcheckbox(false)
            settaken(taken.filter(tkn => tkn !== course))
            console.log(taken)
        }
        else {
            const nextstate = [...takencourse, course]
            setcheckbox(true)
            settaken(nextstate)
            console.log(taken)
        }
      }

      let style = {
          border: "1px solid black"
      }

    return (
        <div style={style}>
            <b> {과목번호} </b>
            <span> {교과목명} / </span>
            <span> {이수구분} / </span>
            <span> {교과분야} / </span>
            <span> {교과영역} / </span>
            <span> {학위구분} / </span>
            <span> {비고} </span>
            <input 
                type = "checkbox" 
                onChange={()=>handleCheck()}
                checked = {checkbox} />
            <span>{학점}</span>
        </div>
    )
}

export default CourseInfo
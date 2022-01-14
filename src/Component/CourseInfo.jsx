import { set } from "mongoose";
import {React, useState} from "react";


function CourseInfo({course, taken, settaken}) {
    const {courseId, courseName, credit} = course;
    const takencourse = taken;

    let takenthiscourse = false; 
    takencourse.forEach((e)=>{
        if(e == courseId) takenthiscourse = true;
    })

    const [checkbox, setcheckbox] = useState(takenthiscourse);

    function handleCheck(e) {
        
        console.log('You clicked submit.');
        if(checkbox){
            setcheckbox(false)
            settaken(taken.filter(tkn => tkn !== courseId))
            console.log(taken)
        }
        else {
            const nextstate = [...takencourse, courseId]
            setcheckbox(true)
            settaken(nextstate)
            console.log(taken)
        }
      }
    return (
        <div >
            <b> {courseId} </b>
            <span> {courseName} </span>
            <input 
                type = "checkbox" 
                onChange={()=>handleCheck()}
                checked = {checkbox} />
            <span>{credit}</span>
        </div>
    )
}

export default CourseInfo
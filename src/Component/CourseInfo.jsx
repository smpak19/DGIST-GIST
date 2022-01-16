
import {React, useState, useEffect} from "react";
import { defaultWidth } from "survey-react";


function CourseInfo({course, taken, settaken,index}) {
    const {과목번호,교과목명,이수구분,교과분야,교과영역,학위구분,학점,비고} = course;
    const takencourse = taken;
    const [checkbox, setcheckbox] = useState(false);
    // let takenthiscourse = false; 
    useEffect(() => {
        takencourse.forEach((e)=>{
            // if(e.과목번호 == 과목번호)
            //     console.log(e.과목번호, 과목번호)
            if(e.과목번호 == 과목번호) {
                // console.log(`hello`)
                // takenthiscourse = true;
                setcheckbox(true)
            }
        })
    }, [taken])

    

    // const [checkbox, setcheckbox] = useState(takenthiscourse);

    function handleCheck(e) {
        if(checkbox){
            setcheckbox(false)
            settaken(taken.filter(tkn => tkn.과목번호 !== course.과목번호))
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
        border: "1px solid black",
        padding: "20px"
    }
    let number = {
        width : "5rem"
    }
    let name = {
        width : "17.5rem"
    }
    let type = {
        width : "4.375rem"
    }
    let area = {
        width : "6.25rem"
    }
    let credit = {
        width : "3.125rem",
        textalign: "center"
    }


    return (
        <div style={style}>
            <table>
                <td style ={number}>
                <b> {과목번호} </b>
                </td>
                <td style ={name}>
                    <span> {교과목명}  </span>
                </td>
                <td style ={type}>
                    <span> {이수구분}  </span>
                </td>
                <td style ={credit}>
                    <span>{학점}</span>
                </td>
                <td style ={area}>
                    <span>{교과영역}</span>
                </td>
                <td>
                    <input 
                    type = "checkbox" 
                    onChange={()=>handleCheck()}
                    checked = {checkbox} />
                </td>

            </table>
            
            
            
            {/* <span> {교과분야}  / </span>
            <span> {교과영역}  / </span>
            <span> {학위구분}  / </span>
            <span> {비고} </span> */}
            
            
        </div>
    )
}

export default CourseInfo
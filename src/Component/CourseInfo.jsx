import {React, useState, useEffect} from "react";


function CourseInfo({course, taken, settaken}) {
    const {과목번호,교과목명,이수구분,교과분야,교과영역,학위구분,학점,비고} = course;
    const takencourse = taken;
    const [checkbox, setcheckbox] = useState(false);
    const [ishover, setishover]=useState(false);
    // let takenthiscourse = false; 
    useEffect(() => {
        takencourse.forEach((e)=>{
            // if(e.과목번호 == 과목번호)
            //     console.log(e.과목번호, 과목번호)
            if(e.과목번호 === 과목번호) {
                // console.log(`hello`)
                // takenthiscourse = true;
                setcheckbox(true)
            }
        })
    }, [takencourse, 과목번호])

    let takenthiscourse = false; 
    takencourse.forEach((e)=>{
        if(e === course) takenthiscourse = true;
    })

    

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

    let style1 = {
        border: "1px solid black",
        border_top : "1px solid black",
        bgcolor:"black"
    }
    let number = {
        width : "5rem",
        padding : "10px"
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
        <tr style={style1} onClick={() => handleCheck()}>
                <td >
                    <input type = "checkbox" 
                    onChange={() => 1}
                    checked = {checkbox} />
                </td>
                <td style ={number}>
                <b> {과목번호} </b>
                </td>
                <td style ={name}>
                    {교과목명}  
                </td>
                <td style ={type}>
                    {이수구분} 
                </td>
                <td style ={credit}>
                    {학점}
                </td>
                <td style ={area}>
                    {교과영역}
                </td>
                <td><span onMouseOver={() => setishover(true)}
                onMouseOut={() => setishover(false)}>
                    {ishover ? "" : "비고 보기"}
                    {ishover ? 비고 : ""}
                </span></td>
                            
            {/* <span> {교과분야}  / </span>
            <span> {교과영역}  / </span>
            <span> {학위구분}  / </span>
            <span> {비고} </span> */}
        </tr>
       
        
    )
}

export default CourseInfo
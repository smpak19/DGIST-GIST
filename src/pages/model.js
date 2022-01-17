
function ratio19(arr) {
    let gyo = 0
    let gong = 0
    let math = 0
    let phy = 0
    let chem = 0
    let bio = 0
    let comset = 0
    let ugrp = 0
    let eng = 0
    let leader = 0
    let music = 0
    let lit = 0
    let yg = 0
    let ye = 0

    // 공필, 교필 학점 확인
    for (var i = 0 ; i < arr.length; i++) {
        // console.log("length of arr ", arr.length)
        // console.log(`학점 `, arr[i].학점 )
        if(arr[i].이수구분 === '교선필수') {
            gyo += arr[i].학점
            if (arr[i].교과분야 === "인문소양"){
                lit += arr[i].학점
            }
            if((arr[i].교과목명.includes('(이)') || arr[i].교과목명.includes('(이.공)'))) {
                ye += arr[i].학점
            } else if((arr[i].교과목명.includes('(공)') || arr[i].교과목명.includes('(이.공)'))) {
                yg += arr[i].학점
            }
        } else {
            gong += arr[i].학점

            let name = arr[i].과목번호

            if(['BS101', 'BS102a', 'BS202', 'BS203', 'SE202b'].includes(name)) {
                math += arr[i].학점
            } else if(['BS103', 'BS104a', 'BS107a', 'BS108a', 'BS105', 'BS106'].includes(name)) {
                phy += arr[i].학점
            } else if(['BS113', 'BS118', 'BS119'].includes(name)) {
                chem += arr[i].학점
            } else if(['BS114', 'BS115', 'BS116', 'LS204'].includes(name)) {
                bio += arr[i].학점
            } else if(['BE101a', 'SE211a', 'MECH309', 'TP101'].includes(name)) {
                comset += arr[i].학점
            } else if(['RP301', 'RP302'].includes(name)) {
                ugrp += arr[i].학점
            } else if(['GC101', 'GC102', 'HSS301a'].includes(name)) {
                eng += arr[i].학점
            } else if(['HL205', 'HL206', 'HL304', 'HL305'].includes(name)) {
                leader += arr[i].학점
            } else if(['HL103','HL104', 'HL105', 'HL106'].includes(name)){
                music += arr[i].학점
            } else if(arr[i].교과분야 === "인문소양") {
                lit += arr[i].학점
            }

            
        }
        // console.log(`학점쓰`, gong, gyo, math)
    }
    
    return [gong, gyo, math, phy, chem, bio, comset, ugrp, eng, leader, music, lit, ye, yg]
}

function getlimit(num) {
    if(num < 18) {
        return [80, 67, 12, 8, 8, 8, 12, 6, 6, 4, 4, 12, 27, 27]
    } else {
        return [72, 68, 12, 7, 7, 7, 9, 6, 6, 2, 4, 12, 27, 27]
    }
}

export {ratio19, getlimit}
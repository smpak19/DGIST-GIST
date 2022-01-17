

// 전공분야코드	설명
// CC	대학원 : 공통과목
// EC	학사·대학원 : 전기전자컴퓨터공학부
// MS	대학원 : 신소재공학부
// ME	대학원 : 기계공학부
// EN	대학원 : 지구·환경공학부
// LS	대학원 : 생명공학부
// PH	대학원 : 물리·광과학과
// CH	학사·대학원 : 화학과
// NA	대학원 : 나노바이오재료전자공학과
// MD	학사 : (부전공)의생명공학  |  대학원 : 의생명공학과
// ET	학사 : (부전공)에너지  |  대학원 : 융합기술학제학부 - 에너지
// CT	학사 : (부전공)문화기술  |  대학원 : 융합기술학제학부 - 문화기술
// RT	대학원 : 융합기술학제학부 - 지능로봇
// FE	학사 : (부전공)에너지  |  대학원 : 에너지융합대학원
// EP	대학원 : (부전공)석사 창업
// AI	대학원 : AI 대학원
// MI	대학원 : (부전공)기술혁신
// IC	대학원 : (舊)전기전자컴퓨터공학부
// UC	학사 : 공통과목
// GS	학사 : 기초교육학부
// PS	학사 : 물리·광과학과
// BS	학사 : 생명과학부
// MC	학사 : 기계공학부
// MA	학사 : 신소재공학부
// EV	학사 : 지구·환경공학부
// MM	학사 : (부전공)수학
// IR	학사 : (부전공)지능로봇
// LH	학사 : (부전공)인문사회 - 문화와 역사
// PP	학사 : (부전공)인문사회 - 공공정책·법정치사회
// EB	학사 : (부전공)인문사회 - 경제·경영
// SS	학사 : (부전공)인문사회 - 과학기술과 사회
// MB	학사 : (부전공)인문사회 - 마음과 행동
// CM	학사 : (舊)화학과
// num : Student id, major: major status, arr: courses that heard
// major status : single, double, semi
// [언어, 인문사회, hus, ppe, 소프트웨어, 기초과학, 새내기, 주전공, 연구, 공통과목, 복/부전공, 무학점필수 , 총학점]

// 전필 전선 미반영

function gist(major, arr) {
    let lang = 0
    let lit = 0
    let hus = 0
    let ppe = 0
    let soft = 0
    let gicho = 0
    let newbie = 0
    let first = 0 //전선 - 9101 9102 9103
    let firstpil = 0
    let research = 0 // 9101, 9102, 9103
    let common = 0
    let double = 0
    let doublepil = 0
    let music = 0
    let total = 0

    const langlist = ['GS1511','GS1512','GS1513','GS1531','GS1532','GS1533','GS1534','GS1601','GS1603','GS2652']
    const litlist = ["GS2541", "GS2542", "GS2543", "GS2791", "GS2792", "GS2793", "GS2804", "GS2810", "GS2815",
                     "GS2816", "GS2817", "GS2818", "GS2819", "GS2821", "GS2822", "GS2823", "GS2931", "GS2932", "GS3066"] 
    const huslist = ['GS2501','GS2503','GS2505','GS2506','GS2507','GS2509','GS2510','GS2511','GS2512','GS2521','GS2522',
                    'GS2523','GS2524','GS2525',"GS2526", "GS2581", "GS2582", "GS2601", "GS2602", "GS2603", "GS2611",
                     "GS2612", "GS2613", "GS2614", "GS2615", "GS2616", "GS2617", "GS2618", "GS2621", "GS2625", "GS2627", 
                     "GS2656", "GS2814", "GS3501", "GS3502", "GS3504", "GS3505", "GS3601", "GS3602", "GS3603", "GS3604", 
                     "GS3621", "GS3623", "GS3624", "GS3626", "GS3662", "GS3801", "GS3802", "GS3803", "GS3901"]
    const ppelist = ["GS2620", "GS2661", "GS2701", "GS2702", "GS2703", "GS2704", "GS2705", "GS2706", "GS2707",
                     "GS2708", "GS2709", "GS2724", "GS2725", "GS2726", "GS2727", "GS2728", "GS2730", "GS2731",
                      "GS2732", "GS2733", "GS2734", "GS2742", "GS2743", "GS2747", "GS2748", "GS2750", "GS2751",
                       "GS2752", "GS2753", "GS2761", "GS2762", "GS2763", "GS2765", "GS2787", "GS2788", "GS2794", 
                       "GS2795", "GS2796", "GS2797", "GS2803", "GS2812", "GS2832", "GS2833", "GS2834", "GS3631", 
                       "GS3632", "GS3633", "GS3663", "GS3721", "GS3751", "GS3752", "GS3753", "GS3735", "GS3736", 
                       "GS3785", "GS3763", "GS3764", "GS3765", "GS3785", "GS3786", "GS3831", "GS3838", "GS3861",
                        "GS4741", "GS4761", "GS4762", "GS4837"]
    const softlist = ['GS1490', 'GS1401']
    const gicholist = ['GS1001','GS1011','GS2001','GS2002','GS2004','GS2013','GS1401','GS1301','GS1302','GS1303',
                        'GS1311','GS1101','GS1103','GS1111','GS1201','GS1203','GS1211','GS2006','GS2007','GS3001',
                        'GS3012','GS3015','GS4002','GS4003','GS4004','GS4005','GS4006','GS4007','GS4008','GS4009',
                        'GS4010','GS4015','GS4016','GS4017','GS4018','GS4019','GS1402','GS2407','GS2408','GS1451',
                        'GS1431','GS1471','GS2472','GS2473','GS2474','GS2475','GS2835','GS2836','GS3804','GS4771',
                        'GS1304','GS1321','GS2311','GS3301','GS3311','GS4301','GS1102','GS1104','GS1112','GS2104',
                        'GS1202','GS1204','GS1212','GS2204','GS2206','GS2806','GS2809','GS2811',]  
    const newbielist = ['GS1901', 'UC0902']
    
    // 전공필수 리스트
    const phylist = ['PS2101', 'PS2102', 'PS2103', 'PS3103', 'PS3104', 'PS3105', 'PS3106', 'PS3107']
    const chemlist =  ['CH2101', 'CH2102', 'CH2103', 'CH2104', 'CH2105', 'CH3104', 'CH3106', 'CH3107']
    const biolist =  ['BS2101', 'BS2102', 'BS2103', 'BS2104', 'BS3101', 'BS3105', 'BS3112']
    const eelist = ['EC3101','EC3102']
    const mechlist = ['MC2100','MC2101','MC2102','MC2103','MC3106','MC3107']
    const materiallist =  ['MA2101','MA2102','MA2103','MA2104','MA3104','MA3105']
    const ecolist = ['EV3101','EV3106','EV3111','EV4106','EV4107']

    // 부전공 필수 리스트
    const mathlist = ["MM2001", "MM2002", "MM2004", "MM2011", "MM4004", "MM3001", "MM4002"]
    const cultlist = ["CT4101", "CT4102", "CT4201", "CT4202", "CT4203", "CT4301", "CT4302", "CT4303", "CT4304", "CT4305"]
    const robotlist = ["IR4201", "IR4202", "IR4203", "IR4204", "IR4205", "IR4206"]

    const commonlist = ['UC0201','UC0202','UC0203','UC0301','UC0901','UC0903']
    
    const musiclist = ["GS0101", "GS0102", "GS0103", "GS0104", "GS0105", "GS0106", "GS0107", "GS0108", "GS0109", 
                    "GS0110", "GS0111", "GS0112", "GS0113", "GS0114", "GS0115", "GS0201", "GS0202", "GS0203", "GS0204",
                     "GS0205", "GS0206", "GS0207", "GS0208", "GS0209", "GS0210", "GS0211", "GS0212",'UC9331']

    if(major.전공타입 === 'single') {
        const myfirst = major.전공명1
        for(let i = 0 ; i < arr.length ; i ++) {
            let name = arr[i].과목번호
            let hak = arr[i].학점
            total += hak
            if(langlist.includes(name)) {
                lang += hak
            }
            if(litlist.includes(name)) {
                lit += hak
            }
            if(huslist.includes(name)) {
                hus += hak
                lit += hak
            }
            if(ppelist.includes(name)) {
                ppe += hak
                lit += hak
            }
            if(softlist.includes(name)) {
                soft += hak
            }
            if(gicholist.includes(name)) {
                gicho += hak
            }
            if(newbielist.includes(name)) {
                newbie += hak
            }
            if(name.includes("9101") || name.includes("9102") || name.includes("9103")) {
                research += hak
            }
            if(commonlist.includes(name)) {
                common += hak
            }
            if(musiclist.includes(name)) {
                music += 1
            }

            if(name.includes("PS") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "phy") {
                    if(phylist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }
            if(name.includes("CH") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "chem") {
                    if(chemlist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }
            if(name.includes("BS") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "bio") {
                    if(biolist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }
            if(name.includes("EC") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "ee") {
                    if(eelist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }
            if(name.includes("MC") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "mech") {
                    if(mechlist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }
            if(name.includes("MA") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "material") {
                    if(materiallist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }
            if(name.includes("EV") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "eco") {
                    if(ecolist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }
            }

        }


    } else if(major.전공타입 === 'double') {
        const myfirst = major.전공명1
        const mysecond = major.전공명2
        for(let i = 0 ; i < arr.length ; i ++) {
            let name = arr[i].과목번호
            let hak = arr[i].학점
            total += hak
            if(langlist.includes(name)) {
                lang += hak
            }
            if(litlist.includes(name)) {
                lit += hak
            }
            if(huslist.includes(name)) {
                hus += hak
                lit += hak
            }
            if(ppelist.includes(name)) {
                ppe += hak
                lit += hak
            }
            if(softlist.includes(name)) {
                soft += hak
            }
            if(gicholist.includes(name)) {
                gicho += hak
            }
            if(newbielist.includes(name)) {
                newbie += hak
            }
            if(name.includes("9101") || name.includes("9102") || name.includes("9103")) {
                research += hak
            }
            if(commonlist.includes(name)) {
                common += hak
            }
            if(musiclist.includes(name)) {
                music += 1
            }
            if(name.includes("PS") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "phy") {
                    if(phylist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "phy") {
                    if(phylist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("CH") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "chem") {
                    if(chemlist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "chem") {
                    if(chemlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("BS") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "bio") {
                    if(biolist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "bio") {
                    if(biolist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("EC") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "ee") {
                    if(eelist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "ee") {
                    if(eelist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("MC") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "mech") {
                    if(mechlist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "mech") {
                    if(mechlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("MA") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "material") {
                    if(materiallist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "material") {
                    if(materiallist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("EV") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "eco") {
                    if(ecolist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "eco") {
                    if(ecolist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }

        }


    } else if(major.전공타입 === 'semi') {
        const myfirst = major.전공명1
        const mysecond = major.전공명2
        for(let i = 0 ; i < arr.length ; i ++) {
            let name = arr[i].과목번호
            let hak = arr[i].학점
            total += hak
            if(langlist.includes(name)) {
                lang += hak
            }
            if(litlist.includes(name)) {
                lit += hak
            }
            if(huslist.includes(name)) {
                hus += hak
                lit += hak
            }
            if(ppelist.includes(name)) {
                ppe += hak
                lit += hak
            }
            if(softlist.includes(name)) {
                soft += hak
            }
            if(gicholist.includes(name)) {
                gicho += hak
            }
            if(newbielist.includes(name)) {
                newbie += hak
            }
            if(name.includes("9101") || name.includes("9102") || name.includes("9103")) {
                research += hak
            }
            if(commonlist.includes(name)) {
                common += hak
            }
            if(musiclist.includes(name)) {
                music += 1
            }

            if(name.includes("PS") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "phy") {
                    if(phylist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "phybu") {
                    if(phylist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("CH") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "chem") {
                    if(chemlist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "chembu") {
                    if(chemlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("BS") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "bio") {
                    if(biolist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "biobu") {
                    if(biolist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("EC") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "ee") {
                    if(eelist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "eebu") {
                    if(eelist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("MC") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "mech") {
                    if(mechlist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "mechbu") {
                    if(mechlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("MA") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "material") {
                    if(materiallist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "materialbu") {
                    if(materiallist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }
            if(name.includes("EV") && !name.includes("9101") && !name.includes("9102") && !name.includes("9103")) {
                if(myfirst === "eco") {
                    if(ecolist.includes(name)) {
                        firstpil += hak
                    }
                    first += hak
                }

                if(mysecond === "ecobu") {
                    if(ecolist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                } 
            }

            if(name.includes("MD")) {
                if(mysecond === "med") {
                    double += hak
                }
            }

            if(name.includes("FE")) {
                if(mysecond === "energy") {
                    double += hak
                }
            }

            if(name.includes("CT")) {
                if(mysecond === "cult") {
                    if(cultlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                }
            }

            if(name.includes("IR")) {
                if(mysecond === "robot") {
                    if(robotlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                }
            }

            if(name.includes("MM")) {
                if(mysecond === "math") {
                    if(mathlist.includes(name)) {
                        doublepil += hak
                    }
                    double += hak
                }
            }

            // 부전공 계산
            // 필수있는거 수학, 문화기술, 지능로봇 , 인문사회부전공 제외

        }


    }
    return [lang, lit, hus, ppe, soft, gicho, newbie, first, firstpil, research, common, double, doublepil, music, total]
}

/*
모두 130학점 기준임

리턴 값 ; 
21학번 기준
언어의 기초 7학점
인문사회 24학점
소프트웨어 2학점
기초과학 18학점
새내기 총합 2학점

전공 36 ~ 42
연구 6

자유선택
대학공통 1
인문사회 12이내
나머지 // 여기서 부전공 복수전공 체크

이외 콜로퀴움 및 예능 체육

18 ~ 20
변동사항
새내기 1학점 빠지면서
나머지에 1학점 추가

~17
소프트웨어 2학점 제외, 전공학점 6학점 감소, 따라서 자유 학점 8학점 증가.
기초전공 있음

인문사회 -> 36 이내만 체크, 단 hus, ppe 각각 6 체크

18~
[언어, 인문사회, hus, ppe, 소프트웨어, 기초과학, 새내기, 주전공, 전공필수, 연구, 공통과목, 복/부전공, 필수, 무학점필수 , 총학점]
*/


function getlimit(num, major) {
    const si = Number(num)

    if(si <= 17) {
        return [7, 36, 6, 6, 2, 17, 1, 30, 0, 6, 1, ((major.전공타입 === 'double' ? 36 : 15)), 0, 10, 130]  
    } else if(si <= 19) {
        return [7, 36, 6, 6, 2, 17, 1, 36, 0, 6, 1, ((major.전공타입 === 'double' ? 36 : 15)), 0, 10, 130] 
    } else if(si === 20) {
        return [7, 36, 6, 6, 2, 17, 1, 36, 0, 6, 1, ((major.전공타입 === 'double' ? 36 : 15)), 0, 6, 130] 
    } else{
        return [7, 36, 6, 6, 2, 17, 2, 36, 0, 6, 1, ((major.전공타입 === 'double' ? 36 : 15)), 0, 6, 130]
    }
}

export {gist, getlimit}

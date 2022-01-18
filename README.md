# DGIST/GIST 졸업요건 계산기 by 강준서, 박승민, 최준영

## 개요

- kaist의 매화수 웹사이트에서 감명을 받아 제작을 결정했습니다.

---
## 시작하며

|main|login|
|--|--|
|<img src="https://user-images.githubusercontent.com/86216960/149888426-cef40855-5bc3-41d9-ad76-21be719147b5.png">|<img src="https://user-images.githubusercontent.com/86216960/149888552-0dbd9fc7-8d02-4780-8238-14ef6f6d2de9.png">|
|register|choose|
|--|--|
|<img src="https://user-images.githubusercontent.com/86216960/149889124-b6b1c4f9-5689-4b49-9448-bbcb0009132c.png">|<img src="https://user-images.githubusercontent.com/86216960/149889244-2b08c94c-7c10-47a2-b091-708e1cc2b78f.png">|

- DGIST와 GIST를 선택하기 전이므로 KAIST의 까리용을 배경으로 시작하도록 하였습니다.

- 시작하기 버튼을 누르면 로그인 창이 뜹니다.
  - 아이디와 비밀번호를 입력할 수 있고, 만약 아이디와 비밀번호가 없다면 회원가입을 할 수 있도록 링크를 걸어두었습니다.
  - 또한 카카오톡으로 로그인하기 링크를 통해 편리하게 사용할 수 있도록 하였습니다.

- 회원가입 창에서는 아이디, 비밀번호, 비밀번호 확인을 입력하여 만들 수 있습니다.
  - 회원가입을 완료하면 다시 로그인 창으로 돌아가 아이디와 비밀번호를 작성할 수 있도록 하였습니다.

- 로그인에 성공하면 DGIST와 GIST를 선택할 수 있는 버튼이 나옵니다. 사용자의 학교에 맞는 버튼을 선택합니다.

---
## DGIST

|survey|courses|
|--|--|
|<img src="https://user-images.githubusercontent.com/86216960/149890064-df5239d1-616e-4060-b756-e9396acc8fbf.png">|<img src="https://user-images.githubusercontent.com/86216960/149890700-b575674f-2de6-4182-bd21-041b04640364.png">|
|result|profile|
|--|--|
|<img src="https://user-images.githubusercontent.com/86216960/149889597-ebee8839-9239-4e24-bc7e-56e34125260d.png">|<img src="https://user-images.githubusercontent.com/86216960/149890831-2acbd72b-60e6-4f6f-9814-0ee8d1b86bab.png">|

- DGIST를 선택할 경우 배경이 DGIST로 바뀝니다.
  - DGIST는 무학과 단일학부이기 때문에 학번만 선택하도록 하였습니다.
  - 학번을 선택하여 다음 페이지로 넘어갑니다.

- 자신이 수강한 과목을 검색하여 추가할 수 있도록 하였습니다.

- 결과 창에서는 자신이 선택한 과목들을 바탕으로 졸업요건을 확인해줍니다.
  - 19학번까지는 DGIST는 공통필수, 교선필수만 일정 학점을 넘기면 졸업이 가능하므로 이것을 확인해줍니다.
  - 또한 융복합 이학사와 융복합 공학사만이 가능하므로 이것 또한 확인해줍니다.

- 유저 정보 버튼을 클릭하면 유저 정보를 볼 수 있도록 되어있고, 로그아웃 버튼을 누르면 메인화면으로 돌아갑니다.

---
## GIST

|survey|courses|
|--|--|
|<img src="https://user-images.githubusercontent.com/86216960/149890947-fa178c2d-1995-4e1d-b3b3-105dfbdd7756.png">|<img src="https://user-images.githubusercontent.com/86216960/149891050-378f5943-66e3-4fe0-8b93-656e23fcbe00.png">|
|result|profile|
|--|--|
|<img src="https://user-images.githubusercontent.com/86216960/149891205-a198b40d-3a9a-4b8c-af9d-cc444d15d98a.png">|<img src="https://user-images.githubusercontent.com/86216960/149891271-9a6ea868-faba-4ccd-823c-d87e2441bd05.png">|
- GIST를 선택할 경우 배경이 GIST로 바뀝니다.
  - GIST의 경우 학과가 구분되어있으므로 전공 유무, 주전공, 복수/부전공을 선택하고 학번까지 선택한 뒤 입력 버튼을 눌러 다음 페이지로 넘어갈 수 있습니다.

- DGIST와 마찬가지로 사용자가 선택하여 수강 과목을 추가할 수 있습니다.

- 결과 창에서는 자신이 선택한 과목들을 바탕으로 졸업요건을 확인해줍니다.
  - GIST의 학사편람을 참고하여 로직을 작성하였습니다.

- 유저 정보 버튼을 클릭하면 유저 정보를 볼 수 있도록 되어있고, 로그아웃 버튼을 누르면 메인화면으로 돌아갑니다.

---
## CREDIT

> Junseo Kang / pointjunseo@dgist.ac.kr   
> Seungmin Park / smpak@kaist.ac.kr   
> Junyoung Choi / ace9804@unist.ac.kr

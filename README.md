# login-weniv
> 위니브 로그인 페이지 구현 (22.04.18)   
> https://areumz.github.io/login-weniv/   
> html, css 연습을 위한 것이어서 첫 페이지에서 로그인 버튼 클릭시   
모달창이 아닌 또 다른 페이지로 연결되도록 임시 작업

* **logo img 안 나오는 문제**   
background-size 조절해봤지만 로고 이미지 안 나옴. h2태그 height가 0이었음   
+)height 안 주고, padding으로도 조절 가능

* **중앙 정렬 관련**   
flex하고 justify-content만 center 해줘서 중앙정렬 x align도 하니 됨 

* 아이디/비밀번호 창을 먼저 작업하고 후에 초기 화면 작업함   
1. class명을 중구난방으로 쓰고
2. position: relative, absolute로 위치를 거의 고정적으로 잡아놓으니까 후에 요소를 추가할 때   
위치를 다시 다 잡아야함 -> 유지보수가 어려움

* (코드 고칠 점)
    * 첫 로그인 페이지에서 justify-content: center 빼도 됨

    * placeholder text 띄울 때 스페이스바 x padding으로

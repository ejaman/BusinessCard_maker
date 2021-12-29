# Cardmaker

리액트와 파이어베이스, 클라우디너리를 사용해 만든 비즈니스 카드 생성기  <br>
(business card maker with react & firebase & cloudinary) <br> <br>
reference: dreamcoding react basic
<br> <br><br> <br>

## 1. 개발 스택/Tech Stack
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"/>
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> 
& cloudinary
<br><br><br>


## 2. Demo
🔗link:  https://jm-card-maker.netlify.app

1. login page
- 파이어베이스를 사용해 구글과 깃헙으로 로그인 할 수 있게 만듦 : Social Login (with Google and Github) using Firebase <br>

<img width="1440" alt="스크린샷 2021-12-29 오후 4 08 05" src="https://user-images.githubusercontent.com/82802784/147636932-d544c750-fb1b-41c2-8ca7-8deacd0829f7.png">
<br><br>

- 로그인 후에는 로그인 페이지로 갈 수 없음 : Can't go to login page after login <br>
```javascript  
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate("/card", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };
```
<br><br>

- 로그아웃 후에는 card로 갈 수 없음 : can't access to card after logout <br>
``` javascript
// login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }); 
  ```
<br> <br>

2. main page
 - 명함을 추가하고 수정, 삭제할 수 있음 : add, edit and delete business cards
<img width="1440" alt="스크린샷 2021-12-29 오후 4 06 12" src="https://user-images.githubusercontent.com/82802784/147636929-3c137877-3f78-410a-936f-383ce2f0ca58.png">
<br> <br>

- 명함에 사진을 추가하고 수정할 수 있음 : add and edit photos on business cards ➡️ cloudinary☁️
<img width="1327" alt="스크린샷 2021-12-29 오후 4 18 38" src="https://user-images.githubusercontent.com/82802784/147636995-114ef5f5-671f-493a-9981-ce0250719ac9.png">
<br><br>


3. firebase
각 유저에 따라 명함 정보를 저장 새로고침해도 사라지지 않음!
: save business card info for each user
```javascript
 saveCard(userId, card) {
    app.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
```
<br><br><br>


## 3. deployment

생각보다 어렵고 오래 걸렸다 use Netlify
1. .env의 API key는 gitignore로 build 파일에 포함되지 않음 ➡️ 로그인 에러(API key of .env is not included in build file - gitignore)<br>
netlify environment setting에서 해결 
<img width="860" alt="스크린샷 2021-12-29 오후 4 35 24" src="https://user-images.githubusercontent.com/82802784/147638217-2d4ea4a0-67f6-445d-8876-6539d2290f9e.png">
<img width="818" alt="스크린샷 2021-12-29 오후 4 35 51" src="https://user-images.githubusercontent.com/82802784/147638226-349cba09-a143-46ae-b4b4-d3275f040cb2.png">
<br><br>

2. "this domain (jm-card-maker.netlify.app) is not authorized to run this operation. add it to the oauth redirect domains list in the firebase console " 
<br><br> 
➡️ Authorized domains에 netlify에서 deploy한 링크를 추가(Add deployed links to Authorized domains)<br><br><br>

문제해결🎉


<br><br><br><br>


## 4. 개선 사항
1. 먕함을 찾기 너무 어려움(hard to find business card)
➡️ 검색 기능 또는 명함을 클릭하면 자동 스크롤되도록(Add search function or auto scroll function)
<br>

2. social login만 지원 (only supports social login)
<br>➡️id & pw or id link로 로그인 가능하도록(add id,pw login)




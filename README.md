* React Query, React Router 설치
npm i react-router-dom@5.3.0 react-query
npm i --save-dev @types/react-router-dom
(React Router 6버전으로 진행시 @types/react-router-dom를 설치하지 않아도 타입을 불러온다.)

* react-router-dom@5.3.0이 아닌 그냥 react-router-dom으로 설치하게 되면 현재 기준으로 6버전이 설치되고, 바뀐 6버전 문법으로 진행해야 한다.
ex) < Route path="/" element={< Coins / >} />

React Router 5 -> 6에서 바뀐 점
Switch컴포넌트 -> Routes컴포넌트로 변경
exact삭제
useHistory -> useNavigate
useRoutes 등

* CoinPaprika
https://api.coinpaprika.com/#tag/Tickers

* React Query
https://react-query.tanstack.com

* 새 프로젝트 셋업
npx create-react-app@5.0.0 react-masterclass-course --template typescript

* react-router-dom v6 vs v5에 대해 간단히 정리 참조
https://velog.io/@soryeongk/ReactRouterDomV6

* Reset CSS
https://github.com/zacanger/styled-reset/blob/master/src/index.ts

* Google Fonts
https://fonts.google.com

* Source Sans Pro 폰트
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
font-family: 'Source Sans Pro', sans-serif;

* Flat UI Color
https://flatuicolors.com/palette/gb

* createGlobalStyle (전역 스타일을 처리함)
전역 스타일을 처리하는 특수 Styled Component를 생성하는 helper 함수.
https://styled-components.com/docs/api#createglobalstyle
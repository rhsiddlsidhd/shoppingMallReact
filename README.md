### 🎉 2024-03-25 ~ 2024-03-29 웹 쇼핑몰

## 📄 소개

JSON Server Web ShoppingMall

## 🔥 프로젝트 목표

https://reactrouter.com/en/main
React Router를 사용하여 다양한 라우팅 기능을 이해하고 **활용합니다**

---

## 🔧 기술스택

- HTML
- CSS
- Javascript
- React

## 📌 현재 개발 상태

- **24-03-25** 폴더 구조 및 프로젝트에 반복하여 사용 될 컴포넌트 앞서서 UI를 구현
- **24-03-26** Json-server 데이터 입력 및 BrowserRouter 대신 v6 버전에서 권장하는 createbrowerRouter 사용하여 데이터 불러오기
- **24-03-27**
  Home 데이터 및 UI 완료 /
  detail 페이지 Parmas.id 받아 데이터 및 UI 완료 /
  로그인 로그아웃 완료 /
  페이지간 navigate 완료
- **24-03-28** Filter 완료 / detail 페이지 drop다운 완료 / 폴더 구조 변경
- **24-03-29** sidebar 완료

## 📝 앞으로 할 개선 해야 할 방향

## 🥅 Trouble shooting

- styled-components: it looks like an unknown prop "margin" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)

- URLSearchParams https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
-
- searchParams = request https://reactrouter.com/en/main/route/loader#request

## 💬 기타

- https://reactrouter.com/en/main/routers/picking-a-router
- https://reactrouter.com/en/main/route/error-element#bubbling
- 기존 라우터와 다르게 데이터 라우터인 createBrowserRouter는 loder를 제공하여 렌더링되기 전에 경로 요소에 데이터를 전달하는 기능을 정의할 수 있다. 제공된 데이터는 useLoaderData 또는 useRouteLoaderData를 통해 사용할 수 있다. 해당 router를 객체로 정의하면서 최상위 root에 위치에 errorElement를 만들어 로더 , 액션 또는 구성 요소 렌더링에서 예외가 발생하면 일반 렌더링 경로( ) 대신 errorElement 경로로 렌더링 되어 오류를 통합적으로 관리할 수 있다.

---

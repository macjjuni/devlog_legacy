# [kkusaeng's Blog [Link]](https://kku.dev/)

<br>

<div align="center">
	<img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" />
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
	<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
	<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white" />
</div>
  
<div align="center">

</div>

<div align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
		<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
</div>

<div align="center">
	<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white" />
	<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white" />
</div>

<div align="center">
	<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" />
</div>

<div align="center">
	<img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white" />
</div>
<br>

## 📸 ScreenShot

### Home

<img width="1508" alt="image" src="https://user-images.githubusercontent.com/38034518/222895874-facfefea-09dc-4eba-a217-e0a3b8d6b30d.png">

### Blog

<img width="1508" alt="image" src="https://user-images.githubusercontent.com/38034518/222895876-0743c055-e85d-47e8-b03a-66d2093eec01.png">

## 🌲 Project Tree

```
kkusaeng's Portfolio
│
├─ public           (🏛️) => 정적파일 모음
├─ src
│  ├─ assets        (🏦) => 파일 리소스 모음
│  │
│  ├─ components    (🧩) => 컴포넌트 모음
│  │  ├─ common     (🛞) => 기능형 컴포넌트
│  │  └─ views      (🎨) => 렌더형 컴포넌트
│  │
│  ├─ hoc           (🕹️) => HOC 컴포넌트 모음
│  │
│  ├─ layout        (🪟) => 레이아웃 모음
│  │  ├─ Footer
│  │  ├─ Header
│  │  ├─ Main
│  │  └─ index.tsx
│  │
│  ├─ notion        (📚) => 노션 관련 모음
│  │
│  ├─ pages         (📄) => 페이지 폴더
│  │
│  ├─ Redux         (🧀) => 리덕스
│  │  ├─ slice
│  │  ├─ store.ts
│  │  └─ hook.ts
│  │
│  ├─ router        (🚦) => 페이지 경로 코드
│  ├─ styles        (🕺) => 스타일 코드 모음
│  │
│  ├─ type          (🎲) => TS 타입 모음
│  └─ utils         (🛠️) => 유틸 함수 모음
│
├─ .eslintrc
├─ .prettierrc
│
├─ .env.developmnet
├─ .env.production
│
├─ tsconfig.json
├─ next.config.js
├─ package.json
└─ README.md
```

<br>

## 💻 Git Rules

### 📌 Commit

    1. 제목을 50글자 내로 제한
    2. 제목 끝에 마침표 넣지 않음
    3. 어떻게 보다는 무엇과 왜를 설명

### 📌 Commit Structure

<p>헤더는 필수이며, 범위(scope), 본문(body)은 선택사항</p>

```
<type>(<scope>): <subject>          -- 헤더
<BLANK LINE>                        -- 빈칸
<body>                              -- 본문(선택)
```

### 📌 Commit Type

```
feat : 새로운 기능에 대한 커밋 (*)
fix : 버그 수정에 대한 커밋 (*)
style : 코드 스타일 혹은 포맷 등에 관한 커밋 (*)
refactor :  코드 리팩토링에 대한 커밋 (*)
build : 빌드 관련 파일 수정에 대한 커밋 (*)
chore : 그 외 자잘한 수정에 대한 커밋 (*)
ci : CI관련 설정 수정에 대한 커밋
docs : 문서 수정에 대한 커밋 (*)
test : 테스트 코드 수정에 대한 커밋
```

### 📌 Commit Example

```
docs(readme): 프로젝트 소개 및 규칙 작성
style(ui/input): secondary 스타일 작성
```

<br>

### ENV

```
// 웹사이트 데이터
SITE_URL=
DESCRIPTION=
NEXT_PUBLIC_INSTA=
NEXT_PUBLIC_TISTORY=
NEXT_PUBLIC_GITHUB=
NEXT_PUBLIC_TITLE=
NEXT_PUBLIC_LOGO=
NEXT_PUBLIC_EMAIL=
// 구글 애널리틱스
NEXT_PUBLIC_GA_ID=
// 노션 공식 API 초기화 데이터터
NOTION_TOKEN=
NOTION_DATABASE_ID=
// 노션 비공식 API 초기화 데이터 https://github.com/NotionX/react-notion-x#private-pages
NOTION_USER=
NOTION_TOKEN_V2=
```

# 순천향대학교 초·중·고 체험 프로그램 홈페이지 (학생 페이지 프로토타입)

Next.js(App Router, TypeScript) 기반 프로젝트입니다. **Vercel에 그대로 배포 가능**하도록
서버 없는 클라이언트/정적 렌더링 구조로 구성했습니다.
기획된 GNB 메뉴 구조(마이페이지 / 프로그램 소개 / 진로설계 / 역량개발 / 커뮤니티)에 맞춰
학생 페이지를 우선 구축했습니다.

## 실행 방법

**요구사항:** Node.js 18.18+ (Next.js 16 기준)

```bash
npm install
npm run dev
```

`http://localhost:3000` 접속 시 `/mypage`로 리다이렉트됩니다.

프로덕션 빌드:

```bash
npm run build
npm run start
```

## Vercel 배포

GitHub 저장소를 Vercel에 연결하면 **별도 설정 없이 자동으로 인식**됩니다 (Framework Preset: Next.js).
Build Command / Output Directory는 기본값 그대로 두면 됩니다.

## 메뉴 구조 및 화면 연결 현황

| 메뉴 그룹 | 하위 메뉴 | 상태 |
|---|---|---|
| 1. 마이페이지 | 마이페이지 | ✅ 연결됨 (`/mypage`, `/mypage/edit`) |
| 2. 프로그램 소개 | 부서소개 / 체험 프로그램 소개 | 준비중 |
| 3. 진로설계 | 진로적성검사 / 목표직업탐색 / 직업기초역량진단 / AI 어드바이저 | 준비중 |
| 4. 역량개발 | 프로그램 신청 / 프로그램 신청내역 / 역량 인증제 | ✅ 연결됨 (`/competency/*`) |
| 5. 커뮤니티 | 공지사항 / 프로그램 후기 / 문의게시판 | 준비중 |

프로토타입 화면이 아직 없는 메뉴 항목도 GNB에서 정상적으로 접근할 수 있으며,
콘텐츠 영역에는 공통 "[준비중입니다]" 화면(`components/ComingSoon.tsx`)이 표시됩니다.

GNB 5대 메뉴 구조 밖의 화면으로 **초·중·고 회원가입**(`/account/signup`)이 헤더 유틸 영역에 연결되어 있습니다.

## 프로젝트 구조

```
app/
  layout.tsx                # 공통 헤더 · GNB · 푸터 레이아웃
  globals.css                # 프로토타입 5종의 디자인 토큰 통합 스타일
  mypage/, competency/, intro/, career/, community/, account/

components/
  Header.tsx                 # GNB (현재 경로 기반 active 표시)
  Footer.tsx
  CompetencySidebar.tsx       # 역량개발 그룹 내 좌측 서브메뉴
  ComingSoon.tsx               # 공통 "[준비중입니다]" 화면

lib/
  nav.ts                      # GNB 메뉴 구조 정의 (단일 소스)
  programs.ts, history.ts      # 목업 데이터
  ui.ts                        # 공통 UI 헬퍼 (준비중 알림 등)
```

각 화면은 제공된 HTML 프로토타입(A.1, A.3, C.1, C.3, C.4)의 **실제 화면 영역**을 추출해
구성했으며, 스펙 문서용 요소(페이지 경로줄, 번호 배지, 화면 정의 패널)는 제외했습니다.
역량개발 그룹의 좌측 서브메뉴는 GNB 데이터를 기반으로 동적 렌더링됩니다.

> 현재 단계는 DB·백엔드 연동 없는 프로토타입으로, 화면에 표시되는 학생/프로그램 데이터는
> `lib/` 아래의 목업 데이터입니다.

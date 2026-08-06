# 순천향대학교 초·중·고 체험 프로그램 홈페이지 (프로토타입)

Next.js(App Router, TypeScript) 기반 프로젝트입니다. **Vercel에 그대로 배포 가능**하도록
서버 없는 클라이언트/정적 렌더링 구조로 구성했습니다. 학생 페이지와 관리자 페이지를
각각 별도의 GNB·레이아웃을 갖는 두 개의 사이트로 구성했습니다.

## 실행 방법

**요구사항:** Node.js 18.18+ (Next.js 16 기준)

```bash
npm install
npm run dev
```

`http://localhost:3000` 접속 시 `/mypage`(학생 페이지)로 리다이렉트됩니다.
관리자 페이지는 `/admin`(→ `/admin/programs`로 리다이렉트) 경로로 접근합니다.

프로덕션 빌드:

```bash
npm run build
npm run start
```

## Vercel 배포

GitHub 저장소를 Vercel에 연결하면 **별도 설정 없이 자동으로 인식**됩니다 (Framework Preset: Next.js).
Build Command / Output Directory는 기본값 그대로 두면 됩니다.

## 학생 페이지 — 메뉴 구조 및 화면 연결 현황

| 메뉴 그룹 | 하위 메뉴 | 상태 |
|---|---|---|
| 1. 마이페이지 | 마이페이지 | ✅ 연결됨 (`/mypage`, `/mypage/edit`) |
| 2. 프로그램 소개 | 부서소개 / 체험 프로그램 소개 | 준비중 |
| 3. 진로설계 | 진로적성검사 / 목표직업탐색 / 직업기초역량진단 / AI 어드바이저 | 준비중 |
| 4. 역량개발 | 프로그램 신청 / 프로그램 신청내역 / 역량 인증제 | ✅ 연결됨 (`/competency/*`) |
| 5. 커뮤니티 | 공지사항 / 프로그램 후기 / 문의게시판 | 준비중 |

프로토타입 화면이 아직 없는 메뉴 항목도 GNB에서 정상적으로 접근할 수 있으며,
콘텐츠 영역에는 공통 "[준비중입니다]" 화면(`components/site/ComingSoon.tsx`)이 표시됩니다.

GNB 5대 메뉴 구조 밖의 화면으로 **초·중·고 회원가입**(`/account/signup`), **통합 로그인**(`/login`)이
헤더 유틸 영역에 연결되어 있습니다.

## 관리자 페이지 — 메뉴 구조 및 화면 연결 현황

| 메뉴 그룹 | 하위 메뉴 | 상태 |
|---|---|---|
| 1. 비교과 프로그램 | 프로그램 등록 / 프로그램 리스트 / 프로그램 통계 | ✅ 연결됨 (`/admin/programs/*`) |
| 2. 역량개발 | 역량 인증제 관리 | ✅ 연결됨 (`/admin/competency`) |
| 3. 회원관리 | 학생 조회 | ✅ 연결됨 (`/admin/students`) |

프로그램 리스트(`/admin/programs`)의 [지원자 관리] 클릭 시 해당 프로그램의 지원자 관리
화면(`/admin/programs/[id]/applicants`)으로 이동합니다. 통합 로그인 화면의 "관리자" 탭도
관리자 페이지로 연결됩니다.

## 프로젝트 구조

```
app/
  (site)/                    # 학생 페이지 라우트 그룹 (자체 루트 레이아웃)
    layout.tsx                # 학생 헤더 · GNB · 푸터
    login/                     # A.4 통합 로그인 (학생/관리자 탭)
    mypage/, competency/, intro/, career/, community/, account/
  (admin)/                   # 관리자 페이지 라우트 그룹 (자체 루트 레이아웃)
    layout.tsx                # 관리자 헤더 · GNB · 푸터
    admin/
      programs/                # A.5 리스트 · A.2 지원자 관리 · B.1 등록 · B.2 통계
      competency/               # A.6 역량 인증제 관리
      students/                 # A.7 학생 조회
  globals.css                 # 전체 프로토타입 디자인 토큰 통합 스타일 (학생+관리자 공용)

components/
  site/                       # 학생 페이지 전용 컴포넌트 (Header, ComingSoon, CompetencySidebar)
  admin/                      # 관리자 페이지 전용 컴포넌트 (AdminHeader)
  Footer.tsx                  # 학생/관리자 공용

lib/
  nav.ts                      # 학생 GNB 메뉴 구조 정의 (단일 소스)
  admin/nav.ts                 # 관리자 GNB 메뉴 구조 정의 (단일 소스)
  programs.ts, history.ts      # 학생 페이지 목업 데이터
  admin/programs.ts, admin/applicants.ts, admin/students.ts, admin/studentDirectory.ts
                                # 관리자 페이지 목업 데이터
  ui.ts                        # 공통 UI 헬퍼 (준비중 알림 등)
```

각 화면은 제공된 HTML 프로토타입의 **실제 화면 영역**을 추출해 구성했으며, 스펙 문서용
요소(페이지 경로줄, 번호 배지, 화면 정의 패널)는 제외했습니다. 학생/관리자는 서로 다른
Next.js 루트 레이아웃(라우트 그룹)을 사용해 완전히 분리된 헤더·GNB를 가지며, 양쪽 헤더에
서로의 사이트로 이동하는 링크가 연결되어 있습니다.

> 현재 단계는 DB·백엔드 연동 없는 프로토타입으로, 화면에 표시되는 학생/프로그램/관리자 데이터는
> `lib/` 아래의 목업 데이터입니다. 로그인도 실제 인증 없이 탭 선택에 따라 해당 사이트로 이동만 합니다.

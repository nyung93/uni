import Link from "next/link";

export const metadata = { title: "마이페이지 - 순천향대학교 초·중·고 체험 프로그램" };

export default function MyPage() {
  return (
    <>
      <div className="crumb">
        학생서비스 <b>›</b> 마이페이지
      </div>
      <div className="page-title-row">
        <span className="page-title">
          마이페이지<span className="pid">학생</span>
        </span>
      </div>

      {/* 최초 로그인 얼럿 */}
      <div className="alert-preview">
        <div className="ic">🔔</div>
        <div className="txt">
          <div className="tt">비밀번호를 설정해주세요</div>
          <div className="ds">
            최초 로그인 계정입니다. <b>비밀번호를 설정하기 전까지는 마이페이지의 다른 기능을 이용할 수 없습니다.</b>
          </div>
        </div>
        <Link className="btn btn-navy btn-mini" href="/mypage/edit">
          비밀번호 설정하기
        </Link>
      </div>

      {/* 학생 기본정보 + 역량점수 인증현황 */}
      <div className="sec two-col">
        <div className="col-half">
          <div className="profile-card">
            <div className="av">🙂</div>
            <div className="who">
              <div className="nm">이하은</div>
              <div className="sc">순천향중학교 · 2학년 3반</div>
            </div>
            <Link className="btn btn-edit btn-mini" href="/mypage/edit">
              정보 수정
            </Link>
          </div>
          <div className="stat-row">
            <div className="stat-box">
              <div className="l">신청 프로그램</div>
              <div className="v">5건</div>
            </div>
            <div className="stat-box">
              <div className="l">수료 프로그램</div>
              <div className="v">3건</div>
            </div>
            <div className="stat-box">
              <div className="l">총 역량점수</div>
              <div className="v" style={{ color: "var(--gl)" }}>
                32점
              </div>
            </div>
          </div>
        </div>
        <div className="col-half">
          <div className="cred-card">
            <div className="cred-top">
              <div className="medal medal-gold">◆</div>
              <div>
                <div className="cred-grade">글로벌 골드</div>
                <div className="cred-sub">디지털 배지 등급</div>
              </div>
              <Link className="btn btn-navy btn-mini" style={{ marginLeft: "auto" }} href="/competency/certificate">
                배지·마일리지 상세
              </Link>
            </div>
            <div className="cred-scores">
              <div className="it">
                <div className="l">총점수</div>
                <div className="v">32</div>
              </div>
              <div className="it">
                <div className="l">창의</div>
                <div className="v pt-cr">10</div>
              </div>
              <div className="it">
                <div className="l">공감</div>
                <div className="v pt-em">10</div>
              </div>
              <div className="it">
                <div className="l">글로벌</div>
                <div className="v pt-gl">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 배너 영역 */}
      <div className="sec">
        <div className="banner-grid">
          <Link className="banner b-sky" href="/career/ai-advisor">
            <span className="ic">🤖</span>
            <span className="lb">AI 어드바이저</span>
          </Link>
          <Link className="banner" href="/competency/apply">
            <span className="ic">📝</span>
            <span className="lb">프로그램 신청</span>
          </Link>
          <Link className="banner b-blue" href="/competency/history">
            <span className="ic">📋</span>
            <span className="lb">프로그램 신청내역</span>
          </Link>
          <Link className="banner b-green" href="/competency/certificate">
            <span className="ic">🏅</span>
            <span className="lb">역량점수 현황</span>
          </Link>
        </div>
      </div>

      {/* 추천 프로그램 목록 (캘린더형) */}
      <div className="sec">
        <div className="cal-wrap">
          <div className="cal-mini">
            <div className="cal-mini-head">
              <span>2026년 8월</span>
              <span className="nav">
                <span>‹</span>
                <span>›</span>
              </span>
            </div>
            <table className="cal-grid">
              <thead>
                <tr>
                  <th>일</th>
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>
                  <th>금</th>
                  <th>토</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="dcell dim"><div className="dnum">26</div></td>
                  <td className="dcell dim"><div className="dnum">27</div></td>
                  <td className="dcell dim"><div className="dnum">28</div></td>
                  <td className="dcell dim"><div className="dnum">29</div></td>
                  <td className="dcell dim"><div className="dnum">30</div></td>
                  <td className="dcell dim"><div className="dnum">31</div></td>
                  <td className="dcell sun"><div className="dnum">1</div><span className="dcnt">1건</span></td>
                </tr>
                <tr>
                  <td className="dcell sun"><div className="dnum">2</div></td>
                  <td className="dcell"><div className="dnum">3</div></td>
                  <td className="dcell"><div className="dnum">4</div></td>
                  <td className="dcell sel"><div className="dnum">5</div><span className="dcnt">2건</span></td>
                  <td className="dcell"><div className="dnum">6</div><span className="dcnt">1건</span></td>
                  <td className="dcell"><div className="dnum">7</div></td>
                  <td className="dcell sun"><div className="dnum">8</div><span className="dcnt">1건</span></td>
                </tr>
                <tr>
                  <td className="dcell sun"><div className="dnum">9</div><span className="dcnt">1건</span></td>
                  <td className="dcell"><div className="dnum">10</div></td>
                  <td className="dcell"><div className="dnum">11</div></td>
                  <td className="dcell"><div className="dnum">12</div></td>
                  <td className="dcell"><div className="dnum">13</div></td>
                  <td className="dcell"><div className="dnum">14</div></td>
                  <td className="dcell sun"><div className="dnum">15</div></td>
                </tr>
                <tr>
                  <td className="dcell sun"><div className="dnum">16</div></td>
                  <td className="dcell"><div className="dnum">17</div></td>
                  <td className="dcell"><div className="dnum">18</div></td>
                  <td className="dcell"><div className="dnum">19</div></td>
                  <td className="dcell"><div className="dnum">20</div><span className="dcnt">1건</span></td>
                  <td className="dcell"><div className="dnum">21</div></td>
                  <td className="dcell sun"><div className="dnum">22</div></td>
                </tr>
                <tr>
                  <td className="dcell sun"><div className="dnum">23</div></td>
                  <td className="dcell"><div className="dnum">24</div></td>
                  <td className="dcell"><div className="dnum">25</div></td>
                  <td className="dcell"><div className="dnum">26</div></td>
                  <td className="dcell"><div className="dnum">27</div></td>
                  <td className="dcell"><div className="dnum">28</div><span className="dcnt">1건</span></td>
                  <td className="dcell sun"><div className="dnum">29</div></td>
                </tr>
                <tr>
                  <td className="dcell sun"><div className="dnum">30</div></td>
                  <td className="dcell"><div className="dnum">31</div></td>
                  <td className="dcell dim"><div className="dnum">1</div></td>
                  <td className="dcell dim"><div className="dnum">2</div></td>
                  <td className="dcell dim"><div className="dnum">3</div></td>
                  <td className="dcell dim"><div className="dnum">4</div></td>
                  <td className="dcell dim sun"><div className="dnum">5</div></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cal-list">
            <div className="cal-list-head">추천 비교과 프로그램 일정</div>
            <ul className="cal-sched">
              <li>
                <Link href="/competency/apply">
                  <div className="cs-date">AUG<b>5</b></div>
                  <div className="cs-body">
                    <div className="cs-t">나의 진로 설계: 꿈을 찾는 시간</div>
                    <div className="cs-meta"><span className="cs-tag">중등 진로설계</span>📍 청소년지원센터</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/competency/apply">
                  <div className="cs-date">AUG<b>6</b></div>
                  <div className="cs-body">
                    <div className="cs-t">과학 탐구 동아리</div>
                    <div className="cs-meta"><span className="cs-tag">중등 과학탐구</span>📍 융합과학실</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/competency/apply">
                  <div className="cs-date">AUG<b>8</b></div>
                  <div className="cs-body">
                    <div className="cs-t">인성교육 워크숍</div>
                    <div className="cs-meta"><span className="cs-tag">중등 인성교육</span>📍 학생회관</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/competency/apply">
                  <div className="cs-date">AUG<b>9</b></div>
                  <div className="cs-body">
                    <div className="cs-t">창의 로봇 경진대회</div>
                    <div className="cs-meta"><span className="cs-tag">중등 창의융합</span>📍 미래융합센터</div>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="cal-more">
              <Link className="btn btn-grey btn-mini" href="/competency/apply">
                더보기 +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

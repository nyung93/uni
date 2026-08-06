package kr.ac.sch.experience.web.nav;

/**
 * 하나의 GNB 하위 메뉴 항목.
 * available=false 인 경우 PlaceholderController 가 "준비중입니다" 화면을 대신 렌더링한다.
 */
public record NavItem(String key, String title, String url, boolean available) {
}

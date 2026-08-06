package kr.ac.sch.experience.web.nav;

import java.util.List;

/** GNB 상위 메뉴 그룹 (마이페이지 / 프로그램 소개 / 진로설계 / 역량개발 / 커뮤니티). */
public record NavGroup(int id, String title, String url, List<NavItem> items) {

    public boolean hasDropdown() {
        return items.size() > 1;
    }
}

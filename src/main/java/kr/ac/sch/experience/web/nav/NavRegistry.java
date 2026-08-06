package kr.ac.sch.experience.web.nav;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

/**
 * 사이트 전체 GNB 구조(5개 메뉴 그룹)를 담고 있는 단일 소스.
 * 신규로 확정된 화면 구조를 그대로 반영했으며, 아직 프로토타입 HTML이 없는 항목은
 * available=false 로 표시되어 PlaceholderController 에서 "준비중입니다" 화면으로 대체된다.
 */
@Component
public class NavRegistry {

    private final List<NavGroup> groups = List.of(
            new NavGroup(1, "마이페이지", "/mypage", List.of(
                    new NavItem("mypage", "마이페이지", "/mypage", true)
            )),
            new NavGroup(2, "프로그램 소개", "/intro/department", List.of(
                    new NavItem("intro-department", "부서소개", "/intro/department", false),
                    new NavItem("intro-program", "체험 프로그램 소개", "/intro/program", false)
            )),
            new NavGroup(3, "진로설계", "/career/aptitude-test", List.of(
                    new NavItem("career-aptitude-test", "진로적성검사", "/career/aptitude-test", false),
                    new NavItem("career-job-search", "목표직업탐색", "/career/job-search", false),
                    new NavItem("career-basic-competency", "직업기초역량진단", "/career/basic-competency", false),
                    new NavItem("career-ai-advisor", "AI 어드바이저", "/career/ai-advisor", false)
            )),
            new NavGroup(4, "역량개발", "/competency/apply", List.of(
                    new NavItem("competency-apply", "프로그램 신청", "/competency/apply", true),
                    new NavItem("competency-history", "프로그램 신청내역", "/competency/history", true),
                    new NavItem("competency-certificate", "역량 인증제", "/competency/certificate", true)
            )),
            new NavGroup(5, "커뮤니티", "/community/notice", List.of(
                    new NavItem("community-notice", "공지사항", "/community/notice", false),
                    new NavItem("community-review", "프로그램 후기", "/community/review", false),
                    new NavItem("community-qna", "문의게시판", "/community/qna", false)
            ))
    );

    public List<NavGroup> groups() {
        return groups;
    }

    public Optional<NavItem> findByUrl(String url) {
        return groups.stream()
                .flatMap(g -> g.items().stream())
                .filter(i -> i.url().equals(url))
                .findFirst();
    }

    public Optional<NavGroup> groupOf(NavItem item) {
        return groups.stream()
                .filter(g -> g.items().contains(item))
                .findFirst();
    }
}

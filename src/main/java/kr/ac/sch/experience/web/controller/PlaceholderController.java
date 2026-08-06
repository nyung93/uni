package kr.ac.sch.experience.web.controller;

import jakarta.servlet.http.HttpServletRequest;
import kr.ac.sch.experience.web.nav.NavGroup;
import kr.ac.sch.experience.web.nav.NavItem;
import kr.ac.sch.experience.web.nav.NavRegistry;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 아직 프로토타입 화면이 없는 메뉴 항목(프로그램 소개, 진로설계, 커뮤니티)을 위한 공통 처리.
 * 메뉴 자체는 정상적으로 접근 가능하되 콘텐츠 영역에는 "준비중입니다" 를 표시한다.
 */
@Controller
public class PlaceholderController {

    private final NavRegistry navRegistry;

    public PlaceholderController(NavRegistry navRegistry) {
        this.navRegistry = navRegistry;
    }

    @GetMapping({"/intro/*", "/career/*", "/community/*"})
    public String comingSoon(HttpServletRequest request, Model model) {
        String path = request.getRequestURI();
        NavItem item = navRegistry.findByUrl(path).orElse(null);

        String title = item != null ? item.title() : "준비중";
        String breadcrumb = title;
        int groupId = 0;
        String itemKey = null;

        if (item != null) {
            NavGroup group = navRegistry.groupOf(item).orElse(null);
            if (group != null) {
                breadcrumb = group.title() + " > " + item.title();
                groupId = group.id();
            }
            itemKey = item.key();
        }

        model.addAttribute("pageTitle", title);
        model.addAttribute("activeGroupId", groupId);
        model.addAttribute("activeItemKey", itemKey);
        model.addAttribute("breadcrumb", breadcrumb);
        model.addAttribute("content", "common/coming-soon :: content");
        return "layout/shell";
    }
}

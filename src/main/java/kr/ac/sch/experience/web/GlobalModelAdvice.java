package kr.ac.sch.experience.web;

import kr.ac.sch.experience.web.nav.NavGroup;
import kr.ac.sch.experience.web.nav.NavRegistry;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;

/** 모든 화면(shell.html)이 GNB를 그릴 수 있도록 navGroups 를 전역으로 주입한다. */
@ControllerAdvice
public class GlobalModelAdvice {

    private final NavRegistry navRegistry;

    public GlobalModelAdvice(NavRegistry navRegistry) {
        this.navRegistry = navRegistry;
    }

    @ModelAttribute("navGroups")
    public List<NavGroup> navGroups() {
        return navRegistry.groups();
    }
}

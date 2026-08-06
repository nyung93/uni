package kr.ac.sch.experience.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

/** C.1 마이페이지 화면 연결 (PAGE1 대시보드 / PAGE2 내정보 수정). */
@Controller
public class MyPageController {

    @GetMapping("/")
    public String root() {
        return "redirect:/mypage";
    }

    @GetMapping("/mypage")
    public String myPage(Model model) {
        model.addAttribute("pageTitle", "마이페이지");
        model.addAttribute("activeGroupId", 1);
        model.addAttribute("activeItemKey", "mypage");
        model.addAttribute("content", "mypage/index :: content");
        return "layout/shell";
    }

    @GetMapping("/mypage/edit")
    public String edit(Model model) {
        model.addAttribute("pageTitle", "내정보 수정");
        model.addAttribute("activeGroupId", 1);
        model.addAttribute("activeItemKey", "mypage");
        model.addAttribute("content", "mypage/edit :: content");
        return "layout/shell";
    }

    @PostMapping("/mypage/edit")
    public String save() {
        // 프로토타입 단계 - 실제 저장 로직 없이 마이페이지로 복귀
        return "redirect:/mypage";
    }
}

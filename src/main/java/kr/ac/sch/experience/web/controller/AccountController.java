package kr.ac.sch.experience.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

/** A.1 초·중·고 회원가입 화면. GNB 5대 메뉴 밖(헤더 유틸 영역)에서 접근한다. */
@Controller
public class AccountController {

    @GetMapping("/account/signup")
    public String signup(Model model) {
        model.addAttribute("pageTitle", "초·중·고 회원가입");
        model.addAttribute("content", "account/signup :: content");
        return "layout/shell";
    }

    @PostMapping("/account/signup")
    public String submit() {
        // 프로토타입 단계 - 실제 계정 생성 없이 마이페이지로 이동
        return "redirect:/mypage";
    }
}

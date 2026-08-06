package kr.ac.sch.experience.web.controller;

import kr.ac.sch.experience.domain.HistoryData;
import kr.ac.sch.experience.domain.Program;
import kr.ac.sch.experience.domain.ProgramData;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/** 역량개발 그룹 - A.3 프로그램 신청, C.3 신청내역, C.4 역량 인증제 화면 연결. */
@Controller
public class CompetencyController {

    private final ProgramData programData;
    private final HistoryData historyData;

    public CompetencyController(ProgramData programData, HistoryData historyData) {
        this.programData = programData;
        this.historyData = historyData;
    }

    @GetMapping("/competency/apply")
    public String applyList(Model model) {
        model.addAttribute("pageTitle", "프로그램 신청");
        model.addAttribute("activeGroupId", 4);
        model.addAttribute("activeItemKey", "competency-apply");
        model.addAttribute("programs", programData.all());
        model.addAttribute("content", "competency/apply-list :: content");
        return "layout/shell";
    }

    @GetMapping("/competency/apply/{id}")
    public String applyDetail(@PathVariable int id, Model model) {
        Program program = programData.findById(id).filter(Program::open)
                .orElseGet(() -> programData.all().get(0));
        model.addAttribute("pageTitle", "프로그램 신청 상세");
        model.addAttribute("activeGroupId", 4);
        model.addAttribute("activeItemKey", "competency-apply");
        model.addAttribute("program", program);
        model.addAttribute("content", "competency/apply-detail :: content");
        return "layout/shell";
    }

    @GetMapping("/competency/history")
    public String history(Model model) {
        model.addAttribute("pageTitle", "프로그램 신청내역");
        model.addAttribute("activeGroupId", 4);
        model.addAttribute("activeItemKey", "competency-history");
        model.addAttribute("historyItems", historyData.all());
        model.addAttribute("content", "competency/history :: content");
        return "layout/shell";
    }

    @GetMapping("/competency/certificate")
    public String certificate(Model model) {
        model.addAttribute("pageTitle", "역량 인증제");
        model.addAttribute("activeGroupId", 4);
        model.addAttribute("activeItemKey", "competency-certificate");
        model.addAttribute("content", "competency/certificate :: content");
        return "layout/shell";
    }

    @GetMapping("/competency/certificate/print")
    public String certificatePrint(Model model) {
        model.addAttribute("pageTitle", "인증서 출력");
        model.addAttribute("activeGroupId", 4);
        model.addAttribute("activeItemKey", "competency-certificate");
        model.addAttribute("content", "competency/certificate-print :: content");
        return "layout/shell";
    }
}

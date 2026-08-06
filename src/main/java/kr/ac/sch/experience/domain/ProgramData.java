package kr.ac.sch.experience.domain;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

/** 프로토타입 목업 데이터 저장소 (DB 연동 전 단계). */
@Component
public class ProgramData {

    private final List<Program> programs = List.of(
            new Program(1, "🤖", "linear-gradient(135deg,var(--navy),var(--blue))", true,
                    "고등 창의융합", "심화실습형", "미래융합센터", "고등학생", "05-01~05-13",
                    "AI 인공지능 기초 코딩 워크숍", false,
                    "D-7", "창의", 7,
                    "미래융합센터운영팀", "041-530-1234 · future@sch.ac.kr",
                    "고등학교", "고1 ~ 고2",
                    "1 / 2차수", 27, 20,
                    "2026.05.01(금) 09:00 ~ 2026.05.13(수) 18:00",
                    "2026.05.14(목) 09:00 ~ 2026.06.14(일) 18:00",
                    "[체험학습] AI 인공지능 기초 코딩 워크숍<br><br>블록코딩 기반 AI 원리 이해 및 실습 중심 진로체험 프로그램입니다. 코딩 경험이 없는 학생도 참여 가능하며, 팀 프로젝트 형태로 간단한 AI 챗봇을 직접 만들어보는 활동으로 마무리됩니다."),

            new Program(2, "🎯", "linear-gradient(135deg,var(--sky),var(--blue))", true,
                    "중등 진로설계", "일반참여형", "청소년지원센터", "중학생", "05-05~05-19",
                    "나의 진로 설계: 꿈을 찾는 시간", false,
                    "D-13", "글로벌", 4,
                    "청소년지원센터운영팀", "041-530-5678 · career@sch.ac.kr",
                    "중학교", "중1 ~ 중3",
                    "1 / 1차수", 15, 30,
                    "2026.05.05(화) 09:00 ~ 2026.05.19(화) 18:00",
                    "2026.05.20(수) 13:00 ~ 2026.05.20(수) 17:00",
                    "[진로체험] 나의 진로 설계: 꿈을 찾는 시간<br><br>자기이해 검사와 직업인 인터뷰를 통해 자신의 진로를 탐색하는 프로그램입니다. 진로 멘토와의 1:1 상담을 통해 구체적인 목표 직업을 설정해봅니다."),

            new Program(3, "🔬", "linear-gradient(135deg,var(--green),#5cb88a)", true,
                    "중등 과학탐구", "심화실습형", "융합과학실", "중학생", "05-10~05-24",
                    "과학 탐구 동아리", true,
                    "D-18", "창의", 6,
                    "융합과학교육센터", "041-530-2222 · science@sch.ac.kr",
                    "중학교", "중2 ~ 중3",
                    "1 / 1차수", 18, 24,
                    "2026.05.10(일) 09:00 ~ 2026.05.24(일) 18:00",
                    "2026.06.20(토) 10:00 ~ 2026.07.20(월) 17:00",
                    "[동아리형] 과학 탐구 동아리<br><br>매주 실험 주제를 정해 직접 가설을 세우고 검증하는 탐구 활동입니다. 학기말에는 탐구 결과를 발표하는 소규모 과학전시회로 마무리됩니다."),

            new Program(4, "🏆", "linear-gradient(135deg,#8b93a0,#a9b1ba)", false,
                    "중등 창의융합", "일반참여형", "미래융합센터", "중학생", "04-10~04-24",
                    "창의 로봇 경진대회", false,
                    null, "창의", 6, null, null, null, null, null, 0, 0, null, null, null),

            new Program(5, "🤝", "linear-gradient(135deg,#8b93a0,#a9b1ba)", false,
                    "중등 인성교육", "일반참여형", "학생회관", "중학생", "04-15~04-29",
                    "인성교육 워크숍", false,
                    null, "공감", 6, null, null, null, null, null, 0, 0, null, null, null)
    );

    public List<Program> all() {
        return programs;
    }

    public Optional<Program> findById(int id) {
        return programs.stream().filter(p -> p.id() == id).findFirst();
    }
}

package kr.ac.sch.experience.domain;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class HistoryData {

    private final List<HistoryItem> items = List.of(
            new HistoryItem(1, "🎯", "linear-gradient(135deg,var(--sky),var(--blue))",
                    "나의 진로 설계: 꿈을 찾는 시간", "1차", "05-20~05-20", "글로벌", HistoryStatus.DONE, 12),
            new HistoryItem(2, "🔬", "linear-gradient(135deg,var(--green),#5cb88a)",
                    "과학 탐구 동아리", "2차", "06-20~07-20", "창의", HistoryStatus.DONE, 6),
            new HistoryItem(3, "🤖", "linear-gradient(135deg,var(--navy),var(--blue))",
                    "AI 인공지능 기초 코딩 워크숍", "1차", "05-14~06-14", "창의", HistoryStatus.DONE, 4),
            new HistoryItem(4, "🤝", "linear-gradient(135deg,#8b93a0,#a9b1ba)",
                    "인성교육 워크숍", "1차", "07-18~07-18", "공감", HistoryStatus.DONE, 10),
            new HistoryItem(5, "🏆", "linear-gradient(135deg,#8b93a0,#a9b1ba)",
                    "창의 로봇 경진대회", "1차", "08-20~08-20", "창의", HistoryStatus.WAIT, null),
            new HistoryItem(6, "📚", "linear-gradient(135deg,#c7ccd2,#dde1e4)",
                    "독서토론 동아리", "1차", "11-04~11-04", "공감", HistoryStatus.CANCELED, null)
    );

    public List<HistoryItem> all() {
        return items;
    }
}

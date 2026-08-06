package kr.ac.sch.experience.domain;

/** C.3 프로그램 신청내역 화면에서 사용하는 목업 데이터. */
public record HistoryItem(
        int id,
        String icon,
        String gradientCss,
        String title,
        String roundLabel,
        String eduPeriod,
        String area,
        HistoryStatus status,
        Integer points
) {
}

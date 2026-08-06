package kr.ac.sch.experience.domain;

/** A.3 프로그램 신청 화면(리스트+상세)에서 사용하는 비교과 프로그램 목업 데이터. */
public record Program(
        int id,
        String icon,
        String gradientCss,
        boolean open,
        String category,
        String type,
        String place,
        String target,
        String applyPeriodShort,
        String title,
        boolean favorite,

        // 상세 화면(PAGE2) 전용 필드 - open=false 인 항목은 상세 페이지가 없으므로 비워둔다.
        String dday,
        String competencyArea,
        int competencyPoints,
        String deptName,
        String deptContact,
        String targetSchoolLevel,
        String targetGrade,
        String roundLabel,
        int appliedCount,
        int capacity,
        String applyPeriodFull,
        String eduPeriodFull,
        String description
) {
}

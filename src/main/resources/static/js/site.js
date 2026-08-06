/* 사이트 공통 스크립트 (프로토타입 단계 - 서버 연동 없이 UI 동작만 재현) */

function toggleCheck(el) {
  el.classList.toggle('on');
}

function comingSoonAlert() {
  alert('아직 준비 중인 기능입니다.');
}

function selectSeg(el) {
  const group = el.parentElement;
  group.querySelectorAll('.seg').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

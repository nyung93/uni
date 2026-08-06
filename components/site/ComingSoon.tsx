export default function ComingSoon({ breadcrumb, title }: { breadcrumb: string; title: string }) {
  return (
    <>
      <div className="crumb">{breadcrumb}</div>
      <div className="page-title-row">
        <span className="page-title">{title}</span>
      </div>
      <div className="coming-soon">
        <div className="ic">🚧</div>
        <div className="tt">[준비중입니다]</div>
        <div className="ds">해당 메뉴는 현재 준비 중입니다. 빠른 시일 내에 서비스를 제공하겠습니다.</div>
      </div>
    </>
  );
}

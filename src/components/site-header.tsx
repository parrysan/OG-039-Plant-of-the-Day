import { Logo } from "../../ods/components/logo/react/Logo";
import { ExternalLink } from "./external-link";

export function SiteHeader() {
  return (
    <header className="ods-site-header">
      <div className="ods-site-header-bar">
        <ExternalLink href="/" className="ods-site-header-logo">
          <Logo height={32} />
        </ExternalLink>
        <div className="ods-site-header-end">
          <ExternalLink href="/" className="ods-site-header-link">
            Plants
          </ExternalLink>
        </div>
      </div>
    </header>
  );
}

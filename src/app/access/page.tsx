import { ExternalLink } from "../../components/external-link";

export default function AccessPage() {
  return (
    <article className="ods-stack" data-gap="lg">
      <header className="ods-stack" data-gap="sm">
        <h1 className="ods-heading">Sign in</h1>
        <p className="ods-text" data-size="lead">
          Accounts are not built yet.
        </p>
      </header>
      <p className="ods-text">
        A locked reader layer sends you here. Phil has not chosen an account system, so this page does not take a password.
      </p>
      <p>
        <ExternalLink href="/">Back to the plants</ExternalLink>
      </p>
    </article>
  );
}

import { ACCESS_TIERS, type AccessTier } from "../lib/access";

const LABEL: Record<AccessTier, string> = {
  public: "Public",
  member: "Member",
  expert: "Expert",
};

export function TierForm({ tier, slug }: { tier: AccessTier; slug?: string }) {
  return (
    <form className="tier-form" method="get" action={slug ? `/plant/${slug}` : "/"}>
      <span className="ods-label" id="tier-label">
        Access
      </span>
      <div className="ods-choice-group" role="radiogroup" aria-labelledby="tier-label">
        {ACCESS_TIERS.map((value) => (
          <label className="ods-choice" key={value}>
            <input className="ods-radio" type="radio" name="tier" value={value} defaultChecked={value === tier} />
            {LABEL[value]}
          </label>
        ))}
      </div>
      <button className="ods-button ods-button--outlined ods-button--s" type="submit">
        Show
      </button>
    </form>
  );
}

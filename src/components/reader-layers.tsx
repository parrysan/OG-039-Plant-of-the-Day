"use client";

import { Accordion } from "../../ods/components/accordion/react/Accordion";
import { Alert } from "../../ods/components/alert/react/Alert";
import { Icon } from "../../ods/components/icon/react/Icon";
import { StatusPill } from "../../ods/components/status-pill/react/StatusPill";
import {
  AVATAR_ROLES,
  LAYER_LABEL,
  LAYER_MIN_TIER,
  TIER_RANK,
  TIER_TONE,
  type AccessTier,
  type AvatarRole,
  type PlantMetadata,
} from "../lib/access";
import { LOCK_PATH } from "../lib/icons";

const FIELDS: Record<AvatarRole, [string, string][]> = {
  casual_observer: [
    ["Care", "care"],
    ["Looks", "visual_traits"],
    ["Pets", "pet_toxicity"],
    ["Note", "trivia"],
  ],
  production_grower: [
    ["EC", "ec"],
    ["pH", "ph"],
    ["DLI", "dli"],
    ["Propagation", "propagation"],
    ["Harvest", "harvest"],
  ],
  ecological_manager: [
    ["Habitat", "habitat_restoration"],
    ["Pollinators", "pollinators"],
    ["Biodiversity score", "biodiversity_score"],
  ],
};

function textOf(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

function LayerBody({ role, fields }: { role: AvatarRole; fields: Record<string, unknown> }) {
  return (
    <dl className="og-kv og-kv--divided">
      {FIELDS[role].map(([label, key]) => (
        <div className="og-kv__row" key={key}>
          <dt className="og-kv__label">{label}</dt>
          <dd className="og-kv__value">
            {textOf(fields[key])}
            {key === "biodiversity_score" ? (
              <span className="og-kv__hint">Stub scale for this record. Not a published index.</span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function LockedBody({ tier }: { tier: AccessTier }) {
  const label = tier === "expert" ? "Expert" : "Member";
  return (
    <Alert
      tone="info"
      announce="static"
      title={`${label} access`}
      actions={[{ label: "Sign in", href: "/access", variant: "important" }]}
    >
      This layer is closed on your tier.
    </Alert>
  );
}

export function ReaderLayers({
  metadata,
  tier,
}: {
  metadata: PlantMetadata;
  tier: AccessTier;
}) {
  const rank = TIER_RANK[tier];
  const items = AVATAR_ROLES.map((role) => {
    const min = LAYER_MIN_TIER[role];
    const open = rank >= TIER_RANK[min];
    const fields = metadata.avatars?.[role];
    return {
      id: role,
      title: LAYER_LABEL[role],
      content: open && fields ? <LayerBody role={role} fields={fields} /> : <LockedBody tier={min} />,
    };
  });

  return (
    <div className="ods-stack" data-gap="lg">
      <div className="ods-cluster" data-gap="sm">
        {AVATAR_ROLES.map((role) => {
          const min = LAYER_MIN_TIER[role];
          const locked = rank < TIER_RANK[min];
          return (
            <StatusPill key={role} tone={TIER_TONE[min]} size="sm">
              {locked ? <Icon path={LOCK_PATH} size="sm" /> : null}
              {LAYER_LABEL[role]}
            </StatusPill>
          );
        })}
      </div>
      <Accordion items={items} />
    </div>
  );
}

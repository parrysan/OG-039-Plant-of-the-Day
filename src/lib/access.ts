/**
 * Reader gates. The same ranks are enforced in
 * supabase/migrations/20261124100200_rls.sql (redact_plant_metadata).
 * Keep the two in step.
 *
 * Tier tones are existing status-pill tones. They are a stand-in until
 * Tung confirms a lock badge. This file does not add colour tokens.
 */
export const ACCESS_TIERS = ["public", "member", "expert"] as const;
export type AccessTier = (typeof ACCESS_TIERS)[number];

export const AVATAR_ROLES = [
  "casual_observer",
  "production_grower",
  "ecological_manager",
] as const;
export type AvatarRole = (typeof AVATAR_ROLES)[number];

export const TIER_RANK: Record<AccessTier, number> = {
  public: 0,
  member: 1,
  expert: 2,
};

export const MODULE_MIN_RANK: Record<AvatarRole, number> = {
  casual_observer: 0,
  production_grower: 1,
  ecological_manager: 2,
};

/** Existing status-pill tones used as the stand-in for each gate. */
export const TIER_TONE = {
  public: "neutral",
  member: "info",
  expert: "validation",
} as const;

export const LAYER_LABEL: Record<AvatarRole, string> = {
  casual_observer: "Casual Observer",
  production_grower: "Production Grower",
  ecological_manager: "Ecological Manager",
};

export const LAYER_MIN_TIER: Record<AvatarRole, AccessTier> = {
  casual_observer: "public",
  production_grower: "member",
  ecological_manager: "expert",
};

export type PlantMetadata = {
  avatars?: Partial<Record<AvatarRole, Record<string, unknown>>>;
  pod?: Record<string, unknown>;
  agent_instructions?: Record<string, unknown>;
};

export function parseTier(value: string | undefined | null): AccessTier {
  if (value === "member" || value === "expert" || value === "public") return value;
  return "public";
}

export function parseAvatarRole(value: string | undefined | null): AvatarRole | null {
  if (
    value === "casual_observer" ||
    value === "production_grower" ||
    value === "ecological_manager"
  ) {
    return value;
  }
  return null;
}

export function redactMetadata(
  meta: PlantMetadata | null | undefined,
  tier: AccessTier,
  avatarRole: AvatarRole | null,
): PlantMetadata {
  const rank = TIER_RANK[tier];
  const avatars = meta?.avatars ?? {};
  const kept: NonNullable<PlantMetadata["avatars"]> = {};
  for (const key of AVATAR_ROLES) {
    if (avatarRole && key !== avatarRole) continue;
    if (rank >= MODULE_MIN_RANK[key] && avatars[key]) kept[key] = avatars[key];
  }
  const out: PlantMetadata = { avatars: kept };
  if (!avatarRole && rank >= 1 && meta?.pod) out.pod = meta.pod;
  if (!avatarRole && rank >= 2 && meta?.agent_instructions) {
    out.agent_instructions = meta.agent_instructions;
  }
  return out;
}

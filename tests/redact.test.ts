import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { redactMetadata, type PlantMetadata } from "../src/lib/access.ts";

const seed = JSON.parse(readFileSync(new URL("../data/seed/plants.json", import.meta.url), "utf8"));
const nettle = seed.plants[0].metadata as PlantMetadata;

test("public tier keeps the casual observer only", () => {
  const out = redactMetadata(nettle, "public", null);
  assert.deepEqual(Object.keys(out.avatars ?? {}), ["casual_observer"]);
  assert.equal(out.pod, undefined);
  assert.equal(out.agent_instructions, undefined);
});

test("member tier adds the grower and the POD block", () => {
  const out = redactMetadata(nettle, "member", null);
  assert.deepEqual(Object.keys(out.avatars ?? {}).sort(), ["casual_observer", "production_grower"]);
  assert.ok(out.pod);
  assert.equal(out.agent_instructions, undefined);
});

test("expert tier keeps every node", () => {
  const out = redactMetadata(nettle, "expert", null);
  assert.deepEqual(Object.keys(out.avatars ?? {}).sort(), [
    "casual_observer",
    "ecological_manager",
    "production_grower",
  ]);
  assert.ok(out.pod);
  assert.ok(out.agent_instructions);
});

test("an avatar role returns that module and nothing else", () => {
  const out = redactMetadata(nettle, "expert", "ecological_manager");
  assert.deepEqual(Object.keys(out.avatars ?? {}), ["ecological_manager"]);
  assert.equal(out.pod, undefined);
  assert.equal(out.agent_instructions, undefined);
});

test("the image recipe leaves the template choice open", () => {
  const recipe = JSON.parse(readFileSync(new URL("../data/config/nano-banana.json", import.meta.url), "utf8"));
  assert.equal(recipe.active_template, null);
  assert.equal(recipe.templates.with_flowers.includes_flowers, true);
  assert.equal(recipe.templates.foliage_only.includes_flowers, false);
  assert.ok(recipe.templates.with_flowers.template.includes("flowers"));
  assert.equal(recipe.templates.foliage_only.template.includes("flowers"), false);
});

test("the pipeline choice is unset", () => {
  const pipeline = JSON.parse(readFileSync(new URL("../data/config/pipeline.json", import.meta.url), "utf8"));
  assert.equal(pipeline.selected, null);
  assert.deepEqual(
    pipeline.options.map((option: { id: string }) => option.id),
    ["replaces_n8n", "integrates_with_n8n"],
  );
});

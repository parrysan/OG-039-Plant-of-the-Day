#!/usr/bin/env bash
# Apply the migrations and seed to a local Postgres database.
# Supabase CLI (supabase start) is the full local stack and needs Docker.
# This script is the path that works with a stock Postgres.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DB_NAME="${PLANT_DB_NAME:-plant_of_the_day}"
PSQL=(psql -v ON_ERROR_STOP=1)

if [[ -n "${DATABASE_URL:-}" ]]; then
  PSQL+=("$DATABASE_URL")
else
  PSQL=(sudo -u postgres psql -v ON_ERROR_STOP=1)
  sudo -u postgres psql -v ON_ERROR_STOP=1 -tc "SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'" | grep -q 1 \
    || sudo -u postgres createdb "$DB_NAME"
  PSQL+=(-d "$DB_NAME")
fi

for file in "$ROOT"/supabase/migrations/*.sql; do
  echo "apply $(basename "$file")"
  "${PSQL[@]}" -f "$file"
done

echo "apply seed.sql"
node "$ROOT/scripts/build-seed.mjs" >/dev/null
"${PSQL[@]}" -f "$ROOT/supabase/seed.sql"
echo "apply verify-rls.sql"
"${PSQL[@]}" -f "$ROOT/scripts/verify-rls.sql"
echo "migrations applied"

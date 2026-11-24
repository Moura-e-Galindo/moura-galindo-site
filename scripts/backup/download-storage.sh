#!/usr/bin/env bash
# Baixa todos os arquivos (raiz) de um bucket público do Supabase Storage.
# Uso: download-storage.sh <bucket> <pasta-destino>
# Requer as variáveis SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY.
set -euo pipefail

bucket="${1:?Informe o bucket}"
dest="${2:?Informe a pasta de destino}"
: "${SUPABASE_URL:?SUPABASE_URL não definida}"
: "${SUPABASE_SERVICE_ROLE_KEY:?SUPABASE_SERVICE_ROLE_KEY não definida}"

mkdir -p "$dest"

limit=1000
offset=0
total=0

while :; do
  page=$(curl -sS --fail-with-body --retry 3 \
    -X POST "$SUPABASE_URL/storage/v1/object/list/$bucket" \
    -H "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
    -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"prefix\":\"\",\"limit\":$limit,\"offset\":$offset,\"sortBy\":{\"column\":\"name\",\"order\":\"asc\"}}")

  count=$(jq 'length' <<< "$page")
  [ "$count" -eq 0 ] && break

  # Itens com id nulo são pastas; as imagens ficam na raiz do bucket.
  while IFS= read -r name; do
    encoded=$(jq -rn --arg n "$name" '$n | @uri')
    curl -sS --fail --retry 3 -o "$dest/$name" \
      "$SUPABASE_URL/storage/v1/object/public/$bucket/$encoded"
    total=$((total + 1))
  done < <(jq -r '.[] | select(.id != null) | .name' <<< "$page")

  [ "$count" -lt "$limit" ] && break
  offset=$((offset + limit))
done

echo "$total arquivo(s) baixado(s) do bucket $bucket."

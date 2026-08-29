# Banners dos núcleos

Cada arquivo `<slug>.webp` é o banner exibido no topo do card do núcleo correspondente
(componente `src/components/NucleoCard.tsx`, usado em `src/routes/areas.index.tsx` e
`src/routes/index.tsx`).

## Como substituir uma imagem

Basta trocar o arquivo mantendo **o mesmo nome** (o slug do núcleo). Nenhuma alteração
de código é necessária — o import em `src/data/nucleos.ts` continua válido.

Recomendações para a nova imagem:
- Proporção aproximada **3:1** (paisagem). O banner é recortado com `object-cover`,
  então o centro/direita da imagem é a área mais visível.
- Largura ~1000px é suficiente; prefira `.webp` para manter o site leve.
- O selo do ícone fica sobreposto no canto **inferior esquerdo** — evite colocar
  elementos importantes ali.
- Se usar o mesmo nome com outra extensão (ex.: `.jpg`), atualize também o import
  correspondente em `src/data/nucleos.ts`.

## Mapeamento slug → área

| Arquivo | Núcleo |
| --- | --- |
| direito-civil-e-contratual.webp | Direito Civil e Contratual |
| direito-imobiliario.webp | Direito Imobiliário |
| direito-criminal.webp | Direito Criminal |
| direito-trabalhista-empresarial.webp | Direito Trabalhista Empresarial |
| direito-da-crianca-e-adolescente.webp | Direito da Criança e Adolescente |
| direito-sucessorio.webp | Direito Sucessório |
| direito-medico-e-da-saude.webp | Direito Médico e da Saúde |
| direito-da-familia.webp | Direito da Família |
| direito-tributario.webp | Direito Tributário |
| direito-empresarial-e-societario.webp | Direito Empresarial e Societário |
| direito-do-consumidor.webp | Direito do Consumidor |
| direito-da-moda.webp | Direito da Moda |
| direito-previdenciario.webp | Direito Previdenciário |
| direito-publico-administrativo.webp | Direito Público/Administrativo |
| direito-ambiental.webp | Direito Ambiental |
| direito-bancario.webp | Direito Bancário |
| contencioso-trabalhista.webp | Contencioso Trabalhista |
| direito-eleitoral.webp | Direito Eleitoral |

> Os banners atuais são artes originais (fundo preto/dourado com o ícone do núcleo),
> geradas para o site — **não são fotografias**. Podem ser trocados por fotos reais
> a qualquer momento seguindo as instruções acima.

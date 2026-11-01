import { FACTS, type Country, type FactCard } from './data/facts.ts'

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .split(/[^a-z0-9\u4e00-\u9fff+]+/i)
    .filter((t) => t.length > 1)
}

/** Keyword / section match over bundled fact cards. */
export function searchFacts(query: string, country: Country): FactCard[] {
  const tokens = tokenize(query)
  const pool =
    country === 'ALL' ? FACTS : FACTS.filter((f) => f.country === country)

  if (tokens.length === 0) {
    return pool.slice(0, 4)
  }

  const scored = pool
    .map((fact) => {
      const hay = (
        fact.title +
        ' ' +
        fact.body +
        ' ' +
        fact.tags.join(' ') +
        ' ' +
        fact.country
      ).toLowerCase()
      let score = 0
      for (const t of tokens) {
        if (hay.includes(t)) score += 2
        if (fact.tags.some((tag) => tag.toLowerCase() === t)) score += 3
        if (fact.country.toLowerCase() === t) score += 4
      }
      // Light boosts for common intents
      if (
        tokens.some((t) =>
          ['visa', 'eb3', 'eb-3', '移民', '签证', '绿卡'].includes(t),
        ) &&
        /visa|eb-3|immigration|migration|mom|home affairs/i.test(hay)
      ) {
        score += 2
      }
      if (
        tokens.some((t) =>
          ['license', 'licence', 'nclex', '注册', '执照', 'board'].includes(t),
        ) &&
        /license|registration|nclex|board|ncnz|snb|nmba/i.test(hay)
      ) {
        score += 2
      }
      return { fact, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)

  if (scored.length === 0) {
    return pool.slice(0, 3)
  }
  return scored.slice(0, 5).map((x) => x.fact)
}

export function formatAnswer(facts: FactCard[]): string {
  if (facts.length === 0) {
    return 'No matching fact cards. Try a country name (US / AU / NZ / SG) or keywords like NCLEX, AHPRA, NCNZ, SNB, EB-3.'
  }
  return facts
    .map((f, i) => {
      const flag = f.uncertain ? ' ⚠️ uncertain' : ''
      const note = f.uncertainNote ? `\n   Note: ${f.uncertainNote}` : ''
      const src = f.sources.map((s) => `• ${s.label}: ${s.url}`).join('\n')
      return `${i + 1}. [${f.country}] ${f.title}${flag}\n${f.body}${note}\nSources:\n${src}`
    })
    .join('\n\n')
}

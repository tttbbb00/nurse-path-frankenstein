import './style.css'
import { COUNTRY_LABEL, type Country, type FactCard } from './data/facts.ts'
import { searchFacts } from './search.ts'

type Role = 'user' | 'assistant' | 'system'

interface Message {
  role: Role
  html: string
}

const QUICK: { label: string; q: string; country?: Country }[] = [
  { label: 'US NCLEX / boards', q: 'US NCLEX state board license', country: 'US' },
  { label: 'US EB-3 overview', q: 'EB-3 USCIS nurse sponsorship', country: 'US' },
  { label: 'Australia AHPRA', q: 'Australia AHPRA NMBA registration', country: 'AU' },
  { label: 'New Zealand NCNZ', q: 'New Zealand NCNZ registration', country: 'NZ' },
  { label: 'Singapore SNB', q: 'Singapore SNB registration MOM', country: 'SG' },
]

let country: Country = 'ALL'
const messages: Message[] = []

const app = document.querySelector<HTMLDivElement>('#app')!

function esc(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function renderFactCards(facts: FactCard[]): string {
  if (facts.length === 0) {
    return `<p class="empty">No matching cards. Try US / AU / NZ / SG, NCLEX, AHPRA, NCNZ, SNB, or EB-3.</p>`
  }
  return facts
    .map((f) => {
      const badge = f.uncertain
        ? `<span class="badge warn" title="${esc(f.uncertainNote ?? 'Uncertain')}">uncertain</span>`
        : `<span class="badge ok">sourced</span>`
      const note = f.uncertainNote
        ? `<p class="note">${esc(f.uncertainNote)}</p>`
        : ''
      const sources = f.sources
        .map(
          (s) =>
            `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></li>`,
        )
        .join('')
      return `<article class="card">
  <header><span class="cc">${esc(f.country)}</span><h3>${esc(f.title)}</h3>${badge}</header>
  <p>${esc(f.body)}</p>
  ${note}
  <ul class="sources">${sources}</ul>
</article>`
    })
    .join('')
}

function push(role: Role, html: string) {
  messages.push({ role, html })
  paint()
}

function answer(query: string) {
  const facts = searchFacts(query, country)
  const intro = `<p>Matched <strong>${facts.length}</strong> fact card(s) for <em>${esc(query)}</em>${
    country === 'ALL' ? '' : ` · filter ${esc(country)}`
  }. Not legal advice.</p>`
  push('assistant', intro + renderFactCards(facts))
}

function paint() {
  const chips = (['ALL', 'US', 'AU', 'NZ', 'SG'] as Country[])
    .map((c) => {
      const label = c === 'ALL' ? 'All' : COUNTRY_LABEL[c]
      return `<button type="button" class="chip${country === c ? ' active' : ''}" data-country="${c}">${esc(label)}</button>`
    })
    .join('')

  const quick = QUICK.map(
    (q) =>
      `<button type="button" class="quick" data-q="${esc(q.q)}" data-c="${q.country ?? 'ALL'}">${esc(q.label)}</button>`,
  ).join('')

  const thread = messages
    .map((m) => `<div class="msg ${m.role}">${m.html}</div>`)
    .join('')

  app.innerHTML = `
  <div class="shell">
    <header class="top">
      <div>
        <p class="eyebrow">Kiroween 2026 · Frankenstein</p>
        <h1>Nurse Path Frankenstein</h1>
        <p class="sub">Ask about US / Australia / New Zealand / Singapore nurse pathways. Answers cite official boards — no invented numbers.</p>
      </div>
      <div class="chips" role="group" aria-label="Country filter">${chips}</div>
    </header>

    <div class="quick-row" aria-label="Suggested questions">${quick}</div>

    <main class="thread" id="thread" aria-live="polite">${
      thread ||
      `<div class="msg system"><p>Try a question, e.g. <strong>“What do I need for US NCLEX?”</strong> or pick a chip above. Every card links to NCSBN, NYSED, AHPRA/NMBA, NCNZ, SNB, USCIS, Home Affairs, Immigration NZ, or MOM.</p></div>`
    }</main>

    <form class="composer" id="composer">
      <label class="sr" for="q">Question</label>
      <input id="q" name="q" type="text" autocomplete="off" placeholder="e.g. Australia AHPRA registration vs visa…" required />
      <button type="submit">Ask</button>
    </form>
    <footer class="foot">
      <span>Sources bundled from <code>knowledge/*.md</code> · MIT</span>
      <span>Not legal / immigration advice</span>
    </footer>
  </div>`

  app.querySelectorAll<HTMLButtonElement>('.chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      country = btn.dataset.country as Country
      paint()
    })
  })

  app.querySelectorAll<HTMLButtonElement>('.quick').forEach((btn) => {
    btn.addEventListener('click', () => {
      const c = (btn.dataset.c as Country) || 'ALL'
      country = c
      const q = btn.dataset.q ?? ''
      push('user', `<p>${esc(q)}</p>`)
      answer(q)
    })
  })

  const form = app.querySelector<HTMLFormElement>('#composer')!
  const input = app.querySelector<HTMLInputElement>('#q')!
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const q = input.value.trim()
    if (!q) return
    push('user', `<p>${esc(q)}</p>`)
    answer(q)
    input.value = ''
    input.focus()
  })

  const threadEl = app.querySelector('#thread')
  if (threadEl) threadEl.scrollTop = threadEl.scrollHeight
}

paint()

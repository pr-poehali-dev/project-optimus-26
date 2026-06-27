const cases = [
  {
    industry: "Розница / Логистика",
    stats: [
      { value: "12 → 4–5 ч", label: "время тимлида на сопровождение новичка" },
      { value: "−42%", label: "одинаковых вопросов в первые 7 дней" },
      { value: "14 → 9–10 дн.", label: "срок выхода на целевую нагрузку" },
    ],
    quote: "До внедрения тимлид тратил ~12 часов на сопровождение новичка, после — 4–5 часов. Количество одинаковых вопросов в первые 7 дней снизилось на 42%.",
  },
  {
    industry: "IT / Продукт",
    stats: [
      { value: "−18%", label: "доля новичков, не прошедших испытательный срок" },
      { value: "0", label: "субъективных оценок готовности" },
      { value: "1 квартал", label: "срок достижения результата" },
    ],
    quote: "Прозрачные критерии «готов» убрали субъективность при оценке. Доля новичков, не прошедших испытательный срок, снизилась на 18% за квартал.",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="px-4 md:px-8 py-16 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Кейсы</p>
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white">
          Как это работает на практике
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.industry} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
              <span className="mb-5 self-start rounded-full bg-[#1f1f1f] border border-[#2a2a2a] px-3 py-1 text-xs text-gray-400">
                {c.industry}
              </span>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {c.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-lg font-bold text-violet-400">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-[#1a1a1a] border border-[#262626] px-4 py-3 mt-auto">
                <p className="text-sm text-gray-400 italic">«{c.quote}»</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-violet-600/10 border border-violet-500/30 px-6 py-4 text-center">
          <p className="text-sm text-gray-300">
            Пилотные внедрения в командах 50–300 человек: первые результаты по снижению нагрузки на тимлидов и ускорению выхода на целевую нагрузку.
          </p>
        </div>
      </div>
    </section>
  )
}

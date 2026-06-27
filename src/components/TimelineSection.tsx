const weeks = [
  {
    period: "Нед. 1–2",
    title: "Вхождение и безопасность",
    description: "Доступы, NDA, базовые регламенты, первые микрозадачи под контролем.",
    criterion: "Доступы подтверждены, тест по безопасности >80%, 3 задачи закрыты, встреча 1:1 проведена.",
    done: true,
  },
  {
    period: "Нед. 3–4",
    title: "Погружение в процессы",
    description: "Реальные задачи с чёткими критериями, ролевые сценарии, мини-кейсы.",
    criterion: "80% задач выполнено без помощи наставника, тест по SLA пройден.",
    done: true,
  },
  {
    period: "Нед. 5–6",
    title: "Кросс-функциональность",
    description: "Участие в общих активностях, первые индивидуальные цели, усложнённые кейсы.",
    criterion: "≥70% задач без помощи, 1 мини-проект с другим отделом завершён.",
    done: false,
    active: true,
  },
  {
    period: "Нед. 7–8",
    title: "Выход на целевую нагрузку",
    description: "Фокус на ключевых задачах роли, промежуточная оценка, план развития.",
    criterion: "Соответствие KPI-ориентирам, финальная встреча, статус «готов».",
    done: false,
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
      <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white max-w-2xl">
        8 недель адаптации: понятный маршрут вместо «разберёшься по ходу»
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {weeks.map((w, i) => (
          <div
            key={i}
            className={`rounded-2xl border p-5 flex flex-col relative ${
              w.active
                ? "bg-violet-600/10 border-violet-500/50"
                : w.done
                ? "bg-[#141414] border-[#262626]"
                : "bg-[#0f0f0f] border-[#1e1e1e]"
            }`}
          >
            {w.active && (
              <span className="absolute top-4 right-4 text-xs text-violet-400 bg-violet-500/20 px-2 py-0.5 rounded-full">Сейчас</span>
            )}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-4 ${
              w.done ? "bg-violet-600 text-white" : w.active ? "bg-violet-500/30 text-violet-300 border border-violet-500/50" : "bg-[#1f1f1f] text-gray-500 border border-[#2a2a2a]"
            }`}>
              {i + 1}
            </div>
            <p className="text-xs text-gray-500 mb-1">{w.period}</p>
            <h3 className="text-sm font-semibold text-white mb-2">{w.title}</h3>
            <p className="text-xs text-gray-400 mb-4 flex-1">{w.description}</p>
            <div className="rounded-lg bg-[#0a0a0a] border border-[#262626] px-3 py-2">
              <p className="text-xs text-gray-500">
                <span className="text-violet-400 font-medium">Критерий: </span>
                {w.criterion}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#141414] border border-[#262626] px-6 py-4">
        <p className="text-sm text-gray-400">
          <span className="text-white font-medium">На каждом шаге система фиксирует: </span>
          статус задачи, время выполнения, результаты тестов, количество вопросов к наставнику. Это и есть данные для метрик.
        </p>
      </div>
    </section>
  )
}
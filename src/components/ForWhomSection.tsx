import Icon from "@/components/ui/icon"

const segments = [
  {
    icon: "UserCog",
    title: "HR-партнёры",
    items: [
      "Единая методология онбординга по ролям (шаблоны маршрутов)",
      "Аналитика по когортам и узкие места процесса",
      "Снижение нагрузки за счёт автоматизации рутинных шагов",
    ],
  },
  {
    icon: "Users",
    title: "Руководители и тимлиды",
    items: [
      "Прозрачность прогресса: кто где застрял, где нужны ресурсы",
      "Готовые инструменты синхронизации: встречи, фидбек, корректировки",
      "Объективная оценка готовности сотрудника",
    ],
  },
]

const metrics = [
  { value: "−50%", label: "повторяющихся вопросов от новичков в первые 2 недели" },
  { value: "−30–40%", label: "времени на сопровождение одного новичка" },
  { value: "↑", label: "доля сотрудников, успешно проходящих испытательный срок" },
]

export function ForWhomSection() {
  return (
    <section id="for-whom" className="px-4 md:px-8 py-16 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Для кого</p>
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white max-w-2xl">
          Кому подойдёт и что вы получите уже в первый месяц
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {segments.map((s) => (
            <div key={s.title} className="rounded-2xl bg-[#141414] border border-[#262626] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
                <Icon name={s.icon} size={20} className="text-violet-400" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-white">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl bg-violet-600/10 border border-violet-500/30 p-6 text-center">
              <p className="text-4xl font-bold text-violet-400 mb-2">{m.value}</p>
              <p className="text-sm text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

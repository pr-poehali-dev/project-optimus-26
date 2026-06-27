import Icon from "@/components/ui/icon"

const segments = [
  {
    icon: "Store",
    title: "Владельцы малого бизнеса",
    description: "Нанимаете 2–5 человек в год без HR. Нужна система, которую можно запустить самому за пару дней.",
  },
  {
    icon: "Users",
    title: "Руководители отделов",
    description: "Команда растёт, новичков становится больше, а времени на ручной онбординг — всё меньше.",
  },
  {
    icon: "Layers",
    title: "Тимлиды без HR-поддержки",
    description: "Хотите, чтобы человек был готов к самостоятельной работе на 3-й день, а не через месяц.",
  },
]

export function ForWhomSection() {
  return (
    <section id="for-whom" className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
      <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Для кого</p>
      <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white max-w-xl">
        Для тех, кто нанимает без выделенного HR
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {segments.map((s) => (
          <div key={s.title} className="rounded-2xl bg-[#141414] border border-[#262626] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
              <Icon name={s.icon} size={20} className="text-violet-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="text-sm text-gray-400">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

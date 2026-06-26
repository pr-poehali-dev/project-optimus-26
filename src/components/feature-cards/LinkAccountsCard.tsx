import { Map, ArrowUpRight, Check } from "lucide-react"

const milestones = [
  { day: "Дни 1–3", title: "Welcome и контекст", role: "Все роли", done: true },
  { day: "Дни 4–7", title: "Первые задачи под наставником", role: "Оператор · Бариста", done: true },
  { day: "Дни 8–11", title: "Самостоятельная работа", role: "Координатор", done: false },
  { day: "Дни 12–14", title: "Проверка «человек готов»", role: "Менеджер", done: false },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Map className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Карта онбординга на 14 дней</h3>
      <p className="mb-4 text-sm text-gray-400">Чёткие этапы и критерии «человек готов» по ролям — без воды, только задачи и проверки</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {milestones.map((m, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2.5">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${
                  m.done ? "bg-violet-600 text-white" : "bg-[#1f1f1f] border border-[#2a2a2a] text-gray-500"
                }`}
              >
                {m.done ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{m.title}</p>
                <p className="text-xs text-gray-500">{m.role}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">{m.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
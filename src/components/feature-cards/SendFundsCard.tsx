import { BarChart3, ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react"

const metrics = [
  { label: "Срок выхода на нагрузку", value: "8 дней", trend: "−40%", up: false },
  { label: "Задачи без помощи наставника", value: "82%", trend: "+27%", up: true },
  { label: "Уточняющих вопросов в день", value: "3", trend: "−5", up: false },
]

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Как это измерить</h3>
      <p className="mb-4 text-sm text-gray-400">5 метрик первых 30 дней, которые реально стоит считать — видно, где теряются дни</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white">Первые 30 дней</span>
          <span className="text-xs text-gray-500">vs. без структуры</span>
        </div>

        {metrics.map((m, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <div>
              <p className="text-sm font-semibold text-white">{m.value}</p>
              <p className="text-xs text-gray-500">{m.label}</p>
            </div>
            <span
              className={`flex items-center gap-1 text-xs font-medium ${
                m.up ? "text-violet-400" : "text-emerald-400"
              }`}
            >
              {m.up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              {m.trend}
            </span>
          </div>
        ))}

        <div className="rounded-lg bg-violet-500/10 border border-violet-500/30 px-3 py-2.5">
          <p className="text-xs text-violet-300">Видно, где теряются дни — и как закрыть это артефактами.</p>
        </div>
      </div>
    </div>
  )
}
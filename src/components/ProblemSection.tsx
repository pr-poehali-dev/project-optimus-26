import { ArrowRight, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pairs = [
  {
    pain: "Новичок теряется между 5 чатами, 3 порталами и «спроси у тимлида»",
    solution: "Единый маршрут: все задачи, инструкции и тесты в одном окне",
  },
  {
    pain: "Готовность сотрудника оценивают «на глаз»",
    solution: "Чёткие критерии «сделано» + тесты + метрики прогресса",
  },
  {
    pain: "Тимлид тратит часы на одни и те же ответы",
    solution: "Чат-бот для частых вопросов + автонапоминания",
  },
  {
    pain: "Нет понимания, где узкие места в процессе",
    solution: "Дашборд по когортам: % задач без помощи, зоны трудностей, прогноз выхода на нагрузку",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="px-4 md:px-8 py-16 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Проблема и решение</p>
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white max-w-2xl">
          Почему онбординг в больших командах «не работает» и как это исправить
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
            <div className="flex items-center gap-2 mb-4">
              <X className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">Как сейчас</span>
            </div>
            <div className="space-y-3">
              {pairs.map((p, i) => (
                <div key={i} className="rounded-lg bg-red-500/5 border border-red-500/10 px-4 py-3 text-sm text-gray-300">
                  {p.pain}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-violet-500/20 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Check className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">С «День за днём»</span>
            </div>
            <div className="space-y-3">
              {pairs.map((p, i) => (
                <div key={i} className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-4 py-3 text-sm text-gray-300">
                  {p.solution}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-300 max-w-xl">
            <span className="font-semibold text-white">Вывод:</span> Мы не делаем «ещё один портал знаний», а даём готовый процесс с измеримыми результатами.
          </p>
          <Button
            className="rounded-full bg-violet-600 hover:bg-violet-700 text-white whitespace-nowrap"
            onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
          >
            Показать маршрут на 8 недель <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

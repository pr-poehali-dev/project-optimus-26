import { ArrowUpRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function HeroSection() {
  return (
    <section className="px-4 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-3">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">ДЛЯ КОРПОРАЦИЙ</span>
        <span className="text-gray-300">Онбординг с измеримыми результатами</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="mb-5 text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Онбординг в корпорации: пошаговый маршрут на 2 месяца вместо хаоса в чатах
          </h1>
          <p className="mb-8 text-gray-400 text-lg leading-relaxed">
            Платформа, где новый сотрудник сразу видит, что делать, а руководитель — где затык. Прозрачные критерии готовности, встроенные метрики, интеграция с внутренними системами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white"
              onClick={() => scrollTo("lead")}
            >
              Запросить демо на 14 дней <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800"
              onClick={() => scrollTo("lead")}
            >
              <Download className="mr-2 h-4 w-4 text-violet-400" />
              Скачать презентацию (PDF, 3 стр.)
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-white">Маршрут адаптации · 8 недель</span>
              <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">В процессе</span>
            </div>
            <div className="flex gap-1 mb-3">
              {[true, true, true, true, true, false, false, false].map((done, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full ${done ? "bg-violet-600" : "bg-[#262626]"}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Неделя 1</span>
              <span className="text-violet-400">Неделя 5 из 8</span>
              <span>Неделя 8</span>
            </div>
            <div className="mt-3 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-xs text-amber-400">
              ⚠ Алерт: тест по безопасности не пройден — Иван С.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { title: "Доступы", status: "Выполнено", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
              { title: "Тест по безопасности", status: "Не пройден", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
              { title: "Первая самост. задача", status: "В работе", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
            ].map((card) => (
              <div key={card.title} className={`rounded-xl border p-3 ${card.bg}`}>
                <p className="text-xs font-medium text-white mb-1">{card.title}</p>
                <p className={`text-xs ${card.color}`}>{card.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

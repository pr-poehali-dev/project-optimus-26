import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "А если у нас уже есть LMS/портал?",
    a: "Платформа может работать как надстройка: маршрут, задачи и тесты — в «День за днём», а контент — в вашей LMS. Интеграция по API или через ссылки.",
  },
  {
    q: "Подойдёт ли для гибридных и удалённых команд?",
    a: "Да: весь флоу спроектирован под мобильный, чаты и календарь — в привычных каналах.",
  },
  {
    q: "Сколько времени нужно на запуск?",
    a: "Пилот на 1 отдел — 1–2 недели. Первые новички идут по маршруту уже на второй неделе.",
  },
  {
    q: "Как считать эффект?",
    a: "В комплекте — готовые формулы и примеры расчёта: скорость выхода на нагрузку, доля задач без помощи наставника, количество вопросов к тимлиду.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="px-4 md:px-8 py-16 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">

        <h2 className="mb-10 text-3xl md:text-4xl font-bold text-white">Частые вопросы</h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-white">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-400">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
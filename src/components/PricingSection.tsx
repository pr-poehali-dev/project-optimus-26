import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Демо",
    duration: "14 дней",
    for: "Те, кто хочет проверить на 1–3 новичках",
    highlight: false,
    features: [
      "Доступ к дашборду",
      "2 готовых флоу на выбор",
      "10 ролевых сценариев",
      "Шаблоны коммуникаций",
    ],
    cta: "Запросить демо",
  },
  {
    name: "Подписка",
    duration: "SaaS · цена за сотрудника/мес.",
    for: "Корпорациям с регулярным наймом",
    highlight: true,
    features: [
      "Флоу по ролям и трекер",
      "Тесты и ролевые сценарии",
      "Чат-бот и автоалерты",
      "Дашборд аналитики",
    ],
    cta: "Подобрать тариф",
  },
  {
    name: "Быстрый старт",
    duration: "Разовый",
    for: "HR-командам, которые хотят внедрить сами",
    highlight: false,
    features: [
      "Готовые флоу + шаблоны",
      "2 воркшопа по запуску (6 ч)",
      "Сопровождение пилота",
      "Методические материалы",
    ],
    cta: "Обсудить",
  },
  {
    name: "Под ключ",
    duration: "Проект",
    for: "Крупным командам и сетям",
    highlight: false,
    features: [
      "Настройка флоу под компанию",
      "Загрузка контента",
      "Обучение команды",
      "Поддержка 1 месяц",
    ],
    cta: "Обсудить",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 md:px-8 py-16 max-w-6xl mx-auto">

      <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white max-w-xl">
        Выберите удобный формат внедрения
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-5 flex flex-col ${
              plan.highlight
                ? "bg-violet-600/10 border-violet-500/50"
                : "bg-[#141414] border-[#262626]"
            }`}
          >
            {plan.highlight && (
              <span className="mb-3 self-start text-xs text-violet-400 bg-violet-500/20 px-2 py-0.5 rounded-full">
                Популярный
              </span>
            )}
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="text-xs text-gray-500 mb-1">{plan.duration}</p>
            <p className="text-xs text-gray-400 mb-5">{plan.for}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full rounded-full ${
                plan.highlight
                  ? "bg-violet-600 hover:bg-violet-700 text-white"
                  : "bg-[#252525] hover:bg-[#2a2a2a] text-gray-300 hover:text-white"
              }`}
              onClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          Нет скрытых платежей. Отмена в любой момент. Возможна поставка в контур заказчика.
        </p>
        <Button
          className="rounded-full bg-violet-600 hover:bg-violet-700 text-white whitespace-nowrap"
          onClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })}
        >
          Подобрать тариф под мою команду →
        </Button>
      </div>
    </section>
  )
}
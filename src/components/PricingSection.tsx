import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Самостоятельно",
    price: "9 900 ₽",
    description: "Пакет шаблонов + видео-разбор. Запускаете онбординг своими силами.",
    features: [
      "Карта на 14 дней по ролям",
      "Все шаблоны документов",
      "Мини-тесты на понимание",
      "Видео-разбор внедрения",
      "5 метрик первых 30 дней",
    ],
    cta: "Купить пакет",
    highlight: false,
  },
  {
    name: "Воркшоп",
    price: "29 900 ₽",
    description: "«Запускаем онбординг за 3 встречи» — вместе, с обратной связью.",
    features: [
      "Всё из пакета «Самостоятельно»",
      "3 онлайн-встречи с экспертом",
      "Адаптация карты под ваши роли",
      "Разбор ситуаций вашей команды",
      "Поддержка 30 дней после запуска",
    ],
    cta: "Записаться",
    highlight: true,
  },
  {
    name: "Экспресс-аудит",
    price: "19 900 ₽",
    description: "Аудит текущего онбординга с приоритетами улучшений.",
    features: [
      "Анализ вашего процесса",
      "Карта «где теряются дни»",
      "Топ-3 приоритета для изменений",
      "Рекомендации по артефактам",
      "Итоговый отчёт с планом",
    ],
    cta: "Заказать аудит",
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
      <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Тарифы</p>
      <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white max-w-xl">
        Выберите формат под вашу задачу
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-6 flex flex-col ${
              plan.highlight
                ? "bg-violet-600/10 border-violet-500/50"
                : "bg-[#141414] border-[#262626]"
            }`}
          >
            {plan.highlight && (
              <span className="mb-4 self-start rounded-full bg-violet-500/20 px-3 py-0.5 text-xs font-medium text-violet-400">
                Популярный выбор
              </span>
            )}
            <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
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
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

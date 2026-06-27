import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function LeadSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    teamSize: "",
    intent: "",
  })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="lead" className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>

          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            Получите бесплатный шаблон: «Карта онбординга на 2 недели для менеджера»
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Шаблон с задачами, критериями «сделано», мини-тестами и чек-листом первых 30 минут. Подходит, чтобы запустить быстрый онбординг уже сегодня.
          </p>
          <div className="space-y-3">
            {[
              "Задачи и критерии готовности по ролям",
              "Мини-тесты на понимание (3–5 вопросов)",
              "Чек-лист первых 30 минут",
              "Инструкция «Как внедрить за 30 минут»",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-4">
                <ArrowUpRight className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-sm text-gray-400">Шаблон и инструкция придут на указанный контакт. Мы свяжемся в течение рабочего дня.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs text-gray-400">Имя</label>
                  <input
                    required
                    type="text"
                    placeholder="Алексей"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-gray-400">Компания</label>
                  <input
                    required
                    type="text"
                    placeholder="ООО Пример"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-gray-400">Должность</label>
                <input
                  type="text"
                  placeholder="HR-партнёр / Тимлид / Руководитель"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-gray-400">Размер команды</label>
                <div className="grid grid-cols-3 gap-2">
                  {["до 50", "50–200", "200+"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setForm({ ...form, teamSize: size })}
                      className={`rounded-lg border py-2 text-xs transition-colors ${
                        form.teamSize === size
                          ? "border-violet-500 bg-violet-500/10 text-violet-400"
                          : "border-[#262626] bg-[#0f0f0f] text-gray-400 hover:border-[#333]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-gray-400">Что интересует?</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Хочу демо", "Хочу консультацию"].map((intent) => (
                    <button
                      key={intent}
                      type="button"
                      onClick={() => setForm({ ...form, intent })}
                      className={`rounded-lg border py-2 text-xs transition-colors ${
                        form.intent === intent
                          ? "border-violet-500 bg-violet-500/10 text-violet-400"
                          : "border-[#262626] bg-[#0f0f0f] text-gray-400 hover:border-[#333]"
                      }`}
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-violet-600 hover:bg-violet-700 text-white"
              >
                Получить шаблон и запросить демо <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-gray-600 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
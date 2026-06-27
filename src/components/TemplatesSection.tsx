import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const templates = [
  {
    icon: "FileText",
    title: "Карта онбординга на 14 дней",
    description: "Этапы, задачи и критерии «готов» по ролям: менеджер, оператор, бариста, координатор.",
    tag: "Чек-лист",
  },
  {
    icon: "Mail",
    title: "Сценарии первых дней",
    description: "Welcome-письмо, структура встречи 1:1 на 1-й и 3-й день. Просто скопируй и используй.",
    tag: "Шаблоны",
  },
  {
    icon: "ClipboardCheck",
    title: "Мини-тесты на понимание",
    description: "3–5 вопросов по роли, ролевые ситуации и чёткий критерий «не сдал — что дальше».",
    tag: "Тесты",
  },
  {
    icon: "FileCheck",
    title: "Документы и сообщения",
    description: "Оффер, план адаптации, форма обратной связи, письмо руководителю «чего ждать от новичка».",
    tag: "Документы",
  },
]

export function TemplatesSection() {
  return (
    <section id="templates" className="px-4 md:px-8 py-16 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Шаблоны</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
            Готовые артефакты — копируй и запускай
          </h2>
          <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white self-start md:self-auto">
            Получить все шаблоны
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((t) => (
            <div key={t.title} className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex gap-4">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
                <Icon name={t.icon} size={20} className="text-gray-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-white">{t.title}</h3>
                  <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs text-violet-400">{t.tag}</span>
                </div>
                <p className="text-sm text-gray-400">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

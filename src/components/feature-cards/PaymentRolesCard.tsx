import { ClipboardCheck, ArrowUpRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const answers = [
  { text: "Сразу зову наставника", correct: false },
  { text: "Свериться с чек-листом, потом спросить", correct: true },
  { text: "Действую как сам считаю нужным", correct: false },
]

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <ClipboardCheck className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Как проверить, что человек понял</h3>
      <p className="mb-4 text-sm text-gray-400">Короткие тесты на 3–5 вопросов, ролевые ситуации и понятный критерий «не сдал»</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-violet-400">Тест · день 7</span>
          <span className="text-xs text-gray-500">Вопрос 2 из 4</span>
        </div>

        <p className="text-sm font-medium text-white">Не уверен в задаче — что делаешь?</p>

        <div className="space-y-2">
          {answers.map((a, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${
                a.correct
                  ? "bg-violet-500/10 border-violet-500/40"
                  : "bg-[#0f0f0f] border-[#262626]"
              }`}
            >
              <span className={`text-sm ${a.correct ? "text-white" : "text-gray-400"}`}>{a.text}</span>
              {a.correct ? (
                <Check className="h-4 w-4 text-violet-400" />
              ) : (
                <X className="h-4 w-4 text-gray-600" />
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500">Не сдал? Повтор блока и встреча 1:1 с наставником.</p>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">Проверить ответ</Button>
      </div>
    </div>
  )
}
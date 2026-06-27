import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contacts" className="px-4 md:px-8 py-16 bg-[#0d0d0d]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-3 text-xs uppercase tracking-widest text-violet-400">Контакты</p>
        <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
          Остались вопросы?
        </h2>
        <p className="mb-10 text-gray-400">
          Напишите — разберём вашу ситуацию и подскажем, с чего начать онбординг в вашей команде.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs text-gray-400">Ваше имя</label>
              <input
                type="text"
                placeholder="Алексей"
                className="w-full rounded-lg bg-[#141414] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-gray-400">Телефон или email</label>
              <input
                type="text"
                placeholder="+7 999 123-45-67"
                className="w-full rounded-lg bg-[#141414] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs text-gray-400">Расскажите о вашей ситуации</label>
            <textarea
              placeholder="Сколько человек нанимаете в год, есть ли сейчас какой-то онбординг..."
              className="w-full rounded-lg bg-[#141414] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors resize-none h-28"
            />
          </div>

          <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white w-full md:w-auto md:self-start px-8">
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  )
}

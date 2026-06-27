import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "GitBranch",
    title: "Готовые флоу по ролям",
    description: "Шаблоны маршрутов для менеджера, разработчика, аналитика, специалиста поддержки и других ролей.",
  },
  {
    icon: "BookOpen",
    title: "Микрообучение в контексте",
    description: "Короткие материалы рядом с задачей, а не отдельный курс, который никто не открывает.",
  },
  {
    icon: "ClipboardCheck",
    title: "Ролевые сценарии и тесты",
    description: "Автопроверка, разбор ошибок, критерии «понял / не понял» — без ручного контроля.",
  },
  {
    icon: "Plug",
    title: "Интеграции",
    description: "Календарь, корпоративные чаты, HRM-системы, хранилища документов — по API или через ссылки.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика",
    description: "Дашборды в DataLens / Power BI или на базе Google Sheets. Готовые формулы метрик в комплекте.",
  },
  {
    icon: "Rocket",
    title: "Быстрый запуск",
    description: "Пилотная когорта — за 1–2 недели. Персонализация под роли и отделы без программирования.",
  },
]

export function PlatformSection() {
  return (
    <section id="platform" className="px-4 md:px-8 py-16 max-w-6xl mx-auto">

      <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white max-w-2xl">
        Не «ещё один LMS», а готовый процесс с интеграциями
      </h2>
      <p className="mb-12 text-gray-400 max-w-xl">
        Запуск пилотной когорты — за 1–2 недели. Персонализация под роли и отделы без программирования.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl bg-[#141414] border border-[#262626] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
              <Icon name={f.icon} size={20} className="text-gray-400" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-gray-400">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
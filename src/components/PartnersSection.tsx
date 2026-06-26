import { Sparkles, Sun, Diamond, Bird, Activity, Zap, Circle } from "lucide-react"

const partners = [
  { name: "Кофейня «Зерно»", icon: Sparkles },
  { name: "Логистик+", icon: Sun },
  { name: "Ритейл Хаб", icon: Diamond },
  { name: "Сервис Про", icon: Bird },
  { name: "Студия Рост", icon: Activity },
  { name: "Маркет Лайн", icon: Zap },
  { name: "ТимВорк", icon: Circle },
]

export function PartnersSection() {
  return (
    <section className="flex flex-col items-center px-4 py-8">
      <p className="mb-6 text-xs uppercase tracking-widest text-gray-600">Уже внедряют команды без HR</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-gray-500">
            <partner.icon className="h-4 w-4" />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
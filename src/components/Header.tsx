import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const id = e.currentTarget.getAttribute("href")?.replace("#", "")
  if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <ФинПотокLogo />
        <span className="text-lg font-semibold text-white">
          Онбордо<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#problem" onClick={scrollTo} className="text-sm text-gray-300 hover:text-white transition-colors">
          Как это работает
        </a>
        <a href="#for-whom" onClick={scrollTo} className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Для кого <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#platform" onClick={scrollTo} className="text-sm text-gray-300 hover:text-white transition-colors">
          Платформа
        </a>
        <a href="#pricing" onClick={scrollTo} className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#lead" onClick={scrollTo} className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
        onClick={() => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" })}
      >
        Запросить демо
      </Button>
    </header>
  )
}

function ФинПотокLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="3" fill="#8B5CF6" />
      <circle cx="16" cy="8" r="3" fill="#8B5CF6" opacity="0.6" />
      <circle cx="8" cy="16" r="3" fill="#8B5CF6" opacity="0.6" />
      <circle cx="16" cy="16" r="3" fill="#8B5CF6" opacity="0.4" />
    </svg>
  )
}
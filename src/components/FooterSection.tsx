export function FooterSection() {
  return (
    <footer className="px-4 md:px-8 py-12 bg-[#0d0d0d] border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="3" fill="#8B5CF6" />
                <circle cx="16" cy="8" r="3" fill="#8B5CF6" opacity="0.6" />
                <circle cx="8" cy="16" r="3" fill="#8B5CF6" opacity="0.6" />
                <circle cx="16" cy="16" r="3" fill="#8B5CF6" opacity="0.4" />
              </svg>
              <span className="text-lg font-semibold text-white">
                Онбордо<sup className="text-xs">™</sup>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Платформа для структурного онбординга в корпорациях. Пошаговый маршрут вместо хаоса в чатах.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Навигация</p>
            <div className="space-y-2">
              {[
                { label: "Как это работает", id: "features" },
                { label: "Для кого", id: "for-whom" },
                { label: "Тарифы", id: "pricing" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Контакты</p>
            <div className="space-y-2">
              <a href="https://t.me/onbordo" className="block text-sm text-gray-500 hover:text-white transition-colors">
                Telegram: @onbordo
              </a>
              <a href="tel:+74951234567" className="block text-sm text-gray-500 hover:text-white transition-colors">
                +7 (495) 123-45-67
              </a>
              <a href="mailto:hello@onbordo.ru" className="block text-sm text-gray-500 hover:text-white transition-colors">
                hello@onbordo.ru
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[#1e1e1e] gap-4">
          <p className="text-xs text-gray-600">© 2025 Онбордо. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Оферта</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

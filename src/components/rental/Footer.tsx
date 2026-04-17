import Icon from "@/components/ui/icon";
import { Page, NAV_ITEMS, CATEGORIES, IconName } from "./data";

interface FooterProps {
  nav: (p: Page) => void;
  setActiveCategory: (cat: string) => void;
}

export default function Footer({ nav, setActiveCategory }: FooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-amber-500 flex items-center justify-center rounded-sm">
                <Icon name="Wrench" size={18} className="text-slate-900" />
              </div>
              <div>
                <div className="font-oswald text-white text-lg font-bold leading-none">ТЕХНO<span className="text-amber-400">АРЕНДА</span></div>
                <div className="text-slate-400 text-xs mt-0.5">Прокат техники</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Профессиональный прокат строительной и специальной техники с 2010 года.</p>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">НАВИГАЦИЯ</div>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button onClick={() => nav(item.page)} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">ТЕХНИКА</div>
            <ul className="space-y-2">
              {CATEGORIES.filter(c => c !== "Все").slice(0, 5).map((cat) => (
                <li key={cat}>
                  <button onClick={() => { setActiveCategory(cat); nav("catalog"); }} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-4">КОНТАКТЫ</div>
            <div className="space-y-3">
              {[
                { icon: "Phone", text: "8 800 123-45-67" },
                { icon: "Mail", text: "info@technoarenda.ru" },
                { icon: "MapPin", text: "г. Москва, ул. Промышленная, 14" },
                { icon: "Clock", text: "Пн–Пт 08:00–20:00" },
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-2">
                  <Icon name={c.icon as IconName} size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">© 2026 ТехноАренда. Все права защищены.</p>
          <p className="text-slate-600 text-xs">ООО «ТехноАренда» · ИНН 7712345678 · ОГРН 1107746123456</p>
        </div>
      </div>
    </footer>
  );
}

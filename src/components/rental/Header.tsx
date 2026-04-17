import Icon from "@/components/ui/icon";
import { Page, NAV_ITEMS } from "./data";

interface HeaderProps {
  page: Page;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  nav: (p: Page) => void;
}

export default function Header({ page, menuOpen, setMenuOpen, nav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => nav("home")} className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-amber-500 flex items-center justify-center rounded-sm">
              <Icon name="Wrench" size={18} className="text-slate-900" />
            </div>
            <div className="text-left">
              <div className="font-oswald text-white text-lg font-bold leading-none tracking-wide">ТЕХНO<span className="text-amber-400">АРЕНДА</span></div>
              <div className="text-slate-400 text-xs leading-none mt-0.5">Прокат техники</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => nav(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${page === item.page ? "text-amber-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 text-white font-medium text-sm">
              <Icon name="Phone" size={16} className="text-amber-400" />
              8 800 123-45-67
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-slate-300 hover:text-white">
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => nav(item.page)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded transition-colors ${page === item.page ? "text-amber-400 bg-slate-800" : "text-slate-300 hover:text-white hover:bg-slate-800"}`}
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+78001234567" className="flex items-center gap-2 px-3 py-2.5 text-amber-400 font-medium text-sm">
              <Icon name="Phone" size={16} />
              8 800 123-45-67
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

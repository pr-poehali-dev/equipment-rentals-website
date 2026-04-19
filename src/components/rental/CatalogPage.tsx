import Icon from "@/components/ui/icon";
import { Page, CATALOG, CATEGORIES } from "./data";

interface CatalogPageProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  nav: (p: Page) => void;
}

export default function CatalogPage({ activeCategory, setActiveCategory, nav }: CatalogPageProps) {
  const filtered = activeCategory === "Все" ? CATALOG : CATALOG.filter(i => i.category === activeCategory);

  return (
    <div>
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Каталог</div>
          <h1 className="font-oswald text-5xl font-bold text-white">ТЕХНИКА В АРЕНДУ</h1>
        </div>
      </div>

      <div className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium border transition-colors ${activeCategory === cat ? "bg-slate-900 border-slate-900 text-white" : "bg-white border-slate-300 text-slate-600 hover:border-slate-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all flex flex-col">
                <div className="h-40 bg-slate-100 flex items-center justify-center text-6xl border-b border-slate-200">
                  {item.img}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-amber-600 text-xs font-bold uppercase tracking-wide mb-1">{item.category}</div>
                  <h3 className="font-oswald text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{item.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-slate-50 px-3 py-2 text-xs">
                      <div className="text-slate-400">Мощность</div>
                      <div className="font-semibold text-slate-700 mt-0.5">{item.power}</div>
                    </div>
                    <div className="bg-slate-50 px-3 py-2 text-xs">
                      <div className="text-slate-400">Масса</div>
                      <div className="font-semibold text-slate-700 mt-0.5">{item.weight}</div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-slate-400 text-xs">от</div>
                      <div className="font-oswald text-2xl font-bold text-slate-900">{item.price} ₽</div>
                      <div className="text-slate-400 text-xs">/ {item.unit}</div>
                    </div>
                    <button onClick={() => nav("contacts")} className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2 text-xs tracking-wide transition-colors">
                      ЗАКАЗАТЬ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <Icon name="Package" size={48} className="mx-auto mb-4 opacity-30" />
              <p>В данной категории техника отсутствует</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

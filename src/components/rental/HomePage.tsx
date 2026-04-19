import Icon from "@/components/ui/icon";
import StarRating from "./StarRating";
import { Page, IconName, HERO_IMAGE } from "./data";

type Review = {
  id: number;
  name: string;
  company: string;
  rating: number;
  text: string;
  date: string;
};

interface HomePageProps {
  reviews: Review[];
  nav: (p: Page) => void;
}

export default function HomePage({ reviews, nav }: HomePageProps) {
  return (
    <div>
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-medium px-3 py-1.5 rounded-sm mb-6">
              <Icon name="Shield" size={12} />
              Работаем с 2010 года · Более 500 единиц техники
            </div>
            <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-[0.95] mb-6 tracking-tight">
              АРЕНДА<br />
              <span className="text-amber-400">ПРОФЕССИОНАЛЬНОЙ</span><br />
              ТЕХНИКИ
            </h1>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
              Строительная, грузоподъёмная и дорожная техника в аренду по всему региону. Доставка на объект, техподдержка 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => nav("catalog")} className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 text-sm tracking-wider transition-colors">
                СМОТРЕТЬ КАТАЛОГ
              </button>
              <button onClick={() => nav("contacts")} className="border border-white/40 hover:border-white text-white hover:bg-white/10 font-medium px-8 py-3.5 text-sm tracking-wider transition-colors">
                ПОЛУЧИТЬ КП
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700">
              {[
                { num: "500+", label: "Единиц техники" },
                { num: "15 лет", label: "На рынке" },
                { num: "1200+", label: "Выполненных заказов" },
                { num: "24/7", label: "Техподдержка" },
              ].map((s) => (
                <div key={s.label} className="py-5 px-6 text-center">
                  <div className="font-oswald text-3xl font-bold text-amber-400">{s.num}</div>
                  <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Что мы предлагаем</div>
            <h2 className="font-oswald text-4xl font-bold text-slate-900">НАШИ УСЛУГИ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Truck", title: "Доставка техники", desc: "Доставляем технику на ваш объект в течение 24 часов. Работаем по всему региону и области." },
              { icon: "UserCheck", title: "Оператор в аренду", desc: "Предоставляем квалифицированных операторов с допусками и опытом работы от 5 лет." },
              { icon: "Wrench", title: "Техническое обслуживание", desc: "Все машины регулярно проходят ТО. При поломке — замена в течение 4 часов." },
              { icon: "FileText", title: "Полный пакет документов", desc: "Договор аренды, акты выполненных работ, все необходимые документы для бухгалтерии." },
              { icon: "Clock", title: "Гибкие сроки", desc: "Аренда от 1 дня до 12 месяцев. Скидки при долгосрочном сотрудничестве." },
              { icon: "Shield", title: "Страхование техники", desc: "Вся техника застрахована. Вы несёте ответственность только за умышленное повреждение." },
            ].map((s) => (
              <div key={s.title} className="border border-slate-200 p-6 hover:border-amber-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                  <Icon name={s.icon as IconName} size={22} className="text-amber-500 group-hover:text-slate-900 transition-colors" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-oswald text-4xl font-bold text-white mb-4">НУЖНА ТЕХНИКА СРОЧНО?</h2>
          <p className="text-slate-400 mb-8">Оставьте заявку — перезвоним в течение 15 минут и подберём оптимальное решение</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => nav("contacts")} className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 text-sm tracking-wider transition-colors">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <button onClick={() => nav("catalog")} className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium px-10 py-4 text-sm tracking-wider transition-colors">
              КАТАЛОГ ТЕХНИКИ
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Что говорят клиенты</div>
              <h2 className="font-oswald text-4xl font-bold text-slate-900">ОТЗЫВЫ</h2>
            </div>
            <button onClick={() => nav("reviews")} className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1">
              Все отзывы <Icon name="ArrowRight" size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.slice(0, 2).map((r) => (
              <div key={r.id} className="bg-white border border-slate-200 p-6">
                <StarRating value={r.rating} />
                <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900">{r.name}</div>
                    <div className="text-slate-400 text-xs">{r.company}</div>
                  </div>
                  <div className="ml-auto text-slate-400 text-xs">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

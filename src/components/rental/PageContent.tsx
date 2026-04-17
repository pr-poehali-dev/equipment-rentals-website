import Icon from "@/components/ui/icon";
import StarRating from "./StarRating";
import { Page, IconName, HERO_IMAGE, CATALOG, CATEGORIES } from "./data";

type Review = {
  id: number;
  name: string;
  company: string;
  rating: number;
  text: string;
  date: string;
};

type ReviewForm = {
  name: string;
  company: string;
  rating: number;
  text: string;
};

interface PageContentProps {
  page: Page;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  reviews: Review[];
  form: ReviewForm;
  setForm: (f: ReviewForm) => void;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  nav: (p: Page) => void;
}

export default function PageContent({
  page,
  activeCategory,
  setActiveCategory,
  reviews,
  form,
  setForm,
  submitted,
  handleSubmit,
  nav,
}: PageContentProps) {
  const filtered = activeCategory === "Все" ? CATALOG : CATALOG.filter(i => i.category === activeCategory);

  return (
    <main>

      {/* ======= ГЛАВНАЯ ======= */}
      {page === "home" && (
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
      )}

      {/* ======= О КОМПАНИИ ======= */}
      {page === "about" && (
        <div>
          <div className="bg-slate-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">О компании</div>
              <h1 className="font-oswald text-5xl font-bold text-white">О НАС И НАШИХ УСЛУГАХ</h1>
            </div>
          </div>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="font-oswald text-3xl font-bold text-slate-900 mb-6">КОМПАНИЯ «ТЕХНOАРЕНДА»</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>Мы работаем на рынке проката строительной и специальной техники с 2010 года. За это время компания выросла из небольшого регионального предприятия в одного из ведущих операторов в отрасли.</p>
                    <p>Наш парк насчитывает более 500 единиц техники различных классов — от компактных мини-экскаваторов до тяжёлых автокранов и специализированных дорожных машин.</p>
                    <p>Мы обслуживаем строительные компании, промышленные предприятия, транспортно-логистические холдинги и частных заказчиков. Среди наших клиентов — крупнейшие застройщики и инфраструктурные подрядчики региона.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-10">
                    {[
                      { num: "500+", label: "Единиц техники в парке" },
                      { num: "15 лет", label: "Опыт на рынке" },
                      { num: "1 200+", label: "Выполненных заказов" },
                      { num: "98%", label: "Довольных клиентов" },
                    ].map((s) => (
                      <div key={s.label} className="bg-slate-50 border border-slate-200 p-4">
                        <div className="font-oswald text-3xl font-bold text-amber-500">{s.num}</div>
                        <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-oswald text-2xl font-bold text-slate-900 mb-6">НАШИ ПРЕИМУЩЕСТВА</h3>
                  {[
                    { title: "Собственный парк техники", desc: "Вся техника в нашей собственности — никаких посредников, прозрачное ценообразование." },
                    { title: "Сертифицированные операторы", desc: "Штат из 80+ операторов с актуальными допусками и страховками." },
                    { title: "Собственный сервисный центр", desc: "Техническое обслуживание и ремонт в собственном сервисном центре площадью 2 000 м²." },
                    { title: "Доставка по региону", desc: "Доставляем технику в любую точку области. Круглосуточный диспетчер." },
                    { title: "Безналичный расчёт", desc: "Работаем по безналичному расчёту с НДС. Полный комплект закрывающих документов." },
                    { title: "Гарантия исправности", desc: "Гарантируем техническую исправность. При поломке заменяем в течение 4 часов." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <Icon name="CheckCircle" size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                        <div className="text-slate-500 text-sm mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="font-oswald text-3xl font-bold text-slate-900 mb-10">ВИДЫ ПРЕДОСТАВЛЯЕМЫХ УСЛУГ</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "Hammer", title: "Аренда техники без оператора", desc: "Предоставляем технику под управление вашего персонала. Требуется наличие соответствующих допусков у машиниста." },
                  { icon: "Users", title: "Аренда техники с оператором", desc: "Полный комплекс — техника плюс квалифицированный оператор. Идеально для разовых задач." },
                  { icon: "Calendar", title: "Долгосрочная аренда", desc: "Аренда от 1 месяца с фиксированной ставкой. Скидки до 20% от стандартного тарифа." },
                  { icon: "MapPin", title: "Аренда на объекте", desc: "Техника остаётся на строительной площадке на весь срок проекта. Минимальный срок — 2 недели." },
                  { icon: "Truck", title: "Транспортные услуги", desc: "Перевозка грузов, строительных материалов, грунта. Самосвалы грузоподъёмностью 10–30 тонн." },
                  { icon: "HardHat", title: "Комплексный подряд", desc: "Берём на себя весь цикл земляных, монтажных или погрузочных работ. Оплата за результат." },
                ].map((s) => (
                  <div key={s.title} className="bg-white border border-slate-200 p-6 hover:border-amber-300 transition-colors">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                      <Icon name={s.icon as IconName} size={18} className="text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ======= КАТАЛОГ ======= */}
      {page === "catalog" && (
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
      )}

      {/* ======= УСЛОВИЯ АРЕНДЫ ======= */}
      {page === "terms" && (
        <div>
          <div className="bg-slate-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Документы</div>
              <h1 className="font-oswald text-5xl font-bold text-white">УСЛОВИЯ И ПРАВИЛА АРЕНДЫ</h1>
            </div>
          </div>

          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              {[
                {
                  title: "1. Общий порядок оформления аренды",
                  items: [
                    "Заявка на аренду подаётся по телефону, электронной почте или через форму на сайте.",
                    "После согласования состава техники и сроков заключается договор аренды.",
                    "Подписание договора — лично в офисе или посредством ЭДО.",
                    "Минимальный срок аренды — 1 рабочая смена (8 часов).",
                    "Для юридических лиц и ИП обязательны реквизиты и доверенность (при необходимости).",
                  ],
                },
                {
                  title: "2. Тарификация и оплата",
                  items: [
                    "Стоимость аренды рассчитывается по числу машино-часов или машино-смен согласно прайсу.",
                    "Оплата производится авансом: 100% для физических лиц, 50% для юридических лиц.",
                    "Безналичный расчёт. Наличный расчёт — только для физических лиц через кассу.",
                    "НДС включён в стоимость. Закрывающие документы предоставляются в течение 3 рабочих дней.",
                    "Простой техники по вине арендатора тарифицируется в размере 50% от суточной ставки.",
                  ],
                },
                {
                  title: "3. Доставка и возврат техники",
                  items: [
                    "Доставка осуществляется в течение 24 часов с момента подписания договора.",
                    "Стоимость доставки — от 3 500 ₽ в зависимости от расстояния и класса техники.",
                    "При возврате техники составляется акт приёма-передачи.",
                    "Техника должна быть возвращена в чистом виде и заправлена (либо удерживается стоимость топлива).",
                  ],
                },
                {
                  title: "4. Ответственность сторон",
                  items: [
                    "Арендатор несёт полную материальную ответственность за технику в период аренды.",
                    "Самостоятельный ремонт без согласования с арендодателем не допускается.",
                    "При поломке по вине арендатора — оплата ремонта по смете сервисного центра.",
                    "Страховой депозит (возвратный): от 30 000 до 200 000 ₽ в зависимости от класса техники.",
                    "Работа под воздействием алкоголя или наркотиков — основание для немедленного расторжения договора.",
                  ],
                },
                {
                  title: "5. Требования к операторам (при аренде без оператора)",
                  items: [
                    "Наличие удостоверения машиниста соответствующей специализации.",
                    "Стаж работы на аналогичной технике — не менее 2 лет.",
                    "Прохождение инструктажа у представителя компании.",
                    "Соблюдение правил техники безопасности при эксплуатации.",
                  ],
                },
              ].map((block) => (
                <div key={block.title} className="mb-10">
                  <h2 className="font-oswald text-xl font-bold text-slate-900 mb-4 pb-3 border-b-2 border-amber-400">{block.title}</h2>
                  <ul className="space-y-3">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-10 bg-amber-50 border border-amber-200 p-6">
                <div className="flex gap-3">
                  <Icon name="Info" size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">Остались вопросы?</div>
                    <p className="text-slate-600 text-sm">Наши менеджеры готовы детально проконсультировать по условиям аренды. Звоните: <a href="tel:+78001234567" className="text-amber-600 font-medium">8 800 123-45-67</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ======= КОНТАКТЫ ======= */}
      {page === "contacts" && (
        <div>
          <div className="bg-slate-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Связь</div>
              <h1 className="font-oswald text-5xl font-bold text-white">КОНТАКТЫ И СПОСОБЫ СВЯЗИ</h1>
            </div>
          </div>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-oswald text-2xl font-bold text-slate-900 mb-8">РЕКВИЗИТЫ И АДРЕС</h2>
                  <div className="space-y-6">
                    {[
                      { icon: "MapPin", title: "Адрес", content: ["г. Москва, ул. Промышленная, д. 14, стр. 2", "Пн–Пт: 08:00–20:00, Сб: 09:00–16:00"] },
                      { icon: "Phone", title: "Телефоны", content: ["8 800 123-45-67 (бесплатно, круглосуточно)", "+7 (495) 123-45-67 (основной)", "+7 (495) 123-45-68 (диспетчерская)"] },
                      { icon: "Mail", title: "Электронная почта", content: ["info@technoarenda.ru (общие вопросы)", "zakaz@technoarenda.ru (заявки)"] },
                      { icon: "Building2", title: "Реквизиты компании", content: ["ООО «ТехноАренда»", "ИНН: 7712345678 / КПП: 771201001", "ОГРН: 1107746123456"] },
                    ].map((c) => (
                      <div key={c.title} className="flex gap-4">
                        <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                          <Icon name={c.icon as IconName} size={18} className="text-amber-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm mb-1">{c.title}</div>
                          {c.content.map((line, i) => (
                            <div key={i} className="text-slate-500 text-sm">{line}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-oswald text-lg font-bold text-slate-900 mb-4">МЫ В МЕССЕНДЖЕРАХ</h3>
                    <div className="flex gap-3">
                      {["WhatsApp", "Telegram", "Viber"].map((m) => (
                        <button key={m} className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-amber-400 px-4 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
                          <Icon name="MessageCircle" size={16} className="text-amber-500" />
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-8">
                  <h2 className="font-oswald text-2xl font-bold text-slate-900 mb-6">ОСТАВИТЬ ЗАЯВКУ</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Имя *</label>
                        <input type="text" placeholder="Иван Иванов" className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Телефон *</label>
                        <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Компания</label>
                      <input type="text" placeholder="ООО «Название»" className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Нужная техника</label>
                      <input type="text" placeholder="Экскаватор, кран, погрузчик..." className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Сообщение</label>
                      <textarea rows={4} placeholder="Опишите задачу, сроки, объём работ..." className="w-full border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none" />
                    </div>
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 text-sm tracking-widest transition-colors">
                      ОТПРАВИТЬ ЗАЯВКУ
                    </button>
                    <p className="text-slate-400 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ======= ОТЗЫВЫ ======= */}
      {page === "reviews" && (
        <div>
          <div className="bg-slate-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Клиенты о нас</div>
              <h1 className="font-oswald text-5xl font-bold text-white">ОТЗЫВЫ И РЕЙТИНГИ</h1>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-amber-400 text-2xl">★</span>)}
                </div>
                <div>
                  <span className="font-oswald text-4xl font-bold text-white">4.9</span>
                  <span className="text-slate-400 ml-2 text-sm">из 5 · {reviews.length} отзывов</span>
                </div>
              </div>
            </div>
          </div>

          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-5">
                  {reviews.map((r) => (
                    <div key={r.id} className="bg-white border border-slate-200 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center text-white font-bold">
                            {r.name[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{r.name}</div>
                            <div className="text-slate-400 text-xs">{r.company}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <StarRating value={r.rating} />
                          <div className="text-slate-400 text-xs mt-1">{r.date}</div>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="bg-white border border-slate-200 p-6 sticky top-24">
                    <h3 className="font-oswald text-xl font-bold text-slate-900 mb-5">ОСТАВИТЬ ОТЗЫВ</h3>
                    {submitted && (
                      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm mb-4 flex items-center gap-2">
                        <Icon name="CheckCircle" size={16} />
                        Отзыв опубликован. Спасибо!
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Ваше имя *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Иван Петров"
                          className="w-full border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Компания</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="ООО «Компания»"
                          className="w-full border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Оценка</label>
                        <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">Отзыв *</label>
                        <textarea
                          rows={5}
                          value={form.text}
                          onChange={(e) => setForm({ ...form, text: e.target.value })}
                          placeholder="Поделитесь своим опытом аренды техники..."
                          className="w-full border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                          required
                        />
                      </div>
                      <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 text-xs tracking-widest transition-colors">
                        ОПУБЛИКОВАТЬ ОТЗЫВ
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

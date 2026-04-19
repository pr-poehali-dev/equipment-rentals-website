import Icon from "@/components/ui/icon";
import StarRating from "./StarRating";
import { Page, IconName } from "./data";

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

interface InfoPagesProps {
  page: Page;
  reviews: Review[];
  form: ReviewForm;
  setForm: (f: ReviewForm) => void;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function InfoPages({ page, reviews, form, setForm, submitted, handleSubmit }: InfoPagesProps) {
  return (
    <>
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
    </>
  );
}

import Icon from "@/components/ui/icon";
import { IconName } from "./data";

export default function AboutPage() {
  return (
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
  );
}

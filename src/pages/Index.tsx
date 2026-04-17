import { useState } from "react";
import { Page, REVIEWS_INITIAL } from "@/components/rental/data";
import Header from "@/components/rental/Header";
import Footer from "@/components/rental/Footer";
import PageContent from "@/components/rental/PageContent";

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [reviews, setReviews] = useState(REVIEWS_INITIAL);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);

  const nav = (p: Page) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      company: form.company || "Частное лицо",
      rating: form.rating,
      text: form.text,
      date: new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }),
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: "", company: "", rating: 5, text: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen font-golos bg-slate-50 text-slate-800">
      <Header page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} nav={nav} />
      <PageContent
        page={page}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        reviews={reviews}
        form={form}
        setForm={setForm}
        submitted={submitted}
        handleSubmit={handleSubmit}
        nav={nav}
      />
      <Footer nav={nav} setActiveCategory={setActiveCategory} />
    </div>
  );
}

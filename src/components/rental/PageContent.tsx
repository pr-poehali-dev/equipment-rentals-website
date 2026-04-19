import { Page } from "./data";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CatalogPage from "./CatalogPage";
import InfoPages from "./InfoPages";

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
  return (
    <main>
      {page === "home" && <HomePage reviews={reviews} nav={nav} />}
      {page === "about" && <AboutPage />}
      {page === "catalog" && (
        <CatalogPage activeCategory={activeCategory} setActiveCategory={setActiveCategory} nav={nav} />
      )}
      <InfoPages
        page={page}
        reviews={reviews}
        form={form}
        setForm={setForm}
        submitted={submitted}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

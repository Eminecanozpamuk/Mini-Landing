import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import AccordionItem from "./components/Accordion/AccordionItem";
import ContactForm from "./components/Form/ContactForm";
import "./App.css";
import kediEvi from "./assets/kedi-evi.jpg";

type SectionType = "features" | "faq" | "contact";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] =
    useState<SectionType>("features");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main className="container">
      {/* Tema Butonu */}
      <button
        className="theme-toggle"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
        aria-label="Tema değiştir"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Hero */}
      <Hero />

      {/* Ürün Kartı */}
      <section className="pricing">
        <Card image={kediEvi} />
      </section>

      {/* Sekmeli Alan */}
      <section className="switch-area">
        <div className="segmented-control">
          <button
            className={activeSection === "features" ? "active" : ""}
            onClick={() => setActiveSection("features")}
          >
            Ürün Özellikleri
          </button>

          <button
            className={activeSection === "faq" ? "active" : ""}
            onClick={() => setActiveSection("faq")}
          >
            SSS
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setActiveSection("contact")}
          >
            İletişim
          </button>
        </div>

        {/* Başlık */}
        <h2 className="section-title">
          {activeSection === "features" && "Ürün Özellikleri"}
          {activeSection === "faq" && "Sık Sorulan Sorular"}
          {activeSection === "contact" && "İletişim"}
        </h2>

        {/* İçerik */}
        <div className="switch-content">
          {activeSection === "features" && (
            <>
              <h3>Tasarım Hakkında</h3>
              <ul>
                <li>Dış mekân kullanımı için tasarlanmıştır.</li>
                <li>
                  Uzun çatısı ve mama koyma balkonları sayesinde mamalar kuru
                  kalır, göbişler dolu olur.
                </li>
                <li>
                  6 odası ve yukarıya doğru genişleyen çatısı sayesinde rahat
                  bir barınma ortamı sağlar.
                </li>
              </ul>

              <h3>Teknik Detaylar</h3>
              <ul>
                <li>
                  Marin Plywood ve ithal çam kullanılarak imal edilmiştir.
                </li>
                <li>Dış mekân koşullarına uzun süre dayanıklıdır.</li>
                <li>Çatı shingle kaplamadır ve tam su yalıtımı sağlar.</li>
                <li>
                  Kullanılan tüm metal parçalar dış hava koşullarına uygundur.
                </li>
                <li>
                  EN 71-3 sertifikalı, canlılar için güvenli boya kullanılmıştır.
                </li>
                <li>Ortalama 12 kedi için idealdir.</li>
              </ul>
            </>
          )}

          {activeSection === "faq" && (
            <>
              <AccordionItem
                question="Ürün dış mekânda uzun süre kullanılabilir mi?"
                answer="Evet. Marin Plywood ve ithal çam sayesinde zorlu hava koşullarına dayanıklıdır."
              />
              <AccordionItem
                question="Kaç kedi için uygundur?"
                answer="6 odalı yapısıyla ortalama 12 kedi için idealdir."
              />
              <AccordionItem
                question="Kurulum zor mu?"
                answer="Hayır. Demonte gelir ve video ile kolayca kurulur."
              />
              <AccordionItem
                question="Çatı su geçirir mi?"
                answer="Hayır. Shingle kaplama sayesinde tam yalıtım sağlar."
              />
              <AccordionItem
                question="Boya güvenli mi?"
                answer="Evet. EN 71-3 sertifikalı, tüm canlılar için güvenlidir."
              />
              <AccordionItem
                question="Taksit ve iade var mı?"
                answer="Evet. Taksit seçenekleri ve kolay iade imkânı vardır."
              />
            </>
          )}

          {activeSection === "contact" && <ContactForm />}
        </div>
      </section>
    </main>
  );
}

export default App;
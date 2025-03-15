import { useEffect, useState } from "react";
import { getPage } from "./helper";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export function getUrlParam() {
  const parts = location.hash.substring(1).split('/');
  return parts.length > 1 ? parts[1] : null;
}

function App() {
  const [url, setUrl] = useState(location.hash.substring(1) || "/");

  useEffect(() => {
    const handleHashChange = () => {
      setUrl(location.hash.substring(1)); // Hash değiştiğinde URL'yi güncelle
    };

    window.addEventListener("hashchange", handleHashChange); // Hash değişimini dinle

    return () => {
      window.removeEventListener("hashchange", handleHashChange); // Temizlik
    };
  }, []);

  const currentPage = getPage(url || "/");

  return (
    <div className="container">
      <Header />
      <div className="page-content">
        <div className={currentPage.title ? "page-title" : ""}>{currentPage.title}</div>
        <div className="page-component">{currentPage ? currentPage.component : <div>Page Not Found</div>} {/* Sayfa bulunmazsa hata mesajı */}</div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
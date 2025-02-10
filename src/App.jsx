import { useEffect, useState } from "react";

import Header from "./assets/components/Header.jsx";
import AllNotes from "./assets/components/AllNotes.jsx";
import ArchivedNotes from "./assets/components/ArchivedNotes.jsx";
import CreateNote from "./assets/components/CreateNote.jsx";
import Footer from "./assets/components/Footer.jsx";

const routes = [
  {
    title: "All Notes",
    url: "/",
    component: <AllNotes />
  },
  {
    title: "Archived Notes",
    url: "/archive",
    component: <ArchivedNotes />
  },
  {
    url: "/create-note",
    component: <CreateNote />,
  },
  // {
  //   url: "/tags",
  //   component: <Tags />,
  // },
  // {
  //   url: "/search",
  //   component: <Search />,
  // },
  // {
  //   title: "Settings",
  //   url: "/archive",
  //   component: <Settings />
  // },
];

export function getPage(url) {
  return routes.find((x) => x.url === url) ?? null;
}

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
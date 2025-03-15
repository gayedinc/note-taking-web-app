import { useState } from "react";
import { HomeSvg, SearchSvg, ArchiveSvg, TagSvg, SettingSvg } from "../Svg";

export default function Footer() {
  const [selectedButton, setSelectedButton] = useState(null);

  function handleButtonClick(i) {
    setSelectedButton(i); // Tıklanan butonun indeksini seçili hale getir
  };

  return (
    <div className="footer-section">
      <button
        className={selectedButton === 0 ? "selected" : ""}
        onClick={() => handleButtonClick(0)}>
        <HomeSvg />
      </button>
      <button
        className={selectedButton === 1 ? "selected" : ""}
        onClick={() => handleButtonClick(1)}>
        <SearchSvg />
      </button>
      <button
        className={selectedButton === 2 ? "selected" : ""}
        onClick={() => handleButtonClick(2)}>
        <ArchiveSvg />
      </button>
      <button
        className={selectedButton === 3 ? "selected" : ""}
        onClick={() => handleButtonClick(3)}>
        <TagSvg />
      </button>
      <button
        className={selectedButton === 4 ? "selected" : ""}
        onClick={() => handleButtonClick(4)}>
        <SettingSvg />
      </button>
    </div>
  );
}

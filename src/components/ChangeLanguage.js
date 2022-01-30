import React, { useContext } from "react";
import { LanguageContext } from "./../context/languageContext";

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <div>
      <button
        className="btn btn-dark"
        onClick={() => {setContextLang(contextLang === "en" ? "ar" : "en");
        this.forceUpdate();}}
      >
        {contextLang}
      </button>
    </div>
  );
}

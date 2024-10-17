import React, { useEffect, useRef } from "react";

const LanguageSelector = () => {
  const googleTranslateScriptLoaded = useRef(false);
  const translateElementInitialized = useRef(false);

  useEffect(() => {
    if (!googleTranslateScriptLoaded.current) {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.type = "text/javascript";
      googleTranslateScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(googleTranslateScript);
      googleTranslateScriptLoaded.current = true;

      window.googleTranslateElementInit = () => {
        if (!translateElementInitialized.current) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "ig,es,fr,de,it,pt,zh-CN,ja,ko,ar,ru,hi,pl,nl,sv,da,no,fi,el,tr",
            },
            "google_translate_element"
          );
          translateElementInitialized.current = true;
        }
      };
    }
  }, []);

  return (
    <div className="language-selector-container">
      <div id="google_translate_element" className="language-selector"></div>
    </div>
  );
};

export default LanguageSelector;

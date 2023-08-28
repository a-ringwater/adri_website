import { useEffect, useState } from "react";
import { resources } from "../translation/languages";
import { useTranslation } from "react-i18next";

function useCurrentLanguage() {
  const [currentResource, setCurrentResource] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const languageResource = resources.find(
      (element) => element.id === i18n.language
    );
    setCurrentResource(languageResource);
  }, [i18n.language]);

  return currentResource;
}

export default useCurrentLanguage;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "../locales/en.json";
import RU from "../locales/ru.json";

i18n.use(initReactI18next).init({
    resources: {
        ru: { translation: RU },
        en: { translation: EN },
    },
    fallbackLng: "en",
    compatibilityJSON: "v3",
});

export default i18n;

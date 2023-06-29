import EN from "./en.json";
import RU from "./ru.json";

declare module "react-i18next" {
    interface CustomTypeOptions {
        defaultNS: "en";
        resources: {
            ru: typeof RU;
            en: typeof EN;
        };
    }
}

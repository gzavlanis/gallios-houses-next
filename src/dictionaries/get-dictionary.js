import 'server-only';

const dictionaries = {
    el: () => import('./el.json').then((module) => module.default),
    en: () => import('./en.json').then((module) => module.default),
    fr: () => import('./fr.json').then((module) => module.default),
    de: () => import('./de.json').then((module) => module.default),
    it: () => import('./it.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
    return dictionaries[locale] ? dictionaries[locale]() : dictionaries['el']();
};
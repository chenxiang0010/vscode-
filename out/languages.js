"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const translateApi_1 = require("./translateApi");
let lastChannel = translateApi_1.getChannel();
let recentlyUsed = [];
function LRUList(selectedLanguage) {
    if (lastChannel !== translateApi_1.getChannel()) {
        lastChannel = translateApi_1.getChannel();
        recentlyUsed = [];
    }
    if (selectedLanguage === undefined) {
        return recentlyUsed;
    }
    const languages = getLanguages();
    if (recentlyUsed.find(r => r.value === selectedLanguage.value)) {
        const index = recentlyUsed.findIndex(r => r.value === selectedLanguage.value);
        recentlyUsed.splice(index, 1);
    }
    if (languages.find(r => r.value === selectedLanguage.value)) {
        const index = languages.findIndex(r => r.value === selectedLanguage.value);
        languages.splice(index, 1);
    }
    recentlyUsed.splice(0, 0, selectedLanguage);
    return recentlyUsed;
}
exports.LRUList = LRUList;
function getLanguages() {
    return {
        google: exports.google,
        sougou: exports.sougou,
    }[lastChannel];
}
exports.getLanguages = getLanguages;
exports.google = [
    {
        name: 'Afrikaans',
        value: 'af',
    },
    {
        name: 'Albanian',
        value: 'sq',
    },
    {
        name: 'Amharic',
        value: 'am',
    },
    {
        name: 'Arabic',
        value: 'ar',
    },
    {
        name: 'Armenian',
        value: 'hy',
    },
    {
        name: 'Azeerbaijani',
        value: 'az',
    },
    {
        name: 'Basque',
        value: 'eu',
    },
    {
        name: 'Belarusian',
        value: 'be',
    },
    {
        name: 'Bengali',
        value: 'bn',
    },
    {
        name: 'Bosnian',
        value: 'bs',
    },
    {
        name: 'Bulgarian',
        value: 'bg',
    },
    {
        name: 'Catalan',
        value: 'ca',
    },
    {
        name: 'Cebuano',
        value: 'ceb',
    },
    {
        name: 'Chinese',
        value: 'zh-CN',
    },
    {
        name: 'Corsican',
        value: 'co',
    },
    {
        name: 'Croatian',
        value: 'hr',
    },
    {
        name: 'Czech',
        value: 'cs',
    },
    {
        name: 'Danish',
        value: 'da',
    },
    {
        name: 'Dutch',
        value: 'nl',
    },
    {
        name: 'English',
        value: 'en',
    },
    {
        name: 'Esperanto',
        value: 'eo',
    },
    {
        name: 'Estonian',
        value: 'et',
    },
    {
        name: 'Finnish',
        value: 'fi',
    },
    {
        name: 'French',
        value: 'fr',
    },
    {
        name: 'Frisian',
        value: 'fy',
    },
    {
        name: 'Galician',
        value: 'gl',
    },
    {
        name: 'Georgian',
        value: 'ka',
    },
    {
        name: 'German',
        value: 'de',
    },
    {
        name: 'Greek',
        value: 'el',
    },
    {
        name: 'Gujarati',
        value: 'gu',
    },
    {
        name: 'Haitian Creole',
        value: 'ht',
    },
    {
        name: 'Hausa',
        value: 'ha',
    },
    {
        name: 'Hawaiian',
        value: 'haw',
    },
    {
        name: 'Hebrew',
        value: 'he',
    },
    {
        name: 'Hindi',
        value: 'hi',
    },
    {
        name: 'Hmong',
        value: 'hmn',
    },
    {
        name: 'Hungarian',
        value: 'hu',
    },
    {
        name: 'Icelandic',
        value: 'is',
    },
    {
        name: 'Igbo',
        value: 'ig',
    },
    {
        name: 'Indonesian',
        value: 'id',
    },
    {
        name: 'Irish',
        value: 'ga',
    },
    {
        name: 'Italian',
        value: 'it',
    },
    {
        name: 'Japanese',
        value: 'ja',
    },
    {
        name: 'Javanese',
        value: 'jw',
    },
    {
        name: 'Kannada',
        value: 'kn',
    },
    {
        name: 'Kazakh',
        value: 'kk',
    },
    {
        name: 'Khmer',
        value: 'km',
    },
    {
        name: 'Korean',
        value: 'ko',
    },
    {
        name: 'Kurdish',
        value: 'ku',
    },
    {
        name: 'Kyrgyz',
        value: 'ky',
    },
    {
        name: 'Lao',
        value: 'lo',
    },
    {
        name: 'Latin',
        value: 'la',
    },
    {
        name: 'Latvian',
        value: 'lv',
    },
    {
        name: 'Lithuanian',
        value: 'lt',
    },
    {
        name: 'Luxembourgish',
        value: 'lb',
    },
    {
        name: 'Macedonian',
        value: 'mk',
    },
    {
        name: 'Malagasy',
        value: 'mg',
    },
    {
        name: 'Malay',
        value: 'ms',
    },
    {
        name: 'Malayalam',
        value: 'ml',
    },
    {
        name: 'Maltese',
        value: 'mt',
    },
    {
        name: 'Maori',
        value: 'mi',
    },
    {
        name: 'Marathi',
        value: 'mr',
    },
    {
        name: 'Mongolian',
        value: 'mn',
    },
    {
        name: 'Myanmar',
        value: 'my',
    },
    {
        name: 'Nepali',
        value: 'ne',
    },
    {
        name: 'Norwegian',
        value: 'no',
    },
    {
        name: 'Nyanja',
        value: 'ny',
    },
    {
        name: 'Pashto',
        value: 'ps',
    },
    {
        name: 'Persian',
        value: 'fa',
    },
    {
        name: 'Polish',
        value: 'pl',
    },
    {
        name: 'Portuguese',
        value: 'pt',
    },
    {
        name: 'Punjabi',
        value: 'pa',
    },
    {
        name: 'Romanian',
        value: 'ro',
    },
    {
        name: 'Russian',
        value: 'ru',
    },
    {
        name: 'Samoan',
        value: 'sm',
    },
    {
        name: 'Scots Gaelic',
        value: 'gd',
    },
    {
        name: 'Serbian',
        value: 'sr',
    },
    {
        name: 'Sesotho',
        value: 'st',
    },
    {
        name: 'Shona',
        value: 'sn',
    },
    {
        name: 'Sindhi',
        value: 'sd',
    },
    {
        name: 'Sinhala',
        value: 'si',
    },
    {
        name: 'Slovak',
        value: 'sk',
    },
    {
        name: 'Slovenian',
        value: 'sl',
    },
    {
        name: 'Somali',
        value: 'so',
    },
    {
        name: 'Spanish',
        value: 'es',
    },
    {
        name: 'Sundanese',
        value: 'su',
    },
    {
        name: 'Swahili',
        value: 'sw',
    },
    {
        name: 'Swedish',
        value: 'sv',
    },
    {
        name: 'Tagalog',
        value: 'tl',
    },
    {
        name: 'Tajik',
        value: 'tg',
    },
    {
        name: 'Tamil',
        value: 'ta',
    },
    {
        name: 'Telugu',
        value: 'te',
    },
    {
        name: 'Thai',
        value: 'th',
    },
    {
        name: 'Turkish',
        value: 'tr',
    },
    {
        name: 'Ukrainian',
        value: 'uk',
    },
    {
        name: 'Urdu',
        value: 'ur',
    },
    {
        name: 'Uzbek',
        value: 'uz',
    },
    {
        name: 'Vietnamese',
        value: 'vi',
    },
    {
        name: 'Welsh',
        value: 'cy',
    },
    {
        name: 'Xhosa',
        value: 'xh',
    },
    {
        name: 'Yiddish',
        value: 'yi',
    },
    {
        name: 'Yoruba',
        value: 'yo',
    },
    {
        name: 'Zulu',
        value: 'zu',
    },
];
exports.sougou = [
    { value: 'ar', name: '????????????' },
    { value: 'et', name: '???????????????' },
    { value: 'bg', name: '???????????????' },
    { value: 'pl', name: '?????????' },
    { value: 'bs-Latn', name: '???????????????' },
    { value: 'fa', name: '?????????' },
    { value: 'mww', name: '?????????' },
    { value: 'da', name: '?????????' },
    { value: 'de', name: '??????' },
    { value: 'ru', name: '??????' },
    { value: 'fr', name: '??????' },
    { value: 'fi', name: '?????????' },
    { value: 'fj', name: '?????????' },
    { value: 'fil', name: '????????????' },
    { value: 'ht', name: '?????????????????????' },
    { value: 'ko', name: '??????' },
    { value: 'nl', name: '?????????' },
    { value: 'ca', name: '????????????' },
    { value: 'cs', name: '?????????' },
    { value: 'tlh', name: '????????????' },
    { value: 'tlh-Qaak', name: '????????????(piqaD)' },
    { value: 'hr', name: '???????????????' },
    { value: 'otq', name: '????????????????????????' },
    { value: 'ro', name: '???????????????' },
    { value: 'lv', name: '???????????????' },
    { value: 'lt', name: '????????????' },
    { value: 'ms', name: '?????????' },
    { value: 'mt', name: '????????????' },
    { value: 'mg', name: '???????????????' },
    { value: 'bn', name: '????????????' },
    { value: 'af', name: '???????????????' },
    { value: 'no', name: '?????????' },
    { value: 'pt', name: '????????????' },
    { value: 'ja', name: '??????' },
    { value: 'sv', name: '?????????' },
    { value: 'sl', name: '??????????????????' },
    { value: 'sr-Latn', name: '???????????????(?????????)' },
    { value: 'sr-Cyrl', name: '???????????????(????????????)' },
    { value: 'sk', name: '???????????????' },
    { value: 'sw', name: '???????????????' },
    { value: 'sm', name: '????????????' },
    { value: 'th', name: '??????' },
    { value: 'tr', name: '????????????' },
    { value: 'to', name: '?????????' },
    { value: 'ty', name: '????????????' },
    { value: 'yua', name: '??????????????????' },
    { value: 'cy', name: '????????????' },
    { value: 'uk', name: '????????????' },
    { value: 'ur', name: '????????????' },
    { value: 'es', name: '????????????' },
    { value: 'el', name: '?????????' },
    { value: 'hu', name: '????????????' },
    { value: 'he', name: '????????????' },
    { value: 'en', name: '??????' },
    { value: 'it', name: '????????????' },
    { value: 'hi', name: '?????????' },
    { value: 'id', name: '??????????????????' },
    { value: 'vi', name: '?????????' },
    { value: 'yue', name: '??????(??????)' },
    { value: 'zh-CHS', name: '??????' },
    { value: 'zh-CHT', name: '????????????' },
];
//# sourceMappingURL=languages.js.map
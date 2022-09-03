let languagePrefixes;
let gamblingLogoURL;

class SpringConfigsType {
}

const lang = document.documentElement.lang, SpringConfigsDev: SpringConfigsType = {
    PARTNER_ID: 4,
    SOURCE: isMobile ? 4 : 42,
    WRAPPER_APP: false,
    SWARM_URL: 'wss://eu-swarm-springre.betconstruct.com/',
    CASINO_URL: 'https://www.cmsbetconstruct.com/casino/',
    JACKPOT_URL: 'wss://rgs-wss.betconstructapps.com/jackpot',
    GEO_LINK_URL: 'https://geoapi.bcapps.net',
    STAT_LINK: 'https://statistics.vbet.com/',
    A_TO_Z_MENU_DATA_PATH: 'https://static.springbuilder.site/fs/userFiles-v2/parimatch-staging-x-18748211/data/springXConfigs/aToZJsonPath.json',
    ACCOUNT_REGISTRATION_JSON_PATH: "https://static.springbuilder.site/fs/userFiles-v2/dark-staging-18747819/data/springXConfigs/v3RegFields.json",
    SECTIONS_JSON: '',
    ACCOUNT_PARAMS: '',
    USER_FILES_URL: false,
    TERMS_LINK: 'https://www.betconstruct.com',
    PRIVACY_POLICY_LINK: 'https://www.betconstruct.com',
    TERMS_LINK_TARGET: '1',
    PRIVACY_POLICY_TARGET: '1',
    STORAGE_URL: 'https://static.springbuilder.site/',
    LANGUAGE_PREFIX: languagePrefixes[lang] || languagePrefixes[lang.slice(0, 2)],
    CURRENT_LANGUAGE: 'en',
    ODD_ROUNDING: 3,
    PRICE_ROUNDING: 2,
    PRICE_SEPARATOR: ' ',
    HIDE_TRAILING_ZEROES: true,
    VERSION: 123456,

    /**  CASINO  **/
    CASINO_CATEGORIES_MULTIPLE_SELECT: false,
    CASINO_GAMES_FETCH_COUNT: 16,
    CASINO_MOBILE_IFRAME: false,
    CASINO_GAME_URL_PREFIX: 'games',
    CASINO_SPORTSBOOK_SWITCHER: 0,
    CASINO_GAMBLING_LOGO_URL: gamblingLogoURL,
    CASINO_HIGH_QUALITY_PICTURES: true,

    /**  SPORTSBOOK  **/
    SPORTSBOOK_MOUNT_PATH: 'match',
    SPORT_MENU_DEFAULT_SELECTED: 'sportsTypes',
    SPORT_MARKET_IS_COMPACT: '5',
    SPORT_COMPETITION_IS_COMPACT: 0,
    IS_BOOK_BET_AVAILABLE: true,
    IS_QUICK_BET: true,
    IS_BOOSTED_ODDS_ENABLED: true,
    IS_MULTIPLES_ENABLED: true,
    IS_EDIT_BET_AVAILABLE: true,
    IS_BETSLIP_FLOATING_ENABLED: false,
    TEAM_LOGOS: true,
    PUSH_NOTIFICATIONS_ENABLED: true,

    //TODO must be tranfered to account settings json

    /**  ACCOUNT  **/
    USER_AUTOLOGIN: true,
    GIFT_BET: true,
    IS_PRINT_AVAILABLE: true,
    REMOVE_SUSPENDED_SELECTION: true,

    /**  MISC  **/
    MOCKED_DATA: false,
    JURISDICTION: '0',
    BOTTOM_NAV_VALIDATION: true,
    IS_WEBP_SUPPORTED: true,
    DT: {
        shortDate: 'DD MMM',
        longDate: 'DD MMM YYYY',
        time: 'HH:mm',
        longTime: 'HH:mm:ss'
    },

    PAGE_URLS: {
        live:
            !isMobile
                ? `http://localhost:3006/desktop-sportsbook-live`
                : 'http://localhost:3006/live',
        prematch:
            !isMobile
                ? `http://localhost:3006/desktop-sportsbook`
                : 'http://localhost:3006/prematch',
        casino: 'http://localhost:3006/casino',
        tournaments: 'http://localhost:3006/tournament',
        esport: 'http://localhost:3006/esports'
    },

    /**  CUSTOM CODES  **/
    APPEND_CUSTOM_CODE_LOGIN: false,
    CUSTOM_CODE_LOGIN: '',
    APPEND_CUSTOM_CODE_REG: false,
    CUSTOM_CODE_REG: '',
    APPEND_CUSTOM_CODE_DEPOSIT: false,
    CUSTOM_CODE_DEPOSIT: '',
    APPEND_CUSTOM_CODE_BETSLIP: false,
    CUSTOM_CODE_BETSLIP: '',
    APPEND_CUSTOM_CODE_DEPOSIT_FAIL: true,
    CUSTOM_CODE_DEPOSIT_FAIL: '<script>console.log("deposit fail custom code appended")</script>',
    APPEND_CUSTOM_CODE_LOGIN_FAIL: true,
    CUSTOM_CODE_LOGIN_FAIL: '<script>console.log("login fail custom code appended")</script>',

    BET_BUILDER_URL: 'https://betconstruct-prod-gen2.sportcastlive.com/markets?key=a6aa080b-cea9-4e3f-aa02-9fef8d1f0c8f&fixtureid=',
    IS_ACTIVE_STREAM_TAB: true,
    OUTRIGHT_FILTER: 1,
    CAROUSEL_ARROWS: false,
    BET_BUILDER_SWITCHER: true,
    CURRENCIES_WITH_SYMBOLS: true,
    REALITY_CHECK_SWITCHER: false,
    DEFAULT_ODD_ACCEPT: "2",
    CURRENT_COUNTRY_CODE: "AM"
};
const path = require("path");
module.exports = {
    i18n: {
        defaultLocale: 'uz',
        locales: ['en', 'ru', 'uz'],
        localeDetection: false,
        localePath: path.resolve("./public/locales"),
    },
}
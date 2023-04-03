const nextConfig = {
  reactStrictMode: true,
};

const nextTranslate = require("next-translate");

module.exports = Object.assign({}, nextConfig, nextTranslate());

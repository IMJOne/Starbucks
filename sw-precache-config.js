module.exports = {
  staticFileGlobs: ['*.html', 'css/*.css', 'font/*.woff', 'font/*.woff2', 'img/**.*', 'js/*.js'],
  stripPrefix: '/',
  runtimeCaching: [
    {
      urlPattern: /this\\.is\\.a\\.regex/,
      handler: 'networkFirst',
    },
  ],
};

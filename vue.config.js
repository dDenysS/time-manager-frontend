module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pwa: {
    name: 'Time',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // настройки манифеста
    manifestOptions: {
      display: 'landscape',
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: '#42B883'
      // ...другие настройки манифеста...
    },

    // настройка workbox-плагина
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc необходимо в режиме InjectManifest
      swSrc: 'dev/sw.js'
      // ...другие настройки Workbox...
    }
  }
}

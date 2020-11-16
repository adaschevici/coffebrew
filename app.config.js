import 'dotenv/config'
export default {
  expo: {
    name: 'coffeebrew',
    slug: 'coffeebrew',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    extra: {
      yelpApiKey: process.env.YELP_API_KEY,
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
}

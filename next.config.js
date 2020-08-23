module.exports = {
  assetPrefix: (process.env.NODE_ENV === 'production') ? '/nextjs-api-ghpage-test' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
}
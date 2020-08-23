module.exports = {
  env: {
    BACKEND_URL: (process.env.NODE_ENV === 'production') ? '/nextjs-api-ghpage-test' : ''
  },
  assetPrefix: (process.env.NODE_ENV === 'production') ? '/nextjs-api-ghpage-test' : '',
  // webpack: (config) => {
  //   config.output.publicPath = `/nextjs-api-ghpage-test${config.output.publicPath}`;
  //   return config;
  // }
}
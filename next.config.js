module.exports = {
  webpack: (config, { isServer }) => {

    // Enable importing of ES modules
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false
      }
    })

    return config
  }
}
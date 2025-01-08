const nextConfig = {
    webpack: (config) => {
      config.resolve.fallback = {
        kerberos: false,
        '@mongodb-js/zstd': false,
        '@aws-sdk/credential-providers': false,
        'gcp-metadata': false,
        snappy: false,
        aws4: false,
        'mongodb-client-encryption': false,
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
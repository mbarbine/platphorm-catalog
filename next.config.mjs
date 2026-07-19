const nextConfig = {
  distDir: '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    '/*': [
      './components-index.json',
      './components.json',
      './github-recent-manifest/recent_repositories.json',
      './global-capability-catalog/catalog/docs/**/*',
      './platform-analysis-output/**/*',
    ],
  },
}

export default nextConfig

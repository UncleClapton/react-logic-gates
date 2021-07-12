module.exports = () => {
  return {
    distDir: 'dist',
    images: {
      disableStaticImages: true,
    },
    eslint: {
      // Ignore ESLint in builds as our CI Takes care of this for us.
      ignoreDuringBuilds: true,
    },
  }
}

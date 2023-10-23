import { defineConfig } from '@sanity/pkg-utils'

export default defineConfig({
  extract: {
    bundledPackages: ['visual-editing-helpers'],
    rules: {
      'ae-forgotten-export': 'warn',
      'ae-incompatible-release-tags': 'warn',
      'ae-missing-release-tag': 'warn',
    },
  },
  minify: true,
  tsconfig: 'tsconfig.build.json',
})

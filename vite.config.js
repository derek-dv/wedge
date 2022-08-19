import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from "@rollup/plugin-eslint"

export default defineConfig({
  plugins: [
    {
      ...eslint(),
      enforce: 'pre',
      apply: 'build',
    },
    [react()]
  ]
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

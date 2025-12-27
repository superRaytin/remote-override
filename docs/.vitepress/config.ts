import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Remote Override",
  description: "A visual Chrome extension that proxies remote resources to your local environment",
  themeConfig: {
    logo: '/images/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation', activeMatch: '/guide/' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      { text: 'Installation', link: '/guide/installation' },
      { text: 'How to use', link: '/guide/usage' },
      { text: 'Best practices', link: '/guide/best-practices' },
      { text: 'How it works', link: '/guide/internals' },
      { text: 'FAQ', link: '/faq' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/superRaytin/remote-override' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present <a href="https://github.com/superRaytin" target="_blank">superRaytin</a>'
    }
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Local Resource Proxy",
  description: "A visual Chrome extension that proxies remote resources to your local environment",
  themeConfig: {
    logo: '/images/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      // {
      //   text: 'Guide',
      //   items: [
      //     { text: 'Why This Extension Exists', link: '/guide/intro' },
      //     { text: 'How to use', link: '/guide/usage' },
      //     { text: 'FAQ', link: '/faq' },
      //   ]
      // },
      { text: 'Why This Extension Exists', link: '/guide/intro' },
      { text: 'How to use', link: '/guide/usage' },
      { text: 'Advance', link: '/guide/advance' },
      { text: 'FAQ', link: '/faq' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/superRaytin/local-resource-proxy-docs' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present <a href="https://github.com/superRaytin" target="_blank">superRaytin</a>'
    }
  }
})

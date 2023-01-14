import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
 useNextSeoProps() {
    return {
      title: "Easy Script",
      titleTemplate: "Easy Script",
    };
  },
 head: (
    <>
      <title>Easy Script Docs</title>
      <meta name="description" content="The official documentation for Easy Script." />

      <meta itemprop="name" content="Easy Script Docs" />
      <meta itemprop="description" content="The official documentation for Easy Script." />
      <meta itemprop="image" content="https://images.easyscript.dev/banner.png" />

      <meta property="og:url" content="https://docs.easyscript.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Easy Script Docs" />
      <meta property="og:description" content="The official documentation for Easy Script." />
      <meta property="og:image" content="https://images.easyscript.dev/banner.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Easy Script Docs" />
      <meta name="twitter:description" content="The official documentation for Easy Script." />
      <meta name="twitter:image" content="https://images.easyscript.dev/banner.png" />
    </>
  ),
  // logo: (<><img src="https://images.easyscript.dev/default.png" height="64px" /></>),
  project: {
    link: 'https://github.com/EasyScriptJS/EasyScript',
  },
  docsRepositoryBase: 'https://github.com/EasyScriptJS/docs/blob/main',
  footer: {
    text: '© 2023 Easy Script - All Rights Reserved.',
  },
  banner: {
    key: 'v2',
    text: '🎉 EasyScript v2 has been released! Read more →'
  },
}

export default config

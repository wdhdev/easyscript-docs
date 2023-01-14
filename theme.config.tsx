import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Easy Script" />
      <meta property="og:image"  content="https://images.easyscript.dev/banner.png">
      <meta property="og:description" content="A npm package which makes coding in JavaScript easy!" />
    </>
  ),
  logo: <span>EasyScriptJS</span>,
  project: {
    link: 'https://github.com/EasyScriptJS/EasyScript',
  },
  docsRepositoryBase: 'https://github.com/EasyScriptJS/docs',
  footer: {
    text: '© 2023 EasyScriptJS - All Rights Reserved.',
  },
  /**
  banner: {
    key: 'release/2.0.0',
    text: '🎉 EasyScript 2.0.0 is released. Read more →'
  },
  **/
}

export default config

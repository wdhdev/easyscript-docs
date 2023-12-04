import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
 useNextSeoProps() {
    return {
      title: "Easy Script",
      titleTemplate: "Easy Script",
    };
  },
  logo: (
    <>
      <span style={{ fontWeight: 600 }}>Easy Script</span>
    </>
  ),
 head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Easy Script" />
      <meta
        property="og:description"
        content="Documentation for Easy Script"
      />
    </>
  ),
  project: {
    link: 'https://github.com/wdhdev/EasyScript'
  },
  docsRepositoryBase: 'https://github.com/wdhdev/easyscript-docs/blob/main',
  footer: {
    text: '© 2023 Easy Script - All Rights Reserved.'
  }
}

export default config

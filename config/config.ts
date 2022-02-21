import { defineConfig } from 'dumi'

const repo = 'dumi-template'

export default defineConfig({
  title: '前端杂谈',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  locales: [['zh-CN', '中文']],

  // Because of using GitHub Pages
  base: `/`, // `/${repo}/`
  publicPath: `/`, // `/${repo}/`
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/toFrankie/dumi-pages.git',
    },
  ],

  menus: {
    '/guide': [
      {
        title: '指南',
        path: 'guide',
      },
      // {
      //   title: 'Blog',
      //   // children: [
      //   //   {
      //   //     title: 'JavaScript',
      //   //     children: ['blogs/**/*.md'],
      //   //   },
      //   //   {
      //   //     title: 'CSS',
      //   //     path: 'blogs/css',
      //   //   },
      //   // ],
      // },
    ],
  },
  // more config: https://d.umijs.org/config
})

module.exports = {
  title: 'blog',
  description: 'Document library',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/notes/study/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      { text: '游魂博客', link: 'https://www.iyouhun.com' },
      // 下拉列表的配置
      {
        text: '选择语言',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ],
    sidebar: {
      '/notes/': [
        {
          title: '前端学习',
          children:[
            'study/css',
            'study/js',
          ]
        }
      ],
      '/': [
        {
          title: '知识汇总',
          children:[
            'notes/study/css',
            'notes/study/js',
          ]
        }
      ]
    }
  }
}

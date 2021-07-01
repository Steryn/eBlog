module.exports = {
  title: '个人博客', //标题
  description: '前端开发 个人博客',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  serviceWorker: true,
  repo: 'https://github.com/steryn/blog.git', //仓库地址
  base: '/eBlog/', // 配合部署项目
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  lastUpdated: 'Last Updated',
  displayAllHeaders: true,
  themeConfig: {
    //主题配置
    logo: '/logo.jpg',
    sidebar: 'auto',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      //导航栏
      { text: '首页', link: '/' },
      { text: 'JS', link: '/js_docs/' },
      { text: 'CSS', link: '/css_docs/' },
      { text: 'Vue', link: '/vue_docs/' },
      { text: 'React', link: '/react_docs/' },
      {
        text: '2020',
        ariLabel: '2020',
        items: [
          //多级导航栏
          { text: 'May', link: '/2020/5/' },
          { text: 'June', link: '/2020/6/' },
        ],
      },
      { text: 'github', link: 'https://github.com/steryn/blog.git' },
    ],
    sidebar: {
      //侧边拦
      // '/2020/': [
      //   ['/2020/5/', '5月份'],
      //   ['/2020/6/', '6月份'],
      //   ['/2020/7/', '7月份'],
      // ],
      '/index/': [
        // 侧边栏在 /index/ 目录上
        '/index/',
        {
          title: 'Html',
          collapsable: false, // 不可折叠
          children: ['/html/one.md'],
        },
        {
          title: 'CSS',
          collapsable: false, // 不可折叠
          children: ['/index/css/one.md'],
        },
        // 侧边栏在 /javascript/ 目录上
        {
          title: 'Javascript',
          collapsable: true, // 不可折叠
          children: ['/index/javascript/javascript.md'],
        },
        // 侧边栏在 /node.js/ 目录上
        {
          title: 'nodejs',
          collapsable: true, // 不可折叠
          children: ['/index/nodejs/nodejs.md'],
        },
        // 侧边栏在 /react.js/ 目录上
        {
          title: 'react',
          collapsable: true, // 不可折叠
          children: ['/index/nodejs/react.md'],
        },
        // 侧边栏在 /others/ 目录上
        {
          title: '其它',
          collapsable: true, // 不可折叠
          children: ['/index/others/others.md'],
        },
        // 侧边栏在 /vue.js/ 目录上
        {
          title: 'vuejs',
          collapsable: true, // 不可折叠
          children: ['/index/vue/vue.md'],
        },
        // 侧边栏在 /vx/ 目录上
        {
          title: 'vx',
          collapsable: true, // 不可折叠
          children: ['/index/vx/vx.md'],
        },
      ],
    },
  },
}

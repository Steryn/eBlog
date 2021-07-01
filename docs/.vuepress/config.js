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
  displayAllHeaders: true, //显示全部标题，false显示当前活动页标题
  search: false, //禁用搜索框
  themeConfig: {
    //主题配置
    logo: '/img/logo.jpg',
    sidebar: 'auto',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: require('./config/nav.js'),
    sidebar: require('./config/sidebar.js'),
  },
}

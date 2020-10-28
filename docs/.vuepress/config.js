module.exports = {
    title: '重学前端系列', 
    description : 'Adroi',
    base : '/',
    themeConfig : {
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
      markdown: {
        lineNumbers: true // 代码块显示行号
      },
      nav: [
          {text: 'js知识点', link: '/js-note/'}
      ],
      sidebar: {
        '/js-note/': [
            {
              title: 'js知识点',
              path: '/js-note/',
              collapsable: false,
            },
          ],
      },
      
    },
    plugins: [
        ["go-top"]
    ]
  }
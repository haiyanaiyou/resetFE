module.exports = {
    title: '重学前端系列', 
    description : '对前端知识点进行统一梳理',
    base : '/',
    themeConfig : {
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
      markdown: {
        lineNumbers: true // 代码块显示行号
      },
      nav: [
          {text: 'js知识点', link: '/js-note/'},
          {text: '前端书籍笔记', link: '/book/'}

      ],
      sidebar: {
        '/js-note/': [
            {
              title: 'js知识点',
              path: '/js-note/',
              collapsable: false,
            },
          ],
          '/book/': [
            {
              title: '前端阅读书籍',
              path: '/book/',
              collapsable: false,
              children: [
                {
                  title: '你所不知道的JavaScript（中卷）',
                  path: '/book/book01/'
                },
                {
                  title: 'JavaScript编程全解',
                  path: '/book/book02/'
                },
              ]
            }
          ]
      },
      
    },
    plugins: [
        ["go-top"]
    ]
  }
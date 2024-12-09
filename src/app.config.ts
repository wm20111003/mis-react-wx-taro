export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/menu/index',
    'pages/profile/index',
    'pages/login/index',
    'pages/detail/index',
    'pages/menuList/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'mis 系统',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '消息',
        iconPath: "static/images/tabs/tab-index.png",
        selectedIconPath: "static/images/tabs/tab-index-fill.png"
      },
      {
        pagePath: 'pages/menu/index',
        text: '主菜单',
        iconPath: "static/images/tabs/tab-index.png",
        selectedIconPath: "static/images/tabs/tab-index-fill.png"
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: "static/images/tabs/tab-index.png",
        selectedIconPath: "static/images/tabs/tab-index-fill.png"
      }
    ],
    color: '#999',
    selectedColor: '#286DE6',
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    position: "bottom",
  }
})

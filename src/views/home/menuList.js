const menuList = [
  {
    id: 1,
    path: '/welcome',
    order: 1,
    authName: '系统首页',
    icon: 'el-icon-menu'
  },
  {
    id: 2,
    path: '/home',
    order: 1,
    authName: '订单管理',
    icon: 'el-icon-menu',
    children: [
      {
        id: 11,
        path: '/order',
        order: null,
        authName: '订单列表 ',
        icon: 'el-icon-menu'
      }
    ]
  }
]

export default menuList

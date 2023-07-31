import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

// 一级菜单示例
const DASHBOARD: AppRouteRecordRaw = {
  path: '/testPage',
  name: 'TestPage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '一级菜单',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
    // 1.一级菜单实现1 --展示一级菜单
    hideInMenu: false,
    // 2.一级菜单实现2 --设置显示菜单的name，再跳转testPage1页会用到
    activeChild: 'FirstMenuPage'
  },
  children: [
    {
      path: '/firstMenuPage',
      name: 'FirstMenuPage',
      component: () => import('@/views/testPage/firstMenuPage/index.vue'),
      meta: {
        requiresAuth: true,
        // 3.一级菜单实现3 --隐藏二级菜单
        hideInMenu: true,
        // 4.一级菜单实现4 --设置父级页，设置高亮为一级菜单，解决后面页面重定向时不高亮选中菜单的问题
        activeMenu: 'TestPage'
      },
    },
  ],
};

export default DASHBOARD;

import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/firstPage',
  name: 'FirstPage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '二级菜单',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'FirstPage1',
      name: 'FirstPage1',
      component: () => import('@/views/testPage/secondMenuPage/index.vue'),
      meta: {
        locale: '二级菜单页面',
        // icon: 'icon-dashboard',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;

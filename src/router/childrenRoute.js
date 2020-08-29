export const childrenRoute = [
  {
    path: '',
    name: 'Default',
    component: () => import('../views/Default.vue')
  },
  {
    path: '/About',
    name: '基 本 信 息',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Resume',
    name: '项 目 案 例',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/skill',
    name: '专 业 技 能',
    component: () => import('../views/skills.vue')
  }
]
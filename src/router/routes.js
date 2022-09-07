function views(path) {
  return () => import(`@/views/${path}`).then((m) => m.default || m);
}

const routes = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: views('DashBoard.vue'),
        meta: {
          title: 'DashBoard',
        },
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: views('JobManagement.vue'),
        meta: {
          title: 'Jobs',
        },
      },
      {
        path: '/user',
        name: 'user',
        component: views('UserManagement.vue'),
        meta: {
          title: 'User',
        },
      },
      {
        path: '/interview',
        name: 'interview',
        component: views('InterviewManagement.vue'),
        meta: {
          title: 'Interview',
        },
      },
      {
        path: 'about',
        name: 'Login',
        component: views('AboutView.vue'),
        meta: {
          title: 'Login',
        },
      },
    ]
  }
];

export default routes;
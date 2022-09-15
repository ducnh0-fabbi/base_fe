function views(path) {
  return () => import(`@/views/${path}`).then((m) => m.default || m);
}

const routes = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    // meta: {
    //   middleware: true
    // },
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
        path: '/job-manager',
        name: 'job-manager',
        component: views('JobManager.vue'),
        meta: {
          title: 'Job-manager',
        },
      },
      {
        path: '/job-detail',
        name: 'job',
        component: views('JobDetail.vue'),
        meta: {
          title: 'Job',
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
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: views('LoginView.vue'),
    meta: {
      title: 'Login',
    },
  }
];

export default routes;
function views(path) {
  return () => import(`@/views/${path}`).then((m) => m.default || m);
}

const routes = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    meta: {
      name: 'Home',
    },
    children: [
      {
        path: '',
        name: 'Top Screen',
        component: views('HomeView.vue'),
        meta: {
          title: 'Top Screen',
          middleware: true
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
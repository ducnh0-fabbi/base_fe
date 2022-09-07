import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';
import middlewareAuth from '@/middleware/auth';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * Global middlware
 *
 * @return {Array}
 */
function globalMiddleware() {
  return [middlewareAuth];
}

/**
 * Each a middleware
 *
 * @return {void}
 */
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // this.dcm++;
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const routeMiddleware = middleware ? globalMiddleware().concat(middleware) : globalMiddleware();

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, routeMiddleware, 1);

    return routeMiddleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;

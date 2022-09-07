import { getAccessToken } from '@/utils/token';

export default async function auth({
  to,
  next,
}) {
  const token = getAccessToken();
  if (token && to.name !== 'Login') {
    next();
  } else { 
    next({ name: 'Login'});
  }
}

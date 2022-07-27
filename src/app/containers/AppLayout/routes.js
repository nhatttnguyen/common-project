import { Citavi } from 'app/containers/Citavi/Loadable';
import { HomePage } from 'app/containers/HomePage/Loadable';
import { SubPage } from 'app/containers/SubPage/Loadable';
import LoginCallback from 'app/containers/Authentication/LoginCallback';

export const privateRoutes = [
  {
    path: '/citavi',
    component: Citavi,
    key: 'citavi',
    permissions: [],
  },
  {
    path: '/',
    component: HomePage,
    key: 'homepage',
    permissions: [],
  },
  {
    path: '/subpage',
    component: SubPage,
    key: 'subpage',
    permissions: [],
  },
];

export const publicRoutes = [
  {
    path: '/login-callback',
    component: LoginCallback,
    key: 'login-callback',
  },
];

export const errorRoutes = [
  '/access-denied',
  '/not-found',
  '/account-expired',
  '/under-construction',
];

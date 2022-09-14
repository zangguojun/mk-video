import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const VideoTemplate = lazy(() => import('@/pages/VideoTemplate'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/video-template',
        component: VideoTemplate,
      },
      {
        path: '/',
        component: Home,
      },
    ],
  },
];
export default routerConfig;

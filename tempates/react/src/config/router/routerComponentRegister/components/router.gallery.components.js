import { lazy } from 'react';

export const Echarts = lazy(() =>
  import(/* webpackChunkName: "echarts" */ '@/components/gallery/echarts'),
);

export const Demo = lazy(() => import(/* webpackChunkName: "demo" */ '@/components/ui/demo'));

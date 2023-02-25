import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import 'index.css';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

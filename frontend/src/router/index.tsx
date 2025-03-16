import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';
import Loading from '@/components/Loading';

const Router = () => {
  return (
    <Suspense fallback={ <Loading /> }>
      <Routes>
        {
          routes.map(({ path, component: Component }) => (
            <Route
              key={ path }
              path={ path }
              element={
                <Suspense fallback={ <Loading /> }>
                  <Component />
                </Suspense>
              }
            />
          ))
        }
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </Suspense>
  );
};

export default Router;

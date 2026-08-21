import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';
import AuthMiddleware from '../middleware/auth-middleware';
import PublicMiddleware from '../middleware/public-middleware';
import { Suspense } from 'react';
import Loader from '../components/Layouts/loader';
const finalMiddleware = routes.map((route) => {
    const { middleware, menuAkses, ...rest } = route;
    return {
        ...rest,
        element:
            middleware === 'auth' ? (
                <AuthMiddleware menu={menuAkses}>
                    <Suspense fallback={<Loader type="default" />}>{route.element}</Suspense>
                </AuthMiddleware>
            ) : (
                <PublicMiddleware>{route.element}</PublicMiddleware>
            ),
    };
});

const router = createBrowserRouter(finalMiddleware);

export default router;

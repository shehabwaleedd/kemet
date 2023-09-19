import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NotFound from '../notFound/NotFound';
import Loading from '../../utils/loading/Loading.tsx';
import SiteHome from '../home/SiteHome';
const About = lazy(() => import('../about/About'));

const Routers = ({ navOpen, setNavOpen }) => {
    const location = useLocation();
    const routeConfig = [
        {
            path: '/',
            element: <SiteHome key={location.pathname} navOpen={navOpen} />,
        },
        {
            path: '/about',
            element: <About key={location.pathname} />,
        },
        { path: '*', element: <NotFound /> },
    ];

    const renderedRoutes = useRoutes(routeConfig);

    return (
        <>
            <Suspense fallback={<Loading height={100} />}>
                {renderedRoutes}
            </Suspense>
        </>
    );
};

export default Routers;

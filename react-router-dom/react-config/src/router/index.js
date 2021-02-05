import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Group = lazy(() => import('../pages/Group'))
const GroupDetail = lazy(() => import('../pages/Group/GroupDetail'))
const Other = lazy(() => import('../pages/Group/Other'))

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/group",
        component: Group,
        routes: [
            {
                path: "/group/detail",
                component: GroupDetail,
            },
            {
                path: "/group/other",
                component: Other,
            },
        ],
    },
    {
        path: "/about",
        component: About,
    },
]

export default routes

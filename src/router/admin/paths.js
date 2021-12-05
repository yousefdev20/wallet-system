import store from "../../store/index";

export default [
    {
        path: '/404',
        meta: {
            public: true,
        },
        name: 'NotFound',
        component: () => import(
            /* webpackChunkName: "routes" */
            `@/views/NotFound.vue`
            )
    },
    {
        path: '/admin/login',
        meta: {
            public: true,
        },
        name: 'Admin.Login',
        component: () => import(
            `@/views/admin/Login.vue`

            ),
        beforeEnter(to, from, next) {
            if (store.state.admin) next({name: 'Admin.Dashboard'});
            else next();
        }
    },
    {
        path: '/admin',
        meta: {breadcrumb: true, isRoot: true},
        name: 'Root_',
        async beforeEnter(to, from, next) {
            if (!store.state.admin) next(`/admin/login?next=${to.name}`);
            else {
                next();
            }
        },
        component: () => import("@/components/RootComponent"),
        redirect: {name: "Admin.Dashboard"},
        children: [
            {
                path: '/admin/dashboard',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'Admin.Dashboard',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/admin/Dashboard`
                    )
            },
            {
                path: '/admin/dashboard/users',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'Admin.Dashboard.User',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/admin/User`
                    )
            },
            {
                path: '/admin/dashboard/transactions',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'Admin.Dashboard.Transaction',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/admin/Transaction`
                    )
            },
            {
                path: '/admin/dashboard/payment/gateways',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'Admin.Dashboard.PaymentGateway',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/admin/PaymentGateway`
                    )
            }
        ]
    }
]
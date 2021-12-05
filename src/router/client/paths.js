import store from "../../store/index";

export default [
    {
        path: '/user/register',
        meta: {
            public: true,
        },
        name: 'Register',
        component: () => import(
            `@/views/client/Register.vue`
            ),
        beforeEnter(to, from, next) {
            if (store.state.user) next({name: 'User.Dashboard'});
            else next();
        }
    },
    {
        path: '/user/login',
        meta: {
            public: true,
        },
        name: 'Login',
        component: () => import(
            `@/views/client/Login.vue`

            ),
        beforeEnter(to, from, next) {
            if (store.state.user) next({name: 'User.Dashboard'});
            else next();
        }
    },
    {
        path: '',
        meta: {breadcrumb: true, isRoot: false},
        name: 'Root',
        async beforeEnter(to, from, next) {
            if (!store.state.user) next(`/user/login?next=${to.name}`);
            else {
                next();
            }
        },
        component: () => import("@/components/RootComponent"),
        redirect: {name: "User.Dashboard"},
        children: [
            {
                path: '/user/dashboard',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'User.Dashboard',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/client/Dashboard`
                    )
            },
            {
                path: '/user/dashboard/deposit',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'User.Dashboard.Deposit',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/client/Deposit`
                    )
            },
            {
                path: '/user/dashboard/withdraw',
                meta: {breadcrumb: true, title: "Dashboard"},
                name: 'User.Dashboard.Withdraw',
                component: () => import(
                    /* webpackChunkName: "routes" */
                    `@/views/client/Withdraw`
                    )
            }
        ]
    }
]
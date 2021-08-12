export const CreateBlogPage = () => import('./Pages/CreateBlogPage.vue')
export const SingleBlogPage = () => import('./Pages/SingleBlogPage.vue')
export const BlogPage = () => import('./Pages/BlogPage.vue')
export const BlogModule = () => import('./BlogModule.vue')

export const BlogRoutes = [
    {
        path: '/blogs',
        name: 'blogs',
        meta: {
            authentication: true,
        },
        redirect: {name: 'blog.index'},
        component: BlogModule,
        children: [
            {
                path: '/',
                component: BlogPage,
                name: 'blog.index',
                meta: {
                    authentication: true,
                },
            },
            {
                path: 'create',
                component: CreateBlogPage,
                name: 'blog.create',
                meta: {
                    authentication: true,
                },
            },
            {
                path: ':id',
                component: SingleBlogPage,
                name: 'blog.view',
                meta: {
                    authentication: true,
                },
            }
        ]
    }
]
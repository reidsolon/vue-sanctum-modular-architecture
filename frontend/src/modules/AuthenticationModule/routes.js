export const AuthenticationModule = () => import('./AuthenticationModule')
export const LoginPage = () => import('./Pages/LoginPage')
export const RegistrationPage = () => import('./Pages/RegisterPage')


export const AuthenticationRoutes = [
    {
        path: '/auth',
        name: 'auth',
        redirect: {name: 'auth.login'},
        component: AuthenticationModule,
        children: [
            {
                path: '/',
                component: LoginPage,
                name: 'auth.login'
            },
            {
                path: 'register',
                component: RegistrationPage,
                name: 'auth.register'
            }
        ]
    }
]

export default { AuthenticationModule, LoginPage, RegistrationPage }
interface NavigationEntry {
    title: string
    link: string
}

const navigation: Record<string, NavigationEntry> = {
    home: {
        title: 'Home',
        link: '/',
    },
    blog: {
        title: 'Blog',
        link: '/blog',
    },
    shop: {
        title: 'Shop',
        link: '/shop',
    },
    login: {
        title: 'Login',
        link: '/login',
    },
    settings: {
        title: 'Settings',
        link: '/settings',
    },
}

export default navigation
interface NavigationEntry {
    title: string
    link: string

}

const navigation: Record<string, NavigationEntry> = {
    home: {
        title: 'Home',
        link: '/',
    },
    about: {
        title: 'About',
        link: '/about',
    },
    blog: {
        title: 'Blog',
        link: '/blog/1',
    },
    contact: {
        title: 'Contact',
        link: '/contact',
    },
    // shop: {
    //     title: 'Shop',
    //     link: '/shop',
    // },
    // login: {
    //     title: 'Login',
    //     link: '/login',
    // },
    // settings: {
    //     title: 'Settings',
    //     link: '/settings',
    // },
}

export default navigation
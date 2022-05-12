interface NavigationEntry {
    title: string
    link: string
}

const navigation = {
    home: {
        title: 'Home',
        link: '/',
    } as NavigationEntry,
    blog: {
        title: 'Blog',
        link: '/blog',
    } as NavigationEntry,
    shop: {
        title: 'Shop',
        link: '/shop',
    } as NavigationEntry
}

export default navigation
interface BlogConfig {
    postsPerPage: number
    searResultsPerPage: number
    images: BlogConfigImageIds
}

interface BlogConfigImageIds {
    aboutSection: string
}

const config: BlogConfig = {
    postsPerPage: 2,
    searResultsPerPage: 2,
    images: {
        aboutSection: '2xMwV93Rttokqf5QMcOOYr'
    }
}

export default config
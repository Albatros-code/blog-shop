export interface PostModel extends PostApiModel {
    slug: string
}

export interface PostApiModel {
    title: string
    image: {
        file: {
            url: string
        },
        description: string
    }
    date: string
    text: string
}
import { Asset, EntryFields, RichTextContent, RichTextData, RichTextDataTarget, RichTextNodeType } from "contentful"
import { Document } from "@contentful/rich-text-types";

export interface BlogPostApi {
    name: string
    description: string
    displayField: string
    fields: Array<{
        id: string
        name: string
        type: string
        localized: boolean
        required: boolean
        validations: Array<
            {
                enabledNodeTypes?: Array<string>
                enabledMarks?: Array<string>
            }
        >
        disabled: boolean
        omitted: boolean
        linkType?: string
    }>
    sys: {
        space: {
            sys: {
                type: string
                linkType: string
                id: string
            }
        }
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: {
            sys: {
                id: string
                type: string
                linkType: string
            }
        }
        publishedVersion: number
        publishedAt: string
        firstPublishedAt: string
        createdBy: {
            sys: {
                type: string
                linkType: string
                id: string
            }
        }
        updatedBy: {
            sys: {
                type: string
                linkType: string
                id: string
            }
        }
        publishedCounter: number
        version: number
        publishedBy: {
            sys: {
                type: string
                linkType: string
                id: string
            }
        }
    }
}

export interface BlogPostEntry {
    title: EntryFields.Text
    date: EntryFields.Date
    image: Asset
    content: Document
    description: EntryFields.Text
    tags: Array<EntryFields.Text>
}

export type BlogPost = BlogPostBase & BlogPostContent
export type BlogPostLight = BlogPostBase

interface BlogPostBase {
    slug: string
    title: string
    description: string
    date: string
    tags: string[]
}

interface BlogPostContent {
    image: {
        title: string
        description: string | null
        url: string
    }
    content: Document
}
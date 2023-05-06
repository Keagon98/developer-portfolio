interface Project {
    content?: Content[],
    description?: string,
    image?: Object
    name?: string,
    slug?: Slug,
    tags?: [],
    _id?: string,
}
interface Content {
    _key: string,
    children: Children[],
}
interface Children {
    text: string,
}

interface Slug {
    current: string,
    _type: string
}

export default Project;
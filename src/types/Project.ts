interface Project {
    content?: Content[],
    description?: string,
    image?: Object
    name?: string,
    slug?: Object,
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

export default Project;
interface Experience {
    backend_duties: Duties[],
    company: string,
    frontend_duties: Duties[],
    name: string,
    position: string,
    unique_id: number,
    years: string,
    _id: number,
}

interface Duties {
    children: Children[],
    _key: string,
}

interface Children {
    text: string,
    _key: string
}

export default Experience;
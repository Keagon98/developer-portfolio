import sanity from '../sanity/client';

export let projectContent = [];
export let project = [];

export const getProjectsData = async() => {
        const query = `*[_type == 'projects'] | order(_createdAt asc)`;
        await sanity.fetch(query).then(
            (response) => {
                projectContent = response;
        }).catch((error) => console.error(error));
};  

export const getProjectData = async(id) => {
    const query = `*[_type == 'projects' && slug.current == '${id}'][0]`;
    await sanity.fetch(query).then(
        (response) => {
            project = response;
    }).catch((error) => console.error(error));

}    


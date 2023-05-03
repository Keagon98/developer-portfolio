import { defineStore } from "pinia";
import sanity from '../client';

const useProjectsStore = defineStore('projects', {
    state: () => ({
        projectContent: [],
    }),
    persist: true,
    actions: {        
        async fetchProjectsData() {
            const query = `*[_type == 'projects'] | order(_createdAt asc)`;
            await sanity.fetch(query).then(
                (response) => {
                    this.projectContent = response;
            }).catch((error) => console.error(error));
        },  
    }
});

export default useProjectsStore;
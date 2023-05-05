import { defineStore } from "pinia";
import sanity from '../client';

const useProjectsStore = defineStore('projects', {
    state: () => ({
        projectContent: [],
        project: {},
    }),
    persist: true,
    getters: {
        reset(state) {
          return state.project = {};
        },
    },
    actions: {        
        async fetchProjectsData() {
            const query = `*[_type == 'projects'] | order(_createdAt asc)`;
            await sanity.fetch(query).then(
                (response) => {
                    this.projectContent = response;
            }).catch((error) => console.error(error));
        },  
        async fetchProjectData(id) {
            console.log('Fetch');
            const query = `*[_type == 'projects' && slug.current == '${id}'][0]`;
            await sanity.fetch(query).then(
                (response) => {
                    this.project = response;
                    console.log(this.project);
            }).catch((error) => console.error(error));
        },  
    }
});

export default useProjectsStore;
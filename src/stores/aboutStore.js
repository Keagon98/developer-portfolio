import { defineStore } from "pinia";
import sanity from '../sanity/client';

const useAboutStore = defineStore('about', {
    state: () => ({
        aboutContent: [],
        experienceContent: []
    }),
    persist: true,
    actions: {
        async fetchAboutData() {
            const query = `*[_type == 'about']`;
            await sanity.fetch(query).then(
                (response) => {
                    response.forEach(obj => {
                        this.aboutContent = obj.content.split(".", 3);
                    })
            }).catch((error) => console.error(error));
        },
        
        async fetchExperienceData() {
            const query = `*[_type == 'experience'] | order(unique_id asc)`;
            await sanity.fetch(query).then(
                (response) => {
                    this.experienceContent = response;
            }).catch((error) => console.error(error));
        },  
    }
});

export default useAboutStore;
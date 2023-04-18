import { defineStore } from "pinia";
import sanity  from '../client';

const useAboutStore = defineStore('about', {
    state: () => ({
        contentArray: [],
        content: [],
    }),
    actions: {
        async fetchData() {
            const query = `*[_type == "about"] { content }`;

            await sanity.fetch(query).then(
                (response) => {
                    this.content = response[0].content;

                    if (this.contentArray.length < 1) {
                        this.content.forEach((c) => {
                            this.contentArray.push(c.children[0]);
                        });
                    }
            }).catch((error) => console.error(error));
        },     
    }
});

export default useAboutStore;
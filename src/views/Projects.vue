<template>
    <router-view />
    <app-layout-component :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="header">
                            <h1 ref="projectHeader" title="Projects">Projects</h1>
                        </div>
                        <div class="main-content my-4">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCard"  v-for="proj in data" :key="proj._id">
                                        <project-card-component :proj="proj" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>  
    </app-layout-component>
</template>

<script lang="ts" setup>
    import AppLayout from '../layouts/AppLayout.vue';
    import ProjectCard from '../components/cards/ProjectCard.vue';

    import { onMounted, ref } from 'vue';
    import { projectspageAnimation } from '../helpers/gsap-utils';

    import useProjectsStore from '../stores/projectStore';

    const appLayoutComponent = AppLayout;
    const projectCardComponent = ProjectCard;

    const projectHeader = ref(null);
    const projectCard = ref(null);

    const store = useProjectsStore();
    store.fetchProjectsData();

    let data: any[] = [];
    data = store.projectContent;

    onMounted(() => {      
      projectspageAnimation(projectHeader, projectCard);
    });

</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    .container {
        height: 100%;
        overflow: scroll;
        .content-wrapper {
            padding: 7em 0;
        }
    }
}
</style>

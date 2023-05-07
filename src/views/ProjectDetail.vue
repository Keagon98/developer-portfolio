<template>
    <app-layout-component :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="header-wrapper">
                            <div class="col">
                                <div class="row align-items-center">
                                    <div class="col-12 col-md-8">
                                        <div class="header">
                                            <h1 ref="projectNameHeader" title="Project Name">{{ project.name }}</h1>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="header-buttons d-flex align-items-center justify-content-sm-start justify-content-md-end">
                                            <a class="btn-code" href="" ref="headerButton1">Code <font-awesome-icon icon="fa-solid fa-code" /></a>
                                            <a class="btn-live" href="" ref="headerButton2">Live <font-awesome-icon icon="fa-solid fa-square-arrow-up-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="main-content">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="card mb-4" ref="projectInfoCard">
                                            <div class="card-img-top">
                                                <img :src="url" :alt="project.name">
                                            </div>
                                            <div class="card-body">
                                                <div class="card-content" v-for="content in project.content" :key="content._key">
                                                    <p>{{ content.children[0].text }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <app-tech-stack-component :techStack="techStack" :backgroundColor="'bg-dark-400'"/>
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

<script setup lang="ts">
import AppLayout from '../layouts/AppLayout.vue';
import AppTechStack from '../components/common/AppTechStack.vue';

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { projectdetailpageAnimation } from '../helpers/gsap-utils';

import Project from '../types/Project';

import sanity from '../sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const appLayoutComponent = AppLayout;
const appTechStackComponent = AppTechStack;

const route = useRoute();
const id = route.params.id;

const projectNameHeader = ref(null);
const projectInfoCard = ref(null);

let project = ref<Project>({});

const getProjectData = async(id: any) => {
    const query = `*[_type == 'projects' && slug.current == '${id}'][0]`;
    await sanity.fetch(query).then(
        (response) => {
            project.value = response;
            createUrl(project.value.image);
    }).catch((error) => console.error(error));
}

let url: string = "";
const builder = imageUrlBuilder(sanity);
const createUrl = (source: any) => {
    return url = builder.image(source).url();
}

onMounted(() => {  
    getProjectData(id);
    projectdetailpageAnimation(projectNameHeader, projectInfoCard);
});

const techStack = [
        {
            icon: 'javascript',
            name: 'JavaScript'
        },
        {
            icon: 'vuejs',
            name: 'Vue JS'
        },
        {
            icon: 'node-js',
            name: 'Node JS'
        },
        {
            icon: 'npm',
            name: 'NPM'
        },
        {
            icon: 'webpack',
            name: 'Webpack'
        },
        {
            icon: 'git-alt',
            name: 'Git'
        },
        {
            icon: 'bootstrap',
            name: 'Bootstrap'
        },
        {
            icon: 'docker',
            name: 'Docker'
        },
        {
            icon: 'typescript',
            name: 'TypeScript'
        },
        {
            icon: 'sass',
            name: 'Sass'
        },
        {
            icon: 'greensock',
            name: 'GSAP'
        },
        {
            icon: 'sanity-io',
            name: 'Sanity.io'
        },
        {
            icon: 'react',
            name: 'React JS'
        },
    ]   
</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    .container {
        height: 100%;
        overflow: scroll;
        .content-wrapper {
            padding: 7em 0;

            .header-wrapper {
                margin-bottom: 1.5em;
                .header-buttons {
    
                    .btn-code {
                        background-color: #242629;
                        color: #FFFFFF;
                        padding: 10px 15px;
                        border-radius: 3px;
                        font-size: calc(.8em + .1vw) !important;
                        margin-right: .5em;
    
                        &:hover {
                            background-color: #FFFFFF;
                            color: #16161A;
                            transition: .5s ease-in-out;
                        }
                    }
                    .btn-live {
                        background-color: #2CB67D;
                        color: #FFFFFF;
                        padding: 10px 15px;
                        border-radius: 3px;
                        font-size: calc(.8em + .1vw) !important;
                        margin-right: .5em;
    
                        &:hover {
                            color: #2CB67D;
                            background-color: #FFFFFF;
                            transition: .5s ease-in-out;
                        }
                    }
                }
            }

            .main-content {
                .card {
                    background-color: #242629;
                    border-radius: 3px;
                    .card-img-top {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
<template>
    <app-layout-component :backgroundColor="'bg-dark-400'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="header">
                            <h1 ref="aboutHeader" title="About Me">About Me</h1>
                        </div>
                        <div class="main-content">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-6">
                                    <div class="row">
                                        <div class="main-content-text" v-for="text in data" :key="text">
                                            <p ref="contentText"> 
                                                {{ text }}.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <app-tech-stack-component :techStack="techStack" :backgroundColor="'bg-dark-600'"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-lg-6">
                                    <div class="row">
                                        <carousel-slider-component :experienceData="experienceData"/>
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
    import AppTechStack from '../components/common/AppTechStack.vue';
    import CarouselSlider from '../components/carousel/CarouselSlider.vue';

    import { onMounted, ref } from 'vue';
    import { aboutpageAnimation } from '../helpers/gsap-utils';

    import useAboutStore  from '../stores/aboutStore';
    
    const appLayoutComponent = AppLayout;
    const appTechStackComponent = AppTechStack;
    const carouselSliderComponent = CarouselSlider;
    
    const aboutHeader = ref(null);
    const contentText = ref(null);

    const store = useAboutStore();
    store.fetchAboutData();
    store.fetchExperienceData();

    const data:any = ref();
    data.value = store.aboutContent;
    
    const experienceData:any = ref();
    experienceData.value = store.experienceContent;

    onMounted(() => {    
        aboutpageAnimation(aboutHeader, contentText);
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
        }
    }
}
</style>

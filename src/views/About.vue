<template>
    <app-layout :backgroundColor="'bg-dark-400'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                            <div class="row header">
                                <h2 ref="aboutHeader">About Me</h2>
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
                                        <AppTechStack :techStack="techStack"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-lg-6">
                                    <div class="row">
                                        <CarouselSlider :experienceData="experienceData"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </main>
    </app-layout>
</template>

<script lang="ts" setup>
    import AppLayout from '../layouts/AppLayout.vue';
    import AppTechStack from '../components/common/AppTechStack.vue';
    import CarouselSlider from '../components/carousel/CarouselSlider.vue';

    import { onMounted, ref } from 'vue';
    import { gsap } from 'gsap';

    import useAboutStore  from '../stores/aboutStore';

    const store = useAboutStore();

    console.log(store.aboutContent);
    
    const appLayout = AppLayout;
    const appTechStack = AppTechStack;
    const carouselSlider = CarouselSlider;
    
    const aboutHeader = ref(null);
    const contentText = ref(null);

    store.fetchAboutData();
    store.fetchExperienceData();

    const data:any = ref();
    data.value = store.aboutContent;

    const experienceData:any = ref();
    experienceData.value = store.experienceContent;

    onMounted(() => { 

        const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });
        tl.from(aboutHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
        tl.from(contentText.value, { y: '+30', autoAlpha: 0, duration: 0.35, stagger: 0.15});       

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

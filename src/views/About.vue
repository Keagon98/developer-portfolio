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
                                        <div class="main-content-text">
                                            <p ref="contentTextOne">
                                                I'm a developer based in the beautiful town of 
                                                Gordons Bay, Western Cape.   
                                            </p>
                                            <p ref="contentTextTwo">
                                                A simple guy who practices his simplistic character 
                                                in the code he writes and in the designs he creates.
                                            </p>
                                            <p ref="contentTextThree">
                                                As a Frontend Developer, I specialise in building fast, 
                                                responsive and visually appealing web applications. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <AppTechStack :techStack="techStack"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12 col-lg-6">
                                    <div class="row">
                                        <CarouselSlider />
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

        const appLayout = AppLayout;
        const appTechStack = AppTechStack;
        const carouselSlider = CarouselSlider;
        
        const aboutHeader = ref(null);
        const contentTextOne = ref(null);
        const contentTextTwo = ref(null);
        const contentTextThree = ref(null);

        onMounted(() => {
            const tl = gsap.timeline({ ease: "ease-in" });

            tl.from(aboutHeader.value, { x: '+50', autoAlpha: 0, duration: 0.45 });
            tl.from(contentTextOne.value, { y: '+30', autoAlpha: 0, duration: 0.35 });
            tl.from(contentTextTwo.value, { y: '+30', autoAlpha: 0, duration: 0.35 });
            tl.from(contentTextThree.value, { y: '+30', autoAlpha: 0, duration: 0.35 });

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

<template>
    <app-layout :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="header">
                            <h2 ref="projectHeader">Projects</h2>
                        </div>
                        <div class="main-content my-4">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCard">
                                        <ProjectCard />
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCard2">
                                        <ProjectCard />
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCard3">
                                        <ProjectCard />
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCard4">
                                        <ProjectCard />
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
    import ProjectCard from '../components/cards/ProjectCard.vue';

    import { onMounted, ref } from 'vue';
    import { gsap } from 'gsap';

    const appLayout = AppLayout;
    const projectCardComponent = ProjectCard;

    const projectHeader = ref(null);
    const projectCard = ref(null);
    const projectCard2 = ref(null);
    const projectCard3 = ref(null);
    const projectCard4 = ref(null);

    onMounted(() => { 
        const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });
        tl.from(projectHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
        tl.from(projectCard.value, { y: '+30', autoAlpha: 0, duration: 0.40, stagger: 0.10});       
        tl.from(projectCard2.value, { y: '+30', autoAlpha: 0, duration: 0.40, stagger: 0.10});       
        tl.from(projectCard3.value, { y: '+30', autoAlpha: 0, duration: 0.40, stagger: 0.10});       
        tl.from(projectCard4.value, { y: '+30', autoAlpha: 0, duration: 0.40, stagger: 0.10});       
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

<template>
    <app-layout-component :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <h4 ref="landingHeadingOne">Hi, I'm Keagon Brinkhuis.</h4>
                                <h1 ref="landingHeadingTwo" title="Frontend Developer">Frontend Developer</h1>
                                <h4 ref="landingHeadingThree">with a passion for UI development.</h4>
                            </div>
                            <div class="col-12">
                                <div class="d-flex justify-content-start social-links">
                                    <div ref="icon" class="social-link-icon" v-for="icon in socialIcons" :key="icon.name">
                                        <a :href="icon.link" target="_blank">
                                            <font-awesome-icon :icon="icon.icon" />
                                        </a>
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
    import { onMounted, ref } from 'vue';
    import { homepageAnimation } from '../helpers/gsap-utils';

    const appLayoutComponent = AppLayout;

    const landingHeadingOne = ref(null);
    const landingHeadingTwo = ref(null);
    const landingHeadingThree = ref(null);
    const icon = ref(null);

    const headings: Object[] = [];

    headings.push(landingHeadingOne);
    headings.push(landingHeadingTwo);
    headings.push(landingHeadingThree);

    onMounted(() => {  
        homepageAnimation(headings, icon);
    });

    const socialIcons = [
        {
            name: 'github',
            icon: 'fa-brands fa-square-github',
            link: 'https://github.com/Keagon98'
        },
        {
            name: 'linkedIn',
            icon: 'fa-brands fa-linkedin',
            link: 'https://www.linkedin.com/in/keagon-brinkhuis/'
        },
    ]
</script>

<style lang="scss" scoped>
main {
    .container {
        height: 100%;
        .content-wrapper {
            display: grid;
            place-content: center center;
            height: 100vh;
            .social-links {
                margin: 1em 0;
                svg {
                    font-size: calc(25px + 1vw);
                    margin: 0 1.5em 0 0;
                    &.fa-square-github {
                        color: #FFFFFE;
                    }
                    &.fa-linkedin {
                        color: #0A66C2;
                    }
                }
            }
        }
    }
}
</style>

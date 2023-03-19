<template>
    <app-layout :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-md-12 col-sm-12">
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="main-heading">Hi, I'm Keagon Brinkhuis a</h4>
                                <h1 class="main-heading">Frontend Developer</h1>
                                <h4 class="main-heading">who is passionate about UI development.</h4>
                            </div>
                            <div class="col-sm-12">
                                <div class="d-flex flex-sm-row justify-content-evenly social-links">
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-brands fa-square-github" />
                                    </div>
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                                    </div>
                                    <div class="icon">
                                        <font-awesome-icon icon="fa-solid fa-square-envelope" />
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

<script lang="ts">
import AppLayout from '../layouts/AppLayout.vue';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

export default {
    components: {
        AppLayout
    },
    setup() {
        onMounted(() => {
            console.log('Component mounted');

            gsap.from(".main-heading", {
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: .8,
                ease: "ease-in"
            });

            gsap.from(".icon", {
                y: 25,
                opacity: 0,
                stagger: .2,
                delay: 2.5,
                ease: "ease-in"
            })
        })

        return {onMounted, ref}
    }
}
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
                    font-size: 2em;
                    &.fa-square-github {
                        color: #FFFFFE;
                    }
                    &.fa-linkedin {
                        color: #0A66C2;
                    }
                    &.fa-square-envelope {
                        color: #2CB67D;
                    }
                }
            }
        }
    }
}
</style>

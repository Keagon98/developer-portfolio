<template>
    <section>
        <div class="container">
            <div class="content-wrapper">
                <div class="col-12">
                    <div class="row my-2">
                        <h3 class="p-0" ref="techHeader">Tech Stack</h3>
                    </div>
                    <div class="row my-2">
                        <div class="card col-6 col-md-4 col-xl-3" v-for="tech in techStack" :key="tech.name">
                            <div class="card-body text-center" ref="techCard">
                                <img class="mt-2" :src="`/icon-${tech.icon}.svg`" alt="" srcset="">
                                <h5 class="mt-3">{{ tech.name }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue';

const props = defineProps({
    techStack: Object
});

const techHeader = ref(null);
const techCard = ref(null);

onMounted(() => {
    const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });

    tl.from(techHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
    tl.from(techCard.value, { y: '+30', autoAlpha: 0, stagger: 0.10, duration: 0.35 });
});

</script>

<style lang="scss" scoped>
section {
    .content-wrapper {
        .card {
            background-color: transparent;
            border: none;
            padding: 0;

            .card-body {
                display: flex;
                place-content: center center;
                text-align: center;
                flex-direction: column;
                border-radius: 2px;
                background-color: #16161A;
                margin: 0 1em 1em 0;

                img {
                    margin: 0 auto;
                    width: calc(25px + .8vw);
                }
            }
        }


    }
}
</style>
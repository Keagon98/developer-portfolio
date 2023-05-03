<template>
    <section>
        <div class="container">
            <div class="content-wrapper">
                <div class="col-12">
                    <div class="row mb-2">
                        <h3 class="p-0" ref="experienceHeader">Experience</h3>
                    </div>
                    <div class="row my-2" ref="experienceCard">
                        <swiper
                            :modules="modules"
                            :slides-per-view="1"
                            :space-between="0"
                            :pagination="{ type: 'progressbar' }"
                            :navigation="true"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                        >
                            <swiper-slide v-for="exp in experienceData" :key="exp._id">
                                <div class="slide-content-container">
                                    <div class="slide-content-wrapper p-4 m-auto">
                                        <div class="slide-header-wrapper my-4 text-center">
                                            <h4 class="slide-period">{{ exp.years }}</h4>
                                            <h2 class="slide-header">{{ exp.company }}</h2>
                                            <h2 class="slide-header">{{ exp.position }}</h2>
                                        </div>
                                        <div class="slider-main-content px-4">
                                            <h5 class="slider-subheading">Frontend Duties</h5>
                                            <ul class="text-white" v-for="duties in exp.frontend_duties" :key="duties._key">
                                                <li>{{ duties.children[0].text }}</li>
                                            </ul>
                                            <h5 class="slider-subheading">Backend Duties</h5>
                                            <ul class="text-white" v-for="duties in exp.backend_duties" :key="duties._key">
                                                <li>
                                                    {{ duties.children[0].text }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>           
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap'
    import { computed, onMounted, ref, PropType } from 'vue'

    import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import Experience from '../../types/Experience'

    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import 'swiper/css/scrollbar'

    const props = defineProps({
        experienceData: {
            type: Array as PropType<Experience[]>,
            required: true
        }
    });
 
    const experienceHeader = ref(null);
    const experienceCard = ref(null);

    onMounted(() => {
        const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });

        tl.from(experienceHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
        tl.from(experienceCard.value, { y: '+30', autoAlpha: 0, duration: 0.40 });
    });

    const swiper = Swiper;
    const swiperSlider = SwiperSlide;

    const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade];

    const onSwiper = (swiper: any) => {
        
    };
    const onSlideChange = () => {
        
    };

    const slideData = [
        {
            heading: 'Slide 1',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, saepe.'
        },
        {
            heading: 'Slide 2',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, saepe.'
        },
        {
            heading: 'Slide 3',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, saepe.'
        },
    ]
</script>

<style lang="scss" scoped>
section {
    .container {
        padding-left: 0;
        .content-wrapper {
            margin: 0 1em;
            
            .slide-content-wrapper {
                background: #16161A;
                border-radius: 2px;

                .slide-header {
                    font-size: calc(1.25em + .2vw) !important;
                    font-weight: 700 !important;
                }

                .slider-main-content {
                    overflow-y: scroll;
                    width: 96%;
                    max-height: 455px;

                    .slider-subheading {
                        font-size: calc(1.1em + .1vw) !important;
                        color: #2CB67D;
                        text-align: center;
                        font-weight: 600 !important;
                    }

                    ul > li {
                        font-size: calc(.65em + .2vw) !important;
                        letter-spacing: 2px;
                        line-height: 1.8;
                        margin: 1em 0;
                    }

                }
            }
        }
    }
}

@media screen and (max-width: 991px)  {
    .content-wrapper {
        margin-top: 1em !important;
    }
}
</style>
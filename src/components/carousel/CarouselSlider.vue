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
                            :space-between="100"
                            :pagination="{ type: 'progressbar' }"
                            :navigation="true"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                        >
                            <swiper-slide>
                                <div class="slide-content-container">
                                    <div class="slide-content-wrapper p-4">
                                        <h4 class="slide-period text-center">2022 - Present</h4>
                                        <h3 class="slide-header">Adept ICT - Junior Frontend Developer</h3>
                                        <div class="slider-main-content">
                                            <h5 class="slider-subheading">Frontend Duties</h5>
                                            <ul class="text-white">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                            </ul>
                                            <h5 class="slider-subheading">Backend Duties</h5>
                                            <ul class="text-white">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="slide-content-container">
                                    <div class="slide-content-wrapper p-4">
                                        <h4 class="slide-period text-center">2022 - Present</h4>
                                        <h3 class="slide-header">Adept ICT - Junior Frontend Developer</h3>
                                        <div class="slider-main-content">
                                            <h5 class="slider-subheading">Frontend Duties</h5>
                                            <ul class="text-white">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                            </ul>
                                            <h5 class="slider-subheading">Backend Duties</h5>
                                            <ul class="text-white">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="slide-content-container">
                                    <div class="slide-content-wrapper p-4">
                                        <h4 class="slide-period text-center">2022 - Present</h4>
                                        <h3 class="slide-header">Adept ICT - Junior Frontend Developer</h3>
                                        <div class="slider-main-content">
                                            <h5 class="slider-subheading">Frontend Duties</h5>
                                            <ul class="text-white">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                            </ul>
                                            <h5 class="slider-subheading">Backend Duties</h5>
                                            <ul class="text-white">
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            ...
                        </swiper>           
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap'
    import { onMounted, ref } from 'vue'

    import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import 'swiper/css/scrollbar'

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
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log('slide change');
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
            }
        }
    }
}
</style>
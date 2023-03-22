<template>
    <section>
        <div class="container">
            <div class="content-wrapper">
                <div class="col-12">
                    <div class="row my-2">
                        <h3 class="p-0" ref="techHeader">Experience</h3>
                    </div>
                    <div class="row my-2">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                            <div class="carousel-inner p-4">
                                <div class="carousel-item active">
                                    <div class="col-12">
                                        <div class="carousel-timeline">
                                            <h3>2022 - 2023</h3>
                                        </div>
                                        <div class="carousel-heading">
                                            <h2>Adept ICT - Junior Frontend Developer</h2>
                                        </div>
                                        <div class="carousel-main-content">
                                            <div class="row">
                                                <div class="content-heading">
                                                    <h5>Frontend Duties</h5>
                                                </div>
                                                <div class="content-list">
                                                    <ul>
                                                        <li></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="content-heading">
                                                    <h5>Backend Duties</h5>
                                                </div>
                                                <div class="content-list">
                                                    <ul>
                                                        <li></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon d-sm-none d-md-block" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
section {
    .container {
        padding-left: 0;
        .content-wrapper {
            margin: 0 1em;
            .carousel {
                background: #16161A;
                .carousel-control-prev, .carousel-control-next {
                    opacity: 0;
                
                    &:hover {
                        opacity: 1;
                    }
                }

            }

        }
    }
}
</style>
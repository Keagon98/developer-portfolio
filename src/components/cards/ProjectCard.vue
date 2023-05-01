<template>
        <div class="card-wrapper">
            <div class="card">
                <div class="card-header">
                    <h4>Project Name</h4>
                </div>
                <div class="card-img-top">
                    <img src="../../assets/mobile-applications.png" alt="">
                </div>
                <div class="card-body">
                    <div class="card-tags-wrapper">
                        <div class="card-tags">
                            <span>React</span>
                            <span>Material UI</span>
                            <span>Django</span>
                            <span>MySQL</span>
                            <span>Microservice</span>
                        </div>
                    </div>
                    <div class="card-content">
                        <p>This is a summary of this specific project. This project was built to showcase my skills.</p>
                        <p>This is a summary of this specific project. This project was built to showcase my skills.</p>
                        <div class="content-read-more">
                            <router-link to="/">Read More <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <a class="btn-code" href="">Source Code <font-awesome-icon icon="fa-solid fa-code" /></a>
                        <a class="btn-live" href="">Live App <font-awesome-icon icon="fa-solid fa-square-arrow-up-right" /></a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.card-wrapper {
    .card {
        background-color: #242629;
        border-radius: 3px;

        .card-header {
            text-align: center;
            margin-top: 0.7em;

            h4 {
                color: #FFFFFF !important;
            }
        }

        .card-img-top {
            max-width: 500px;
            img {
                width: 100%;
            }
        }
        .card-body {
            .card-tags-wrapper {
                border-bottom: 2px solid #707070;
                margin-bottom: 2em;
                .card-tags {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    color: #FFFFFF;
                    padding: 1em 0;

                    span {
                        background-color: #16161A;
                        padding: 5px 15px;
                        margin: .5em 1em 1em;
                        border-radius: 20px;
                        font-size: calc(.7em + .1vw) !important;
                    }
                }
            }

            .card-content {
                a {
                    color: #2CB67D;
                    font-size: calc(.9em + .1vw) !important;
                }
            }

            .card-buttons {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin: 2em 0;

                .btn-code {
                    background-color: #16161A;
                    color: #FFFFFF;
                    padding: 10px 15px;
                    border-radius: 3px;
                    font-size: calc(.8em + .1vw) !important;
                }
                .btn-live {
                    background-color: #2CB67D;
                    color: #FFFFFF;
                    padding: 10px 15px;
                    border-radius: 3px;
                    font-size: calc(.8em + .1vw) !important;
                }
            }
        }

    }

}
</style>
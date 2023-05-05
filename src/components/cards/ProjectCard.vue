<template>
        <div class="card-wrapper">
            <div class="card">
                <div class="card-header">
                    <h4>{{ project.name }}</h4>
                </div>
                <div class="card-img-top">
                    <img :src="CreateUrl(project.image)" :alt="project.image.caption">
                </div>
                <div class="card-body">
                    <div class="card-tags-wrapper">
                        <div class="card-tags" v-for="tag in project.tags" :key="tag">
                            <span>{{ tag }}</span>
                        </div>
                    </div>
                    <div class="card-content">
                        <p>{{ project.description }}</p>
                        <div class="content-read-more">
                            <router-link :to="`/projects/detail/${project.slug.current}`">Read More <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <a class="btn-code" href="">Code <font-awesome-icon icon="fa-solid fa-code" /></a>
                        <a class="btn-live" href="">Live <font-awesome-icon icon="fa-solid fa-square-arrow-up-right" /></a>
                    </div>
                </div>
            </div>
            <router-view />
        </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { CreateUrl } from '../../helpers/utils';

const props = defineProps({
    proj: Object
});

const project = ref();
project.value = props.proj;

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
                display: flex;
                flex-wrap: wrap;
                border-bottom: 2px solid #707070;
                margin-bottom: 2em;
                .card-tags {
                    align-items: center;
                    color: #FFFFFF;
                    margin: 0 0 1.2em;

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

                    &:hover {
                        color: #FFFFFF;
                        transition: .3s ease-in-out;
                    }
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

                    &:hover {
                        background-color: #FFFFFF;
                        color: #16161A;
                        transition: .5s ease-in-out;
                    }
                }
                .btn-live {
                    background-color: #2CB67D;
                    color: #FFFFFF;
                    padding: 10px 15px;
                    border-radius: 3px;
                    font-size: calc(.8em + .1vw) !important;

                    &:hover {
                        color: #2CB67D;
                        background-color: #FFFFFF;
                        transition: .5s ease-in-out;
                    }
                }
            }
        }

    }

}
</style>
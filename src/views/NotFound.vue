<template>
    <app-layout :backgroundColor="'bg-dark-400'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <div class="content">
                            <h1>404</h1>
                            <h4>Page not found.</h4>
                            <div class="button">
                                <router-link class="btn-home" to="/">Go back Home</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </app-layout>
</template>

<script setup lang="ts">
import AppLayout from '../layouts/AppLayout.vue';

const appLayout = AppLayout;

</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    .container {
        height: 100%;
        overflow: scroll;
        display: flex;
        justify-content: center;
        align-items: center;

        .content-wrapper {
            padding: 7em 0;
            .content {
                text-align: center;

                .button {
                    margin: 1em;
                    .btn-home {
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
}

</style>
<template>
    <footer>
        <nav class="footer-nav py-3">
            <div class="container">
                <div class="col-md-12">
                    <div class="d-flex justify-content-around text-center">
                        <div>
                            <router-link :class="route.path === '/' ? 'active' : ''" to="/">
                                <font-awesome-icon icon="fa-solid fa-house" />
                                <span>Home</span>
                            </router-link>
                        </div>
                        <div>
                            <router-link :class="route.path === '/about' ? 'active' : ''" to="/about">
                                <font-awesome-icon icon="fa-solid fa-info-circle" />
                                <span>About</span>
                            </router-link>
                        </div>
                        <div>
                            <router-link :class="route.path === '/projects' ? 'active' : ''" to="/projects">
                                <font-awesome-icon icon="fa-solid fa-cubes" />
                                <span>Projects</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </footer>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style lang="scss" scoped>
footer {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;

    .footer-nav {

        a, svg {
            display: block;
        }

        a {
            font-size: calc(14px + .1vw);
            color: #94A1B2;
            width: 105px;
            margin: 0 auto;
            position: relative;
            max-width: 100px;

            &:hover {
                color: #EEEEEE;
                transition: .5s ease-in-out;
            }
        }

        .active {
            color: #EEEEEE;

            &::after {
                display: block;
                width: 100%;
                height: 3px;
                background-color: #EEEEEE;
                position: absolute;
                content: "";
                top: -15px;
                left: 0px;
            }
        }

        svg {
            margin: 0 auto;
            font-size: calc(18px + .2vw);
        }
    }
}
</style>
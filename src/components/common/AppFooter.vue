<template>
    <footer>
        <nav class="footer-nav py-3">
            <div class="container">
                <div class="col-md-12">
                    <div class="d-flex justify-content-center text-center">
                        <div class="col">
                            <router-link to="/">
                                <font-awesome-icon icon="fa-solid fa-house" />
                                <span>Home</span>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="/about">
                                <font-awesome-icon icon="fa-solid fa-info-circle" />
                                <span>About</span>
                            </router-link>
                        </div>
                        <div class="col">
                            <router-link to="/projects">
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

<script lang="ts">
export default {
    

}
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

            &:hover {
                color: #EEEEEE;
            }
        }

        svg {
            margin: 0 auto;
            font-size: calc(18px + .2vw);
        }
    }
}
</style>
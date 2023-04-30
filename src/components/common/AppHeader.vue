<template>
    <header>
        <nav class="navbar">
            <div class="container my-2">
                <img class="navbar-brand" src="/keagon_logo.svg" alt="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="mailto:keaggzb20v@gmail.com" target="_blank">Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
header {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    .navbar {
        .container {
            .navbar-brand {
                max-height: 50px;
                max-width: auto;
            }
    
            .navbar-nav {
                .nav-item {
                    border: 1px solid #2CB67D;
                    border-radius: 2px;
                    .nav-link {
                        color: #2CB67D;
                        font-size: calc(12px + .1vw);
                        padding: 3px 10px;
                        text-transform: uppercase;
                        vertical-align: middle;
    
                        &:hover {
                            background-color: #2CB67D;
                            color: #16161A;
                            font-weight: bolder;
                        }
                    }
    
                }
            }
        }
    }
}
</style>
<template>
    <header>
        <nav class="navbar">
            <div class="container m-2">
                <img class="navbar-brand" src="/keagon_logo.svg" alt="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Get in touch</a>
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
    .navbar {
        .container {
            .navbar-brand {
                max-height: 50px;
                max-width: auto;
            }
    
            .navbar-nav {
                .nav-item {
                    border: 1px solid #2CB67D;
                    .nav-link {
                        color: #2CB67D;
                        font-size: 12px;
                        padding: 3px 10px;
    
                        &:hover {
                            background-color: #2CB67D;
                            color: #eeeeee;
                        }
                    }
    
                }
            }
        }
    }
}
</style>
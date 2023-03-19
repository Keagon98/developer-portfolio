<template>
    <app-layout :backgroundColor="'bg-dark-400'">
        <main>
            <div class="container m-2">
                <div class="content-wrapper">
                    <h2 class="text-white">About.</h2>
                    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptate natus iusto itaque possimus, harum, nulla sapiente nostrum saepe excepturi repudiandae. Nihil accusamus, doloribus excepturi voluptas consectetur sunt amet, fugit facere exercitationem ex debitis incidunt animi pariatur placeat? Quae, repudiandae. Laudantium beatae maiores odit explicabo. Beatae, rem dolore. Error maxime quos recusandae voluptate porro laboriosam facere illum culpa fuga pariatur iste corporis repudiandae possimus, quas, accusantium ad soluta laudantium dicta neque enim quidem obcaecati accusamus ratione? Sunt quia in optio? At minus, ea molestiae illo doloremque doloribus animi beatae praesentium perferendis, mollitia quidem accusamus minima nam modi earum adipisci eligendi, nostrum dolore optio ad fuga. Nulla, officia veniam voluptatem iusto sunt illo. Autem quis eos, iste quas repellat, alias ipsam repellendus aut corporis adipisci fuga quibusdam fugit dolore neque? Ea, ipsum beatae. Illo, sapiente. Reiciendis, laborum natus blanditiis voluptatum culpa quisquam expedita aperiam consequatur excepturi, odit in sapiente cum assumenda itaque hic magni quas voluptates, ullam totam. Porro pariatur eum cumque ad, eaque itaque voluptatibus voluptate natus incidunt totam veniam est quo hic eos repudiandae! Enim tempora placeat cum natus atque esse laboriosam, at blanditiis quis nobis facere ducimus incidunt repellat obcaecati earum eum magnam unde asperiores alias. Exercitationem labore amet voluptatem debitis inventore at asperiores sapiente hic, voluptatibus expedita sequi enim perferendis praesentium sed modi commodi. Quisquam voluptates rem in ipsum, tempore error asperiores, molestias omnis veniam laboriosam atque dolorem tenetur optio ea sint, reprehenderit repellendus animi ex doloribus ut exercitationem aut facere eius. Reprehenderit nisi porro laborum odit debitis quaerat atque accusantium officia voluptates hic iure dignissimos quidem, dicta nulla ad sed. Provident odio quia esse nisi similique nulla ullam neque sed aperiam, in, a harum explicabo perspiciatis quisquam facilis blanditiis eius tenetur alias sint est. Officia culpa adipisci numquam eius quod expedita praesentium voluptate! Accusamus, quas dignissimos.</p>
                </div>
            </div>
        </main>
    </app-layout>
</template>

<script lang="ts">
import AppLayout from '../layouts/AppLayout.vue';

export default {
    components: {
        AppLayout
    }
}
</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    .container {
        height: 100%;
        overflow: scroll;
        .content-wrapper {
            padding-top: 5em;
        }
    }
}
</style>

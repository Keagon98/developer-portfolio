<template>
    <app-layout :backgroundColor="'bg-dark-600'">
        <main>
            <div class="container px-4">
                <div class="content-wrapper">
                    <div class="col-12">
                        <h2 class="text-white">Projects.</h2>
                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consequuntur vero labore impedit. Aspernatur debitis placeat nobis porro culpa dignissimos non, possimus ratione fugiat ipsa! Dolor facere, optio perspiciatis soluta fugiat expedita natus quis voluptates ab numquam suscipit explicabo autem exercitationem repudiandae maxime vero accusamus nostrum voluptatum! Eius quisquam perferendis vel iusto odio, voluptatem, eveniet rem, quae sunt iure consequatur cum magnam ipsum architecto dignissimos. Dolore doloremque asperiores odit necessitatibus exercitationem dolores rem facere dolor, possimus ad nam modi tempore quod deserunt at accusamus saepe, numquam quis repudiandae eos neque? Animi ut omnis voluptate! Impedit reprehenderit maiores delectus aliquam libero minima eveniet, deserunt quae vero dolorem porro eum corporis, quidem nam explicabo. Odit, iusto, architecto minus cupiditate ullam quibusdam accusantium sequi, maxime harum nemo facilis atque. Veniam architecto, iusto voluptas nostrum magni excepturi repellendus soluta in laborum iure saepe similique? Quibusdam magnam repellendus ut aperiam voluptates alias est nostrum? Eligendi eveniet, corporis libero itaque similique officia adipisci fugiat soluta unde odit molestias, nihil quaerat quae enim repudiandae! Quae modi fugit quaerat harum consectetur deserunt quo, ratione ab accusamus odio exercitationem quisquam eveniet nesciunt inventore reiciendis totam! Quo necessitatibus ad quia eaque nihil voluptas adipisci repudiandae veniam, nulla nesciunt culpa fugit neque dolor iure ab aut quidem aliquid labore! Illo, quibusdam esse consequuntur impedit sunt illum omnis quos molestias reiciendis suscipit, tempora ad, iste quo? Molestiae numquam ipsa facilis eos explicabo sequi! Excepturi consequuntur consectetur labore fugiat atque, pariatur qui tempore iure cum quisquam eaque mollitia consequatur. Fugiat dignissimos porro natus. Minus, deleniti doloremque? Quia corrupti a laudantium quis ea voluptatibus error expedita dignissimos animi, veniam reprehenderit illo quas dolores ipsum eligendi, quisquam dolorem similique, omnis unde iure. Est, pariatur. Officia temporibus aliquid dolor repellendus nemo consectetur. Autem impedit possimus incidunt aspernatur. Ducimus eius architecto inventore non magni itaque earum.</p>

                    </div>
                </div>
            </div>
        </main>
    </app-layout>
</template>

<script lang="ts" setup>
    import AppLayout from '../layouts/AppLayout.vue';

    const appLayout = AppLayout;
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

<template>

    <section id="main">
        <div class="wrapper-example--second">
            <div class="container">
                <h1>Example vue.js {{ message }}</h1>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Example",
        data() {
            return {
                message: null,
            }
        },
        created() {
            this.message = this.$store.getters.getMessage;
        }
    }
</script>

<style scoped>

</style>
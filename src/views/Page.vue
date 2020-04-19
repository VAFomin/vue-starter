<template>
    <div class="v-container pa-4">
        <v-layout class="text-xs-center" column="column" justify-center="justify-center" align-center="align-center">
            <v-flex xs12="xs12" md10="md10">
                <div class="headline pb-4">
                    <h1>Page</h1>
                </div>
                <p>Hello, + {{ profile }}</p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        computed: {
            email() {
                return this.$store.getters.profile
            }
        }
    }
</script>
